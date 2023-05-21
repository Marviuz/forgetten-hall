import { PropsWithChildren } from 'react';

export type MetaProps<T> = { params: T };
export type LayoutProps<T, U = unknown> = PropsWithChildren<MetaProps<T>> & U; // Page templates or DIRs that start with `@` (e.g. @template);
export type PageProps<T> = PropsWithChildren<MetaProps<T>> & {
  searchParams: { [key: string]: string | string[] | undefined };
};
