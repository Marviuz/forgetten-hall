import { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export type TextFieldProps = ComponentProps<'input'> & {};

export const TextField: FC<TextFieldProps> = ({ className, ...props }) => {
  return (
    <input
      className={twMerge(
        '"px-4 py-2 text-white transition-colors bg-transparent border rounded outline-none border-secondary focus:bg-secondary"',
        className
      )}
      {...props}
    />
  );
};
