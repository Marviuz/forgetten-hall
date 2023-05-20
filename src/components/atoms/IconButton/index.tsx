import { VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { glassVariant } from '@/components/common/glass';
import { Button, ButtonProps, buttonClasses } from '../Button';

const iconButtonClasses = cva('p-0 rounded-full h-11 w-11');

export type IconButtonVariants = VariantProps<typeof iconButtonClasses>;

export type IconButtonProps = ButtonProps & IconButtonVariants & {};

export const IconButton: FC<IconButtonProps> = ({
  children,
  className,
  glass,
  disabled,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={twMerge(
        buttonClasses({ disabled }),
        iconButtonClasses(),
        glassVariant({ glass }),
        className
      )}
    >
      {children}
    </Button>
  );
};
