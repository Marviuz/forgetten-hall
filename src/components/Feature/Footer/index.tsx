import { FC } from 'react';

export type FooterProps = {};

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="h-8 px-4 text-white border-t border-secondary">
      <div className="w-full h-full">
        <div className="flex items-center justify-end w-full h-full">
          {/* TODO footer content */}
        </div>
      </div>
    </footer>
  );
};
