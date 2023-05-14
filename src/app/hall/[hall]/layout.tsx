import { ReactNode } from 'react';

type GenerateMetadataProps = {
  params: { hall: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = ({ params }: GenerateMetadataProps) => {
  // TODO something better
  return {
    title: `Hall ${params.hall} stats!`,
  };
};

export default function HallLayout({ children }: { children: ReactNode }) {
  return children;
}
