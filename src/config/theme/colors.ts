const buttonGradient =
  '90deg,rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5)';

// Blue
const buttonBlue = '#12b6ed';
const buttonBlueHover = '#00bfff';
const buttonBlueActive = '#0094ff';

//Green
const buttonGreen = '#43b15d';
const buttonGreenHover = '#3c9f53';
const buttonGreenActive = '#008a20';

//Grey
const buttonGrey = '#787878';
const buttonGreyHover = '#6b6b6b';
const buttonGreyActive = '#5e5e5e';

//General state
const buttonDisabled = '#DADADA';
const colorGrey = '#8E8E8E';
const colorError = '#ff4c4c';
const colorBorder = '#bdbdbd';
const activeColor = '#00C0FF';
const blackColorText = '#111111';
const rightColorText = '#333333';
const colorBorderFocus = '#707070';
const colorTextDisabled = '#A3A3A3';

const input = Object.freeze({
  error: colorError,
  searchBtn: buttonBlue,
  textGrey: colorGrey,
  border: colorBorder,
  focus: colorBorderFocus,
  textBlack: blackColorText,
  textRight: rightColorText,
  searchBorder: activeColor,
  textDisabled: colorTextDisabled,
});

const ellipsisShadow =
  '10px 10px 20px rgba(0, 0, 0, 0.3), 0px 31px 32px -24px rgba(0, 0, 0, 1)';

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
  white: '#FFFFFF',
});

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

const COLORS = Object.freeze({
  input,
  button,
  buttonGradient,
  ellipsisShadow,
  ...colorsDefault,
});

export { COLORS };
