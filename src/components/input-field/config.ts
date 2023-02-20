import * as Yup from 'yup';
import { IInitialValues } from './types';

export const initialValues: IInitialValues = {
  text: '',
  password: '',
  tel: '',
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
