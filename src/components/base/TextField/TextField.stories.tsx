import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '.';

const meta: Meta<typeof TextField> = {
  title: 'Base/TextField',
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {},
};
