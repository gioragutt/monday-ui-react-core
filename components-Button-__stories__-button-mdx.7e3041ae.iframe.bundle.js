"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[3464,2924],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Button/__stories__/button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdjacentButtons:()=>AdjacentButtons,ButtonKinds:()=>ButtonKinds,Disabled:()=>Disabled,Icons:()=>Icons,LoadingState:()=>LoadingState,OnColorStates:()=>OnColorStates,Overview:()=>Overview,PositiveAndNegative:()=>PositiveAndNegative,Sizes:()=>Sizes,States:()=>States,SuccessState:()=>SuccessState,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories_button_stories});var react=__webpack_require__("../../node_modules/react/index.js"),createComponentTemplate=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js"),Calendar=__webpack_require__("./src/components/Icon/Icons/components/Calendar.tsx"),Check=__webpack_require__("./src/components/Icon/Icons/components/Check.tsx"),Remove=__webpack_require__("./src/components/Icon/Icons/components/Remove.tsx"),Add=__webpack_require__("./src/components/Icon/Icons/components/Add.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),Button=__webpack_require__("./src/components/Button/Button.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),button_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Button/__stories__/button.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(button_stories.c,options);button_stories.c&&button_stories.c.locals&&button_stories.c.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var metaSettings=(0,createStoryMetaSettingsDecorator.w)({component:Button.c,enumPropNamesArray:["kind","size","color","type"],iconPropNamesArray:["leftIcon","rightIcon","successIcon"],actionPropsArray:["onClick"]});const Button_stories_button_stories={title:"Buttons/Button",component:Button.c,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:(0,createComponentTemplate.q)(Button.c).bind({}),name:"Overview",args:{children:"Button"}},ButtonKinds={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.c,{children:"Primary"}),(0,jsx_runtime.jsx)(Button.c,{kind:Button.c.kinds.SECONDARY,children:"Secondary"}),(0,jsx_runtime.jsx)(Button.c,{kind:Button.c.kinds.TERTIARY,children:"Tertiary"})]})},name:"Button kinds"},Sizes={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.c,{size:Button.c.sizes.LARGE,children:"Large"}),(0,jsx_runtime.jsx)(Button.c,{size:Button.c.sizes.MEDIUM,children:"Medium"}),(0,jsx_runtime.jsx)(Button.c,{size:Button.c.sizes.SMALL,children:"Small"})]})},name:"Sizes"},Disabled={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.c,{disabled:!0,children:"Primary"}),(0,jsx_runtime.jsx)(Button.c,{kind:Button.c.kinds.SECONDARY,disabled:!0,children:"Secondary"}),(0,jsx_runtime.jsx)(Button.c,{kind:Button.c.kinds.TERTIARY,disabled:!0,children:"Tertiary"})]})},name:"Disabled"},States={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.c,{children:"Regular"}),(0,jsx_runtime.jsx)(Button.c,{active:!0,children:"Active"})]})},name:"States"},PositiveAndNegative={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.c,{color:Button.c.colors.POSITIVE,children:"Positive"}),(0,jsx_runtime.jsx)(Button.c,{color:Button.c.colors.NEGATIVE,children:"Negative"})]})},name:"Positive and Negative"},Icons={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.c,{rightIcon:Calendar.c,children:"Right icon"}),(0,jsx_runtime.jsx)(Button.c,{leftIcon:Calendar.c,children:"Left icon"})]})},name:"Icons"},LoadingState={render:function render(){var _useState2=_slicedToArray((0,react.useState)(!1),2),loading=_useState2[0],setLoading=_useState2[1],onClick=(0,react.useCallback)((function(){setLoading(!0)}),[setLoading]);return(0,jsx_runtime.jsx)(Button.c,{loading,onClick,children:"Click here for loading"})},name:"Loading state"},SuccessState={render:function render(){var _useState4=_slicedToArray((0,react.useState)(!1),2),success=_useState4[0],setSuccess=_useState4[1],onClick=(0,react.useCallback)((function(){setSuccess(!0)}),[setSuccess]);return(0,jsx_runtime.jsx)(Button.c,{success,onClick,successIcon:Check.c,successText:"Success",children:"Click here for success"})},name:"Success state"},OnColorStates={render:function render(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,jsx_runtime.jsx)("span",{style:{marginBottom:"var(--sb-spacing-small)"},children:"Regular"}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-button_on-color-button",children:[(0,jsx_runtime.jsx)(Button.c,{color:Button.c.colors.ON_PRIMARY_COLOR,marginRight:!0,children:"Primary on color"}),(0,jsx_runtime.jsx)(Button.c,{color:Button.c.colors.ON_PRIMARY_COLOR,kind:Button.c.kinds.SECONDARY,marginRight:!0,children:"Secondary on color"}),(0,jsx_runtime.jsx)(Button.c,{color:Button.c.colors.ON_PRIMARY_COLOR,kind:Button.c.kinds.TERTIARY,children:"Tertiary on color"})]}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("span",{style:{marginBottom:"var(--sb-spacing-small)"},children:"Disabled"}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-button_on-color-button",children:[(0,jsx_runtime.jsx)(Button.c,{color:Button.c.colors.ON_PRIMARY_COLOR,disabled:!0,marginRight:!0,children:"Primary on color"}),(0,jsx_runtime.jsx)(Button.c,{color:Button.c.colors.ON_PRIMARY_COLOR,disabled:!0,marginRight:!0,kind:Button.c.kinds.SECONDARY,children:"Secondary on color"}),(0,jsx_runtime.jsx)(Button.c,{color:Button.c.colors.ON_PRIMARY_COLOR,disabled:!0,kind:Button.c.kinds.TERTIARY,children:"Tertiary on color"})]})]})})},name:"On color states"},AdjacentButtons={render:function render(){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Button.c,{kind:Button.c.kinds.SECONDARY,size:Button.c.sizes.SMALL,ariaLabel:"decrease zoom level",rightFlat:!0,children:(0,jsx_runtime.jsx)(Remove.c,{})}),(0,jsx_runtime.jsx)(Button.c,{kind:Button.c.kinds.SECONDARY,size:Button.c.sizes.SMALL,ariaLabel:"increase zoom level",leftFlat:!0,children:(0,jsx_runtime.jsx)(Add.c,{})})]})},name:"Adjacent buttons"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: buttonTemplate.bind({}),\n  name: "Overview",\n  args: {\n    children: "Button"\n  }\n}',...Overview.parameters?.docs?.source}}},ButtonKinds.parameters={...ButtonKinds.parameters,docs:{...ButtonKinds.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Button>Primary</Button>\n      <Button kind={Button.kinds.SECONDARY}>Secondary</Button>\n      <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>\n    </>,\n  name: "Button kinds"\n}',...ButtonKinds.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Button size={Button.sizes.LARGE}>Large</Button>\n      <Button size={Button.sizes.MEDIUM}>Medium</Button>\n      <Button size={Button.sizes.SMALL}>Small</Button>\n    </>,\n  name: "Sizes"\n}',...Sizes.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Button disabled>Primary</Button>\n      <Button kind={Button.kinds.SECONDARY} disabled>\n        Secondary\n      </Button>\n      <Button kind={Button.kinds.TERTIARY} disabled>\n        Tertiary\n      </Button>\n    </>,\n  name: "Disabled"\n}',...Disabled.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Button>Regular</Button>\n      <Button active>Active</Button>\n    </>,\n  name: "States"\n}',...States.parameters?.docs?.source}}},PositiveAndNegative.parameters={...PositiveAndNegative.parameters,docs:{...PositiveAndNegative.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Button color={Button.colors.POSITIVE}>Positive</Button>\n      <Button color={Button.colors.NEGATIVE}>Negative</Button>\n    </>,\n  name: "Positive and Negative"\n}',...PositiveAndNegative.parameters?.docs?.source}}},Icons.parameters={...Icons.parameters,docs:{...Icons.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Button rightIcon={Calendar}>Right icon</Button>\n      <Button leftIcon={Calendar}>Left icon</Button>\n    </>,\n  name: "Icons"\n}',...Icons.parameters?.docs?.source}}},LoadingState.parameters={...LoadingState.parameters,docs:{...LoadingState.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [loading, setLoading] = useState(false);\n    const onClick = useCallback(() => {\n      setLoading(true);\n    }, [setLoading]);\n    return <Button loading={loading} onClick={onClick}>\n        Click here for loading\n      </Button>;\n  },\n  name: "Loading state"\n}',...LoadingState.parameters?.docs?.source}}},SuccessState.parameters={...SuccessState.parameters,docs:{...SuccessState.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [success, setSuccess] = useState(false);\n    const onClick = useCallback(() => {\n      setSuccess(true);\n    }, [setSuccess]);\n    return <Button success={success} onClick={onClick} successIcon={Check} successText="Success">\n        Click here for success\n      </Button>;\n  },\n  name: "Success state"\n}',...SuccessState.parameters?.docs?.source}}},OnColorStates.parameters={...OnColorStates.parameters,docs:{...OnColorStates.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <div style={{\n      display: "flex",\n      flexDirection: "column"\n    }}>\n        <span style={{\n        marginBottom: "var(--sb-spacing-small)"\n      }}>Regular</span>\n        <div className="monday-storybook-button_on-color-button">\n          <Button color={Button.colors.ON_PRIMARY_COLOR} marginRight>\n            Primary on color\n          </Button>\n          <Button color={Button.colors.ON_PRIMARY_COLOR} kind={Button.kinds.SECONDARY} marginRight>\n            Secondary on color\n          </Button>\n          <Button color={Button.colors.ON_PRIMARY_COLOR} kind={Button.kinds.TERTIARY}>\n            Tertiary on color\n          </Button>\n        </div>\n        <br />\n        <span style={{\n        marginBottom: "var(--sb-spacing-small)"\n      }}>Disabled</span>\n        <div className="monday-storybook-button_on-color-button">\n          <Button color={Button.colors.ON_PRIMARY_COLOR} disabled marginRight>\n            Primary on color\n          </Button>\n          <Button color={Button.colors.ON_PRIMARY_COLOR} disabled marginRight kind={Button.kinds.SECONDARY}>\n            Secondary on color\n          </Button>\n          <Button color={Button.colors.ON_PRIMARY_COLOR} disabled kind={Button.kinds.TERTIARY}>\n            Tertiary on color\n          </Button>\n        </div>\n      </div>\n    </>,\n  name: "On color states"\n}',...OnColorStates.parameters?.docs?.source}}},AdjacentButtons.parameters={...AdjacentButtons.parameters,docs:{...AdjacentButtons.parameters?.docs,source:{originalSource:'{\n  render: () => <div>\n      <Button kind={Button.kinds.SECONDARY} size={Button.sizes.SMALL} ariaLabel="decrease zoom level" rightFlat>\n        <Remove />\n      </Button>\n      <Button kind={Button.kinds.SECONDARY} size={Button.sizes.SMALL} ariaLabel="increase zoom level" leftFlat>\n        <Add />\n      </Button>\n    </div>,\n  name: "Adjacent buttons"\n}',...AdjacentButtons.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","ButtonKinds","Sizes","Disabled","States","PositiveAndNegative","Icons","LoadingState","SuccessState","OnColorStates","AdjacentButtons"]},"./src/components/Button/__stories__/button.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_stories_button});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),Button=__webpack_require__("./src/components/Button/Button.tsx"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),tip=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/tip/tip.js"),storybook_link=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/storybook-link/storybook-link.js"),TipIconButton=function TipIconButton(){return(0,jsx_runtime.jsxs)(tip.c,{children:["If you need to use icon as button with no text, check out"," ",(0,jsx_runtime.jsx)(storybook_link.c,{page:"Buttons/IconButton",size:storybook_link.c.sizes.SMALL,children:"IconButton"})," ","component"]})};TipIconButton.displayName="TipIconButton";var button_stories=__webpack_require__("./src/components/Button/__stories__/button.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3"},(0,lib.MN)(),props.components),{PropsTable,UsageGuidelines,ComponentRules,RelatedComponents}=_components;return ComponentRules||_missingMdxReference("ComponentRules",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{of:button_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"button",children:"Button"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Buttons allow users to trigger an action or event with a single click.\nFor example, you can use a button for allowing the functionality of submitting a form, opening a dialog, canceling an action,\nor performing a delete operation."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:button_stories.Overview})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:["Buttons may contain icon, on the left or the right side","Use 8 px spacing between buttons","Replace text with a loader if action is submitted, but still processing","Button width is set by it’s content, avoid changing it width","Use only one primary button, and any remaining calls to action should be represented as lower emphasis buttons"]}),"\n",(0,jsx_runtime.jsx)(TipIconButton,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"button-kinds",children:"Button kinds"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There can be more than one button in a screen, but to create the hierarchy of actions we need to use button kinds."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:button_stories.ButtonKinds})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:button_stories.Sizes})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Set disable button for something that isn’t usable. Use a tooltip on hover in order to indicate the reason of the disabled action."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:button_stories.Disabled})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:button_stories.States})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"positive-and-negative",children:"Positive and Negative"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:button_stories.PositiveAndNegative})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icons",children:"Icons"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:button_stories.Icons})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,jsx_runtime.jsx)(ComponentRules,{rules:[{positive:{component:(0,jsx_runtime.jsx)(Button.c,{children:"Get started"}),description:"Use 1 or 2 words, no longer than 4 words, with fewer than 20 characters including spaces."},negative:{component:(0,jsx_runtime.jsx)(Button.c,{children:"Get started and enjoy discount!"}),description:"Don’t use punctuation marks such as periods or exclamation points."}},{positive:{component:(0,jsx_runtime.jsx)(Button.c,{children:"Get started"}),description:"Use sentence-case capitalization."},negative:{component:[(0,jsx_runtime.jsx)(Button.c,{children:"Get Started"}),(0,jsx_runtime.jsx)(Button.c,{children:"GET STARTED"})],description:"Don’t use title case captalization or all caps."}},{positive:{component:[(0,jsx_runtime.jsx)(Button.c,{kind:Button.c.kinds.TERTIARY,children:"Cancel"}),(0,jsx_runtime.jsx)(Button.c,{children:"Get started"})],description:"Use primary button as the main action , put the tertiary as the second option."},negative:{component:[(0,jsx_runtime.jsx)(Button.c,{children:"Get started"}),(0,jsx_runtime.jsx)(Button.c,{kind:Button.c.kinds.SECONDARY,children:"Cancel"})],description:"Use primary button next to secondary."}},{positive:{component:[(0,jsx_runtime.jsx)(Button.c,{kind:Button.c.kinds.TERTIARY,children:"Cancel"}),(0,jsx_runtime.jsx)(Button.c,{children:"Get started"})],description:"Use active verbs or phrases that clearly indicate action."},negative:{component:[(0,jsx_runtime.jsx)(Button.c,{kind:Button.c.kinds.TERTIARY,children:"Yes"}),(0,jsx_runtime.jsx)(Button.c,{children:"No"})],description:"Use vague and generic labels that make the user read the dialog before taking action."}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"loading-state",children:"Loading state"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:button_stories.LoadingState})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"success-state",children:"Success state"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:button_stories.SuccessState})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"on-color-state",children:"On color state"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:button_stories.OnColorStates})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"adjacent-buttons",children:"Adjacent buttons"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:button_stories.AdjacentButtons})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.Wb,component_description_map.k1,component_description_map.KQ]})]})}const _stories_button=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Button/__stories__/button.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-button_icons{display:flex}.monday-storybook-button_on-color-button{background:var(--sb-primary-color);padding:16px}","",{version:3,sources:["webpack://./src/components/Button/__stories__/button.stories.scss"],names:[],mappings:"AACE,+BACE,YAAA,CAGF,yCACE,kCAAA,CACA,YAAA",sourcesContent:[".monday-storybook-button {\n  &_icons {\n    display: flex;\n  }\n\n  &_on-color-button {\n    background: var(--sb-primary-color);\n    padding: 16px;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}}]);