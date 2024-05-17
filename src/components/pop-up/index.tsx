import { IPopUpProps } from './types';
import { InputField } from 'components/input-field';

import * as Styles from './styles';
import { ButtonNew } from 'components/button-new';

export const PopUp = ({
  title,
  label,
  onClick,
  btnText,
  isLoading,
  modalActive,
  setModalActive,
}: IPopUpProps) => {
  return (
    <Styles.ModalWrapper
      active={modalActive}
      onClick={() => setModalActive(false)}
    >
      <Styles.ModalContent
        active={modalActive}
        onClick={(e) => e.stopPropagation()}
      >
        <Styles.Body>
          <Styles.Title>{title}</Styles.Title>

          <Styles.Line />

          <Styles.Input>
            <InputField type="text" name="email" label={label} />
          </Styles.Input>

          <Styles.BtnWrapper>
            <ButtonNew
              text={btnText}
              onClick={onClick}
              colorType={'blue'}
              styleType={'default'}
              disabled={isLoading ? true : false}
            />
          </Styles.BtnWrapper>
        </Styles.Body>
      </Styles.ModalContent>
    </Styles.ModalWrapper>
  );
};
