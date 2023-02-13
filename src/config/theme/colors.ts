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

const colorsDefault = Object.freeze({
  shadow: 'rgba(89, 102, 116, 0.1)',
  colorPopup: '#FDFDFF',
  btnBlue: buttonBlue,
  btnBlueHover: buttonBlueHover,
  btnBlueActive: buttonBlueActive,
  btnGreen: buttonGreen,
  btnGreenHover: buttonGreenHover,
  btnGreenActive: buttonGreenActive,
  colorError: '#ff4c4c',
  colorGrey: '#8E8E8E',
  btnBlue,
  btnBlueHover: '#00bfff',
  btnBlueActive: '#0094ff',
  btnGreen: '#43b15d',
  btnGreenHover: '#3c9f53',
  btnGreenActive: '#008a20',
  colorError,
  colorGrey,
  colorRed: '#ff0000',
  colorTextDisabled: '#A3A3A3',
  btnGbDisabled: buttonDisabled,
  rightColorText: '#333333',
  blackColorText: '#111111',
  colorTextDisabled,
  btnGbDisabled: '#DADADA',
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
};

const COLORS = Object.freeze({ ...colorsDefault, button, buttonGradient });
const COLORS = Object.freeze({ ...colorsDefault, input, buttonGradient });

export { COLORS };
