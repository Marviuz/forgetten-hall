import Link from 'next/link';
import { ComponentPropsWithRef, FC, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { type VariantProps, tv } from 'tailwind-variants';
import { buttonClasses } from '../Button';

export const linkClasses = tv({
  extend: buttonClasses,
  base: 'hover:bg-secondary active:bg-primary-1 active:outline-1',
  variants: {
    disabled: {
      true: 'bg-neutral-950 text-neutral-600 pointer-events-none',
    },
  },
});

export type LinkVariants = VariantProps<typeof linkClasses>;

export type ButtonLinkProps = ComponentPropsWithRef<typeof Link> &
  LinkVariants & {};

export const ButtonLink: FC<ButtonLinkProps> = forwardRef(
  ({ className, children, disabled, ...props }, ref) => {
    return (
      <Link
        className={twMerge(
          linkClasses({ disabled: Boolean(disabled) }),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

ButtonLink.displayName = ButtonLink.name;
