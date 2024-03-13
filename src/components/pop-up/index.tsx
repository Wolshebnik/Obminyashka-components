import { useState } from 'react';
import * as Styles from './styles';
import { IPopUpProps } from './types';

import { Modal } from './modal';

export const PopUp = ({ title, href, textButton }: IPopUpProps) => {
  const [modalActive, setModalActive] = useState(false);
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
