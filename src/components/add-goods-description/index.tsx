import { useField } from 'formik';

import * as Styles from './styles';
import { IAddGoodsDescription } from './types';

const maxValue = 255;

export const AddGoodsDescription = ({
  error,
  value,
  onChange,
  setDescription,
  translatedTitle,
  translatedDescription,
  ...props
}: IAddGoodsDescription) => {
  const [, meta, helpers] = useField('description');

  const handleDescription = (descriptionValue: string) => {
    if (descriptionValue.length > maxValue) {
      helpers.setError('error');
      return;
    }

    helpers.setError(undefined);
    setDescription(descriptionValue);
  };

  return (
    <Styles.WrapDescription>
      <Styles.TitleH3>{translatedTitle}</Styles.TitleH3>

      <Styles.DescriptionText>{translatedDescription}</Styles.DescriptionText>

      <Styles.TextArea
        {...props}
        value={value}
        error={meta.error}
        onChange={(e) => handleDescription(e.target.value)}
      />

      <Styles.ErrorCount error={meta.error} value={value}>
        {`${value?.length}/${maxValue}`}
      </Styles.ErrorCount>
    </Styles.WrapDescription>
  );
};
