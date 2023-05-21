import { HallNavigation } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HallNavigation> = {
  title: 'Organisms/Hall Navigation',
  component: HallNavigation,
};

export default meta;
type Story = StoryObj<typeof HallNavigation>;

export const Default: Story = {
  args: {},
};
