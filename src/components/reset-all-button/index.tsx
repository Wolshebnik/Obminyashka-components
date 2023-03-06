// import { useDispatch } from 'react-redux';

import * as types from './type';
import * as Styles from './styles';

const ResetAllButton = ({
  setAnnouncementTitle,
  setExchangeList,
  setDescription,
  setLocationId,
  setImageFiles,
  setCategoryItems,
  setSubCategoryItems,
  setReadyOffer,
  setAge,
  setGender,
  setSeason,
  setSize,
  setLocationCurrent,
  setPreViewImage,
  setCurrentIndexImage,
  setShowLocation,
  // clearAdv,
  getText,
}: types.IResetAllButton) => {
  // const dispatch = useDispatch();

  const resetAll = () => {
    setAnnouncementTitle('');
    setExchangeList([]);
    setDescription('');
    setLocationId('');
    setImageFiles([]);
    setCategoryItems('');
    setSubCategoryItems('');
    setReadyOffer([]);
    setAge([]);
    setGender([]);
    setSeason([]);
    setSize('');
    setLocationCurrent(null);
    setPreViewImage([]);
    setCurrentIndexImage(null);
    setShowLocation({ city: '', area: '' });
    // dispatch(clearAdv());
  };

  return (
    <Styles.BackButtons onClick={resetAll}>
      <Styles.Cross />
      <p>{getText}</p>
    </Styles.BackButtons>
  );
};

export { ResetAllButton };
