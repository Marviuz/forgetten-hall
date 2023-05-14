import { faker } from '@faker-js/faker';
import CHARACTERS from '@/constants/characters';
import { HallChart } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HallChart> = {
  title: 'Feature/Hall Chart',
  component: HallChart,
};

export default meta;
type Story = StoryObj<typeof HallChart>;

export const Default: Story = {
  args: {
    data: CHARACTERS.map((character) => ({
      data: faker.number.int({ min: 1000, max: 10000000 }),
      label: character.name,
    })).sort((a, b) => b.data - a.data),
  },
};
