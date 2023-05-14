import { Button } from '.';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof Button> = {
  title: 'Base/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Hakdog',
  },
};
