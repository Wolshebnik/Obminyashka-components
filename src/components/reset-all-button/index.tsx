import { useDispatch } from 'react-redux';

import * as type from './types';
import * as Styles from './styles';

const ResetAllButton = ({
  setAge,
  setSize,
  clearAdv,
  setGender,
  setSeason,
  setLocationId,
  setImageFiles,
  setReadyOffer,
  setDescription,
  setExchangeList,
  setPreViewImage,
  setShowLocation,
  setCategoryItems,
  setLocationCurrent,
  setSubCategoryItems,
  setAnnouncementTitle,
  setCurrentIndexImage,
  getText = 'Cancel Everything',
}: type.IResetAllButton) => {
  const dispatch = useDispatch();

  const resetAll = () => {
    setAge([]);
    setSize('');
    setGender([]);
    setSeason([]);
    setLocationId('');
    setImageFiles([]);
    setReadyOffer([]);
    setDescription('');
    setExchangeList([]);
    setPreViewImage([]);
    setCategoryItems('');
    dispatch(clearAdv());
    setSubCategoryItems('');
    setAnnouncementTitle('');
    setLocationCurrent(null);
    setCurrentIndexImage(null);
    setShowLocation({ city: '', area: '' });
  };

  return (
    <Styles.BackButtons onClick={resetAll}>
      <Styles.Cross />
      <p>{getText}</p>
    </Styles.BackButtons>
  );
};

export { ResetAllButton };
