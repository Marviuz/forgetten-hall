'use client';

import { Button } from '@/components/base/Button';
import { Dialog, Transition } from '@headlessui/react';
import { ImagePaths } from '@/constants/ImagePaths';
import { NavigationRoutes } from '@/constants/NavigationRoutes';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState, Fragment } from 'react';
import { AddDataCard } from '../AddDataCard';

export type HeaderProps = {};

const IMAGE_SIZE = {
  width: 453,
  height: 229,
};

const calculateApproximateSize = (height: number) => {
  const hPercent = height / IMAGE_SIZE.height;
  const wPercent = Math.round(hPercent * IMAGE_SIZE.width);

  return {
    height,
    width: wPercent,
  };
};

export const Header: FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="h-20 px-4 border-b bg-primary-1 border-secondary">
        <div className="w-full h-full">
          <div className="flex h-full">
            <div className="flex items-center w-full h-full">
              <Link
                href={`${NavigationRoutes.Home}`}
                className="flex items-center italic"
              >
                <Image
                  src={ImagePaths.StarRailLogo}
                  alt="Honkai Star Rail Logo"
                  {...calculateApproximateSize(64)}
                ></Image>
                <div className="text-3xl font-bold text-white">
                  <span className="text-accent">Forgotten</span> Hall
                </div>
              </Link>
            </div>
            <div className="flex items-center shrink-0">
              <Button onClick={() => setIsOpen(true)}>Submit your run</Button>
            </div>
          </div>
        </div>
      </header>

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
            <Dialog.Panel className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <AddDataCard onSubmit={console.log} />
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};
