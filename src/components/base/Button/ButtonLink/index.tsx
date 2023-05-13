import Link from 'next/link';
import { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonLinkProps = ComponentProps<typeof Link> & {};

export const ButtonLink: FC<ButtonLinkProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Link
      className={twMerge(
        'flex items-center justify-center px-4 py-2 text-white transition border rounded border-secondary bg-primary-1 hover:bg-secondary active:bg-primary-1',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
