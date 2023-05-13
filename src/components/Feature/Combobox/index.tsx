import { useCombobox } from 'downshift';
import { FC, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AiOutlineClose } from 'react-icons/ai';
import { TextFieldProps } from '@/components/base/TextField';

export type ComboboxProps = Omit<TextFieldProps, 'onChange'> & {
  options: string[];
  onChange?: (value: string) => void;
};

export const Combobox: FC<ComboboxProps> = ({
  options,
  name,
  id,
  className,
  value,
  onChange,
  ...props
}) => {
  const [inputItems, setInputItems] = useState(options);
  const ref = useRef<HTMLLabelElement>(null);
  const itemsPosition = {
    top: (ref.current?.getBoundingClientRect().bottom || 0) + 8,
    left: ref.current?.getBoundingClientRect().left,
    width: ref.current?.getBoundingClientRect().width,
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
          options.filter((item) =>
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
            inputItems.map((item, index) => (
              <li
                className="p-2 text-white transition-colors border-b cursor-pointer hover:bg-secondary border-secondary last-of-type:border-b-0"
                key={`${item}${index}`}
                {...getItemProps({
                  item,
                  index,
                })}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="p-2 font-bold text-center text-gray-400">
              Not found!
            </li>
          ))}
      </ul>
    </>
  );
};
