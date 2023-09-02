import { Formik, Form, FormikValues } from 'formik';
import type { Meta, StoryObj } from '@storybook/react';

import SelectedInputField from '.';
import { ButtonNew } from 'components/button-new';
import { cities } from './mock';

const meta = {
  title: 'SelectedInputField',
  component: SelectedInputField,
} satisfies Meta<typeof SelectedInputField>;

export default meta;
type Story = StoryObj<typeof SelectedInputField>;

export const SelectedInput: Story = {
  render: () => {
    const onSubmit = (values: FormikValues) => {
      const sendData = {
        region: values.region.id,
        city: values.city.id,
      };
      alert(JSON.stringify(sendData));
    };

    const getCities = async (id: string) => {
      alert(`пошел запрос с id ${id}`);
      await setTimeout(() => {
        alert('ответ');
      }, 300);

      return cities;
    };

    const args = {
      region: {
        getCities,
        name: 'region',
        containerName: 'city',
        placeholder: 'Region',
      },
      city: {
        name: 'city',
        placeholder: 'City',
      },
    };
    return (
      <Formik
        initialValues={{
          region: {
            id: '',
            inputValue: '',
            location: cities,
          },
          city: {
            id: '',
            location: [],
            inputValue: '',
          },
        }}
        onSubmit={onSubmit}
      >
        <Form>
          <SelectedInputField {...args.region} />
          <div style={{ marginBottom: '10px' }}></div>
          <SelectedInputField {...args.city} />

          <div style={{ width: '300px', marginTop: '10px' }}>
            <ButtonNew
              text="SUBMIT"
              type="submit"
              colorType="blue"
              styleType="default"
            ></ButtonNew>
          </div>
        </Form>
      </Formik>
    );
  },
};
