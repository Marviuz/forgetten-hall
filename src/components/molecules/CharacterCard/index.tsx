import Image from 'next/image';
import { ComponentProps, FC } from 'react';
import { Card } from '@/components/atoms/Card';
import { Text } from '@/components/atoms/Text';
import { ToolTip } from '@/components/atoms/ToolTip';

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
        className="top-0 left-0 object-cover w-full h-full pointer-events-none"
      />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-black/70 h-1/3">
        <div className="flex items-center justify-center w-full h-full">
          <ToolTip
            render={(id) => (
              <Text
                variant="h4"
                className="leading-tight tracking-tight text-center break-words line-clamp-2"
                data-tooltip-id={id}
              >
                {name}
              </Text>
            )}
          >
            {name}
          </ToolTip>
        </div>
      </div>
    </Card>
  );
};
