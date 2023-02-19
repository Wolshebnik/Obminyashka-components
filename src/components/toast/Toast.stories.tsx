import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toast } from '.';
import { Button } from '../button';
import { showMessage } from './show-message';
// import { argTypes } from './arg-types';

export default {
  title: 'Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => (
  <div style={{display: 'flex', gap: 10}}>
    <Toast {...args} />
    <Button onClick={() => showMessage.info('info')} text='info' />
    <Button onClick={() => showMessage.success('success')} text='success' colorType='green'/>
    <Button onClick={() => showMessage.warn('warn')} text='warn' style={{background: 'orange'}}/>
    <Button onClick={() => showMessage.error('error')} text='error' style={{background: 'red'}}/>
  </div>
);

export const ToastDafault = Template.bind({});
ToastDafault.args = {
  rtl: false,
  theme: 'light',
  autoClose: 5000,
  draggable: true,
  newestOnTop: true,
  closeOnClick: true,
  pauseOnHover: true,
  position: 'top-right',
  hideProgressBar: false,
  pauseOnFocusLoss: true,
};
