import Modal from './modal';
import useToggle from './hooks/useToggle';
import { IPopup } from './types';

export default function App({ id, children }: IPopup) {
  const [isModalOpen, onModalOpen, onModalClose] = useToggle();

  return (
    <div>
      <button onClick={onModalOpen}>Open</button>
      {isModalOpen && (
        <Modal onClose={onModalClose} id={id} children={children} />
      )}
    </div>
  );
}
