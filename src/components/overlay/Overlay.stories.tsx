import { useEffect, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useDelayAnimation } from 'hooks/useDelayAnimation';

import { Overlay } from '.';
import { Button } from '../button';
import { argTypes } from './arg-types';
import { Child } from './child/styles';

const meta = {
  title: 'Overlay',
  component: Overlay,
  argTypes,
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof Overlay>;

const Template = () => {
  const [isOpen, onClose] = useState(false);
  const myRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const { isAnimation, setOpen } = useDelayAnimation(300);
  const [isClosingAnimation, setIsAnimation] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsAnimation(false);
    }
  }, [isOpen]);

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
          onClose(true);
        }}
        text="Open"
      />
      <Overlay
        delay={1000}
        myRef={myRef}
        childRef={childRef}
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
          onClose(false);
        }}
        setClosingAnimation={() => setIsAnimation(true)}
      >
        <Child
          ref={childRef}
          isAnimation={isAnimation}
          isClosingAnimation={isClosingAnimation}
        >
          <button onClick={() => myRef.current?.click()}>Close</button>
          <h1>Children to presentation</h1>
          <p>Inputs below focus test </p>
          <p>To close press escape or click outside the modal window </p>
          <input type="text" />
          <input type="text" />
        </Child>
      </Overlay>
    </div>
  );
};

export const Standard: Story = {
  render: () => <Template />,
};
