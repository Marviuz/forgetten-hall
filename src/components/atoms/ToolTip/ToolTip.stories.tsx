import { ToolTip } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToolTip> = {
  title: 'Atoms/ToolTip',
  component: ToolTip,
  render: () => (
    <ToolTip
      render={(id) => (
        <span data-tooltip-id={id} className="text-white">
          Hello World
        </span>
      )}
    >
      Hello World
    </ToolTip>
  ),
};

export default meta;
type Story = StoryObj<typeof ToolTip>;

export const Default: Story = {};
