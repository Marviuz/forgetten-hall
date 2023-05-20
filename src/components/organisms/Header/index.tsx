'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Modal, ModalContentContainer } from '@/components/atoms/Modal';
import { Text } from '@/components/atoms/Text';
import { ImagePaths } from '@/constants/ImagePaths';
import { NavigationRoutes } from '@/constants/NavigationRoutes';
import { SubmitDataForm } from '../SubmitDataForm';

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
                />
                <Text as="h1" variant="h1" className="text-3xl font-bold">
                  <span className="text-accent">Forgotten</span> Hall
                </Text>
              </Link>
            </div>
            <div className="flex items-center shrink-0">
              <Button onClick={() => setIsOpen(true)}>
                <Text>Submit your run</Text>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContentContainer className="max-w-[636px] w-full">
          <SubmitDataForm
            onClose={() => setIsOpen(false)}
            onSubmit={(data) => {
              // TODO process data
              setIsOpen(false);
            }}
          />
        </ModalContentContainer>
      </Modal>
    </>
  );
};
