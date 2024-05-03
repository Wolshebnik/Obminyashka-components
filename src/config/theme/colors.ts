const mainGradient = `linear-gradient(105.33deg, #97D7E3 21.37%, #39A5CF 113.49%)`;
const buttonGradient =
  '90deg,rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5)';

//White
const white = `#FFFFFF`;
const twilightBlue = `#F6FDFF`;

// Blue
const aquamarineBlue = '#7ECDE4';
const brightTurquoise = `#12B6ED`;
const buttonBlue = '#12b6ed';
const buttonBlueActive = '#0094ff';
const buttonBlueHover = '#00bfff';
const curiousBlue = `#29A5D4`;
const charlotte = `#b8e9fa`;
const endeavour = '#0666ab';
const foam = `#d9f6fd`;
const footerBlue = '#3DB4D7';
const indigo = '#3f76c1';
const malibu = '#6fe5ff';
const mariner = '#286cc9';
const morningGlory = `#97D7E3`;
const pelorus = '#44A5C6';
const seagull = `#7EBDE4`;
const shakespeare = '#53b3d4';
const shakesPeare = `#39a5cf`;
const tropicalBlue = '#CEEEFA';
const viking = '#71C2DA';

//Green
const lima = '#6AB218';
const apple = '#37B82E';
const eagle = '#B0BAA5';
const olivine = '#97C069';
const buttonGreen = '#43b15d';
const forestGreen = '#32a72a';
const buttonGreenHover = '#3c9f53';
const buttonGreenActive = '#008a20';

//Grey
const alto = '#DFDFDF';
const buttonGrey = '#787878';
const buttonGreyHover = '#6b6b6b';
const buttonGreyActive = '#5e5e5e';

//General state
const disabled = '#DADADA';
const magnolia = '#fdfcff';
const colorGrey = '#8E8E8E';
const colorError = '#ff4c4c';
const colorBorder = '#bdbdbd';
const activeColor = '#00C0FF';
const blackColorText = '#111111';
const rightColorText = '#333333';
const colorBorderFocus = '#707070';
const colorTextDisabled = '#A3A3A3';
const mainBgColor = '#FAFAFA';

//General yellow
const corn = '#E0C600';
const schoolBusYellow = '#f5d800';
const turbo = '#FEE200';

//General grey
const darkSilver = '#bcbcbc';
const doveGray = '#717171';
const dustyGray = '#969696';
const faux = '#bababa';
const gray = '#8e8e8e';
const grey = '#8f8f8f';
const silver = '#c4c4c4';
const silverChalice = '#A0A0A0';
const silverRgba = 'rgba(189, 189, 189, 0.5)';

//RGBA colors
const shadow = 'rgba(255, 255, 255, 0.2)';
const modalBackground = 'rgba(18, 182, 237, 0.3)';
const crossBtn = 'rgb(255, 255, 255)';
const crossBtnBackground = 'rgb(18, 182, 237)';

// New button
const newButton = Object.freeze({
  default: {
    blue: {
      text: white,
      disabledText: doveGray,
      bg: aquamarineBlue,
      outline: aquamarineBlue,
      outlineDisabled: tropicalBlue,
      bgHover: pelorus,
      bgDisabled: tropicalBlue,
      animated: {
        bg: `linear-gradient(45deg, ${aquamarineBlue} 35%, #BCD9E3 50%, ${aquamarineBlue} 65%)`,
        bgHover: `linear-gradient(45deg, ${pelorus} 35%, #C9DDE4 50%, ${pelorus} 65%)`,
        bgDisabled: `linear-gradient(45deg, ${tropicalBlue} 35%, #F5FCFF 50%, ${tropicalBlue} 65%)`,
      },
    },
    green: {
      text: white,
      disabledText: doveGray,
      bg: olivine,
      outline: olivine,
      outlineDisabled: eagle,
      bgHover: lima,
      bgDisabled: eagle,
      animated: {
        bg: `linear-gradient(45deg, ${olivine} 35%, #eefddc 50%, ${olivine} 65%)`,
        bgHover: `linear-gradient(45deg, ${lima} 35%, #EFFEDE 50%, ${lima} 65%)`,
        bgDisabled: `linear-gradient(45deg, ${eagle} 35%, ${white} 50%, ${eagle} 65%)`,
      },
    },
    white: {
      text: viking,
      disabledText: doveGray,
      bg: white,
      outline: white,
      outlineDisabled: tropicalBlue,
      bgHover: white,
      bgDisabled: tropicalBlue,
      animated: {
        bg: `linear-gradient(45deg, ${aquamarineBlue} 35%, #BCD9E3 50%, ${aquamarineBlue} 65%)`,
        bgHover: `linear-gradient(45deg, ${pelorus} 35%, #C9DDE4 50%, ${pelorus} 65%)`,
        bgDisabled: `linear-gradient(45deg, ${tropicalBlue} 35%, #F5FCFF 50%, ${tropicalBlue} 65%)`,
      },
    },
  },
  outline: {
    blue: {
      text: viking,
      disabledText: silverRgba,
      bg: 'transparent',
      outline: viking,
      outlineDisabled: silverRgba,
      bgHover: white,
      bgDisabled: 'transparent',
      animated: {
        bg: `linear-gradient(45deg, ${aquamarineBlue} 35%, #BCD9E3 50%, ${aquamarineBlue} 65%)`,
        bgHover: `linear-gradient(45deg, ${pelorus} 35%, #C9DDE4 50%, ${pelorus} 65%)`,
        bgDisabled: `linear-gradient(45deg, ${tropicalBlue} 35%, #F5FCFF 50%, ${tropicalBlue} 65%)`,
      },
    },
    green: {
      text: olivine,
      disabledText: silverRgba,
      bg: 'transparent',
      outline: olivine,
      outlineDisabled: silverRgba,
      bgHover: white,
      bgDisabled: 'transparent',
      animated: {
        bg: `linear-gradient(45deg, ${olivine} 35%, #eefddc 50%, ${olivine} 65%)`,
        bgHover: `linear-gradient(45deg, ${lima} 35%, #EFFEDE 50%, ${lima} 65%)`,
        bgDisabled: `linear-gradient(45deg, ${eagle} 35%, ${white} 50%, ${eagle} 65%)`,
      },
    },
    white: {
      text: white,
      disabledText: silverRgba,
      bg: 'transparent',
      outline: white,
      outlineDisabled: silverRgba,
      bgHover: white,
      bgDisabled: 'transparent',
      animated: {
        bg: `linear-gradient(45deg, ${aquamarineBlue} 35%, #BCD9E3 50%, ${aquamarineBlue} 65%)`,
        bgHover: `linear-gradient(45deg, ${pelorus} 35%, #C9DDE4 50%, ${pelorus} 65%)`,
        bgDisabled: `linear-gradient(45deg, ${tropicalBlue} 35%, #F5FCFF 50%, ${tropicalBlue} 65%)`,
      },
    },
  },
});

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

const auth = Object.freeze({
  bg: `linear-gradient(135deg, ${morningGlory} 18.83%, ${shakesPeare} 100%)`,
  firstText: brightTurquoise,
  secondText: gray,
  tabBottomLineActive: curiousBlue,
  tabBottomLine: alto,
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

const productCard = Object.freeze({
  markerFalseDefault: silverChalice,
  markerFalseHover: dustyGray,
  markerTrueActive: corn,
  markerTrueDefault: turbo,
  markerTrueHover: schoolBusYellow,
  borderCard: silver,
  borderCardHovered: aquamarineBlue,
});

const productOwnerData = Object.freeze({
  bg: magnolia,
  text: grey,
});

const helpChildren = Object.freeze({
  bg: twilightBlue,
  shadow,
});

const ellipsisShadow =
  '10px 10px 20px rgba(0, 0, 0, 0.3), 0px 31px 32px -24px rgba(0, 0, 0, 1)';

const button = {
  blue: {
    bg: buttonBlue,
    hover: buttonBlueHover,
    active: buttonBlueActive,
    disable: disabled,
  },
  green: {
    bg: buttonGreen,
    hover: buttonGreenHover,
    active: buttonGreenActive,
    disable: disabled,
  },
  grey: {
    bg: buttonGrey,
    hover: buttonGreyHover,
    active: buttonGreyActive,
    disable: disabled,
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
  btnGbDisabled: disabled,
  colorTextDisabled,
  rightColorText,
  blackColorText,
  bgContent: '#E5E5E5',
  silver,
  activeColor,
  scrollbarBg: '#f1f1f1',
  white,
  backgroundColor: '#fdfcff',
  faux,
});

const search = Object.freeze({
  white,
  blue: seagull,
  background: 'rgba(255, 255, 255, 0.6)',
});

const categoryBtn = Object.freeze({
  border: indigo,
  colorText: mariner,
});

const navCategory = Object.freeze({
  bgColorLinkOne: malibu,
  bgColorLinkTwo: foam,
  colorHoveredText: endeavour,
  linkBorder: shakespeare,
});

const logo = Object.freeze({
  white,
  blue: buttonBlue,
});

const categoryFilter = Object.freeze({
  border: viking,
  checkedCategory: aquamarineBlue,
  hoverCategory: charlotte,
  title: curiousBlue,
  triangle: aquamarineBlue,
  scrollBgGrey: alto,
  scrollBgBlue: viking,
  locationBorder: aquamarineBlue,
  inputBorderBottom: alto,
});

const modalColors = Object.freeze({
  background: modalBackground,
  cross: crossBtn,
  crossBtnBackground: crossBtnBackground,
  boxShadow: 'rgba(18, 182, 237, 0.3)',
});

const searchResult = Object.freeze({
  white,
  bgColor: mainBgColor,
  gradient: '100.18deg, #8fd3e1 7.33%, #51b2d4 97.87%',
});

const footerColors = Object.freeze({
  white,
  footerBlue,
  colorText: 'rgba(255, 255, 255, 0.5)',
});

const dealsColors = Object.freeze({
  white,
  aquamarineBlue,
});

const defaultGradients = Object.freeze({
  mainGradient: mainGradient,
});

const COLORS = Object.freeze({
  logo,
  auth,
  input,
  button,
  search,
  language,
  newButton,
  productCard,
  dealsColors,
  categoryBtn,
  languageNew,
  modalColors,
  navCategory,
  helpChildren,
  footerColors,
  inboxMessage,
  searchResult,
  newTextColors,
  categoryFilter,
  buttonGradient,
  ellipsisShadow,
  defaultGradients,
  productOwnerData,
  ...colorsDefault,
});

export { COLORS };
