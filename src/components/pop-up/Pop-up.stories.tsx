import { Formik } from 'formik';
import type { Meta, StoryObj } from '@storybook/react';

import { PopUp } from '.';
import { useState } from 'react';

import * as Styles from './styles';

const meta = {
  title: 'PopUp',
  component: PopUp,
} satisfies Meta<typeof PopUp>;

export default meta;
type Story = StoryObj<typeof PopUp>;

const Template = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <Formik initialValues={{}} validationSchema={''} onSubmit={() => {}}>
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Styles.BtnOpen onClick={() => setModalActive(true)}>
          OPEN
        </Styles.BtnOpen>

        <PopUp
          isLoading={false}
          btnText="Отправить"
          onClick={() => {}}
          label="Введіть Ваш E-mail"
          modalActive={modalActive}
          setModalActive={setModalActive}
          title="Повторне відправлення посилання"
        />
      </div>
    </Formik>
  );
};

export const PopUpDefault: Story = {
  render: () => <Template />,
};
