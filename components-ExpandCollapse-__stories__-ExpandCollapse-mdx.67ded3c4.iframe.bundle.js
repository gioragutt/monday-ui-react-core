"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[4e3,6212],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ExpandCollapse/__stories__/ExpandCollapse.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ControlledOpenState:()=>ControlledOpenState,CustomHeaderRenderer:()=>CustomHeaderRenderer,OpenByDefault:()=>OpenByDefault,Overview:()=>Overview,WithoutBorders:()=>WithoutBorders,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ExpandCollapse_stories});var react=__webpack_require__("../../node_modules/react/index.js"),createComponentTemplate=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js"),ExpandCollapse=__webpack_require__("./src/components/ExpandCollapse/ExpandCollapse.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),Text=__webpack_require__("./src/components/Text/Text.tsx"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),Heading=__webpack_require__("./src/components/Heading/Heading.tsx"),Robot=__webpack_require__("./src/components/Icon/Icons/components/Robot.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ExpandCollapse_stories_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/ExpandCollapse/__stories__/ExpandCollapse.stories.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ExpandCollapse_stories_module.c,options);const _stories_ExpandCollapse_stories_module=ExpandCollapse_stories_module.c&&ExpandCollapse_stories_module.c.locals?ExpandCollapse_stories_module.c.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var metaSettings=(0,createStoryMetaSettingsDecorator.w)({component:ExpandCollapse.c,enumPropNamesArray:[],iconPropNamesArray:[],actionPropsArray:[],ignoreControlsPropNamesArray:["headerComponentRenderer"]});const ExpandCollapse_stories={title:"Data Display/ExpandCollapse",component:ExpandCollapse.c,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:(0,createComponentTemplate.q)(ExpandCollapse.c).bind({}),name:"Overview",args:{title:"Expand collapse",children:[(0,jsx_runtime.jsx)(Text.c,{maxLines:2,children:"Insert here any component that you want, here is a robot for you"}),(0,jsx_runtime.jsx)(Icon.c,{iconType:Icon.c.type.SVG,icon:Robot.c,iconSize:40,clickable:!1})],className:_stories_ExpandCollapse_stories_module.storybookExpandCollapse}},OpenByDefault={render:function render(){return(0,jsx_runtime.jsx)(ExpandCollapse.c,{title:"Open by default",defaultOpenState:!0,className:_stories_ExpandCollapse_stories_module.storybookExpandCollapse,children:(0,jsx_runtime.jsx)(Text.c,{maxLines:2,children:"Insert here any component that you want"})})},name:"Open by default"},ControlledOpenState={render:function render(){var _useState2=_slicedToArray((0,react.useState)(!1),2),open=_useState2[0],setOpen=_useState2[1];return(0,jsx_runtime.jsx)(Flex.c,{direction:Flex.c.directions.ROW,gap:Flex.c.gaps.LARGE,align:Flex.c.align.START,children:(0,jsx_runtime.jsx)(ExpandCollapse.c,{title:"Controlled open state",open,onClick:function onClick(){return setOpen((function(prevState){return!prevState}))},className:_stories_ExpandCollapse_stories_module.storybookExpandCollapse,children:(0,jsx_runtime.jsx)(Text.c,{maxLines:2,children:"Insert here any component that you want"})})})},name:"Controlled open state"},CustomHeaderRenderer={render:function render(){return(0,jsx_runtime.jsx)(ExpandCollapse.c,{headerComponentRenderer:function ExpandCollapseCustomHeadingComponent(){return(0,jsx_runtime.jsx)(Heading.c,{type:Heading.c.types.H3,children:"Any component you want"})},className:_stories_ExpandCollapse_stories_module.storybookExpandCollapse,children:(0,jsx_runtime.jsx)(Text.c,{maxLines:2,children:"Insert here any component that you want"})})},name:"Custom header renderer"},WithoutBorders={render:function render(){return(0,jsx_runtime.jsx)(ExpandCollapse.c,{hideBorder:!0,title:"Without borders",className:_stories_ExpandCollapse_stories_module.storybookExpandCollapse,children:(0,jsx_runtime.jsx)(Text.c,{maxLines:2,children:"Insert here any component that you want"})})},name:"Without borders"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: expandCollapseTemplate.bind({}),\n  name: "Overview",\n  args: {\n    title: "Expand collapse",\n    children: [<Text maxLines={2}>Insert here any component that you want, here is a robot for you</Text>, <Icon iconType={Icon.type.SVG} icon={Robot} iconSize={40} clickable={false} />],\n    className: styles.storybookExpandCollapse\n  }\n}',...Overview.parameters?.docs?.source}}},OpenByDefault.parameters={...OpenByDefault.parameters,docs:{...OpenByDefault.parameters?.docs,source:{originalSource:'{\n  render: () => <ExpandCollapse title="Open by default" defaultOpenState className={styles.storybookExpandCollapse}>\n      <Text maxLines={2}>Insert here any component that you want</Text>\n    </ExpandCollapse>,\n  name: "Open by default"\n}',...OpenByDefault.parameters?.docs?.source}}},ControlledOpenState.parameters={...ControlledOpenState.parameters,docs:{...ControlledOpenState.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [open, setOpen] = useState(false);\n    return <Flex direction={Flex.directions.ROW} gap={Flex.gaps.LARGE} align={Flex.align.START}>\n        <ExpandCollapse title="Controlled open state" open={open} onClick={() => setOpen(prevState => !prevState)} className={styles.storybookExpandCollapse}>\n          <Text maxLines={2}>Insert here any component that you want</Text>\n        </ExpandCollapse>\n      </Flex>;\n  },\n  name: "Controlled open state"\n}',...ControlledOpenState.parameters?.docs?.source}}},CustomHeaderRenderer.parameters={...CustomHeaderRenderer.parameters,docs:{...CustomHeaderRenderer.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const ExpandCollapseCustomHeadingComponent = () => {\n      return <Heading type={Heading.types.H3}>Any component you want</Heading>;\n    };\n    return <ExpandCollapse headerComponentRenderer={ExpandCollapseCustomHeadingComponent} className={styles.storybookExpandCollapse}>\n        <Text maxLines={2}>Insert here any component that you want</Text>\n      </ExpandCollapse>;\n  },\n  name: "Custom header renderer"\n}',...CustomHeaderRenderer.parameters?.docs?.source}}},WithoutBorders.parameters={...WithoutBorders.parameters,docs:{...WithoutBorders.parameters?.docs,source:{originalSource:'{\n  render: () => <ExpandCollapse hideBorder title="Without borders" className={styles.storybookExpandCollapse}>\n      <Text maxLines={2}>Insert here any component that you want</Text>\n    </ExpandCollapse>,\n  name: "Without borders"\n}',...WithoutBorders.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","OpenByDefault","ControlledOpenState","CustomHeaderRenderer","WithoutBorders"]},"./src/storybook/functions/createStoryMetaSettingsDecorator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__,w:()=>createStoryMetaSettingsDecorator});var monday_ui_style_src_Icons_iconsMetaData__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/monday-ui-style/src/Icons/iconsMetaData.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createStoryMetaSettings/createStoryMetaSettings.js"),_components_Icon_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/Icons/index.ts");function createStoryMetaSettingsDecorator(_ref){var component=_ref.component,enumPropNamesArray=_ref.enumPropNamesArray,iconPropNamesArray=_ref.iconPropNamesArray,actionPropsArray=_ref.actionPropsArray,ignoreControlsPropNamesArray=_ref.ignoreControlsPropNamesArray;return(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_1__.u)({component,enumPropNamesArray,iconPropNamesArray,actionPropsArray,ignoreControlsPropNamesArray,iconsMetaData:monday_ui_style_src_Icons_iconsMetaData__WEBPACK_IMPORTED_MODULE_0__.o,allIconsComponents:_components_Icon_Icons__WEBPACK_IMPORTED_MODULE_2__})}const __WEBPACK_DEFAULT_EXPORT__=createStoryMetaSettingsDecorator},"./src/components/ExpandCollapse/__stories__/ExpandCollapse.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>ExpandCollapse});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),tip=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/tip/tip.js"),storybook_link=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/storybook-link/storybook-link.js"),TipCombineMultiple=function TipCombineMultiple(){return(0,jsx_runtime.jsxs)(tip.c,{title:"Want to combine multiple ExpandCollapse?",children:["Use our"," ",(0,jsx_runtime.jsx)(storybook_link.c,{size:storybook_link.c.sizes.SMALL,page:"Data display/Accordion",children:"Accordion"})," ","component"]})};TipCombineMultiple.displayName="TipCombineMultiple",TipCombineMultiple.__docgenInfo={description:"",methods:[],displayName:"TipCombineMultiple"};var ExpandCollapse_stories=__webpack_require__("./src/components/ExpandCollapse/__stories__/ExpandCollapse.stories.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3"},(0,lib.MN)(),props.components),{PropsTable,RelatedComponents}=_components;return PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{of:ExpandCollapse_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"expandcollapse",children:"ExpandCollapse"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"ExpandCollapse is a component that allows you to hide and show content."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:ExpandCollapse_stories.Overview})}),"\n",(0,jsx_runtime.jsx)(TipCombineMultiple,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"open-by-default",children:"Open by default"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:ExpandCollapse_stories.OpenByDefault})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"controlled-open-state",children:"Controlled open state"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["You can control the open state of the ExpandCollapse component by passing the ",(0,jsx_runtime.jsx)("code",{children:"open"})," prop."]}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:ExpandCollapse_stories.ControlledOpenState})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-header-renderer",children:"Custom header renderer"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:ExpandCollapse_stories.CustomHeaderRenderer})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"without-borders",children:"Without borders"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:ExpandCollapse_stories.WithoutBorders})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.g8,component_description_map.CE,component_description_map.OQ]})]})}const ExpandCollapse=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/ExpandCollapse/__stories__/ExpandCollapse.stories.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ExpandCollapse-stories-module_storybookExpandCollapse{width:300px}","",{version:3,sources:["webpack://./src/components/ExpandCollapse/__stories__/ExpandCollapse.stories.module.scss"],names:[],mappings:"AAAA,uDACE,WAAA",sourcesContent:[".storybookExpandCollapse {\n  width: 300px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={storybookExpandCollapse:"ExpandCollapse-stories-module_storybookExpandCollapse"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}}]);