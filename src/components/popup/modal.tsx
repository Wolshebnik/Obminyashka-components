import Portal from './index';
import * as Styles from './styles';
import { IPopup } from './types';

export default function Modal({ onClose, children }: IPopup) {
  return (
    <Portal id="portal" onClose={onClose}>
      <Styles.Overlay onClick={onClose}>
        <Styles.Content
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
          <Styles.ButtonClose onClick={onClose}></Styles.ButtonClose>
        </Styles.Content>
      </Styles.Overlay>
    </Portal>
  );
}
