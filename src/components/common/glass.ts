import { tv } from 'tailwind-variants';

export const glass = tv({
  variants: {
    glass: {
      true: 'bg-opacity-20 backdrop-blur-sm',
    },
  },
  defaultVariants: { glass: true },
});
