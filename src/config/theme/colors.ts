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
  colorRed: '#ff0000',
  colorTextDisabled: '#A3A3A3',
  btnGbDisabled: buttonDisabled,
  rightColorText: '#333333',
  blackColorText: '#111111',
  bgContent: '#E5E5E5',
  activeColor: '#00C0FF',
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

const COLORS = Object.freeze({ ...colorsDefault, button });

export { COLORS };
