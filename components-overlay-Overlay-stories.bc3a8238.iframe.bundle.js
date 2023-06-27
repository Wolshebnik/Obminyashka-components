"use strict";(self.webpackChunkobminyashka_components=self.webpackChunkobminyashka_components||[]).push([[565],{"./src/components/overlay/Overlay.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OverlayWithHeader:()=>OverlayWithHeader,Standard:()=>Standard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Overlay_stories});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_Standard$parameters,_Standard$parameters2,_Standard$parameters3,_OverlayWithHeader$pa,_OverlayWithHeader$pa2,_OverlayWithHeader$pa3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./src/hooks/index.ts"),shared=__webpack_require__("./src/components/shared/index.ts"),overlay=__webpack_require__("./src/components/overlay/index.tsx"),components_button=__webpack_require__("./src/components/button/index.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),moveDown=(0,styled_components_browser_esm.keyframes)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  from {\n  top: -100%;\n  }\n\n  to {\n  top: 50%;\n  }\n"]))),moveBelow=(0,styled_components_browser_esm.keyframes)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  from {\n  top: 50%;\n  }\n\n  to {\n  top: 200%;\n  }\n"]))),Child=styled_components_browser_esm.default.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  position: relative;\n  top: 50%;\n  left: 50%;\n  padding: 20px;\n  max-width: 500px;\n  min-height: 50px;\n  text-align: center;\n  border: 1px solid black;\n  background-color: grey;\n  transform: translate(-50%, -50%);\n  button {\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    line-height: 0;\n    border-radius: 25px;\n    background-color: white;\n    transform: translate(calc(50% - 5px), -50%);\n    transition: all 0.33s ease-in;\n    cursor: pointer;\n\n    svg {\n      width: 15px;\n      height: 18px;\n\n      path {\n        fill: black;\n      }\n    }\n\n    &:hover,\n    &:focus {\n      background-color: red;\n    }\n  }\n\n  p {\n    margin: 10px 0;\n  }\n\n  input {\n    display: block;\n    width: 100%;\n    margin: 10px 0;\n  }\n\n  ",";\n"])),(function(_ref){var isCloseAnimation=_ref.isCloseAnimation,duration=_ref.duration;return(0,styled_components_browser_esm.css)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n    animation: "," ","ms linear;\n  "])),isCloseAnimation?moveDown:moveBelow,duration)})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Overlay_stories={title:"Overlay",component:overlay.a,argTypes:{isOpen:{name:"isOpen",type:{name:"boolean",required:!0},description:"Open modal",table:{defaultValue:{summary:!1},type:{summary:"boolean"}}},setClose:{name:"setClose",type:{name:"function",required:!0},description:"Close modal",table:{defaultValue:{summary:!0},type:{summary:"function"}}},duration:{name:"duration",type:{name:"number"},description:"Time of close and open",table:{type:{summary:"number"}},control:{type:"number"}},top:{name:"top",type:{name:"number"},description:"Position top of element",table:{type:{summary:"number"}},control:{type:"number"}},isHeader:{name:"isHeader",type:{name:"boolean"},description:"Below header, change z-Index",table:{type:{summary:"boolean"}},control:{type:"boolean"}},isAnimation:{name:"isAnimation",type:{name:"boolean",required:!0},description:"Start of animation close",table:{type:{summary:"boolean"}},control:{type:"boolean"}},childRef:{name:"childRef",tags:["autodocs"],description:"Referens to object which will be clickable and won't close the overlay, it must be child of overlay",table:{type:{summary:"RefObject<HTMLDivElement> "}},control:{type:"RefObject<HTMLDivElement> "}}}};var Template=function Template(args){var top=args.top,duration=args.duration,isHeader=args.isHeader,checkedDuration=duration||300,childRef=(0,react.useRef)(null),_useDelayAnimation=(0,hooks.Y9)(checkedDuration),isOpen=_useDelayAnimation.isOpen,isAnimation=_useDelayAnimation.isAnimation,setOpen=_useDelayAnimation.setOpen;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(shared.M,{children:(0,jsx_runtime.jsx)(components_button.z,{onClick:function onClick(){return!isOpen&&setOpen(!0)},text:"Open"})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(overlay.a,{top,isOpen,isHeader,duration,childRef,isAnimation,setClose:function setClose(){return setOpen(!1)},children:(0,jsx_runtime.jsxs)(Child,{ref:childRef,duration:checkedDuration,isCloseAnimation:isAnimation,children:[(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return setOpen(!1)},children:"Close"}),(0,jsx_runtime.jsx)("h1",{children:"Children to presentation"}),(0,jsx_runtime.jsx)("p",{children:"Inputs below focus test "}),(0,jsx_runtime.jsx)("p",{children:"To close press escape or click outside the modal window "}),(0,jsx_runtime.jsx)("input",{type:"text"}),(0,jsx_runtime.jsx)("input",{type:"text"})]})})})]})},Standard={args:{duration:800},render:function render(args){return(0,jsx_runtime.jsx)(Template,(0,objectSpread2.Z)({},args))}},OverlayWithHeader={args:{top:75,duration:600,isHeader:!0},render:function render(args){return(0,jsx_runtime.jsx)(Template,(0,objectSpread2.Z)({},args))}};Standard.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Standard.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Standard$parameters=Standard.parameters)||void 0===_Standard$parameters?void 0:_Standard$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    duration: 800\n  },\n  render: args => <Template {...args} />\n}"},null===(_Standard$parameters2=Standard.parameters)||void 0===_Standard$parameters2||null===(_Standard$parameters3=_Standard$parameters2.docs)||void 0===_Standard$parameters3?void 0:_Standard$parameters3.source)})}),OverlayWithHeader.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},OverlayWithHeader.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_OverlayWithHeader$pa=OverlayWithHeader.parameters)||void 0===_OverlayWithHeader$pa?void 0:_OverlayWithHeader$pa.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    top: 75,\n    duration: 600,\n    isHeader: true\n  },\n  render: args => <Template {...args} />\n}"},null===(_OverlayWithHeader$pa2=OverlayWithHeader.parameters)||void 0===_OverlayWithHeader$pa2||null===(_OverlayWithHeader$pa3=_OverlayWithHeader$pa2.docs)||void 0===_OverlayWithHeader$pa3?void 0:_OverlayWithHeader$pa3.source)})});var __namedExportsOrder=["Standard","OverlayWithHeader"]},"./src/components/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>PresentationHeader});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Header=styled_components_browser_esm.default.header(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n"]))),Container=styled_components_browser_esm.default.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 82px;\n\n  ","\n"])),(function(_ref){var theme=_ref.theme;return(0,styled_components_browser_esm.css)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    background: ",";\n\n    ","\n\n    ","\n  "])),theme.colors.search.white,theme.responsive.isTablet&&(0,styled_components_browser_esm.css)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n      height: 85px;\n    "]))),theme.responsive.isDesktop&&(0,styled_components_browser_esm.css)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n      height: 168px;\n    "]))))})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PresentationHeader=function PresentationHeader(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)(Header,{children:(0,jsx_runtime.jsx)(Container,{children})})};PresentationHeader.__docgenInfo={description:"",methods:[],displayName:"PresentationHeader"}}}]);