const buttonGradient =
  '90deg,rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5)';
//White
const white = `#FFF`;

// Blue
const searchBlue = '#29a5d4';
const buttonBlue = '#12b6ed';
const buttonBlueHover = '#00bfff';
const buttonBlueActive = '#0094ff';

//Green
const apple = '#37B82E';
const buttonGreen = '#43b15d';
const buttonGreenActive = '#008a20';
const buttonGreenHover = '#3c9f53';
const forestGreen = '#32a72a';

//Grey
const buttonGrey = '#787878';
const buttonGreyHover = '#6b6b6b';
const buttonGreyActive = '#5e5e5e';

//General state
const buttonDisabled = '#DADADA';
const magnolia = '#fdfcff';
const colorGrey = '#8E8E8E';
const colorError = '#ff4c4c';
const colorBorder = '#bdbdbd';
const activeColor = '#00C0FF';
const blackColorText = '#111111';
const rightColorText = '#333333';
const colorBorderFocus = '#707070';
const colorTextDisabled = '#A3A3A3';

//General yellow
const corn = '#E0C600';
const schoolBusYellow = '#f5d800';
const turbo = '#FEE200';

//General grey
const darkSilver = '#bcbcbc';
const dustyGray = '#969696';
const grey = '#8f8f8f';
const silver = '#c4c4c4';
const silverChalice = '#A0A0A0';
const faux = '#bababa';

//RGBA colors
const background = 'rgba(255, 255, 255, 0.4)';
const shadow = 'rgba(255, 255, 255, 0.2)';
const modalBackground = 'rgba(18, 182, 237, 0.3)';
const crossBtn = 'rgb(255, 255, 255)';
const crossBtnBackground = 'rgb(18, 182, 237)';

//New Select language
const languageNew = Object.freeze({
  main: '#ACACAC',
  checked: '#606060',
});

//Select language
const language = Object.freeze({
  backgroundHover: '#ccf2ff',
  colorHover: '#1a1a1a',
  color: '#777777',
  colorChecked: '#0fc3ff',
  border: buttonBlue,
});

const newTextColors = Object.freeze({
  blueColorText: '#558FA5',
});

const input = Object.freeze({
  border: colorBorder,
  error: colorError,
  focus: colorBorderFocus,
  searchBorder: activeColor,
  searchBtn: buttonBlue,
  textAreaBorder: darkSilver,
  textBlack: blackColorText,
  textDisabled: colorTextDisabled,
  textGrey: colorGrey,
  textRight: rightColorText,
});

const inboxMessage = Object.freeze({
  inboxMessageActive: forestGreen,
  inboxMessageHover: apple,
});

const itemCard = Object.freeze({
  avatarFalseDefault: silverChalice,
  avatarFalseHover: dustyGray,
  avatarTrueActive: corn,
  avatarTrueDefault: turbo,
  avatarTrueHover: schoolBusYellow,
  borderCard: silver,
});

const productOwnerData = Object.freeze({
  bg: magnolia,
  text: grey,
});

const helpChildren = Object.freeze({
  bg: background,
  shadow,
});
const ellipsisShadow =
  '10px 10px 20px rgba(0, 0, 0, 0.3), 0px 31px 32px -24px rgba(0, 0, 0, 1)';

const button = {
  blue: {
    bg: buttonBlue,
    hover: buttonBlueHover,
    active: buttonBlueActive,
    disable: buttonDisabled,
  },
  green: {
    bg: buttonGreen,
    hover: buttonGreenHover,
    active: buttonGreenActive,
    disable: buttonDisabled,
  },
  grey: {
    bg: buttonGrey,
    hover: buttonGreyHover,
    active: buttonGreyActive,
    disable: buttonDisabled,
  },
};

const colorsDefault = Object.freeze({
  shadow: 'rgba(89, 102, 116, 0.1)',
  colorPopup: '#FDFDFF',
  btnBlue: buttonBlue,
  btnBlueHover: buttonBlueHover,
  btnBlueActive: buttonBlueActive,
  btnGreen: buttonGreen,
  btnGreenHover: buttonGreenHover,
  btnGreenActive: buttonGreenActive,
  colorError,
  colorGrey,
  colorRed: '#ff0000',
  btnGbDisabled: buttonDisabled,
  colorTextDisabled,
  rightColorText,
  blackColorText,
  bgContent: '#E5E5E5',
  activeColor,
  scrollbarBg: '#f1f1f1',
  white,
  backgroundColor: '#fdfcff',
  faux,
});
const search = Object.freeze({
  white,
  blue: searchBlue,
  background: 'rgba(255, 255, 255, 0.6)',
});

const logo = Object.freeze({
  white,
  blue: buttonBlue,
});

const modalColors = Object.freeze({
  background: modalBackground,
  cross: crossBtn,
  crossBtnBackground: crossBtnBackground,
});

const COLORS = Object.freeze({
  logo,
  input,
  search,
  button,
  itemCard,
  language,
  languageNew,
  modalColors,
  inboxMessage,
  helpChildren,
  newTextColors,
  buttonGradient,
  ellipsisShadow,
  productOwnerData,
  ...colorsDefault,
});

export { COLORS };
