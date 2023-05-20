import { VariantProps, cva } from 'class-variance-authority';
import { ComponentPropsWithRef, FC, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { GlassVariantProps, glassVariant } from '@/components/common/glass';

export const cardClasses = cva(
  'text-white outline rounded outline-secondary outline-1 bg-primary-1'
);

export type CardProps = ComponentPropsWithRef<'div'> &
  VariantProps<typeof cardClasses> &
  GlassVariantProps & {};

export const Card: FC<CardProps> = forwardRef(
  ({ children, className, glass, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={twMerge(cardClasses(), glassVariant({ glass }), className)}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = Card.name;
