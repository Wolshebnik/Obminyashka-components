"use strict";(self.webpackChunkobminyashka_components=self.webpackChunkobminyashka_components||[]).push([[698],{"./src/components/logo/Logo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Footer:()=>Footer,Header:()=>Header,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Logo_stories});var _Header$parameters,_Header$parameters2,_Header$parameters2$d,_Footer$parameters,_Footer$parameters2,_Footer$parameters2$d,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),logo=__webpack_require__("./src/components/logo/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Logo_stories={title:"Logo",component:logo.T,argTypes:{onClick:{name:"onClick",type:{name:"function"},description:"Function for navigate",table:{type:{summary:"function"}}},inFooter:{name:"inFooter",type:{name:"boolean"},description:"Property from which the type of the Logo element changes. Boolean.",table:{type:{summary:"boolean"}},controls:"boolean"}}};var Template=function Template(args){return(0,jsx_runtime.jsx)(logo.T,(0,objectSpread2.Z)({},args))},Header={args:{onClick:function onClick(){return alert("Header")},inFooter:!1},render:function render(args){return(0,jsx_runtime.jsx)("div",{style:{margin:"auto",width:"fit-content"},children:(0,jsx_runtime.jsx)(Template,(0,objectSpread2.Z)({},args))})}},Footer={args:{onClick:function onClick(){return alert("Footer")},inFooter:!0},render:function render(args){return(0,jsx_runtime.jsx)("div",{style:{padding:15,margin:"auto",width:"fit-content",background:"linear-gradient(180deg, #A2DDE5 21.44%, #52B2D4 100%)"},children:(0,jsx_runtime.jsx)(Template,(0,objectSpread2.Z)({},args))})}};Header.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Header.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Header$parameters=Header.parameters)||void 0===_Header$parameters?void 0:_Header$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    onClick: () => alert('Header'),\n    inFooter: false\n  },\n  render: args => <div style={{\n    margin: 'auto',\n    width: 'fit-content'\n  }}>\r\n      <Template {...args} />\r\n    </div>\n}"},null===(_Header$parameters2=Header.parameters)||void 0===_Header$parameters2||null===(_Header$parameters2$d=_Header$parameters2.docs)||void 0===_Header$parameters2$d?void 0:_Header$parameters2$d.source)})}),Footer.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Footer.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Footer$parameters=Footer.parameters)||void 0===_Footer$parameters?void 0:_Footer$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    onClick: () => alert('Footer'),\n    inFooter: true\n  },\n  render: args => <div style={{\n    padding: 15,\n    margin: 'auto',\n    width: 'fit-content',\n    background: `linear-gradient(180deg, #A2DDE5 21.44%, #52B2D4 100%)`\n  }}>\r\n      <Template {...args} />\r\n    </div>\n}"},null===(_Footer$parameters2=Footer.parameters)||void 0===_Footer$parameters2||null===(_Footer$parameters2$d=_Footer$parameters2.docs)||void 0===_Footer$parameters2$d?void 0:_Footer$parameters2$d.source)})});var __namedExportsOrder=["Header","Footer"]},"./src/components/logo/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Logo});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,icon=__webpack_require__("./src/components/icon/index.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles_Logo=styled_components_browser_esm.default.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  width: fit-content;\n  -webkit-user-select: none;\n  user-select: none;\n  font-family: 'Expletus Sans', cursive;\n  font-weight: 400;\n  cursor: pointer;\n\n  ","\n"])),(function(_ref){var theme=_ref.theme,inFooter=_ref.inFooter;return(0,styled_components_browser_esm.css)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    ","\n\n    ","\n  "])),inFooter&&"gap: 16px;",inFooter&&!theme.responsive.isMobile&&"gap: 12px;")})),ImgWrapper=styled_components_browser_esm.default.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  max-width: 40px;\n\n  svg {\n    width: 100%;\n  }\n\n  ","\n"])),(function(_ref2){var theme=_ref2.theme,inFooter=_ref2.inFooter;return(0,styled_components_browser_esm.css)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n    ",";\n\n    ",";\n\n    ",";\n  "])),!inFooter&&!theme.responsive.isMobile&&"max-width: 60px;",inFooter&&"max-width: 60px;",inFooter&&theme.responsive.isDesktop&&"max-width: 90px;")})),ProjectName=styled_components_browser_esm.default.p(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  font-size: 26px;\n  line-height: 35px;\n\n  ","\n"])),(function(_ref3){var theme=_ref3.theme,inFooter=_ref3.inFooter;return(0,styled_components_browser_esm.css)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n    color: ",";\n\n    ",";\n\n    ",";\n  "])),"".concat(inFooter?theme.colors.logo.white:theme.colors.logo.blue,";"),inFooter&&"font-size: 30px;\n     line-height: 40px;",inFooter&&theme.responsive.isTablet&&"font-size: 25px;\n     line-height: 33px;")})),responsive=__webpack_require__("./src/components/responsive/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Logo=function Logo(_ref){var _onClick=_ref.onClick,inFooter=_ref.inFooter;return(0,jsx_runtime.jsxs)(styles_Logo,{inFooter,onClick:function onClick(){return _onClick()},children:[(0,jsx_runtime.jsx)(ImgWrapper,{inFooter,children:(0,jsx_runtime.jsx)(icon.Logo,{})}),!inFooter&&(0,jsx_runtime.jsx)(responsive.Hi,{children:(0,jsx_runtime.jsx)(ProjectName,{inFooter,children:"Obminyashka"})}),inFooter&&(0,jsx_runtime.jsx)(ProjectName,{inFooter,children:"Obminyashka"})]})};Logo.__docgenInfo={description:"",methods:[],displayName:"Logo"}}}]);