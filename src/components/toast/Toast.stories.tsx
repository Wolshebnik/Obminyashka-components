import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toast } from '.';
import { Button } from '../button';
import { argTypes } from './arg-types';
import { showMessage } from './show-message';

export default {
  title: 'Toast',
  component: Toast,
  argTypes,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => (
  <div style={{ display: 'flex', gap: 10 }}>
    <Button onClick={() => showMessage.info('info', args)} text="info" />

    <Button
      text="success"
      colorType="green"
      onClick={() => showMessage.success('success', args)}
    />

    <Button
      text="warn"
      style={{ background: 'orange' }}
      onClick={() => showMessage.warn('warn', args)}
    />

    <Button
      text="error"
      style={{ background: 'red' }}
      onClick={() => showMessage.error('error', args)}
    />
  </div>
);

export const ToastDafault = Template.bind({});
ToastDafault.args = {
  rtl: false,
  theme: 'light',
  autoClose: 3000,
  draggable: false,
  newestOnTop: false,
  closeOnClick: false,
  pauseOnHover: false,
  position: 'top-right',
  hideProgressBar: false,
  pauseOnFocusLoss: true,
};
