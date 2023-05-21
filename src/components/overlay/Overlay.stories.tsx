import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { PresentationHeader } from 'components/shared';
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

const duration = 500;

const Template = () => {
  const childRef = useRef<HTMLDivElement>(null);
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(duration);

  return (
    <>
      <PresentationHeader>
        <Button onClick={() => setOpen(true)} text="Open" />
      </PresentationHeader>

      <div>
        <Overlay
          top={75}
          isOpen={isOpen}
          delay={duration}
          childRef={childRef}
          isAnimation={isAnimation}
          setClose={() => setOpen(false)}
        >
          <Child
            ref={childRef}
            duration={duration}
            isCloseAnimation={isAnimation}
          >
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
