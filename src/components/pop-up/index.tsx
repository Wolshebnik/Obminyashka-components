import { Modal } from './modal';
import { IPopUpProps } from './types';

import * as Styles from './styles';

export const PopUp = ({
  href,
  title,
  textButton,
  modalActive,
  setModalActive,
}: IPopUpProps) => {
  return (
    <Styles.Box>
      <Modal active={modalActive} setActive={setModalActive}>
        <Styles.Body>
          <div>{title}</div>
          <span />
          <form>
            <label>Введіть Ваш E-mail</label>
            <input type="email"></input>
          </form>

          <Styles.BtnSend to={'#'}>{`Відправити`}</Styles.BtnSend>
        </Styles.Body>
      </Modal>

      <Styles.BtnOpen to={href} onClick={() => setModalActive(true)}>
        {textButton}
      </Styles.BtnOpen>
    </Styles.Box>
  );
};
