import { Button } from '@/components/base/Button';
import { Dialog, Transition } from '@headlessui/react';
import { FC, useState, Fragment } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export type ValueType = {
  id?: string;
  src: string;
  value: string;
  label: string;
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
        className="relative items-end p-0 overflow-hidden bg-center bg-cover enabled:active:scale-100 enabled:hover:scale-105 w-36 h-52 disabled:bg-gray-500 disabled:bg-blend-multiply"
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

      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="absolute text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full max-w-[888px] bg-primary-1 border border-secondary rounded max-h-[768px] overflow-auto">
              <div className="p-8">
                <div className="flex flex-wrap justify-center gap-2">
                  <Button
                    type="button"
                    className="relative items-end p-0 overflow-hidden bg-center bg-cover enabled:active:scale-100 enabled:hover:scale-105 w-36 h-52 disabled:bg-gray-500 disabled:bg-blend-multiply"
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
                      className="items-end p-0 overflow-hidden bg-center bg-cover active:scale-100 hover:scale-105 w-36 h-52"
                      style={{ backgroundImage: `url(${val.src})` }}
                      onClick={() => {
                        onChange(val);
                        setIsOpen(false);
                      }}
                      type="button"
                    >
                      <div className="w-full text-white bg-black/75">
                        <div className="p-3 text-lg font-semibold text-center">
                          {val.label}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};
