import { ComponentProps, FC } from 'react';
import { Text } from '@/components/atoms/Text';

export type HallPageHeaderProps = ComponentProps<'h2'> & {};

export const HallPageHeader: FC<HallPageHeaderProps> = ({ children }) => {
  return (
    <Text
      as="h2"
      variant="h5"
      className="pb-5 font-bold border-b border-secondary"
    >
      {children}
    </Text>
  );
};
