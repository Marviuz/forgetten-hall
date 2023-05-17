import { ReactNode } from 'react';

type HallPage = {
  params: { hall: number };
};

export const generateMetadata = async ({ params }: HallPage) => {
  return {
    title: `HSR Hall #${params.hall}`,
  };
};

export default function HallLayout({ children }: { children: ReactNode }) {
  return children;
}
