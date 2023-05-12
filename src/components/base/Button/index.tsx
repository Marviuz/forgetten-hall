import { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = ComponentProps<'button'> & {};

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center px-4 py-2 text-white border rounded border-secondary bg-primary-1',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
