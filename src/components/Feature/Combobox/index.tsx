import { useCombobox } from 'downshift';
import { FC, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AiOutlineClose } from 'react-icons/ai';
import { TextFieldProps } from '@/components/base/TextField';
import Image from 'next/image';

type ComboBoxOptionType = { avatar?: string; value: string };

export type ComboboxProps = Omit<TextFieldProps, 'onChange'> & {
  options: (ComboBoxOptionType | string)[];
  onChange?: (value: string) => void;
};

const LIST_TO_INPUT_SPACING = 8;

export const Combobox: FC<ComboboxProps> = ({
  options,
  name,
  id,
  className,
  value,
  onChange,
  ...props
}) => {
  const opts = options.map((opt) =>
    typeof opt === 'string' ? opt : opt.value
  );

  const [inputItems, setInputItems] = useState(opts);
  const ref = useRef<HTMLLabelElement>(null);
  const itemsPosition = {
    width: ref.current?.getBoundingClientRect().width,
    top:
      (ref.current?.offsetTop || 0) +
      (ref.current?.offsetHeight || 0) +
      LIST_TO_INPUT_SPACING,
    left: ref.current?.offsetLeft,
  };

  const getItem = ($val: string) => {
    return options.filter((opt) =>
      typeof opt !== 'string' ? opt.value === $val : undefined
    )[0] as ComboBoxOptionType;
  };

  const { isOpen, getMenuProps, getInputProps, getItemProps, selectItem } =
    useCombobox({
      inputValue: value?.toString() || '',
      items: inputItems,
      onSelectedItemChange: ({ inputValue }) => {
        if (onChange) onChange(inputValue || '');
      },
      onInputValueChange: ({ inputValue }) => {
        if (onChange) onChange(inputValue || '');
        setInputItems(
          opts.filter((item) =>
            item.toLowerCase().includes(inputValue!.toLowerCase())
          )
        );
      },
    });

  return (
    <>
      <label
        className={twMerge(
          'inline-flex items-center gap-2 px-4 transition-colors border rounded border-secondary focus-within:bg-secondary',
          className
        )}
        ref={ref}
      >
        <input
          className="w-full py-2 text-white bg-transparent outline-none peer"
          name={name}
          {...getInputProps({ ...props })}
        />

        <button
          className={twMerge(
            'flex items-center justify-center w-8 h-8 text-white transition-all rounded-full active:bg-primary-1 hover:border border-primary-2 shrink-0',
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
          type="button"
          onClick={() => selectItem(null)}
        >
          <i>
            <AiOutlineClose />
          </i>
        </button>
      </label>

      <ul
        {...getMenuProps()}
        className={twMerge(
          'absolute max-h-0 bg-primary-1',
          isOpen && 'max-h-[30vh] overflow-auto border rounded border-secondary'
        )}
        style={{ ...itemsPosition }}
      >
        {isOpen &&
          (inputItems.length ? (
            inputItems.map((item, index) => {
              return (
                <li
                  className="p-2 text-white transition-colors border-b cursor-pointer hover:bg-secondary border-secondary last-of-type:border-b-0"
                  key={`${item}${index}`}
                  {...getItemProps({
                    item,
                    index,
                  })}
                >
                  <div className="flex items-center gap-2">
                    {getItem(item)?.avatar && (
                      <Image
                        src={getItem(item).avatar!}
                        alt={item}
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full"
                      />
                    )}
                    <span>{item}</span>
                  </div>
                </li>
              );
            })
          ) : (
            <li className="p-2 font-bold text-center text-gray-400">
              Not found!
            </li>
          ))}
      </ul>
    </>
  );
};
