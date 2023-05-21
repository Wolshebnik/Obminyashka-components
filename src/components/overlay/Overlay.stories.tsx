import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useDelayAnimation } from 'hooks/useDelayAnimation';

import { Overlay } from '.';
import { Button } from '../button';
import { argTypes } from './arg-types';
import { Child } from './child/styles';
import { PresentationHeader } from 'components/shared';

const meta = {
  title: 'Overlay',
  component: Overlay,
  argTypes,
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof Overlay>;

const delay = 600;

const Template = () => {
  const childRef = useRef<HTMLDivElement>(null);
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(delay);

  return (
    <>
      <PresentationHeader>
        <Button onClick={() => setOpen(true)} text="Open" />
      </PresentationHeader>
      <div>
        <Overlay
          top={75}
          delay={delay}
          isOpen={isOpen}
          childRef={childRef}
          isAnimation={isOpen}
          setClose={() => setOpen(false)}
        >
          <Child ref={childRef} isOpen={isOpen} isCloseAnimation={isAnimation}>
            <button onClick={() => setOpen(false)}>Close</button>
            <h1>Children to presentation</h1>
            <p>Inputs below focus test </p>
            <p>To close press escape or click outside the modal window </p>
            <input type="text" />
            <input type="text" />
          </Child>
        </Overlay>
      </div>
    </>
  );
};

export const Standard: Story = {
  render: () => <Template />,
};
