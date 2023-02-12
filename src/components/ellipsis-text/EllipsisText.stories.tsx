import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EllipsisText } from '.';

export default {
  title: 'EllipsisText',
  component: EllipsisText,
} as ComponentMeta<typeof EllipsisText>;

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const Template: ComponentStory<typeof EllipsisText> = (args) => {
  return (
    <>
      <div style={{ width: 200 }}>
        <EllipsisText>
          <p>Lorem Ipsum is simply</p>
        </EllipsisText>
      </div>
      <div style={{ width: 200 }}>
        <EllipsisText>
          <p>{`p ${text}`}</p>
        </EllipsisText>
      </div>
    </>
  );
};
