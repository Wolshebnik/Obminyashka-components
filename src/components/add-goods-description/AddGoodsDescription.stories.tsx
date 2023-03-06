import { useState } from 'react';
import { Formik, Form } from 'formik';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AddGoodsDescription } from './index';
import { argTypes } from './arg-types';

export default {
  title: 'AddGoodsDescription',
  component: AddGoodsDescription,
  argTypes,
} as ComponentMeta<typeof AddGoodsDescription>;

const Template: ComponentStory<typeof AddGoodsDescription> = ({ value }) => {
  const [description, setDescription] = useState(value);

  return (
    <Formik initialValues={{ description }} onSubmit={() => {}}>
      <Form>
        <AddGoodsDescription
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

export const AddGoodsDescriptionComponent = Template.bind({});
AddGoodsDescriptionComponent.args = {
  value: 'Опис речі від користувача',
};
