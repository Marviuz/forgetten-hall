import CHARACTERS from '@/constants/characters';
import { Select } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: CHARACTERS.map((char) => ({
      image: char.img,
      label: char.name,
      value: char.name,
    })),
    value: {
      image: '/images/characters/March7th.png',
      label: 'March 7th',
      value: 'March7th',
    },
  },
};
