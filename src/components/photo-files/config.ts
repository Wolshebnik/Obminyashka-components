import * as Yup from 'yup';

export const initialValues = {
  images: [],
};

export const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, 'Minimum 1 photo'),
});
