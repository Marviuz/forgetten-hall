import { ImagePaths } from '@/constants/ImagePaths';
import { NavigationRoutes } from '@/constants/NavigationRoutes';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps, FC } from 'react';

export type HeaderProps = ComponentProps<'header'> & {};

const IMAGE_SIZE = {
  width: 453,
  height: 229,
};

const calculateApproximateSize = (height: number) => {
  const hPercent = height / IMAGE_SIZE.height;
  const wPercent = hPercent * IMAGE_SIZE.width;

  return {
    height,
    width: wPercent,
  };
};

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="h-8 px-4 border-b bg-primary-1 border-secondary">
      <div className="w-full h-full">
        <div className="flex items-center w-full h-full">
          <Link href={`${NavigationRoutes.Home}`}>
            <Image
              src={ImagePaths.StarRailLogo}
              alt="Honkai Star Rail Logo"
              {...calculateApproximateSize(24)}
            ></Image>
          </Link>
        </div>
      </div>
    </header>
  );
};
