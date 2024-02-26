"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[6688,4004],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Badge/__stories__/Badge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarStory:()=>AvatarStory,ButtonStory:()=>ButtonStory,InlineElements:()=>InlineElements,Overview:()=>Overview,States:()=>States,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _Badge__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Badge/Badge.tsx"),_assets_person_png__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/Badge/__stories__/assets/person.png"),_Icon_Icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Icon/Icons/components/WhatsNew.tsx"),_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/Icon/Icons/components/ExternalPage.tsx"),_Link_Link__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/Link/Link.tsx"),_Button_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Button/Button.tsx"),_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Flex/Flex.tsx"),_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/Avatar/Avatar.tsx"),_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/story-description/story-description.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,_storybook__WEBPACK_IMPORTED_MODULE_2__.w)({component:_Badge__WEBPACK_IMPORTED_MODULE_3__.c,enumPropNamesArray:["anchor","alignment","type"],iconPropNamesArray:[],actionPropsArray:[],ignoreControlsPropNamesArray:["children"]}),badgeTemplate=(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_4__.q)(_Badge__WEBPACK_IMPORTED_MODULE_3__.c);const __WEBPACK_DEFAULT_EXPORT__={title:"Feedback/Badge",component:_Badge__WEBPACK_IMPORTED_MODULE_3__.c,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:badgeTemplate.bind({}),name:"Overview",args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.c,{leftIcon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_6__.c,children:"What's new"})}},States={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.c,{gap:_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.c.gaps.LARGE,style:{flex:1},justify:_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.c.justify.START,align:_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.c.align.START,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_8__.c,{description:"Indicator",vertical:!0,align:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_8__.c.align.START,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_3__.c,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.c,{leftIcon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_6__.c,children:"What's new"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_8__.c,{description:"Counter",vertical:!0,align:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_8__.c.align.START,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_3__.c,{type:_Badge__WEBPACK_IMPORTED_MODULE_3__.c.types.COUNTER,count:100,maxDigits:2,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.c,{leftIcon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_6__.c,children:"What's new"})})})]})},name:"States"},ButtonStory={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_3__.c,{alignment:_Badge__WEBPACK_IMPORTED_MODULE_3__.c.alignments.RECTANGULAR,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.c,{leftIcon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.c,children:"Button"})})},name:"Button"},AvatarStory={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_3__.c,{alignment:_Badge__WEBPACK_IMPORTED_MODULE_3__.c.alignments.CIRCULAR,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.c,{size:_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.c.sizes.LARGE,src:_assets_person_png__WEBPACK_IMPORTED_MODULE_11__,type:_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.c.types.IMG})})},name:"Avatar"},InlineElements={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.c,{direction:_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.c.directions.COLUMN,gap:_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.c.gaps.MEDIUM,align:_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.c.align.START,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_3__.c,{alignment:_Badge__WEBPACK_IMPORTED_MODULE_3__.c.alignments.OUTSIDE,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Link_Link__WEBPACK_IMPORTED_MODULE_12__.c,{text:"Read more"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_3__.c,{alignment:_Badge__WEBPACK_IMPORTED_MODULE_3__.c.alignments.OUTSIDE,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Link_Link__WEBPACK_IMPORTED_MODULE_12__.c,{text:"What's new",iconPosition:_Link_Link__WEBPACK_IMPORTED_MODULE_12__.c.iconPositions.START,icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_6__.c})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_3__.c,{alignment:_Badge__WEBPACK_IMPORTED_MODULE_3__.c.alignments.OUTSIDE,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Link_Link__WEBPACK_IMPORTED_MODULE_12__.c,{text:"Learn more",iconPosition:_Link_Link__WEBPACK_IMPORTED_MODULE_12__.c.iconPositions.END,icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.c})})]})},name:"Inline elements"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: badgeTemplate.bind({}),\n  name: "Overview",\n  args: {\n    children: <Button leftIcon={WhatsNew}>{"What\'s new"}</Button>\n  }\n}',...Overview.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  render: () => <Flex gap={Flex.gaps.LARGE} style={{\n    flex: 1\n  }} justify={Flex.justify.START} align={Flex.align.START}>\n      <StoryDescription description="Indicator" vertical align={StoryDescription.align.START}>\n        <Badge>\n          <Button leftIcon={WhatsNew}>{"What\'s new"}</Button>\n        </Badge>\n      </StoryDescription>\n      <StoryDescription description="Counter" vertical align={StoryDescription.align.START}>\n        <Badge type={Badge.types.COUNTER} count={100} maxDigits={2}>\n          <Button leftIcon={WhatsNew}>{"What\'s new"}</Button>\n        </Badge>\n      </StoryDescription>\n    </Flex>,\n  name: "States"\n}',...States.parameters?.docs?.source}}},ButtonStory.parameters={...ButtonStory.parameters,docs:{...ButtonStory.parameters?.docs,source:{originalSource:'{\n  render: () => <Badge alignment={Badge.alignments.RECTANGULAR}>\n      <Button leftIcon={ExternalPage}>Button</Button>\n    </Badge>,\n  name: "Button"\n}',...ButtonStory.parameters?.docs?.source}}},AvatarStory.parameters={...AvatarStory.parameters,docs:{...AvatarStory.parameters?.docs,source:{originalSource:'{\n  render: () => <Badge alignment={Badge.alignments.CIRCULAR}>\n      <Avatar size={Avatar.sizes.LARGE} src={person} type={Avatar.types.IMG} />\n    </Badge>,\n  name: "Avatar"\n}',...AvatarStory.parameters?.docs?.source}}},InlineElements.parameters={...InlineElements.parameters,docs:{...InlineElements.parameters?.docs,source:{originalSource:'{\n  render: () => <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM} align={Flex.align.START}>\n      <Badge alignment={Badge.alignments.OUTSIDE}>\n        <Link text="Read more" />\n      </Badge>\n      <Badge alignment={Badge.alignments.OUTSIDE}>\n        <Link text="What\'s new" iconPosition={Link.iconPositions.START} icon={WhatsNew} />\n      </Badge>\n      <Badge alignment={Badge.alignments.OUTSIDE}>\n        <Link text="Learn more" iconPosition={Link.iconPositions.END} icon={ExternalPage} />\n      </Badge>\n    </Flex>,\n  name: "Inline elements"\n}',...InlineElements.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","States","ButtonStory","AvatarStory","InlineElements"]},"./src/components/Badge/__stories__/Badge.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_Badge__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Badge/Badge.tsx"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_assets_person_png__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/Badge/__stories__/assets/person.png"),_Icon_Icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Icon/Icons/components/WhatsNew.tsx"),_Link_Link__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Link/Link.tsx"),_Button_Button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Button/Button.tsx"),_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/Avatar/Avatar.tsx"),_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),_Indicator_Indicator__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/Badge/Indicator/Indicator.tsx"),_Badge_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Badge/__stories__/Badge.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3"},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.MN)(),props.components),{PropsTable,ComponentRules,RelatedComponents}=_components;return ComponentRules||_missingMdxReference("ComponentRules",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Qb,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"badge",children:"Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Badge component is responsible for layout an indicator/counter on a child component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._W,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_4__.Overview})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PropsTable,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"states",children:"States"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Badge can be of type Indicator or type Counter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._W,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_4__.States})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"button",children:"Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"When using Badge on a Button element, use alignment of RECTANGULAR in order to attach it to the element"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._W,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_4__.ButtonStory})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"avatar",children:"Avatar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"When using Badge on an Avatar element, use alignment of CIRCULAR in order to attach it to the element"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._W,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_4__.AvatarStory})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"inline-elements",children:"Inline elements"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"When using Badge on an inline element, use alignment of OUTSIDE in order to attach it to the element"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._W,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_4__.InlineElements})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ComponentRules,{rules:[{positive:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_5__.c,{alignment:_Badge__WEBPACK_IMPORTED_MODULE_5__.c.alignments.OUTSIDE,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Link_Link__WEBPACK_IMPORTED_MODULE_6__.c,{text:"Read more"})}),description:"When using the badge on an inline component, apply OUTSIDE alignment to it"},negative:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_5__.c,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Link_Link__WEBPACK_IMPORTED_MODULE_6__.c,{text:"Read more"})}),description:"Do not leave the indicator inside the element boundaries"}},{positive:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_5__.c,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_7__.c,{leftIcon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_8__.c,children:"What's new"})}),description:"Choose a color that does not blend with the one of the child component"},negative:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_5__.c,{color:_Indicator_Indicator__WEBPACK_IMPORTED_MODULE_9__.c.colors.PRIMARY,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_7__.c,{leftIcon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_8__.c,children:"What's new"})}),description:"Do not use a color that blends with the child component"}},{positive:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_5__.c,{alignment:_Badge__WEBPACK_IMPORTED_MODULE_5__.c.alignments.CIRCULAR,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.c,{size:_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.c.sizes.MEDIUM,src:_assets_person_png__WEBPACK_IMPORTED_MODULE_11__,type:_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.c.types.IMG})}),description:"When using Indicator badge, anchor it at the top-right edge"},negative:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_5__.c,{alignment:_Badge__WEBPACK_IMPORTED_MODULE_5__.c.alignments.CIRCULAR,anchor:_Badge__WEBPACK_IMPORTED_MODULE_5__.c.anchors.TOP_START,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.c,{size:_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.c.sizes.MEDIUM,src:_assets_person_png__WEBPACK_IMPORTED_MODULE_11__,type:_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_10__.c.types.IMG})}),description:"Do not place it on any other edge"}}]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RelatedComponents,{componentsNames:[_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_12__.G0,_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_12__.uk,_storybook_components_related_components_component_description_map__WEBPACK_IMPORTED_MODULE_12__.uI]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.MN)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/vibe-storybook-components/dist/components/story-description/story-description.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>p});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),withStaticProps=__webpack_require__("../../node_modules/vibe-storybook-components/dist/types/withStaticProps.js"),FlexConstants=__webpack_require__("../../node_modules/vibe-storybook-components/dist/helpers/components/Flex/FlexConstants.js"),Flex=__webpack_require__("../../node_modules/vibe-storybook-components/dist/helpers/components/Flex/Flex.js"),e_description="story-description-module_description__yFjQO",e_vertical="story-description-module_vertical__C1SJj";const m=t=>{var o,l,n,{description:a="",headerStyle:p,children:u,vertical:v=!1,className:f,align:j,justify:g=(null===(o=m.justify)||void 0===o?void 0:o.START),headerAlign:h,headerJustify:y}=t;const x=(0,react.useMemo)((()=>{var i,s;return v?null===(i=m.directions)||void 0===i?void 0:i.COLUMN:null===(s=m.directions)||void 0===s?void 0:s.ROW}),[v]);return(0,jsx_runtime.jsxs)(Flex.c,{direction:x,gap:null===(l=m.gaps)||void 0===l?void 0:l.MEDIUM,justify:g,align:j||void 0,className:f,children:[(0,jsx_runtime.jsx)(Flex.c,{className:classnames_default()(e_description,{[e_vertical]:v}),style:Object.assign({width:"120px"},p),justify:y,align:h||(null===(n=m.align)||void 0===n?void 0:n.CENTER),children:a}),u]})};var p=(0,withStaticProps.m)(m,{justify:FlexConstants.or,align:FlexConstants.Aj,gaps:FlexConstants.iW,directions:FlexConstants.Ko})},"../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}},"./src/components/Badge/__stories__/assets/person.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/person.3661bfe5.png"}}]);