import Image from 'next/image';
import { ComponentProps, FC } from 'react';
import { Card } from '@/components/atoms/Card';
import { Text } from '@/components/atoms/Text';

export type CharacterCardProps = {
  image: ComponentProps<typeof Image>['src'];
  name: string;
};

export const CharacterCard: FC<CharacterCardProps> = ({ image, name }) => {
  return (
    <Card className="relative aspect-[9/16]">
      <Image
        src={image}
        alt={name}
        fill
        className="top-0 left-0 w-full h-full"
      />
      <div className="absolute bottom-0 left-0 w-full p-8 bg-black/70 h-1/3">
        <div className="flex items-center justify-center w-full h-full">
          <Text variant="h4" className="font-bold text-center truncate">
            {name}
          </Text>
        </div>
      </div>
    </Card>
  );
};
