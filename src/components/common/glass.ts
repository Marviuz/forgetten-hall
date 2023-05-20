import { VariantProps, cva } from 'class-variance-authority';

export const glassVariant = cva([], {
  variants: {
    glass: {
      true: 'bg-opacity-20 backdrop-blur-sm',
    },
  },
  defaultVariants: { glass: true },
});

export type GlassVariantProps = VariantProps<typeof glassVariant>;
