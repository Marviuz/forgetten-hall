import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithRef, FC, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { glassVariant, GlassVariantProps } from '@/components/common/glass';

export const buttonClasses = cva(
  [
    'flex items-center justify-center',
    'px-4 py-2 h-11 rounded',

    'outline outline-secondary outline-1',
    'bg-primary-1 text-white',

    'transition-all select-none',

    'enabled:active:outline-1 enabled:active:bg-primary-1',
    'hover:outline-accent hover:outline-2 enabled:hover:bg-secondary',
  ],
  {
    variants: {
      disabled: {
        true: 'disabled:bg-neutral-950 disabled:text-neutral-600 pointer-events-none',
      },
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonClasses>;

export type ButtonProps = ComponentPropsWithRef<'button'> &
  ButtonVariants &
  GlassVariantProps & {};

export const Button: FC<ButtonProps> = forwardRef(
  ({ children, className, type = 'button', ...props }, ref) => {
    return (
      <button
        className={twMerge(
          buttonClasses(props),
          glassVariant(props),
          className
        )}
        ref={ref}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = Button.name;
