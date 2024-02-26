"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[6496,1600],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Label/__stories__/label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Clickable:()=>Clickable,Colors:()=>Colors,Kinds:()=>Kinds,Overview:()=>Overview,SecondaryLabel:()=>SecondaryLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Label_stories_label_stories});__webpack_require__("../../node_modules/react/index.js");var Label=__webpack_require__("./src/components/Label/Label.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),function_utils=__webpack_require__("./src/utils/function-utils.ts"),createComponentTemplate=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js"),multiple_story_elements_wrapper=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/multiple-story-elements-wrapper/multiple-story-elements-wrapper.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),label_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Label/__stories__/label.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(label_stories.c,options);label_stories.c&&label_stories.c.locals&&label_stories.c.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,createStoryMetaSettingsDecorator.w)({component:Label.c,enumPropNamesArray:["kind","color"]});const Label_stories_label_stories={title:"Data display/Label",component:Label.c,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:(0,createComponentTemplate.q)(Label.c).bind({}),name:"Overview",args:{text:"New"},parameters:{chromatic:{pauseAnimationAtEnd:!0}}},Kinds={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-label_group monday-storybook-label_states-gap",children:[(0,jsx_runtime.jsx)(Label.c,{text:"New"}),"Fill"]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-label_group monday-storybook-label_states-gap",children:[(0,jsx_runtime.jsx)(Label.c,{text:"New",kind:Label.c.kinds.LINE}),"Outline"]})]})},name:"Kinds",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},Colors={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-label_group",children:[(0,jsx_runtime.jsx)(Label.c,{text:"New"}),(0,jsx_runtime.jsx)(Label.c,{text:"New",kind:Label.c.kinds.LINE})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-label_group",children:[(0,jsx_runtime.jsx)(Label.c,{text:"New",color:Label.c.colors.NEGATIVE}),(0,jsx_runtime.jsx)(Label.c,{text:"New",color:Label.c.colors.NEGATIVE,kind:Label.c.kinds.LINE})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-label_group",children:[(0,jsx_runtime.jsx)(Label.c,{text:"New",color:Label.c.colors.POSITIVE}),(0,jsx_runtime.jsx)(Label.c,{text:"New",color:Label.c.colors.POSITIVE,kind:Label.c.kinds.LINE})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-label_group",children:[(0,jsx_runtime.jsx)(Label.c,{text:"New",color:Label.c.colors.DARK}),(0,jsx_runtime.jsx)(Label.c,{text:"New",color:Label.c.colors.DARK,kind:Label.c.kinds.LINE})]})]})},name:"Colors",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},Clickable={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"monday-storybook-label_group monday-storybook-label_states-gap",children:(0,jsx_runtime.jsx)(Label.c,{text:"New",onClick:function_utils.e_})}),(0,jsx_runtime.jsx)("div",{className:"monday-storybook-label_group monday-storybook-label_states-gap",children:(0,jsx_runtime.jsx)(Label.c,{text:"New",kind:Label.c.kinds.LINE,onClick:function_utils.e_})})]})},name:"Clickable",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},SecondaryLabel={render:function render(){return(0,jsx_runtime.jsxs)(multiple_story_elements_wrapper.c,{className:"monday-storybook-label_column-block",children:[(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-label_article",children:[(0,jsx_runtime.jsx)("h5",{className:"monday-storybook-label_title",children:"Gannt"}),(0,jsx_runtime.jsx)(Label.c,{text:"New",kind:Label.c.kinds.LINE}),(0,jsx_runtime.jsx)("p",{children:"Plan, track and present your projects visually using the Gannt chart"})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-label_article",children:[(0,jsx_runtime.jsx)("h5",{className:"monday-storybook-label_title",children:"Apps"}),(0,jsx_runtime.jsx)(Label.c,{text:"New",kind:Label.c.kinds.LINE}),(0,jsx_runtime.jsx)("p",{children:"Enhance your dashboard with widgets built on the monday apps framework"})]})]})},name:"Secondary label",parameters:{chromatic:{pauseAnimationAtEnd:!0}}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: labelTemplate.bind({}),\n  name: "Overview",\n  args: {\n    text: "New"\n  },\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    }\n  }\n}',...Overview.parameters?.docs?.source}}},Kinds.parameters={...Kinds.parameters,docs:{...Kinds.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <div className="monday-storybook-label_group monday-storybook-label_states-gap">\n        <Label text="New" />\n        Fill\n      </div>\n      <div className="monday-storybook-label_group monday-storybook-label_states-gap">\n        <Label text="New" kind={Label.kinds.LINE} />\n        Outline\n      </div>\n    </>,\n  name: "Kinds",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    }\n  }\n}',...Kinds.parameters?.docs?.source}}},Colors.parameters={...Colors.parameters,docs:{...Colors.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <div className="monday-storybook-label_group">\n        <Label text="New" />\n        <Label text="New" kind={Label.kinds.LINE} />\n      </div>\n      <div className="monday-storybook-label_group">\n        <Label text="New" color={Label.colors.NEGATIVE} />\n        <Label text="New" color={Label.colors.NEGATIVE} kind={Label.kinds.LINE} />\n      </div>\n      <div className="monday-storybook-label_group">\n        <Label text="New" color={Label.colors.POSITIVE} />\n        <Label text="New" color={Label.colors.POSITIVE} kind={Label.kinds.LINE} />\n      </div>\n      <div className="monday-storybook-label_group">\n        <Label text="New" color={Label.colors.DARK} />\n        <Label text="New" color={Label.colors.DARK} kind={Label.kinds.LINE} />\n      </div>\n    </>,\n  name: "Colors",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    }\n  }\n}',...Colors.parameters?.docs?.source}}},Clickable.parameters={...Clickable.parameters,docs:{...Clickable.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <div className="monday-storybook-label_group monday-storybook-label_states-gap">\n        <Label text="New" onClick={NOOP} />\n      </div>\n      <div className="monday-storybook-label_group monday-storybook-label_states-gap">\n        <Label text="New" kind={Label.kinds.LINE} onClick={NOOP} />\n      </div>\n    </>,\n  name: "Clickable",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    }\n  }\n}',...Clickable.parameters?.docs?.source}}},SecondaryLabel.parameters={...SecondaryLabel.parameters,docs:{...SecondaryLabel.parameters?.docs,source:{originalSource:'{\n  render: () => <MultipleStoryElementsWrapper className="monday-storybook-label_column-block">\n      <div className="monday-storybook-label_article">\n        <h5 className="monday-storybook-label_title">Gannt</h5>\n        <Label text="New" kind={Label.kinds.LINE} />\n        <p>Plan, track and present your projects visually using the Gannt chart</p>\n      </div>\n      <div className="monday-storybook-label_article">\n        <h5 className="monday-storybook-label_title">Apps</h5>\n        <Label text="New" kind={Label.kinds.LINE} />\n        <p>Enhance your dashboard with widgets built on the monday apps framework</p>\n      </div>\n    </MultipleStoryElementsWrapper>,\n  name: "Secondary label",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    }\n  }\n}',...SecondaryLabel.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Kinds","Colors","Clickable","SecondaryLabel"]},"./src/components/Label/__stories__/label.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>label});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),Label=__webpack_require__("./src/components/Label/Label.tsx"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),label_stories=__webpack_require__("./src/components/Label/__stories__/label.stories.tsx"),tip=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/tip/tip.js"),storybook_link=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/storybook-link/storybook-link.js"),TipCheckYourself=function TipCheckYourself(){return(0,jsx_runtime.jsxs)(tip.c,{title:"Check yourself",children:["Need to count or indicate numbers? Use the"," ",(0,jsx_runtime.jsx)(storybook_link.c,{page:"Feedback/Counter",size:storybook_link.c.sizes.SMALL,children:"Counter"})," ","component instead."]})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",div:"div",h5:"h5"},(0,lib.MN)(),props.components),{PropsTable,UsageGuidelines,ComponentRules,StorybookLink,RelatedComponents}=_components;return ComponentRules||_missingMdxReference("ComponentRules",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),StorybookLink||_missingMdxReference("StorybookLink",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{of:label_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"label",children:"Label"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A label indicates the status of an item."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:label_stories.Overview})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:["Label will always appear in context next to the item it classifies.","Displays a short message like new, beta, coming soon.,etc.","Use only UI colors, not content colors (like status colors)."]}),"\n",(0,jsx_runtime.jsx)(TipCheckYourself,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"kinds",children:"Kinds"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:label_stories.Kinds})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"colors",children:"Colors"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:label_stories.Colors})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"clickable",children:"Clickable"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:label_stories.Clickable})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,jsx_runtime.jsx)(ComponentRules,{rules:[{positive:{component:(0,jsx_runtime.jsx)(Label.c,{text:"New"}),description:"Use label to indicate the status of an item, for example: “New”."},negative:{component:(0,jsx_runtime.jsx)(Label.c,{text:"123"}),description:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Don’t use the label component in order to indicate numbers, instead use the"," ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Feedback/Counter",children:"Counter."})]})}},{positive:{component:(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-label_inline-block",children:[(0,jsx_runtime.jsx)(_components.h5,{className:"monday-storybook-label_title",children:"Categories"}),(0,jsx_runtime.jsx)(Label.c,{text:"new"})]}),description:"Use label only once per item."},negative:{component:[(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-label_block",children:[(0,jsx_runtime.jsx)(_components.h5,{children:"Categories"}),(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-label_inline-block",children:[(0,jsx_runtime.jsx)(Label.c,{text:"Featured"}),(0,jsx_runtime.jsx)(Label.c,{text:"CRM"}),(0,jsx_runtime.jsx)(Label.c,{text:"Export"})]})]})],description:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Don’t use multiple labels for one item. Instead, use"," ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Data display/Chips",children:"Chips."})]})}},{positive:{component:[(0,jsx_runtime.jsx)(Label.c,{text:"New",kind:Label.c.kinds.LINE}),(0,jsx_runtime.jsx)(Label.c,{text:"Beta"})],description:"Use only the UI colors above."},negative:{component:[(0,jsx_runtime.jsx)(Label.c,{className:"monday-storybook-label_bad-lable monday-storybook-label_purple",kind:Label.c.kinds.LINE,text:"Beta"}),(0,jsx_runtime.jsx)(Label.c,{className:"monday-storybook-label_bad-lable monday-storybook-label_pink",kind:Label.c.kinds.LINE,text:"Beta"})],description:"Don’t use any content colors for labels. If the page is full of CTAs, use the outline state."}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"secondary-label",children:"Secondary label"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"In case of visual overload, use the secondary label in order to create hirarchy."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:label_stories.SecondaryLabel})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.w3,component_description_map.uI,component_description_map.OI]})]})}TipCheckYourself.displayName="TipCheckYourself";const label=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Label/__stories__/label.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-label_group{display:flex;flex-direction:column;align-items:flex-start;gap:40px;margin:25px 176px 25px 30px}.monday-storybook-label_block{display:flex;flex-direction:column;align-items:center;gap:14px}.monday-storybook-label_inline-block{display:flex;gap:10px}.monday-storybook-label_article{display:block;width:300px}.monday-storybook-label_column-block{display:flex;flex-direction:column;column-gap:25px}.monday-storybook-label_title{display:inline;padding-right:8px}.monday-storybook-label_bad-lable{border-radius:var(--sb-border-radius-small)}.monday-storybook-label_bad-lable div{border:none}.monday-storybook-label_bad-lable span{color:var(--sb-text-color-on-primary)}.monday-storybook-label_purple{background-color:var(--sb-color-purple)}.monday-storybook-label_pink{background-color:var(--sb-color-sofia_pink)}.monday-storybook-label_states-gap{gap:24px}","",{version:3,sources:["webpack://./src/components/Label/__stories__/label.stories.scss"],names:[],mappings:"AACE,8BACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,QAAA,CACA,2BAAA,CAGF,8BACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,QAAA,CAGF,qCACE,YAAA,CACA,QAAA,CAGF,gCACE,aAAA,CACA,WAAA,CAGF,qCACE,YAAA,CACA,qBAAA,CACA,eAAA,CAGF,8BACE,cAAA,CACA,iBAAA,CAGF,kCACE,2CAAA,CACA,sCACE,WAAA,CAEF,uCACE,qCAAA,CAIJ,+BACE,uCAAA,CAGF,6BACE,2CAAA,CAGF,mCACE,QAAA",sourcesContent:[".monday-storybook-label {\n  &_group {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 40px;\n    margin: 25px 176px 25px 30px;\n  }\n\n  &_block {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 14px;\n  }\n\n  &_inline-block {\n    display: flex;\n    gap: 10px;\n  }\n\n  &_article {\n    display: block;\n    width: 300px;\n  }\n\n  &_column-block {\n    display: flex;\n    flex-direction: column;\n    column-gap: 25px;\n  }\n\n  &_title {\n    display: inline;\n    padding-right: 8px;\n  }\n\n  &_bad-lable {\n    border-radius: var(--sb-border-radius-small);\n    div {\n      border: none;\n    }\n    span {\n      color: var(--sb-text-color-on-primary);\n    }\n  }\n\n  &_purple {\n    background-color: var(--sb-color-purple);\n  }\n\n  &_pink {\n    background-color: var(--sb-color-sofia_pink);\n  }\n\n  &_states-gap {\n    gap: 24px;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}}]);