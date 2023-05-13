import type { Meta, StoryObj } from '@storybook/react';

import { Combobox } from '.';

const meta: Meta<typeof Combobox> = {
  title: 'Feature/Combobox',
  component: Combobox,
};

export default meta;
type Story = StoryObj<typeof Combobox>;

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
