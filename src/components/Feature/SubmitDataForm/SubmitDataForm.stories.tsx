import type { Meta, StoryObj } from '@storybook/react';

import { SubmitDataForm } from '.';

const meta: Meta<typeof SubmitDataForm> = {
  title: 'Feature/Submit Data Form',
  component: SubmitDataForm,
};

export default meta;
type Story = StoryObj<typeof SubmitDataForm>;

export const Default: Story = {
  args: {},
};
