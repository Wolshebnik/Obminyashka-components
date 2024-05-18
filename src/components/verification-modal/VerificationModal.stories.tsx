import { Formik } from 'formik';
import type { Meta, StoryObj } from '@storybook/react';

import { useDelayAnimation } from 'hooks';

import { VerificationModal } from '.';

import * as Styles from './styles';

const meta = {
  title: 'VerificationModal',
  component: VerificationModal,
} satisfies Meta<typeof VerificationModal>;

export default meta;
type Story = StoryObj<typeof VerificationModal>;

const Template = () => {
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(500);

  return (
    <Formik initialValues={{}} validationSchema={''} onSubmit={() => {}}>
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Styles.BtnOpen onClick={() => setOpen(true)}>OPEN</Styles.BtnOpen>

        <VerificationModal
          isOpen={isOpen}
          isLoading={false}
          setOpen={setOpen}
          btnText="Отправить"
          onClick={() => {}}
          isAnimation={isAnimation}
          label="Введіть Ваш E-mail"
          title="Повторне відправлення посилання"
        />
      </div>
    </Formik>
  );
};

export const VerificationModalDefault: Story = {
  render: () => <Template />,
};
