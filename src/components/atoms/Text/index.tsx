import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { type VariantProps, tv } from 'tailwind-variants';

export const textClasses = tv({
  base: 'text-sm text-white',
  variants: {
    variant: {
      h1: 'text-8xl',
      h2: 'text-6xl',
      h3: 'text-5xl',
      h4: 'text-4xl',
      h5: 'text-2xl',
      h6: 'text-xl',
      subtitle: 'text-base',
      body: 'text-sm',
    },
  },
});

export type TextProps<T extends ElementType> = ComponentPropsWithoutRef<T> &
  VariantProps<typeof textClasses> & {
    as?: T;
    ref?: ComponentPropsWithRef<T>['ref'];
  };

const defaultElement = 'span';
// TODO proper forward ref
export const Text = <T extends ElementType = typeof defaultElement>({
  as,
  className,
  variant,
  ...props
}: TextProps<T>) => {
  const Component = as || defaultElement;
  return (
    <Component
      className={twMerge(textClasses({ variant }), className)}
      {...props}
    />
  );
};
