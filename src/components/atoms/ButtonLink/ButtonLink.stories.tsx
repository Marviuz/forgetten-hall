import { ButtonLink } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ButtonLink> = {
  title: 'Atoms/Button Link',
  component: ButtonLink,
};

export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Link: Story = {
  args: {
    children: 'About',
    href: '#',
  },
};
