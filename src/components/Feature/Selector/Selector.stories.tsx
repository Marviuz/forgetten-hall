import { Selector } from '.';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof Selector> = {
  title: 'Feature/Selector',
  component: Selector,
};

export default meta;
type Story = StoryObj<typeof Selector>;

export const Default: Story = {
  args: {
    value: {
      src: 'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg',
      value: 'sample',
      label: 'Sample',
    },
    options: Array.from(Array(6)).map((_, i) => ({
      src: 'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg',
      value: 'sample',
      label: `Sample ${i}`,
    })),
  },
};
