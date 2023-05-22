import { HallPageHeader } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HallPageHeader> = {
  title: 'Molecules/Hall Page Header',
  component: HallPageHeader,
};

export default meta;
type Story = StoryObj<typeof HallPageHeader>;

export const Default: Story = {
  args: {
    children: 'This is a Header',
  },
};
