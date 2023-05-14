import { ButtonLink } from '.';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof ButtonLink> = {
  title: 'Base/Button',
  component: ButtonLink,
};

export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Link: Story = {
  args: {
    children: 'Welcome to the league of Draven',
    href: '#',
  },
};
