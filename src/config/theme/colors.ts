const buttonGradient =
  'linear-gradient( 90deg,rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5))';

const colorsDefault = Object.freeze({
  shadow: 'rgba(89, 102, 116, 0.1)',
  colorPopup: '#FDFDFF',
  btnBlue: '#12b6ed',
  btnBlueHover: '#00bfff',
  btnBlueActive: '#0094ff',
  btnGreen: '#43b15d',
  btnGreenHover: '#3c9f53',
  btnGreenActive: '#008a20',
  colorError: '#ff4c4c',
  colorGrey: '#8E8E8E',
  colorRed: '#ff0000',
  colorTextDisabled: '#A3A3A3',
  btnGbDisabled: '#DADADA',
  rightColorText: '#333333',
  blackColorText: '#111111',
  bgContent: '#E5E5E5',
  activeColor: '#00C0FF',
  scrollbarBg: '#f1f1f1',
  white: '#FFFFFF',
});

const COLORS = Object.freeze({ ...colorsDefault, buttonGradient });

export { COLORS };
