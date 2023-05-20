import { useState } from 'react';
import { Modal, ModalContentContainer } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  title: 'Atoms/Modal',
  component: Modal,
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(true);

    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContentContainer className="text-white">
          this is a modal
        </ModalContentContainer>
      </Modal>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {};
