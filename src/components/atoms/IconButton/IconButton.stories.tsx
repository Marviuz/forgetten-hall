import { AiOutlineClose } from 'react-icons/ai';
import { IconButton } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    children: <AiOutlineClose />,
    disabled: false,
  },
};
