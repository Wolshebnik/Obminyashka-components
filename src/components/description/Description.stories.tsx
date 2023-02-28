import { useState } from 'react';
import { Formik, Form } from 'formik';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Description } from './index';
import { argTypes } from './arg-types';

export default {
  title: 'Description',
  component: Description,
  argTypes,
} as ComponentMeta<typeof Description>;

const Template: ComponentStory<typeof Description> = ({ value }) => {
  const [description, setDescription] = useState(value);

  return (
    <Formik initialValues={{ description }} onSubmit={() => {}}>
      <Form>
        <Description
          value={description}
          translatedTitle={'Опис'}
          setDescription={setDescription}
          onChange={(e) => setDescription(e.target.value)}
          translatedDescription={
            'Опишіть Вашу річ: деффекти, особливості використання, тощо'
          }
        />
      </Form>
    </Formik>
  );
};

export const DescriptionComponent = Template.bind({});
DescriptionComponent.args = {
  value: 'Опис речі від користувача',
};
