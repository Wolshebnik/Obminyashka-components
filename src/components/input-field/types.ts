import React from 'react';

export type InputOnChangeEventType =
  | React.ChangeEvent<HTMLInputElement>
  | string;

export interface IInitialValues {
  tel: string;
  text: string;
  error?: string;
  password: string;
  textarea: string;
}
