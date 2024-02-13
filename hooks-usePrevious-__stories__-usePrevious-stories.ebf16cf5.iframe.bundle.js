"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[6428],{"./src/hooks/usePrevious/__stories__/usePrevious.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>usePrevious_stories});var react=__webpack_require__("../../node_modules/react/index.js"),usePrevious=__webpack_require__("./src/hooks/usePrevious/index.ts"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),Counter=__webpack_require__("./src/components/Counter/Counter.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),usePrevious_stories_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/hooks/usePrevious/__stories__/usePrevious.stories.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(usePrevious_stories_module.c,options);const _stories_usePrevious_stories_module=usePrevious_stories_module.c&&usePrevious_stories_module.c.locals?usePrevious_stories_module.c.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const usePrevious_stories={title:"Hooks/usePrevious"};var Overview={render:function render(){var _useState2=_slicedToArray((0,react.useState)(1),2),count=_useState2[0],setCount=_useState2[1],prevCount=(0,usePrevious.c)(count);return(0,jsx_runtime.jsxs)(Flex.c,{direction:Flex.c.directions.COLUMN,children:[(0,jsx_runtime.jsxs)(Flex.c,{className:_stories_usePrevious_stories_module.counterContainer,direction:Flex.c.directions.COLUMN,children:[(0,jsx_runtime.jsx)("div",{className:_stories_usePrevious_stories_module.counterLabel,children:"Current"}),(0,jsx_runtime.jsx)(Counter.c,{count})]}),(0,jsx_runtime.jsxs)(Flex.c,{className:_stories_usePrevious_stories_module.counterContainer,direction:Flex.c.directions.COLUMN,children:[(0,jsx_runtime.jsx)("div",{className:_stories_usePrevious_stories_module.counterLabel,children:"Previous"}),(0,jsx_runtime.jsx)(Counter.c,{count:prevCount})]}),(0,jsx_runtime.jsx)(Button.c,{onClick:function incrementButtonOnClick(){setCount((function(prevValue){return prevValue+1}))},children:"Increment"})]})},name:"Overview"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [count, setCount] = useState(1);\n    const prevCount = usePrevious(count);\n    const incrementButtonOnClick = () => {\n      setCount(prevValue => prevValue + 1);\n    };\n    return <Flex direction={Flex.directions.COLUMN}>\n        <Flex className={styles.counterContainer} direction={Flex.directions.COLUMN}>\n          <div className={styles.counterLabel}>Current</div>\n          <Counter count={count} />\n        </Flex>\n        <Flex className={styles.counterContainer} direction={Flex.directions.COLUMN}>\n          <div className={styles.counterLabel}>Previous</div>\n          <Counter count={prevCount} />\n        </Flex>\n        <Button onClick={incrementButtonOnClick}>Increment</Button>\n      </Flex>;\n  },\n  name: "Overview"\n}',...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Overview"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/hooks/usePrevious/__stories__/usePrevious.stories.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".usePrevious-stories-module_counterContainer{margin-bottom:20px}.usePrevious-stories-module_counterLabel{margin-bottom:10px}","",{version:3,sources:["webpack://./src/hooks/usePrevious/__stories__/usePrevious.stories.module.scss"],names:[],mappings:"AAAA,6CACE,kBAAA,CAGF,yCACE,kBAAA",sourcesContent:[".counterContainer {\n  margin-bottom: 20px;\n}\n\n.counterLabel {\n  margin-bottom: 10px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={counterContainer:"usePrevious-stories-module_counterContainer",counterLabel:"usePrevious-stories-module_counterLabel"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);