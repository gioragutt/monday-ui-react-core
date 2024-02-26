"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[7420,8892],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/hooks/useKeyEvent/__stories__/useKeyEvent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useKeyEvent/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/hooks/__stories__/general-hooks-stories.scss"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={title:"Hooks/useKeyEvent"};var Overview={render:function render(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("-"),2),keyName=_useState2[0],setKeyName=_useState2[1];return(0,___WEBPACK_IMPORTED_MODULE_3__.c)({keys:["1","2","3","4","5","6","7","8","9","0"],callback:function callback(e){return setKeyName(e.key)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:["Last pressed digit: ",keyName]})},name:"Overview"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [keyName, setKeyName] = useState("-");\n    useKeyEvent({\n      keys: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],\n      // @ts-ignore\n      callback: e => setKeyName(e.key)\n    });\n    return <div>Last pressed digit: {keyName}</div>;\n  },\n  name: "Overview"\n}',...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Overview"]},"./src/hooks/useKeyEvent/__stories__/useKeyEvent.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/function-arguments/function-arguments.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/function-arguments/function-argument.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/usage-guidelines/usage-guidelines.js"),_useKeyEvent_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/useKeyEvent/__stories__/useKeyEvent.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",code:"code"},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.MN)(),props.components),{Link}=_components;return Link||function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}("Link",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Qb,{of:_useKeyEvent_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"usekeyevent",children:"useKeyEvent"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#arguments",children:"Arguments"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Attaches a listener to keyboard DOM events on a specific element, firing a provided callback when the event is triggered."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._W,{of:_useKeyEvent_stories__WEBPACK_IMPORTED_MODULE_4__.Overview})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__.c,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.c,{name:"options",type:"Object",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.c,{name:"keys",type:"Array<string>",description:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["A list of keys to trigger the passed callback. See",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Link,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values",children:"a full list"}),"for more info."]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.c,{name:"callback",type:"(event: Event) => void",description:"Callback function to execute when the event is fired.",required:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.c,{name:"ref",type:"React.MutableRefObject",description:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["A React",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Link,{href:"https://react.dev/reference/react/useRef",children:"ref"}),"object."]}),default:"document"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.c,{name:"ignoreDocumentFallback",type:"boolean",description:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["If ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ref"})," is not passed, ignore the default ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ref"}),"."]}),default:"false"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.c,{name:"capture",type:"boolean",description:"Whether to capture the event before bubbling up or not.",default:"false"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.c,{name:"preventDefault",type:"boolean",description:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["Runs"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Link,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault",withoutSpacing:!0,children:"preventDefault"})})," ","on the fired events."]}),default:"false"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.c,{name:"stopPropagation",type:"boolean",description:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["Runs"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Link,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation",withoutSpacing:!0,children:"stopPropagation"})})," ","on the fired events."]}),default:"false"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.c,{name:"eventName",type:"string",description:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["The event to listen to. See",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Link,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#events",children:"a full list"}),"for more info."]}),default:"keydown"})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_7__.c,{guidelines:["Use this hook to add custom logic when typing inside an element.","Use this hook to add keyboard shortcuts."]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.MN)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/hooks/__stories__/general-hooks-stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".hooks-reference-element{width:150px;color:var(--primary-text-color);border:1px solid var(--ui-border-color);background:var(--secondary-background-color);height:50px;border-radius:4px;display:flex;justify-content:center;align-items:center;user-select:none}","",{version:3,sources:["webpack://./src/hooks/__stories__/general-hooks-stories.scss"],names:[],mappings:"AAAA,yBACE,WAAA,CACA,+BAAA,CACA,uCAAA,CACA,4CAAA,CACA,WAAA,CACA,iBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,gBAAA",sourcesContent:[".hooks-reference-element {\n  width: 150px;\n  color: var(--primary-text-color);\n  border: 1px solid var(--ui-border-color);\n  background: var(--secondary-background-color);\n  height: 50px;\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/hooks/__stories__/general-hooks-stories.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_general_hooks_stories_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/hooks/__stories__/general-hooks-stories.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_general_hooks_stories_scss__WEBPACK_IMPORTED_MODULE_6__.c,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_general_hooks_stories_scss__WEBPACK_IMPORTED_MODULE_6__.c&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_general_hooks_stories_scss__WEBPACK_IMPORTED_MODULE_6__.c.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_general_hooks_stories_scss__WEBPACK_IMPORTED_MODULE_6__.c.locals}}]);