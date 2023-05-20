import { ComponentPropsWithRef, FC, PropsWithRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { type VariantProps, tv } from 'tailwind-variants';
import { glass } from '@/components/common/glass';

export const textFieldStyles = tv({
  extend: glass,
  base: 'px-4 py-2 text-white transition-all bg-transparent outline outline-secondary outline-1 focus:outline-2 focus:outline-accent rounded focus:bg-secondary h-11',
  variants: {
    disabled: {
      true: 'disabled:bg-neutral-950 disabled:text-neutral-600 pointer-events-none',
    },
  },
});

export type TextFieldProps = PropsWithRef<
  ComponentPropsWithRef<'input'> & VariantProps<typeof textFieldStyles> & {}
>;

export const TextField: FC<TextFieldProps> = forwardRef(
  ({ className, disabled, ...props }, ref) => {
    return (
      <input
        className={twMerge(textFieldStyles({ disabled }), className)}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);

TextField.displayName = TextField.name;
