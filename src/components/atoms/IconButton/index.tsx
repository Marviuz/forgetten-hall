import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { type VariantProps, tv } from 'tailwind-variants';
import { Button, ButtonProps, buttonClasses } from '../Button';

const iconButtonClasses = tv({
  extend: buttonClasses,
  base: 'p-0 rounded-full h-11 w-11',
});

export type IconButtonVariants = VariantProps<typeof iconButtonClasses>;

export type IconButtonProps = ButtonProps & IconButtonVariants & {};

export const IconButton: FC<IconButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button {...props} className={twMerge(iconButtonClasses(), className)}>
      {children}
    </Button>
  );
};
