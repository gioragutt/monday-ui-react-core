"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[8140],{"./src/components/Steps/__stories__/steps.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NavigableSteps:()=>NavigableSteps,OnPrimary:()=>OnPrimary,Overview:()=>Overview,StepsInsideATipseen:()=>StepsInsideATipseen,Types:()=>Types,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Steps_stories_steps_stories});var react=__webpack_require__("../../node_modules/react/index.js"),Steps=__webpack_require__("./src/components/Steps/Steps.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Tipseen=__webpack_require__("./src/components/Tipseen/Tipseen.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),TipseenWizard=__webpack_require__("./src/components/Tipseen/TipseenWizard.tsx"),steps_stories_helpers=__webpack_require__("./src/components/Steps/__stories__/steps.stories.helpers.js"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),steps_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Steps/__stories__/steps.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(steps_stories.c,options);steps_stories.c&&steps_stories.c.locals&&steps_stories.c.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var metaSettings=(0,createStoryMetaSettingsDecorator.c)({component:Steps.c,enumPropNamesArray:["type"],actionPropsArray:["onChangeActiveStep"]}),steps5=[(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)("div",{})];const Steps_stories_steps_stories={title:"Data display/Steps",component:Steps.c,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var NavigableStepsTemplate=function NavigableStepsTemplate(args){var _useState2=_slicedToArray((0,react.useState)(2),2),activeStepIndex=_useState2[0],setActiveStepIndex=_useState2[1],stepPrev=(0,react.useCallback)((function(){setActiveStepIndex((function(prevState){return prevState-1}))}),[]),stepNext=(0,react.useCallback)((function(){setActiveStepIndex((function(prevState){return prevState+1}))}),[]),onChangeActiveStep=(0,react.useCallback)((function(_e,stepIndex){setActiveStepIndex(stepIndex)}),[]);return(0,jsx_runtime.jsx)(Steps.c,_objectSpread(_objectSpread({activeStepIndex,backButtonProps:{onClick:stepPrev},nextButtonProps:{onClick:stepNext}},args),{},{onChangeActiveStep,onFinish:function onFinish(){}}))};NavigableStepsTemplate.displayName="NavigableStepsTemplate";var Overview={render:NavigableStepsTemplate.bind({}),name:"Overview",args:{steps:steps5}},Types={render:function render(){return(0,jsx_runtime.jsxs)(Flex.c,{direction:Flex.c.directions.COLUMN,gap:Flex.c.gaps.MEDIUM,children:[(0,jsx_runtime.jsx)(Steps.c,{type:Steps.c.types.NUMBERS,steps:steps5,activeStepIndex:2}),(0,jsx_runtime.jsx)(Steps.c,{steps:steps5,activeStepIndex:2}),(0,jsx_runtime.jsx)(Steps.c,{steps:steps5,activeStepIndex:2,areNavigationButtonsHidden:!0,className:"monday-storybook-steps_padding"})]})},name:"Types"},OnPrimary={render:function render(){return(0,jsx_runtime.jsxs)(Flex.c,{direction:Flex.c.directions.COLUMN,gap:Flex.c.gaps.MEDIUM,className:"monday-storybook-steps_color",children:[(0,jsx_runtime.jsx)(Steps.c,{steps:steps5,activeStepIndex:2,isOnPrimary:!0,type:Steps.c.types.NUMBERS}),(0,jsx_runtime.jsx)(Steps.c,{steps:steps5,activeStepIndex:2,isOnPrimary:!0}),(0,jsx_runtime.jsx)(Steps.c,{steps:steps5,activeStepIndex:2,isOnPrimary:!0,areNavigationButtonsHidden:!0,className:"monday-storybook-steps_padding"})]})},name:"On primary"},NavigableSteps={render:function render(){var _useState4=_slicedToArray((0,react.useState)(2),2),activeStepIndex=_useState4[0],setActiveStepIndex=_useState4[1],stepPrev=(0,react.useCallback)((function(){setActiveStepIndex((function(prevState){return prevState-1}))}),[]),stepNext=(0,react.useCallback)((function(){setActiveStepIndex((function(prevState){return prevState+1}))}),[]),onChangeActiveStep=(0,react.useCallback)((function(_e,stepIndex){setActiveStepIndex(stepIndex)}),[]);return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Steps.c,{steps:steps5,isContentOnTop:!0,activeStepIndex,onChangeActiveStep,backButtonProps:{onClick:stepPrev},nextButtonProps:{onClick:stepNext},onFinish:function onFinish(){}})})},name:"Navigable Steps"},StepsInsideATipseen={render:function render(){var steps=[(0,jsx_runtime.jsx)("div",{children:"Message number 1"}),(0,jsx_runtime.jsx)("div",{children:"Message number 2"}),(0,jsx_runtime.jsx)("div",{children:"Message number 3"}),(0,jsx_runtime.jsx)("div",{children:"Message number 4"}),(0,jsx_runtime.jsx)("div",{children:"Message number 5"})],_useState6=_slicedToArray((0,react.useState)(2),2),activeStepIndex=_useState6[0],setActiveStepIndex=_useState6[1],stepPrev=(0,react.useCallback)((function(){setActiveStepIndex((function(prevState){return prevState-1}))}),[]),stepNext=(0,react.useCallback)((function(){setActiveStepIndex((function(prevState){return prevState+1}))}),[]),onChangeActiveStep=(0,react.useCallback)((function(_e,stepIndex){setActiveStepIndex(stepIndex)}),[]);return(0,jsx_runtime.jsx)("div",{className:"monday-storybook-steps_block",children:(0,jsx_runtime.jsx)(Tipseen.c,{position:Tipseen.c.positions.LEFT,modifiers:steps_stories_helpers.ov,content:(0,jsx_runtime.jsx)(TipseenWizard.c,{animationType:Tipseen.c.animationTypes.OPACITY_AND_SLIDE,title:"This is a title",steps,onChangeActiveStep,activeStepIndex,backButtonProps:{size:Button.c.sizes.SMALL,onClick:stepPrev},nextButtonProps:{kind:Button.c.kinds.PRIMARY,size:Button.c.sizes.SMALL,onClick:stepNext},onFinish:function onFinish(){}}),children:(0,jsx_runtime.jsx)("div",{className:"monday-storybook-steps_container"})})})},name:"Steps inside a tipseen"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: NavigableStepsTemplate.bind({}),\n  name: "Overview",\n  args: {\n    steps: steps5\n  }\n}',...Overview.parameters?.docs?.source}}},Types.parameters={...Types.parameters,docs:{...Types.parameters?.docs,source:{originalSource:'{\n  render: () => <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM}>\n      <Steps type={Steps.types.NUMBERS} steps={steps5} activeStepIndex={2} />\n      <Steps steps={steps5} activeStepIndex={2} />\n      <Steps steps={steps5} activeStepIndex={2} areNavigationButtonsHidden className="monday-storybook-steps_padding" />\n    </Flex>,\n  name: "Types"\n}',...Types.parameters?.docs?.source}}},OnPrimary.parameters={...OnPrimary.parameters,docs:{...OnPrimary.parameters?.docs,source:{originalSource:'{\n  render: () => <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM} className="monday-storybook-steps_color">\n      <Steps steps={steps5} activeStepIndex={2} isOnPrimary type={Steps.types.NUMBERS} />\n      <Steps steps={steps5} activeStepIndex={2} isOnPrimary />\n      <Steps steps={steps5} activeStepIndex={2} isOnPrimary areNavigationButtonsHidden className="monday-storybook-steps_padding" />\n    </Flex>,\n  name: "On primary"\n}',...OnPrimary.parameters?.docs?.source}}},NavigableSteps.parameters={...NavigableSteps.parameters,docs:{...NavigableSteps.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [activeStepIndex, setActiveStepIndex] = useState(2);\n    const stepPrev = useCallback(() => {\n      setActiveStepIndex(prevState => prevState - 1);\n    }, []);\n    const stepNext = useCallback(() => {\n      setActiveStepIndex(prevState => prevState + 1);\n    }, []);\n    const onChangeActiveStep = useCallback((_e, stepIndex) => {\n      setActiveStepIndex(stepIndex);\n    }, []);\n    return <div>\n        <Steps steps={steps5} isContentOnTop activeStepIndex={activeStepIndex} onChangeActiveStep={onChangeActiveStep} backButtonProps={{\n        onClick: stepPrev\n      }} nextButtonProps={{\n        onClick: stepNext\n      }} onFinish={() => {}} />\n      </div>;\n  },\n  name: "Navigable Steps"\n}',...NavigableSteps.parameters?.docs?.source}}},StepsInsideATipseen.parameters={...StepsInsideATipseen.parameters,docs:{...StepsInsideATipseen.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const steps = [<div>Message number 1</div>, <div>Message number 2</div>, <div>Message number 3</div>, <div>Message number 4</div>, <div>Message number 5</div>];\n    const [activeStepIndex, setActiveStepIndex] = useState(2);\n    const stepPrev = useCallback(() => {\n      setActiveStepIndex(prevState => prevState - 1);\n    }, []);\n    const stepNext = useCallback(() => {\n      setActiveStepIndex(prevState => prevState + 1);\n    }, []);\n    const onChangeActiveStep = useCallback((_e, stepIndex) => {\n      setActiveStepIndex(stepIndex);\n    }, []);\n    return <div className="monday-storybook-steps_block">\n        <Tipseen position={Tipseen.positions.LEFT} modifiers={modifiers} content={<TipseenWizard animationType={Tipseen.animationTypes.OPACITY_AND_SLIDE} title="This is a title" steps={steps} onChangeActiveStep={onChangeActiveStep} activeStepIndex={activeStepIndex} backButtonProps={{\n        size: Button.sizes.SMALL,\n        onClick: stepPrev\n      }} nextButtonProps={{\n        kind: Button.kinds.PRIMARY,\n        size: Button.sizes.SMALL,\n        onClick: stepNext\n      }} onFinish={() => {}} />}>\n          <div className="monday-storybook-steps_container" />\n        </Tipseen>\n      </div>;\n  },\n  name: "Steps inside a tipseen"\n}',...StepsInsideATipseen.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Types","OnPrimary","NavigableSteps","StepsInsideATipseen"]},"./src/components/Steps/__stories__/steps.stories.helpers.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ql:()=>StepsGalleryDontTemplate,SO:()=>StepsNumbersDoTemplate,ov:()=>modifiers});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_Steps__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Steps/Steps.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var steps6=[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{})],modifiers=[{name:"preventOverflow",options:{mainAxis:!1}},{name:"flip",options:{fallbackPlacements:[]}}],StepsNumbersDoTemplate=function StepsNumbersDoTemplate(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2),2),activeStepIndex=_useState2[0],setActiveStepIndex=_useState2[1],stepPrev=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setActiveStepIndex((function(prevState){return prevState-1}))}),[]),stepNext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setActiveStepIndex((function(prevState){return prevState+1}))}),[]),onChangeActiveStep=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(_e,stepIndex){setActiveStepIndex(stepIndex)}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Steps__WEBPACK_IMPORTED_MODULE_2__.c,{type:_Steps__WEBPACK_IMPORTED_MODULE_2__.c.types.NUMBERS,steps:steps6,activeStepIndex,onChangeActiveStep,backButtonProps:{onClick:stepPrev},nextButtonProps:{onClick:stepNext},onFinish:function onFinish(){}})};StepsNumbersDoTemplate.displayName="StepsNumbersDoTemplate";var StepsGalleryDontTemplate=function StepsGalleryDontTemplate(){var _useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2),2),activeStepIndex=_useState4[0],setActiveStepIndex=_useState4[1],stepPrev=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setActiveStepIndex((function(prevState){return prevState-1}))}),[]),stepNext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setActiveStepIndex((function(prevState){return prevState+1}))}),[]),onChangeActiveStep=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(_e,stepIndex){setActiveStepIndex(stepIndex)}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Steps__WEBPACK_IMPORTED_MODULE_2__.c,{steps:steps6,activeStepIndex,onChangeActiveStep,backButtonProps:{onClick:stepPrev},nextButtonProps:{onClick:stepNext},onFinish:function onFinish(){}})};StepsGalleryDontTemplate.displayName="StepsGalleryDontTemplate",StepsNumbersDoTemplate.__docgenInfo={description:"",methods:[],displayName:"StepsNumbersDoTemplate"},StepsGalleryDontTemplate.__docgenInfo={description:"",methods:[],displayName:"StepsGalleryDontTemplate"}},"./src/storybook/functions/createStoryMetaSettingsDecorator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__,w:()=>createStoryMetaSettingsDecorator});var monday_ui_style_src_Icons_iconsMetaData__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/monday-ui-style/src/Icons/iconsMetaData.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createStoryMetaSettings/createStoryMetaSettings.js"),_components_Icon_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/Icons/index.ts");function createStoryMetaSettingsDecorator(_ref){var component=_ref.component,enumPropNamesArray=_ref.enumPropNamesArray,iconPropNamesArray=_ref.iconPropNamesArray,actionPropsArray=_ref.actionPropsArray,ignoreControlsPropNamesArray=_ref.ignoreControlsPropNamesArray;return(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_1__.u)({component,enumPropNamesArray,iconPropNamesArray,actionPropsArray,ignoreControlsPropNamesArray,iconsMetaData:monday_ui_style_src_Icons_iconsMetaData__WEBPACK_IMPORTED_MODULE_0__.o,allIconsComponents:_components_Icon_Icons__WEBPACK_IMPORTED_MODULE_2__})}const __WEBPACK_DEFAULT_EXPORT__=createStoryMetaSettingsDecorator},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Steps/__stories__/steps.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-steps_inline-wrapper{display:flex;align-items:center;justify-content:space-between;width:100px}.monday-storybook-steps_spacing{margin-left:90px}.monday-storybook-steps_container{width:10px;height:150px;margin:0 auto}.monday-storybook-steps_block{margin:0 auto;width:270px}.monday-storybook-steps_padding{padding:15px 103px 20px}.monday-storybook-steps_color{padding:var(--sb-spacing-small);background-color:var(--sb-primary-color)}","",{version:3,sources:["webpack://./src/components/Steps/__stories__/steps.stories.scss"],names:[],mappings:"AACE,uCACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,WAAA,CAGF,gCACE,gBAAA,CAGF,kCACE,UAAA,CACA,YAAA,CACA,aAAA,CAGF,8BACE,aAAA,CACA,WAAA,CAGF,gCACE,uBAAA,CAGF,8BACE,+BAAA,CACA,wCAAA",sourcesContent:[".monday-storybook-steps {\n  &_inline-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100px;\n  }\n\n  &_spacing {\n    margin-left: 90px;\n  }\n\n  &_container {\n    width: 10px;\n    height: 150px;\n    margin: 0 auto;\n  }\n\n  &_block {\n    margin: 0 auto;\n    width: 270px;\n  }\n\n  &_padding {\n    padding: 15px 103px 20px;\n  }\n\n  &_color {\n    padding: var(--sb-spacing-small);\n    background-color: var(--sb-primary-color);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);