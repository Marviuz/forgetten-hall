import { ComponentProps, FC, PropsWithRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type TextFieldProps = PropsWithRef<ComponentProps<'input'> & {}>;

export const TextField: FC<TextFieldProps> = forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={twMerge(
          '"px-4 py-2 text-white transition-colors bg-transparent border rounded outline-none border-secondary focus:bg-secondary"',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

TextField.displayName = TextField.name;
