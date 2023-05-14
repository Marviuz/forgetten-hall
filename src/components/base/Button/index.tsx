import { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = ComponentProps<'button'> & {};

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center px-4 py-2 text-white transition border rounded border-secondary bg-primary-1 enabled:hover:bg-secondary enabled:active:bg-primary-1 disabled:bg-neutral-950 disabled:text-neutral-600',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
