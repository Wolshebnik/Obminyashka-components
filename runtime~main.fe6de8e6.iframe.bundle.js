(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({68:"components-avatar-Avatar-stories",243:"components-cancel-everything-CancelEverything-stories",253:"components-help-children-HelpChildren-stories",283:"components-photo-files-PhotoFiles-stories",295:"components-toast-Toast-stories",296:"components-product-owner-data-ProductOwnerData-stories",319:"components-product-post-data-ProductPostData-stories",339:"components-product-card-ProductCard-stories",342:"components-back-button-BackButton-stories",353:"components-swiper-Slider-stories",378:"components-input-file-FileInput-stories",389:"components-button-Button-stories",442:"components-modal-Popup-stories",511:"components-checkbox-Checkbox-stories",514:"components-page-pagination-Pagination-stories",519:"components-ellipsis-text-EllipsisText-stories",539:"components-title-Title-stories",580:"components-product-description-ProductDescription-stories",677:"components-input-Input-stories",698:"components-logo-Logo-stories",705:"components-input-field-InputField-stories",716:"components-select-lang-LanguageSelection-stories",845:"components-deals-Deals-stories",857:"components-image-Image-stories",900:"components-subtitle-Subtitle-stories",957:"components-icon-Icon-stories",965:"components-error-display-ErrorDisplay-stories",977:"components-loader-Loader-stories"}[chunkId]||chunkId)+"."+{58:"77d52f3f",68:"93b8f026",243:"cef1ab9f",253:"f77300c7",283:"d7df352d",295:"04197a2b",296:"67819e51",310:"f3fcb7b7",319:"83689cd7",333:"3dea0ad5",339:"2124299c",341:"8da21f0e",342:"becf2505",353:"562cfba5",378:"6e3c6e26",389:"f1bea8b7",442:"7a62779f",446:"f26362c5",463:"d45bd704",511:"ed622c5c",514:"7f6859ab",519:"cb2ab2d0",539:"d4e2fc25",580:"a2b38cc2",661:"4e0ad82c",677:"a3548c14",698:"10cc7def",705:"5f816cb9",716:"1c666a88",779:"0ede7366",845:"b5e35680",857:"837d3f7f",900:"ee4e0f8b",923:"8a4fc081",957:"0f2df6aa",965:"095302ab",977:"c8db117e"}[chunkId]+".iframe.bundle.js"),__webpack_require__.miniCssF=chunkId=>"static/css/components-ellipsis-text-EllipsisText-stories.0af9a575.chunk.css",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="obminyashka-components:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","obminyashka-components:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{if("undefined"!=typeof document){var loadStylesheet=chunkId=>new Promise(((resolve,reject)=>{var href=__webpack_require__.miniCssF(chunkId),fullhref=__webpack_require__.p+href;if(((href,fullhref)=>{for(var existingLinkTags=document.getElementsByTagName("link"),i=0;i<existingLinkTags.length;i++){var dataHref=(tag=existingLinkTags[i]).getAttribute("data-href")||tag.getAttribute("href");if("stylesheet"===tag.rel&&(dataHref===href||dataHref===fullhref))return tag}var existingStyleTags=document.getElementsByTagName("style");for(i=0;i<existingStyleTags.length;i++){var tag;if((dataHref=(tag=existingStyleTags[i]).getAttribute("data-href"))===href||dataHref===fullhref)return tag}})(href,fullhref))return resolve();((chunkId,fullhref,oldTag,resolve,reject)=>{var linkTag=document.createElement("link");linkTag.rel="stylesheet",linkTag.type="text/css",linkTag.onerror=linkTag.onload=event=>{if(linkTag.onerror=linkTag.onload=null,"load"===event.type)resolve();else{var errorType=event&&("load"===event.type?"missing":event.type),realHref=event&&event.target&&event.target.href||fullhref,err=new Error("Loading CSS chunk "+chunkId+" failed.\n("+realHref+")");err.code="CSS_CHUNK_LOAD_FAILED",err.type=errorType,err.request=realHref,linkTag.parentNode&&linkTag.parentNode.removeChild(linkTag),reject(err)}},linkTag.href=fullhref,oldTag?oldTag.parentNode.insertBefore(linkTag,oldTag.nextSibling):document.head.appendChild(linkTag)})(chunkId,fullhref,null,resolve,reject)})),installedCssChunks={303:0};__webpack_require__.f.miniCss=(chunkId,promises)=>{installedCssChunks[chunkId]?promises.push(installedCssChunks[chunkId]):0!==installedCssChunks[chunkId]&&{519:1}[chunkId]&&promises.push(installedCssChunks[chunkId]=loadStylesheet(chunkId).then((()=>{installedCssChunks[chunkId]=0}),(e=>{throw delete installedCssChunks[chunkId],e})))}}})(),(()=>{var installedChunks={303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkobminyashka_components=self.webpackChunkobminyashka_components||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();