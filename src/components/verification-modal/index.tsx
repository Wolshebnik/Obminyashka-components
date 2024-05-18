import { ButtonNew } from 'components/button-new';
import { InputField } from 'components/input-field';

import { IVerificationModal } from './types';

import * as Styles from './styles';
import { Modal } from 'components/modal';

export const VerificationModal = ({
  title,
  label,
  isOpen,
  setOpen,
  onClick,
  btnText,
  isLoading,
  isAnimation,
}: IVerificationModal) => {
  return (
    <Modal
      withoutBg
      duration={500}
      isOpen={isOpen}
      hideButtonClose
      maxWidth="800px"
      isAnimation={isAnimation}
      onClose={() => setOpen(false)}
    >
      <Styles.Body>
        <Styles.Title>{title}</Styles.Title>

        <Styles.Line />

        <Styles.Input>
          <InputField type="text" name="email" label={label} />
        </Styles.Input>

        <Styles.BtnWrapper>
          <ButtonNew
            width="290px"
            height="50px"
            text={btnText}
            onClick={onClick}
            colorType={'blue'}
            styleType={'default'}
            disabled={isLoading ? true : false}
          />
        </Styles.BtnWrapper>
      </Styles.Body>
    </Modal>
  );
};
