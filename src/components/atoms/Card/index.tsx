import { ComponentPropsWithRef, FC, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { type VariantProps, tv } from 'tailwind-variants';
import { glass } from '@/components/common/glass';

export const cardClasses = tv({
  extend: glass,
  base: 'text-white outline rounded outline-secondary outline-1 bg-primary-1',
});

export type CardProps = ComponentPropsWithRef<'div'> &
  VariantProps<typeof cardClasses> & {};

export const Card: FC<CardProps> = forwardRef(
  ({ children, className, glass, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={twMerge(cardClasses({ glass: Boolean(glass) }), className)}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = Card.name;
