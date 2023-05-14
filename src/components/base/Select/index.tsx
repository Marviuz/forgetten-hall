import Image from 'next/image';
import { FC } from 'react';
import ReactSelect, { Props, components } from 'react-select';

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
        menuList: () => 'border border-secondary rounded',
        option: () =>
          'hover:bg-secondary transition-colors border-t border-secondary first-of-type:border-t-0',
        noOptionsMessage: () => 'text-white font-semibold italic py-2 px-4',
        control: () =>
          'text-white border border-secondary rounded !min-h-[unset] py-2 px-4 flex items-center gap-2',
      }}
      components={{
        Control: ({ children, ...ctrlProps }) => {
          const $value = props.value as OptionType;

          return (
            <components.Control {...ctrlProps}>
              {$value ? (
                <Image
                  src={$value.image}
                  alt={$value.label}
                  height={24}
                  width={24}
                  className="border rounded-full border-secondary"
                />
              ) : (
                'well shit'
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
