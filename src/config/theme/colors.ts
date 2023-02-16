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
const apple = '#37B82E';
const forestGreen = '#32a72a';

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

//General yellow
const schoolBusYellow = '#f5d800';
const corn = '#E0C600';
const turbo = '#FEE200';

//General grey
const silverChalice = '#A0A0A0';
const dustyGray = '#969696';
const silver = '#c4c4c4';

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

const inboxMessage = Object.freeze({
  inboxMessageHover: apple,
  inboxMessageActive: forestGreen,
});

const itemCard = Object.freeze({
  avatarTrueActive: corn,
  avatarTrueDefault: turbo,
  avatarFalseHover: dustyGray,
  avatarTrueHover: schoolBusYellow,
  avatarFalseDefault: silverChalice,
  borderCard: silver,
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
  white: '#FFFFFF',
});

const COLORS = Object.freeze({
  input,
  button,
  itemCard,
  inboxMessage,
  buttonGradient,
  ellipsisShadow,
  ...colorsDefault,
});

export { COLORS };
