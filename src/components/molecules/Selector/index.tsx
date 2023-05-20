import { Dialog } from '@headlessui/react';
import { FC, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { Modal, ModalContentContainer } from '@/components/atoms/Modal';
import { Text } from '@/components/atoms/Text';

export type ValueType = {
  id?: string;
  src: string;
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectorProps = {
  value?: ValueType;
  onChange: (value: ValueType) => void;
  name: string;
  options: ValueType[];
  disabled?: boolean;
};

export const Selector: FC<SelectorProps> = ({
  value,
  options,
  onChange,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        className="relative items-end p-0 overflow-hidden bg-center bg-cover w-36 h-52 disabled:bg-gray-500 disabled:bg-blend-multiply"
        style={{
          backgroundImage: value?.src && `url(${value.src})`,
        }}
        onClick={() => setIsOpen(true)}
        disabled={disabled}
      >
        {value?.value ? (
          <div className="w-full text-white bg-black/75">
            <div className="p-3 text-lg font-semibold text-center">
              {value.label}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full text-white">
            <AiOutlinePlus className="text-6xl text-gray-600" />
          </div>
        )}
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContentContainer className="w-full max-w-[888px] p-4">
          <Card className="relative h-full max-h-[calc(100vh-32px)] p-8 overflow-auto text-white">
            <div className="flex flex-wrap justify-center h-full gap-2">
              <Button
                type="button"
                className="relative items-end p-0 overflow-hidden bg-center bg-cover w-36 h-52 disabled:bg-gray-500 disabled:bg-blend-multiply"
                onClick={() => {
                  onChange({ label: '', src: '', value: '' });
                  setIsOpen(false);
                }}
                disabled={disabled}
              >
                <div className="flex items-center justify-center w-full h-full text-white">
                  <AiOutlineMinus className="text-6xl text-gray-600" />
                </div>
              </Button>

              {options.map((val, i) => (
                <Button
                  key={val.id || i}
                  className="items-end p-0 overflow-hidden bg-center bg-cover w-36 h-52 disabled:bg-blend-multiply bg-opacity-90"
                  style={{ backgroundImage: `url(${val.src})` }}
                  onClick={() => {
                    onChange(val);
                    setIsOpen(false);
                  }}
                  disabled={val.disabled}
                  type="button"
                >
                  <div className="w-full bg-black/75">
                    <div className="p-3 ">
                      <Text variant="h5" className="font-semibold">
                        {val.label}
                      </Text>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </Card>
        </ModalContentContainer>
      </Modal>
    </>
  );
};
