import * as Yup from 'yup';
import { IInitialValues } from './types';

export const initialValues: IInitialValues = {
  tel: '',
  text: '',
  password: '',
};

export const validationSchema = Yup.object().shape({
  text: Yup.string()
    .required()
    .default(() => ''),
  password: Yup.string()
    .required('')
    .default(() => ''),
  tel: Yup.string()
    .required()
    .default(() => ''),
});
