import { Dialog, Transition } from '@headlessui/react';
import {
  ComponentProps,
  FC,
  Fragment,
  PropsWithChildren,
  forwardRef,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { type VariantProps, tv } from 'tailwind-variants';
import { glass } from '@/components/common/glass';

export const modalClasses = tv({
  extend: glass,
  base: 'bg-black',
});

export type ModalProps = VariantProps<typeof modalClasses> &
  PropsWithChildren & {
    isOpen: boolean;
    onClose: (isOpen: boolean) => void;
  };

export const Modal: FC<ModalProps> = ({ glass, isOpen, onClose, children }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={twMerge(
              modalClasses({ glass: Boolean(glass) }),
              'fixed inset-0 bg-black/30'
            )}
            aria-hidden="true"
          />
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
          {children}
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export const ModalContentContainer: FC<
  ComponentProps<(typeof Dialog)['Panel']>
> = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <Dialog.Panel
      ref={ref}
      className={twMerge(
        'absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2',
        className
      )}
      {...props}
    >
      {children}
    </Dialog.Panel>
  );
});

ModalContentContainer.displayName = ModalContentContainer.name;
