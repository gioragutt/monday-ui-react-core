"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[3496,3284],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Toast/__stories__/toast.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DarkMessage:()=>DarkMessage,DefaultWithButton:()=>DefaultWithButton,ErrorMessage:()=>ErrorMessage,FeedbackLoop:()=>FeedbackLoop,Overview:()=>Overview,SuccessMessage:()=>SuccessMessage,ToastWithLink:()=>ToastWithLink,ToastWithLoading:()=>ToastWithLoading,WarningMessage:()=>WarningMessage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js"),_Toast__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Toast/Toast.tsx"),_storybook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),_Button_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Button/Button.tsx"),_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Icon/Icons/components/Delete.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/components/Toast/__stories__/toast.stories.scss"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var metaSettings=(0,_storybook__WEBPACK_IMPORTED_MODULE_3__.w)({component:_Toast__WEBPACK_IMPORTED_MODULE_4__.c,enumPropNamesArray:["type"],iconPropNamesArray:["icon"]});const __WEBPACK_DEFAULT_EXPORT__={title:"Feedback/Toast",component:_Toast__WEBPACK_IMPORTED_MODULE_4__.c,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__.q)(_Toast__WEBPACK_IMPORTED_MODULE_4__.c).bind({}),name:"Overview",args:{children:"General message toast",open:!0,className:"monday-storybook-toast_wrapper",actions:[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.c.actionTypes.BUTTON,content:"Button"}]}},DefaultWithButton={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.c.actionTypes.BUTTON,content:"Button"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.c,{open:!0,autoHideDuration:5e3,actions,className:"monday-storybook-toast_wrapper",children:"General message toast"})},name:"Default with button"},ToastWithLink={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.c.actionTypes.LINK,text:"Link to action",href:"https://monday.com"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.c,{open:!0,actions,autoHideDuration:5e3,className:"monday-storybook-toast_wrapper",children:"General message toast"})},name:"Toast with link"},ToastWithLoading={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.c,{open:!0,loading:!0,className:"monday-storybook-toast_wrapper",children:"General message toast"})},name:"Toast with loading",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},SuccessMessage={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.c.actionTypes.BUTTON,content:"Undo 5"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.c,{open:!0,type:_Toast__WEBPACK_IMPORTED_MODULE_4__.c.types.POSITIVE,actions,autoHideDuration:5e3,className:"monday-storybook-toast_wrapper",children:"Positive message toast"})},name:"Success message"},ErrorMessage={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.c.actionTypes.BUTTON,content:"Button"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.c,{open:!0,actions,type:_Toast__WEBPACK_IMPORTED_MODULE_4__.c.types.NEGATIVE,autoHideDuration:5e3,className:"monday-storybook-toast_wrapper",children:"Negative message toast"})},name:"Error message"},WarningMessage={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.c.actionTypes.BUTTON,content:"Button"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.c,{open:!0,actions,type:_Toast__WEBPACK_IMPORTED_MODULE_4__.c.types.WARNING,autoHideDuration:5e3,className:"monday-storybook-toast_wrapper",children:"Warning message toast"})},name:"Warning message"},DarkMessage={render:function render(){var actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.c.actionTypes.BUTTON,content:"Button"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.c,{open:!0,actions,type:_Toast__WEBPACK_IMPORTED_MODULE_4__.c.types.DARK,autoHideDuration:5e3,className:"monday-storybook-toast_wrapper",children:"Dark message toast"})},name:"Dark message"},FeedbackLoop={render:function render(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),toastOpen=_useState2[0],setToastOpen=_useState2[1],onClickCallback=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return setToastOpen((function(toastOpen){return!toastOpen}))}),[setToastOpen]),onCloseCallback=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return setToastOpen(!1)}),[setToastOpen]),actions=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[{type:_Toast__WEBPACK_IMPORTED_MODULE_4__.c.actionTypes.BUTTON,content:"Undo"}]}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_6__.c,{leftIcon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_7__.c,onClick:onClickCallback,children:"Delete item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toast__WEBPACK_IMPORTED_MODULE_4__.c,{open:toastOpen,type:_Toast__WEBPACK_IMPORTED_MODULE_4__.c.types.POSITIVE,actions,onClose:onCloseCallback,autoHideDuration:5e3,className:"monday-storybook-toast_box",children:"We successfully deleted 1 item"})]})},name:"Feedback loop"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: toastTemplate.bind({}),\n  name: "Overview",\n  args: {\n    children: "General message toast",\n    open: true,\n    className: "monday-storybook-toast_wrapper",\n    actions: [{\n      type: Toast.actionTypes.BUTTON,\n      content: "Button"\n    }]\n  }\n}',...Overview.parameters?.docs?.source}}},DefaultWithButton.parameters={...DefaultWithButton.parameters,docs:{...DefaultWithButton.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions = useMemo(() => [{\n      type: Toast.actionTypes.BUTTON,\n      content: "Button"\n    }], []);\n    return <Toast open autoHideDuration={5000} actions={actions} className="monday-storybook-toast_wrapper">\n        General message toast\n      </Toast>;\n  },\n  name: "Default with button"\n}',...DefaultWithButton.parameters?.docs?.source}}},ToastWithLink.parameters={...ToastWithLink.parameters,docs:{...ToastWithLink.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions = useMemo(() => [{\n      type: Toast.actionTypes.LINK,\n      text: "Link to action",\n      href: "https://monday.com"\n    }], []);\n    return <Toast open actions={actions} autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        General message toast\n      </Toast>;\n  },\n  name: "Toast with link"\n}',...ToastWithLink.parameters?.docs?.source}}},ToastWithLoading.parameters={...ToastWithLoading.parameters,docs:{...ToastWithLoading.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <Toast open loading className="monday-storybook-toast_wrapper">\n        General message toast\n      </Toast>;\n  },\n  name: "Toast with loading",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    }\n  }\n}',...ToastWithLoading.parameters?.docs?.source}}},SuccessMessage.parameters={...SuccessMessage.parameters,docs:{...SuccessMessage.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions = useMemo(() => [{\n      type: Toast.actionTypes.BUTTON,\n      content: "Undo 5"\n    }], []);\n    return <Toast open type={Toast.types.POSITIVE} actions={actions} autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        Positive message toast\n      </Toast>;\n  },\n  name: "Success message"\n}',...SuccessMessage.parameters?.docs?.source}}},ErrorMessage.parameters={...ErrorMessage.parameters,docs:{...ErrorMessage.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions = useMemo(() => [{\n      type: Toast.actionTypes.BUTTON,\n      content: "Button"\n    }], []);\n    return <Toast open actions={actions} type={Toast.types.NEGATIVE} autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        Negative message toast\n      </Toast>;\n  },\n  name: "Error message"\n}',...ErrorMessage.parameters?.docs?.source}}},WarningMessage.parameters={...WarningMessage.parameters,docs:{...WarningMessage.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions = useMemo(() => [{\n      type: Toast.actionTypes.BUTTON,\n      content: "Button"\n    }], []);\n    return <Toast open actions={actions} type={Toast.types.WARNING} autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        Warning message toast\n      </Toast>;\n  },\n  name: "Warning message"\n}',...WarningMessage.parameters?.docs?.source}}},DarkMessage.parameters={...DarkMessage.parameters,docs:{...DarkMessage.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const actions = useMemo(() => [{\n      type: Toast.actionTypes.BUTTON,\n      content: "Button"\n    }], []);\n    return <Toast open actions={actions} type={Toast.types.DARK} autoHideDuration={5000} className="monday-storybook-toast_wrapper">\n        Dark message toast\n      </Toast>;\n  },\n  name: "Dark message"\n}',...DarkMessage.parameters?.docs?.source}}},FeedbackLoop.parameters={...FeedbackLoop.parameters,docs:{...FeedbackLoop.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [toastOpen, setToastOpen] = useState(false);\n    const onClickCallback = useCallback(() => setToastOpen(toastOpen => !toastOpen), [setToastOpen]);\n    const onCloseCallback = useCallback(() => setToastOpen(false), [setToastOpen]);\n    const actions = useMemo(() => [{\n      type: Toast.actionTypes.BUTTON,\n      content: "Undo"\n    }], []);\n    return <>\n        <Button leftIcon={Delete} onClick={onClickCallback}>\n          Delete item\n        </Button>\n        <Toast open={toastOpen} type={Toast.types.POSITIVE} actions={actions} onClose={onCloseCallback} autoHideDuration={5000} className="monday-storybook-toast_box">\n          We successfully deleted 1 item\n        </Toast>\n      </>;\n  },\n  name: "Feedback loop"\n}',...FeedbackLoop.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","DefaultWithButton","ToastWithLink","ToastWithLoading","SuccessMessage","ErrorMessage","WarningMessage","DarkMessage","FeedbackLoop"]},"./src/storybook/functions/createStoryMetaSettingsDecorator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__,w:()=>createStoryMetaSettingsDecorator});var monday_ui_style_src_Icons_iconsMetaData__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/monday-ui-style/src/Icons/iconsMetaData.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createStoryMetaSettings/createStoryMetaSettings.js"),_components_Icon_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/Icons/index.ts");function createStoryMetaSettingsDecorator(_ref){var component=_ref.component,enumPropNamesArray=_ref.enumPropNamesArray,iconPropNamesArray=_ref.iconPropNamesArray,actionPropsArray=_ref.actionPropsArray,ignoreControlsPropNamesArray=_ref.ignoreControlsPropNamesArray;return(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_1__.u)({component,enumPropNamesArray,iconPropNamesArray,actionPropsArray,ignoreControlsPropNamesArray,iconsMetaData:monday_ui_style_src_Icons_iconsMetaData__WEBPACK_IMPORTED_MODULE_0__.o,allIconsComponents:_components_Icon_Icons__WEBPACK_IMPORTED_MODULE_2__})}const __WEBPACK_DEFAULT_EXPORT__=createStoryMetaSettingsDecorator},"./src/components/Toast/__stories__/toast.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>toast});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),usage_guidelines=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/usage-guidelines/usage-guidelines.js"),Toast=__webpack_require__("./src/components/Toast/Toast.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),toast_stories=__webpack_require__("./src/components/Toast/__stories__/toast.stories.js"),tip=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/tip/tip.js"),storybook_link=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/storybook-link/storybook-link.js"),TipAlertBanner=function TipAlertBanner(){return(0,jsx_runtime.jsxs)(tip.c,{title:"Check yourself",children:["Need to inform the user about a system’s action? Use an"," ",(0,jsx_runtime.jsx)(storybook_link.c,{page:"Feedback/AlertBanner",size:storybook_link.c.sizes.SMALL,children:"AlertBanner"})," ","instead."]})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3"},(0,lib.MN)(),props.components),{PropsTable,ComponentRules,RelatedComponents}=_components;return ComponentRules||_missingMdxReference("ComponentRules",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{of:toast_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"toast",children:"Toast"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A toast notification is a message object that presents timely information, including confirmation of actions, alerts, and errors."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:toast_stories.Overview})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(usage_guidelines.c,{guidelines:["Use toast notifications immediately after a specific event such as a user action that does not relate to an object on the page. Toast used as a feedback loop to a user’s action.","Toasts should appear one at a time, and only disappear when no longer required.","Always be clear, concise and, where possible, give follow up actions to allow the user to become more informed or resolve the issue.","Always provide an action button or option to undo.","Toast should overlay permanent UI elements without blocking important actions."]}),"\n",(0,jsx_runtime.jsx)(TipAlertBanner,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default-with-button",children:"Default with button"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:toast_stories.DefaultWithButton})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"toast-with-link",children:"Toast with link"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:toast_stories.ToastWithLink})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"toast-with-loading",children:"Toast with loading"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:toast_stories.ToastWithLoading})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"success-message",children:"Success message"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use to providing a feedback loop. For example: Item copied."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:toast_stories.SuccessMessage})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"error-message",children:"Error message"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use when something was deleted, a problem has occurred, etc."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:toast_stories.ErrorMessage})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"warning-message",children:"Warning message"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:toast_stories.WarningMessage})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dark-message",children:"Dark message"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:toast_stories.DarkMessage})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,jsx_runtime.jsx)(ComponentRules,{rules:[{positive:{component:(0,jsx_runtime.jsx)(Toast.c,{open:!0,className:"monday-storybook-toast_wrapper",hideIcon:!0,type:Toast.c.types.POSITIVE,children:"Duplicating Board"}),description:"Use only one toast on a screen at a time."},negative:{component:(0,jsx_runtime.jsxs)(Flex.c,{direction:Flex.c.directions.COLUMN,gap:Flex.c.gaps.SMALL,children:[(0,jsx_runtime.jsx)(Toast.c,{type:Toast.c.types.NEGATIVE,open:!0,hideIcon:!0,className:"monday-storybook-toast_wrapper monday-storybook-toast_negative_rule",actions:[{type:Toast.c.actionTypes.LINK,text:"Try again",href:"https://monday.com"}],children:"Couldn’t load board items"}),(0,jsx_runtime.jsx)(Toast.c,{type:Toast.c.types.POSITIVE,className:"monday-storybook-toast_wrapper monday-storybook-toast_negative_rule",hideIcon:!0,text:"Duplicating Board",open:!0,children:"Duplicating Board"})]}),description:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Don’t place more than one toast on a screen at a time."})}},{positive:{component:(0,jsx_runtime.jsx)(Toast.c,{open:!0,className:"monday-storybook-toast_wrapper",type:Toast.c.types.POSITIVE,actions:[{type:Toast.c.actionTypes.BUTTON,content:"Undo"}],children:"We successfully archived 1 item"}),description:"Always offer an option to undo the action. Keep the toast for 60 seconds before auto-removing it."},negative:{component:(0,jsx_runtime.jsx)(Toast.c,{open:!0,className:"monday-storybook-toast_wrapper",type:Toast.c.types.POSITIVE,children:"We successfully archived 1 item"}),description:"Don’t offer an action without letting the user undo it."}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"feedback-loop",children:"Feedback loop"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"After a user has done an action, provide feedback to close the loop. For example, when an item has been deleted, duplicated, etc."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:toast_stories.FeedbackLoop})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.mc,component_description_map.w3,component_description_map.OY]})]})}TipAlertBanner.displayName="TipAlertBanner",TipAlertBanner.__docgenInfo={description:"",methods:[],displayName:"TipAlertBanner"};const toast=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}}]);