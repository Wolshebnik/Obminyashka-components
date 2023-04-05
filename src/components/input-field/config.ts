import * as Yup from 'yup';
import { IInitialValues } from './types';

export const initialValues: IInitialValues = {
  tel: '',
  text: '',
  password: '',
  textarea: '',
};

export const validationSchema = Yup.object().shape({
  text: Yup.string().required(),
  password: Yup.string().required(),
  tel: Yup.string().required(),
  textarea: Yup.string().max(255),
});
