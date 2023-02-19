import React from 'react';
import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';

export type InputOnChangeEventType =
  | React.ChangeEvent<HTMLInputElement>
  | string;

export interface IInitialValues {
  text: string;
  password: string;
  tel: string;
  error?: string;
}

export interface fieldProps {
  field: FieldInputProps<any>;
  meta: FieldMetaProps<any>;
  form: FormikProps<any>;
}
