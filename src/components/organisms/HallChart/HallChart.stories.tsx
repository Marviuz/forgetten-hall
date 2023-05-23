import { faker } from '@faker-js/faker';
import CHARACTERS from '@/constants/characters';
import { HallChart } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HallChart> = {
  title: 'Organisms/Hall Chart',
  component: HallChart,
};

export default meta;
type Story = StoryObj<typeof HallChart>;

export const Default: Story = {
  args: {
    data: CHARACTERS.map((character) => ({
      team1: faker.number.int({ min: 1000, max: 10000000 }),
      team2: faker.number.int({ min: 1000, max: 10000000 }),
      label: character.name,
    })).sort((a, b) => b.team1 - a.team1),
  },
};
