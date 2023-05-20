import { VariantProps, cva } from 'class-variance-authority';
import { ComponentPropsWithRef, FC, PropsWithRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { GlassVariantProps, glassVariant } from '@/components/common/glass';

export const textFieldClasses = cva(
  'px-4 py-2 text-white transition-all bg-transparent outline outline-secondary outline-1 focus:outline-2 focus:outline-accent rounded focus:bg-secondary h-11',
  {
    variants: {
      disabled: {
        true: 'disabled:bg-neutral-950 disabled:text-neutral-600 pointer-events-none',
      },
    },
  }
);

export type TextFieldVariants = VariantProps<typeof textFieldClasses>;

export type TextFieldProps = PropsWithRef<
  ComponentPropsWithRef<'input'> & TextFieldVariants & GlassVariantProps & {}
>;

export const TextField: FC<TextFieldProps> = forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={twMerge(
          textFieldClasses(props),
          glassVariant(props),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

TextField.displayName = TextField.name;
