import * as Yup from 'yup';

export const initialValues = {
  images: [],
};

export const validationSchema = Yup.object().shape({
  //TODO: add text translated
  images: Yup.array().min(1, 'You can upload up to 1 files'),
});
