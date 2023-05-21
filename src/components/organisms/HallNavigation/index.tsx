import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonLink } from '@/components/atoms/ButtonLink';
import { cardClasses } from '@/components/atoms/Card';
import { Text } from '@/components/atoms/Text';
import { ImagePaths } from '@/constants/ImagePaths';
import { NavigationRoutes } from '@/constants/NavigationRoutes';

export type HallNavigationProps = {};

// TODO actual hall routes
const HALL_ROUTES = Array.from(Array(7)).map((_, i) => ({
  hallNumber: i + 1,
  image: ImagePaths.StarRailLogo,
  label: 'sample image',
}));

export const HallNavigation: FC<HallNavigationProps> = () => {
  return (
    <aside className={twMerge(cardClasses(), 'sticky top-0 p-4')}>
      <div className="flex flex-col items-start gap-6 w-60">
        {HALL_ROUTES.map(({ hallNumber, image, label }, i) => (
          <ButtonLink
            href={`${NavigationRoutes.Hall}/${hallNumber}`}
            className="flex items-center w-full gap-2 justify-evenly"
            key={i}
          >
            <Image
              src={image}
              alt={label}
              height={100}
              width={100}
              className="object-contain shrink-1"
            />
            <Text variant="h5" className="font-bold">
              {hallNumber}
            </Text>
          </ButtonLink>
        ))}
      </div>
    </aside>
  );
};

HallNavigation.displayName = HallNavigation.name;
