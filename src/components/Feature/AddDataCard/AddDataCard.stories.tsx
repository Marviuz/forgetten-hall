import type { Meta, StoryObj } from '@storybook/react';

import { AddDataCard } from '.';
import CHARACTERS from '@/constants/characters';

const meta: Meta<typeof AddDataCard> = {
  title: 'Feature/Add Data Card',
  component: AddDataCard,
};

export default meta;
type Story = StoryObj<typeof AddDataCard>;

export const Default: Story = {
  args: {},
};
