import Image from 'next/image';
import { FC } from 'react';
import ReactSelect, { type Props, components } from 'react-select';
import { twMerge } from 'tailwind-merge';
import { GlassVariantProps, glassVariant } from '@/components/common/glass';
import { TextFieldVariants, textFieldClasses } from '../TextField';

export type OptionType = {
  image: string;
  label: string;
  value: string;
};

export type SelectProps = Omit<
  Props<OptionType>,
  'unstyled' | 'components' | 'classNames'
> &
  TextFieldVariants &
  GlassVariantProps & {
    name: string;
  };

export const Select: FC<SelectProps> = ({ className, ...props }) => {
  return (
    <ReactSelect
      unstyled
      classNamePrefix="react-select"
      className={twMerge('react-select', className)}
      classNames={{
        menuList: () => 'border border-secondary rounded bg-primary-1 mt-2',
        option: ({ isSelected, isFocused }) =>
          twMerge(
            'transition-all border-t border-secondary first-of-type:border-t-0',
            (isSelected || isFocused) && 'bg-secondary',
            isSelected && isFocused && 'outline outline-1 outline-accent'
          ),
        noOptionsMessage: () => 'text-white font-semibold italic py-2 px-4',
        control: ({ menuIsOpen }) =>
          twMerge(
            textFieldClasses({ ...props }),
            glassVariant({ ...props }),
            'gap-2',
            menuIsOpen && 'bg-secondary'
          ),
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
