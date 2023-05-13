import { ImagePaths } from '@/constants/ImagePaths';
import { NavigationRoutes } from '@/constants/NavigationRoutes';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export type HeaderProps = {};

const IMAGE_SIZE = {
  width: 453,
  height: 229,
};

const calculateApproximateSize = (height: number) => {
  const hPercent = height / IMAGE_SIZE.height;
  const wPercent = hPercent * IMAGE_SIZE.width;

  return {
    height,
    width: Math.round(wPercent),
  };
};

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="h-20 px-4 border-b bg-primary-1 border-secondary">
      <div className="w-full h-full">
        <div className="flex items-center w-full h-full">
          <Link
            href={`${NavigationRoutes.Home}`}
            className="flex items-center italic"
          >
            <Image
              src={ImagePaths.StarRailLogo}
              alt="Honkai Star Rail Logo"
              {...calculateApproximateSize(64)}
            ></Image>
            <div className="text-3xl font-bold text-white">
              <span className="text-accent">Forgotten</span> Hall
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
