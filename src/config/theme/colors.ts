const colorGrey = '#8E8E8E';
const colorError = '#ff4c4c';
const colorBorder = '#bdbdbd';
const blackColorText = '#111111';
const rightColorText = '#333333';
const colorBorderFocus = '#707070';
const colorTextDisabled = '#A3A3A3';

const input = Object.freeze({
  error: colorError,
  textGrey: colorGrey,
  border: colorBorder,
  focus: colorBorderFocus,
  textBlack: blackColorText,
  textDisabled: colorTextDisabled,
  textRight: rightColorText,
});

const buttonGradient =
  '90deg,rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5)';

const colorsDefault = Object.freeze({
  shadow: 'rgba(89, 102, 116, 0.1)',
  colorPopup: '#FDFDFF',
  btnBlue: '#12b6ed',
  btnBlueHover: '#00bfff',
  btnBlueActive: '#0094ff',
  btnGreen: '#43b15d',
  btnGreenHover: '#3c9f53',
  btnGreenActive: '#008a20',
  colorError,
  colorGrey,
  colorRed: '#ff0000',
  colorTextDisabled,
  btnGbDisabled: '#DADADA',
  rightColorText,
  blackColorText,
  bgContent: '#E5E5E5',
  activeColor: '#00C0FF',
  scrollbarBg: '#f1f1f1',
  white: '#FFFFFF',
});

const COLORS = Object.freeze({ ...colorsDefault, input,buttonGradient });

export { COLORS };
