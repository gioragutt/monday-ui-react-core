"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[6376],{"./src/components/LegacyHeading/__stories__/LegacyHeading.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EmptyStateTitle:()=>EmptyStateTitle,NotEditableHeaderOfAPage:()=>NotEditableHeaderOfAPage,Overflow:()=>Overflow,Overview:()=>Overview,Sizes:()=>Sizes,TextHighlight:()=>TextHighlight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LegacyHeading_stories});__webpack_require__("../../node_modules/react/index.js");var LegacyHeading=__webpack_require__("./src/components/LegacyHeading/LegacyHeading.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),Divider=__webpack_require__("./src/components/Divider/Divider.tsx"),Search=__webpack_require__("./src/components/Search/Search.tsx"),Checkbox=__webpack_require__("./src/components/Checkbox/Checkbox.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),Custom=__webpack_require__("./src/components/Icon/Icons/components/Custom.tsx"),emptyStateExample=__webpack_require__("./src/storybook/stories-common-assets/emptyStateExample.svg"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LegacyHeading_stories_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/LegacyHeading/__stories__/LegacyHeading.stories.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LegacyHeading_stories_module.c,options);const _stories_LegacyHeading_stories_module=LegacyHeading_stories_module.c&&LegacyHeading_stories_module.c.locals?LegacyHeading_stories_module.c.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,createStoryMetaSettingsDecorator.w)({component:LegacyHeading.c,enumPropNamesArray:["type","size"]});const LegacyHeading_stories={title:"Text/LegacyHeading [deprecated]",component:LegacyHeading.c,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:function render(){return(0,jsx_runtime.jsx)(LegacyHeading.c,{value:"Hello world"})},name:"Overview",args:{}},Sizes={render:function render(){return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,jsx_runtime.jsx)(LegacyHeading.c,{type:LegacyHeading.c.types.h1,value:"Hello H1"}),(0,jsx_runtime.jsx)(LegacyHeading.c,{type:LegacyHeading.c.types.h1,value:"Hello H1 medium",size:"medium"}),(0,jsx_runtime.jsx)(LegacyHeading.c,{type:LegacyHeading.c.types.h2,value:"Hello H2"}),(0,jsx_runtime.jsx)(LegacyHeading.c,{type:LegacyHeading.c.types.h2,value:"Hello H2 small",size:"small"}),(0,jsx_runtime.jsx)(LegacyHeading.c,{type:LegacyHeading.c.types.h3,value:"Hello H3"}),(0,jsx_runtime.jsx)(LegacyHeading.c,{type:LegacyHeading.c.types.h4,value:"Suggest Edit H4",suggestEditOnHover:!0}),(0,jsx_runtime.jsx)(LegacyHeading.c,{type:LegacyHeading.c.types.h5,value:"H5 with tooltip",nonEllipsisTooltip:"Click to edit"})]})},name:"Sizes"},Overflow={render:function render(){return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"70%"},children:[(0,jsx_runtime.jsx)(LegacyHeading.c,{type:LegacyHeading.c.types.h2,value:"Heading without overflow heading without overflow heading without overflow",ellipsis:!1,nonEllipsisTooltip:"Non ellipsis tooltip"}),(0,jsx_runtime.jsx)(LegacyHeading.c,{type:LegacyHeading.c.types.h2,value:"Heading with overflow heading with overflow heading with overflow heading with overflow heading with overflow",ellipsis:!0,nonEllipsisTooltip:"Non ellipsis tooltip (this tooltip is not shown since overflow)"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(LegacyHeading.c,{type:LegacyHeading.c.types.h2,value:"Heading with overflow when text is longer then 2 lines heading with overflow when text is longer then 2 lines heading with overflow when text is longer then 2 lines",ellipsisMaxLines:2,nonEllipsisTooltip:"Non ellipsis tooltip (this tooltip is not shown since overflow)"})})]})},name:"Overflow"},TextHighlight={render:function render(){return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"70%"},children:[(0,jsx_runtime.jsx)(LegacyHeading.c,{type:LegacyHeading.c.types.h2,highlightTerm:"heading highlight",value:"Heading with highlight text heading with highlight text without overflow",ellipsis:!1,nonEllipsisTooltip:"Tooltip when no overflow"}),(0,jsx_runtime.jsx)(LegacyHeading.c,{type:LegacyHeading.c.types.h2,highlightTerm:"heading highlight",value:"Heading with highlight text heading with highlight text heading with highlight text heading with highlight text",nonEllipsisTooltip:"Non ellipsis tooltip (this tooltip is not shown since overflow)"}),(0,jsx_runtime.jsx)(LegacyHeading.c,{type:LegacyHeading.c.types.h2,highlightTerm:"heading highlight",value:"Heading with highlight text when text is longer then 2 lines heading with overflow when text is longer then 2 lines heading with overflow when text is longer then 2 lines",ellipsisMaxLines:2})]})},name:"Text Highlight"},NotEditableHeaderOfAPage={render:function render(){return(0,jsx_runtime.jsxs)("div",{style:{width:"100%"},children:[(0,jsx_runtime.jsx)(LegacyHeading.c,{type:LegacyHeading.c.types.h1,value:"My Work",id:"my-work-id"}),(0,jsx_runtime.jsx)(Divider.c,{}),(0,jsx_runtime.jsxs)(Flex.c,{align:Flex.c.align.CENTER,gap:Flex.c.gaps.SMALL,"aria-labelledby":"my-work-id",children:[(0,jsx_runtime.jsx)(Search.c,{wrapperClassName:_stories_LegacyHeading_stories_module["page-header_search"],placeholder:"Search"}),(0,jsx_runtime.jsx)(Checkbox.c,{label:"Hide done items",checked:!0}),(0,jsx_runtime.jsx)(Button.c,{leftIcon:Custom.c,kind:Button.c.kinds.TERTIARY,children:"Customize"})]})]})},name:"Not editable header of a page"},EmptyStateTitle={render:function render(){return(0,jsx_runtime.jsxs)(Flex.c,{direction:Flex.c.directions.COLUMN,gap:Flex.c.gaps.SMALL,"aria-labelledby":"empty-state-id",children:[(0,jsx_runtime.jsx)("img",{style:{width:"290px"},src:emptyStateExample,alt:""}),(0,jsx_runtime.jsx)(LegacyHeading.c,{type:LegacyHeading.c.types.h2,id:"empty-state-id",value:"No updates yet for this item"}),(0,jsx_runtime.jsx)("span",{style:{width:"50%",textAlign:"center"},children:"Be the first one to update about progress, mention someone or upload files to share with your team members"})]})},name:"Empty state title"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: () => <Heading value="Hello world" />,\n  name: "Overview",\n  args: {}\n}',...Overview.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    display: "flex",\n    flexDirection: "column"\n  }}>\n      <Heading type={Heading.types.h1} value="Hello H1" />\n      <Heading type={Heading.types.h1} value="Hello H1 medium" size="medium" />\n      <Heading type={Heading.types.h2} value="Hello H2" />\n      <Heading type={Heading.types.h2} value="Hello H2 small" size="small" />\n      <Heading type={Heading.types.h3} value="Hello H3" />\n      <Heading type={Heading.types.h4} value="Suggest Edit H4" suggestEditOnHover />\n      <Heading type={Heading.types.h5} value="H5 with tooltip" nonEllipsisTooltip="Click to edit" />\n    </div>,\n  name: "Sizes"\n}',...Sizes.parameters?.docs?.source}}},Overflow.parameters={...Overflow.parameters,docs:{...Overflow.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    display: "flex",\n    flexDirection: "column",\n    width: "70%"\n  }}>\n      <Heading type={Heading.types.h2} value="Heading without overflow heading without overflow heading without overflow" ellipsis={false} nonEllipsisTooltip="Non ellipsis tooltip" />\n      <Heading type={Heading.types.h2} value="Heading with overflow heading with overflow heading with overflow heading with overflow heading with overflow" ellipsis nonEllipsisTooltip="Non ellipsis tooltip (this tooltip is not shown since overflow)" />\n      <div>\n        <Heading type={Heading.types.h2} value="Heading with overflow when text is longer then 2 lines heading with overflow when text is longer then 2 lines heading with overflow when text is longer then 2 lines" ellipsisMaxLines={2} nonEllipsisTooltip="Non ellipsis tooltip (this tooltip is not shown since overflow)" />\n      </div>\n    </div>,\n  name: "Overflow"\n}',...Overflow.parameters?.docs?.source}}},TextHighlight.parameters={...TextHighlight.parameters,docs:{...TextHighlight.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    display: "flex",\n    flexDirection: "column",\n    width: "70%"\n  }}>\n      <Heading type={Heading.types.h2} highlightTerm="heading highlight" value="Heading with highlight text heading with highlight text without overflow" ellipsis={false} nonEllipsisTooltip="Tooltip when no overflow" />\n      <Heading type={Heading.types.h2} highlightTerm="heading highlight" value="Heading with highlight text heading with highlight text heading with highlight text heading with highlight text" nonEllipsisTooltip="Non ellipsis tooltip (this tooltip is not shown since overflow)" />\n      <Heading type={Heading.types.h2} highlightTerm="heading highlight" value="Heading with highlight text when text is longer then 2 lines heading with overflow when text is longer then 2 lines heading with overflow when text is longer then 2 lines" ellipsisMaxLines={2} />\n    </div>,\n  name: "Text Highlight"\n}',...TextHighlight.parameters?.docs?.source}}},NotEditableHeaderOfAPage.parameters={...NotEditableHeaderOfAPage.parameters,docs:{...NotEditableHeaderOfAPage.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: "100%"\n  }}>\n      <Heading type={Heading.types.h1} value="My Work" id="my-work-id" />\n      <Divider />\n      <Flex align={Flex.align.CENTER} gap={Flex.gaps.SMALL} aria-labelledby="my-work-id">\n        <Search wrapperClassName={styles["page-header_search"]} placeholder="Search" />\n        <Checkbox label="Hide done items" checked />\n        <Button leftIcon={Custom} kind={Button.kinds.TERTIARY}>\n          Customize\n        </Button>\n      </Flex>\n    </div>,\n  name: "Not editable header of a page"\n}',...NotEditableHeaderOfAPage.parameters?.docs?.source}}},EmptyStateTitle.parameters={...EmptyStateTitle.parameters,docs:{...EmptyStateTitle.parameters?.docs,source:{originalSource:'{\n  render: () => <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.SMALL} aria-labelledby="empty-state-id">\n      <img style={{\n      width: "290px"\n    }} src={emptyStateExample} alt="" />\n      <Heading type={Heading.types.h2} id="empty-state-id" value="No updates yet for this item" />\n      <span style={{\n      width: "50%",\n      textAlign: "center"\n    }}>\n        Be the first one to update about progress, mention someone or upload files to share with your team members\n      </span>\n    </Flex>,\n  name: "Empty state title"\n}',...EmptyStateTitle.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Sizes","Overflow","TextHighlight","NotEditableHeaderOfAPage","EmptyStateTitle"]},"./src/storybook/functions/createStoryMetaSettingsDecorator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__,w:()=>createStoryMetaSettingsDecorator});var monday_ui_style_src_Icons_iconsMetaData__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/monday-ui-style/src/Icons/iconsMetaData.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createStoryMetaSettings/createStoryMetaSettings.js"),_components_Icon_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/Icons/index.ts");function createStoryMetaSettingsDecorator(_ref){var component=_ref.component,enumPropNamesArray=_ref.enumPropNamesArray,iconPropNamesArray=_ref.iconPropNamesArray,actionPropsArray=_ref.actionPropsArray,ignoreControlsPropNamesArray=_ref.ignoreControlsPropNamesArray;return(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_1__.u)({component,enumPropNamesArray,iconPropNamesArray,actionPropsArray,ignoreControlsPropNamesArray,iconsMetaData:monday_ui_style_src_Icons_iconsMetaData__WEBPACK_IMPORTED_MODULE_0__.o,allIconsComponents:_components_Icon_Icons__WEBPACK_IMPORTED_MODULE_2__})}const __WEBPACK_DEFAULT_EXPORT__=createStoryMetaSettingsDecorator},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/LegacyHeading/__stories__/LegacyHeading.stories.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".LegacyHeading-stories-module_page-header_search{width:146px}","",{version:3,sources:["webpack://./src/components/LegacyHeading/__stories__/LegacyHeading.stories.module.scss"],names:[],mappings:"AAAA,iDACE,WAAA",sourcesContent:[".page-header_search {\n  width: 146px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"page-header_search":"LegacyHeading-stories-module_page-header_search"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/storybook/stories-common-assets/emptyStateExample.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/emptyStateExample.f5f9c287.svg"}}]);