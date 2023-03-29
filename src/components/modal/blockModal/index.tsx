import { IBlockModal } from './types';
import * as Styles from './styles';

const BlockModal = ({ children }: IBlockModal) => {
  return (
    <>
      <Styles.BlockModal>{children}</Styles.BlockModal>
    </>
  );
};

export { BlockModal };
