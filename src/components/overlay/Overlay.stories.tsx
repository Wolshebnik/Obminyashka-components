import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { PresentationHeader } from 'components/shared';
import { useDelayAnimation } from 'hooks/useDelayAnimation';

import { Overlay } from '.';
import { IOverlay } from './types';
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

const Template = (args: IOverlay) => {
  const { top, duration } = args;
  const checkedDuration = duration ? duration : 300;

  const childRef = useRef<HTMLDivElement>(null);
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(checkedDuration);

  return (
    <>
      <PresentationHeader>
        <Button onClick={() => !isOpen && setOpen(true)} text="Open" />
      </PresentationHeader>

      <div>
        <Overlay
          top={top}
          isOpen={isOpen}
          duration={duration}
          childRef={childRef}
          isAnimation={isAnimation}
          setClose={() => setOpen(false)}
        >
          <Child
            ref={childRef}
            duration={checkedDuration}
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
  args: { duration: 800 },
  render: (args) => <Template {...args} />,
};

export const OverlayWithHeader: Story = {
  args: { top: 75, duration: 600 },
  render: (args) => <Template {...args} />,
};
