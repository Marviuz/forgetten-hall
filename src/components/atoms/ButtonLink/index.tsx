import { VariantProps, cva } from 'class-variance-authority';
import Link from 'next/link';
import { ComponentPropsWithRef, FC, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { GlassVariantProps, glassVariant } from '@/components/common/glass';
import { buttonClasses } from '../Button';

export const linkClasses = cva(
  'hover:bg-secondary active:bg-primary-1 active:outline-1',
  {
    variants: {
      disabled: {
        true: 'bg-neutral-950 text-neutral-600 pointer-events-none',
      },
    },
  }
);

export type LinkVariants = VariantProps<typeof linkClasses>;

export type ButtonLinkProps = ComponentPropsWithRef<typeof Link> &
  LinkVariants &
  GlassVariantProps & {};

export const ButtonLink: FC<ButtonLinkProps> = forwardRef(
  ({ className, children, disabled, ...props }, ref) => {
    return (
      <Link
        className={twMerge(
          buttonClasses({ disabled, ...props }),
          linkClasses({ disabled, ...props }),
          glassVariant(props),
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
