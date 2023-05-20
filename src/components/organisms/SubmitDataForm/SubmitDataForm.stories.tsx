import { SubmitDataForm } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SubmitDataForm> = {
  title: 'Organisms/Submit Data Form',
  component: SubmitDataForm,
};

export default meta;
type Story = StoryObj<typeof SubmitDataForm>;

export const Default: Story = {
  args: {},
};
