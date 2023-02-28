import { useField } from 'formik';

import * as Styles from './styles';
import { IDescription } from './types';

const maxValue = 255;

export const Description = ({
  error,
  value,
  onChange,
  setDescription,
  translatedTitle,
  translatedDescription,
  ...props
}: IDescription) => {
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
