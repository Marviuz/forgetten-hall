import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { type VariantProps, tv } from 'tailwind-variants';
import { Button, ButtonProps, buttonClasses } from '../Button';

const iconButtonClasses = tv({
  extend: buttonClasses,
  base: 'p-0 rounded-full h-11 w-11',
  variants: {
    glass: {
      true: '', // TODO Probably has better implementation
    },
  },
});

export type IconButtonVariants = VariantProps<typeof iconButtonClasses>;

export type IconButtonProps = ButtonProps & IconButtonVariants & {};

export const IconButton: FC<IconButtonProps> = ({
  children,
  className,
  glass,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={twMerge(
        iconButtonClasses({ glass: Boolean(glass) }),
        className
      )}
    >
      {children}
    </Button>
  );
};
