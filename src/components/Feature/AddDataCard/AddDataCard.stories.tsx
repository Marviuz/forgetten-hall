import type { Meta, StoryObj } from '@storybook/react';

import { AddDataCard } from '.';

const meta: Meta<typeof AddDataCard> = {
  title: 'Feature/Add Data Card',
  component: AddDataCard,
};

export default meta;
type Story = StoryObj<typeof AddDataCard>;

export const Default: Story = {
  args: {
    options: [
      'Black',
      'Red',
      'Green',
      'Blue',
      'Orange',
      'Purple',
      'Pink',
      'Orchid',
      'Aqua',
      'Lime',
      'Gray',
      'Brown',
      'Teal',
      'Skyblue',
    ],
  },
};
