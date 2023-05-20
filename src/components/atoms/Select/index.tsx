import Image from 'next/image';
import { FC } from 'react';
import ReactSelect, { type Props, components } from 'react-select';
import { twMerge } from 'tailwind-merge';
import { textFieldStyles } from '../TextField';

export type OptionType = {
  image: string;
  label: string;
  value: string;
};

export type SelectProps = Omit<
  Props<OptionType>,
  'unstyled' | 'components' | 'classNames'
> & {
  name: string;
};

export const Select: FC<SelectProps> = (props) => {
  return (
    <ReactSelect
      unstyled
      classNames={{
        menuList: () => 'border border-secondary rounded bg-primary-1 mt-2',
        option: ({ isSelected }) =>
          twMerge(
            'hover:bg-secondary transition-all border-t border-secondary first-of-type:border-t-0',
            isSelected && 'bg-secondary'
          ),
        noOptionsMessage: () => 'text-white font-semibold italic py-2 px-4',
        container: () =>
          'outline outline-1 outline-secondary focus-within:outline-2 focus-within:outline-accent rounded',
        control: ({ menuIsOpen }) =>
          twMerge(textFieldStyles(), 'gap-2', menuIsOpen && 'bg-secondary'),
        input: () => 'cursor-text',
      }}
      components={{
        Control: ({ children, ...ctrlProps }) => {
          const $value = props.value as OptionType;

          return (
            <components.Control {...ctrlProps}>
              {$value && (
                <Image
                  src={$value.image}
                  alt={$value.label}
                  height={24}
                  width={24}
                  className="border rounded-full border-secondary"
                />
              )}
              {children}
            </components.Control>
          );
        },
        Option: ({ data, children, ...optProps }) => {
          return (
            <components.Option {...optProps} data={data}>
              <div className="flex items-center gap-2 px-4 py-2">
                <Image
                  src={data.image}
                  width={24}
                  height={24}
                  alt={data.label}
                  className="border rounded-full border-secondary"
                />
                <span className="text-white">{children}</span>
              </div>
            </components.Option>
          );
        },
      }}
      {...props}
    />
  );
};
