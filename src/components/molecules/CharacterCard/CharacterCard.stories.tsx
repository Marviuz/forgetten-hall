import { ImagePaths } from '@/constants/ImagePaths';
import { CharacterCard } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CharacterCard> = {
  title: 'Molecules/Character card',
  component: CharacterCard,
};

export default meta;
type Story = StoryObj<typeof CharacterCard>;

export const Default: Story = {
  args: {
    image: ImagePaths.StarRailLogo,
    name: 'Star rail logo',
  },
};
