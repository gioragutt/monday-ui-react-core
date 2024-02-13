"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[3632,8780],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/AttentionBox/__stories__/attentionBox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AttentionBoxInsideADialogCombobox:()=>AttentionBoxInsideADialogCombobox,AttentionBoxWithLink:()=>AttentionBoxWithLink,Dismissable:()=>Dismissable,NaturalAttentionBox:()=>NaturalAttentionBox,Overview:()=>Overview,States:()=>States,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AttentionBox_stories_attentionBox_stories});var react=__webpack_require__("../../node_modules/react/index.js"),AttentionBox=__webpack_require__("./src/components/AttentionBox/AttentionBox.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),createComponentTemplate=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js"),story_description=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/story-description/story-description.js"),DialogContentContainer=__webpack_require__("./src/components/DialogContentContainer/DialogContentContainer.tsx"),Info=__webpack_require__("./src/components/Icon/Icons/components/Info.tsx"),ThumbsUp=__webpack_require__("./src/components/Icon/Icons/components/ThumbsUp.tsx"),Invite=__webpack_require__("./src/components/Icon/Icons/components/Invite.tsx"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),Search=__webpack_require__("./src/components/Search/Search.tsx"),Avatar=__webpack_require__("./src/components/Avatar/Avatar.tsx");const person_namespaceObject=__webpack_require__.p+"static/media/person.de30c8ee.png";var Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),Favorite=__webpack_require__("./src/components/Icon/Icons/components/Favorite.tsx"),AttentionBoxLink=__webpack_require__("./src/components/AttentionBox/AttentionBoxLink/AttentionBoxLink.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),attentionBox_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/AttentionBox/__stories__/attentionBox.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(attentionBox_stories.c,options);attentionBox_stories.c&&attentionBox_stories.c.locals&&attentionBox_stories.c.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,createStoryMetaSettingsDecorator.w)({component:AttentionBox.c,enumPropNamesArray:["type","iconType"],iconPropNamesArray:["icon"],actionPropsArray:["onClose"]}),attentionBoxTemplate=(0,createComponentTemplate.q)(AttentionBox.c);const AttentionBox_stories_attentionBox_stories={title:"Feedback/AttentionBox",component:AttentionBox.c,subcomponents:{AttentionBoxLink:AttentionBoxLink.c},argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:attentionBoxTemplate.bind({}),name:"Overview",args:{onClose:function onClose(){return null},title:"Attention box title",text:"Studies show that 100% of people who celebrate birthdays, will eventually die.",className:"monday-storybook-attention-box_box"}},States={render:function render(){return(0,jsx_runtime.jsxs)(Flex.c,{direction:Flex.c.directions.COLUMN,gap:Flex.c.gaps.SMALL,children:[(0,jsx_runtime.jsx)(story_description.c,{description:"Primary",children:(0,jsx_runtime.jsx)(AttentionBox.c,{title:"Enabling SSO Login",text:"Will cause all your team lose access to the account until using the correct SSO source.",className:"monday-storybook-attention-box_box",icon:Info.c})}),(0,jsx_runtime.jsx)(story_description.c,{description:"Success",children:(0,jsx_runtime.jsx)(AttentionBox.c,{title:"You're doing great",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",type:AttentionBox.c.types.SUCCESS,className:"monday-storybook-attention-box_box",icon:ThumbsUp.c})}),(0,jsx_runtime.jsx)(story_description.c,{description:"Danger",children:(0,jsx_runtime.jsx)(AttentionBox.c,{title:"Account low on free space",text:"Your account is out of free space, free some space to prevent data loss.",type:AttentionBox.c.types.DANGER,className:"monday-storybook-attention-box_box"})}),(0,jsx_runtime.jsx)(story_description.c,{description:"Warning",children:(0,jsx_runtime.jsx)(AttentionBox.c,{title:"Account low on free space",text:"Your account is out of free space, free some space to prevent data loss.",type:AttentionBox.c.types.WARNING,className:"monday-storybook-attention-box_box"})}),(0,jsx_runtime.jsx)(story_description.c,{description:"Dark",children:(0,jsx_runtime.jsx)(AttentionBox.c,{title:"What a great idea!",text:"You can also make this list sortable by tagging the items with tags column",type:AttentionBox.c.types.DARK,className:"monday-storybook-attention-box_box",icon:Favorite.c})})]})},name:"States"},AttentionBoxWithLink={render:function render(){return(0,jsx_runtime.jsx)(AttentionBox.c,{compact:!0,className:"monday-storybook-attention-box--fixed-width",children:(0,jsx_runtime.jsxs)(Flex.c,{justify:Flex.c.justify.SPACE_BETWEEN,gap:Flex.c.gaps.XS,children:["Get your monday.com notifications",(0,jsx_runtime.jsx)(AttentionBoxLink.c,{href:"",text:"Learn more"})]})})}},Dismissable={render:function render(){var mockOnClose=(0,react.useCallback)((function(){return null}),[]);return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-attention-box_row-wrapper",children:[(0,jsx_runtime.jsx)(AttentionBox.c,{title:"Regular attention box",text:"Dismissable attention box with two lines of content.",onClose:mockOnClose,className:"monday-storybook-attention-box_box",icon:Info.c}),(0,jsx_runtime.jsx)(AttentionBox.c,{text:"Attention box in compact mode",onClose:mockOnClose,compact:!0,className:"monday-storybook-attention-box_box"})]})},name:"Dismissable "},NaturalAttentionBox={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-attention-box_wrapper",children:[(0,jsx_runtime.jsx)("span",{className:"monday-storybook-attention-box_title",children:"Cross-Account Copier"}),(0,jsx_runtime.jsx)("span",{className:"monday-storybook-attention-box_text",children:"Copy boards and dashboards to another account"}),(0,jsx_runtime.jsx)(AttentionBox.c,{compact:!0,withIconWithoutHeader:!0,icon:Info.c,text:"First, move the content you want to copy into folder. Only main boards and dashboards can be copied.",type:AttentionBox.c.types.DARK})]})},name:"Natural attention box"},AttentionBoxInsideADialogCombobox={render:function render(){var mockOnClose=(0,react.useCallback)((function(){return null}),[]);return(0,jsx_runtime.jsxs)(DialogContentContainer.c,{className:"monday-storybook-attention-box_search-bar",children:[(0,jsx_runtime.jsx)(Search.c,{placeholder:"Search by name, role, team, or email"}),(0,jsx_runtime.jsx)("div",{className:"monday-storybook-attention-box_lable",children:"Suggested people"}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-attention-box_search",children:[(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-attention-box_inline-container",children:[(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.MEDIUM,src:person_namespaceObject,type:Avatar.c.types.IMG}),(0,jsx_runtime.jsxs)("span",{className:"monday-storybook-attention-box_name",children:["May Kishon ",(0,jsx_runtime.jsx)("span",{children:"(UX/UI Product Designer)"})]})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-attention-box_inline-container",children:[(0,jsx_runtime.jsx)(Icon.c,{iconSize:"24",icon:Invite.c,className:"monday-storybook-attention-box_icon"}),(0,jsx_runtime.jsx)("span",{className:"monday-storybook-attention-box_name",children:"Invite new board member by email"})]}),(0,jsx_runtime.jsx)(AttentionBox.c,{text:"Hold ⌘ to select more than one person or team",compact:!0,onClose:mockOnClose})]})]})},name:"Attention box inside a dialog/combobox"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: attentionBoxTemplate.bind({}),\n  name: "Overview",\n  args: {\n    onClose: () => null,\n    title: "Attention box title",\n    text: "Studies show that 100% of people who celebrate birthdays, will eventually die.",\n    className: "monday-storybook-attention-box_box"\n  }\n}',...Overview.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  render: () => <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.SMALL}>\n      <StoryDescription description="Primary">\n        <AttentionBox title="Enabling SSO Login" text="Will cause all your team lose access to the account until using the correct SSO source." className="monday-storybook-attention-box_box" icon={Info} />\n      </StoryDescription>\n      <StoryDescription description="Success">\n        <AttentionBox title="You\'re doing great" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." type={AttentionBox.types.SUCCESS} className="monday-storybook-attention-box_box" icon={ThumbsUp} />\n      </StoryDescription>\n      <StoryDescription description="Danger">\n        <AttentionBox title="Account low on free space" text="Your account is out of free space, free some space to prevent data loss." type={AttentionBox.types.DANGER} className="monday-storybook-attention-box_box" />\n      </StoryDescription>\n      <StoryDescription description="Warning">\n        <AttentionBox title="Account low on free space" text="Your account is out of free space, free some space to prevent data loss." type={AttentionBox.types.WARNING} className="monday-storybook-attention-box_box" />\n      </StoryDescription>\n      <StoryDescription description="Dark">\n        <AttentionBox title="What a great idea!" text="You can also make this list sortable by tagging the items with tags column" type={AttentionBox.types.DARK} className="monday-storybook-attention-box_box" icon={Favorite} />\n      </StoryDescription>\n    </Flex>,\n  name: "States"\n}',...States.parameters?.docs?.source}}},AttentionBoxWithLink.parameters={...AttentionBoxWithLink.parameters,docs:{...AttentionBoxWithLink.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return /** Classname for setting a constant width to the attention box */(\n      <AttentionBox compact className="monday-storybook-attention-box--fixed-width">\n        <Flex justify={Flex.justify.SPACE_BETWEEN} gap={Flex.gaps.XS}>\n          Get your monday.com notifications\n          <AttentionBoxLink href="" text="Learn more" />\n        </Flex>\n      </AttentionBox>\n    );\n  }\n}',...AttentionBoxWithLink.parameters?.docs?.source}}},Dismissable.parameters={...Dismissable.parameters,docs:{...Dismissable.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const mockOnClose = useCallback(() => null, []);\n    return <div className="monday-storybook-attention-box_row-wrapper">\n        <AttentionBox title="Regular attention box" text="Dismissable attention box with two lines of content." onClose={mockOnClose} className="monday-storybook-attention-box_box" icon={Info} />\n        <AttentionBox text="Attention box in compact mode" onClose={mockOnClose} compact className="monday-storybook-attention-box_box" />\n      </div>;\n  },\n  name: "Dismissable "\n}',...Dismissable.parameters?.docs?.source}}},NaturalAttentionBox.parameters={...NaturalAttentionBox.parameters,docs:{...NaturalAttentionBox.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-attention-box_wrapper">\n      <span className="monday-storybook-attention-box_title">Cross-Account Copier</span>\n      <span className="monday-storybook-attention-box_text">Copy boards and dashboards to another account</span>\n      <AttentionBox compact withIconWithoutHeader icon={Info} text="First, move the content you want to copy into folder. Only main boards and dashboards can be copied." type={AttentionBox.types.DARK} />\n    </div>,\n  name: "Natural attention box"\n}',...NaturalAttentionBox.parameters?.docs?.source}}},AttentionBoxInsideADialogCombobox.parameters={...AttentionBoxInsideADialogCombobox.parameters,docs:{...AttentionBoxInsideADialogCombobox.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const mockOnClose = useCallback(() => null, []);\n    return <DialogContentContainer className="monday-storybook-attention-box_search-bar">\n        <Search placeholder="Search by name, role, team, or email" />\n        <div className="monday-storybook-attention-box_lable">Suggested people</div>\n        <div className="monday-storybook-attention-box_search">\n          <div className="monday-storybook-attention-box_inline-container">\n            <Avatar size={Avatar.sizes.MEDIUM} src={person} type={Avatar.types.IMG} />\n            <span className="monday-storybook-attention-box_name">\n              May Kishon <span>(UX/UI Product Designer)</span>\n            </span>\n          </div>\n          <div className="monday-storybook-attention-box_inline-container">\n            <Icon iconSize="24" icon={Invite} className="monday-storybook-attention-box_icon" />\n            <span className="monday-storybook-attention-box_name">Invite new board member by email</span>\n          </div>\n          <AttentionBox text="Hold ⌘ to select more than one person or team" compact onClose={mockOnClose} />\n        </div>\n      </DialogContentContainer>;\n  },\n  name: "Attention box inside a dialog/combobox"\n}',...AttentionBoxInsideADialogCombobox.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","States","AttentionBoxWithLink","Dismissable","NaturalAttentionBox","AttentionBoxInsideADialogCombobox"]},"./src/storybook/functions/createStoryMetaSettingsDecorator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__,w:()=>createStoryMetaSettingsDecorator});var monday_ui_style_src_Icons_iconsMetaData__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/monday-ui-style/src/Icons/iconsMetaData.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createStoryMetaSettings/createStoryMetaSettings.js"),_components_Icon_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/Icons/index.ts");function createStoryMetaSettingsDecorator(_ref){var component=_ref.component,enumPropNamesArray=_ref.enumPropNamesArray,iconPropNamesArray=_ref.iconPropNamesArray,actionPropsArray=_ref.actionPropsArray,ignoreControlsPropNamesArray=_ref.ignoreControlsPropNamesArray;return(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_1__.u)({component,enumPropNamesArray,iconPropNamesArray,actionPropsArray,ignoreControlsPropNamesArray,iconsMetaData:monday_ui_style_src_Icons_iconsMetaData__WEBPACK_IMPORTED_MODULE_0__.o,allIconsComponents:_components_Icon_Icons__WEBPACK_IMPORTED_MODULE_2__})}const __WEBPACK_DEFAULT_EXPORT__=createStoryMetaSettingsDecorator},"./src/components/AttentionBox/__stories__/attentionBox.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>attentionBox});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),AttentionBox=__webpack_require__("./src/components/AttentionBox/AttentionBox.tsx"),Info=__webpack_require__("./src/components/Icon/Icons/components/Info.tsx"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),AttentionBoxLink=__webpack_require__("./src/components/AttentionBox/AttentionBoxLink/AttentionBoxLink.tsx"),tip=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/tip/tip.js"),storybook_link=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/storybook-link/storybook-link.js"),TipCheckYourself=function TipCheckYourself(){return(0,jsx_runtime.jsxs)(tip.c,{title:"Check yourself",children:["If the information about a component isn’t critical for the user, use a"," ",(0,jsx_runtime.jsx)(storybook_link.c,{page:"Popover/Tooltip",size:storybook_link.c.sizes.SMALL,children:"Tooltip"})," ","instead."]})};TipCheckYourself.displayName="TipCheckYourself",TipCheckYourself.__docgenInfo={description:"",methods:[],displayName:"TipCheckYourself"};var attentionBox_stories=__webpack_require__("./src/components/AttentionBox/__stories__/attentionBox.stories.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",div:"div",span:"span"},(0,lib.MN)(),props.components),{PropsTable,UsageGuidelines,ComponentRules,StorybookLink,RelatedComponents}=_components;return ComponentRules||_missingMdxReference("ComponentRules",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),StorybookLink||_missingMdxReference("StorybookLink",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{of:attentionBox_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"attention-box",children:"Attention Box"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Attention box lets users know important information within content areas, as close as possible to the content it’s about."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:attentionBox_stories.Overview})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:["Use attention box if there is crucial information for user to finish or be acknowledged about a task.","Attention box do not dismiss automatically. They persist on the page until the user dismisses them or takes action that resolves the notification.","The width of attention box is based on content and layout. They can expand to the fill the container or content area they relate to."]}),"\n",(0,jsx_runtime.jsx)(TipCheckYourself,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are five types of attention boxes: Primary, success, danger, warning and dark (natural)."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:attentionBox_stories.States})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"attention-box-with-link",children:"Attention box with link"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:attentionBox_stories.AttentionBoxWithLink})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dismissable",children:"Dismissable"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:attentionBox_stories.Dismissable})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,jsx_runtime.jsx)(ComponentRules,{rules:[{positive:{component:(0,jsx_runtime.jsx)(AttentionBox.c,{title:"Attention box title",text:"Studies show that 100% of people who celebrate birthdays, will eventually die.",className:"monday-storybook-attention-box_box"}),description:"Provide a short and brief title, and explanation related to the title."},negative:{component:(0,jsx_runtime.jsx)(AttentionBox.c,{title:"Attention box title"}),description:"Don’t use only a title to explain something."}},{positive:{component:(0,jsx_runtime.jsxs)(_components.div,{children:[(0,jsx_runtime.jsx)(_components.span,{className:"monday-storybook-attention-box_title",children:"Inbox"}),(0,jsx_runtime.jsx)(_components.span,{className:"monday-storybook-attention-box_text",children:"Catch up on updates from all your boards."}),(0,jsx_runtime.jsx)(AttentionBox.c,{className:"monday-storybook-attention-box_att-box",compact:!0,icon:Info.c,children:(0,jsx_runtime.jsxs)(Flex.c,{style:{width:"100%"},justify:Flex.c.justify.SPACE_BETWEEN,children:["Get your monday.com notifications ",(0,jsx_runtime.jsx)(AttentionBoxLink.c,{href:"",text:"Learn more"})]})})]}),description:"Use when you are speaking directly to a piece of content and the notification can be positioned close to the content."},negative:{component:(0,jsx_runtime.jsxs)(_components.div,{children:[(0,jsx_runtime.jsx)(_components.span,{className:"monday-storybook-attention-box_title",children:"Inbox"}),(0,jsx_runtime.jsx)(_components.span,{className:"monday-storybook-attention-box_text",children:"Catch up on updates from all your boards."}),(0,jsx_runtime.jsx)(AttentionBox.c,{compact:!0,className:"monday-storybook-attention-box_att-box",icon:Info.c,children:(0,jsx_runtime.jsxs)(Flex.c,{style:{width:"100%"},justify:Flex.c.justify.SPACE_BETWEEN,children:["7 days left on your free trial ",(0,jsx_runtime.jsx)(AttentionBoxLink.c,{href:"",text:"Learn more"})]})})]}),description:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Don’t use when a message applies at a system level, does not apply to a specific piece of content, or needs to alert all users. On those cases, use"," ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Feedback/AlertBanner",children:"Alert banner."})]})}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"natural-attention-box",children:"Natural Attention box"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Provides additional information about an action or section."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:attentionBox_stories.NaturalAttentionBox})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"attention-box-inside-a-dialogcombobox",children:"Attention box inside a dialog/combobox"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Provides cotextual and related information."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:attentionBox_stories.AttentionBoxInsideADialogCombobox})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.mc,component_description_map.Ci,component_description_map.w3]})]})}const attentionBox=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/AttentionBox/__stories__/attentionBox.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-attention-box--fixed-width{width:430px}.monday-storybook-attention-box_column-wrapper{display:flex;flex-direction:column;justify-content:flex-start;gap:15px}.monday-storybook-attention-box_title{font-style:normal;font-weight:bold;font-size:24px;line-height:28px;display:block}.monday-storybook-attention-box_text{font-size:14px;line-height:22px;margin:4px 0 10px}.monday-storybook-attention-box_row-wrapper{display:flex;flex-direction:row;gap:52px;align-content:flex-start}.monday-storybook-attention-box_inline-wrapper{display:flex;align-items:center;gap:6px}.monday-storybook-attention-box_wrapper{display:flex;flex-direction:column}.monday-storybook-attention-box_search-bar{display:flex;flex-direction:column;gap:18px;padding:16px;width:380px}.monday-storybook-attention-box_box{width:340px}.monday-storybook-attention-box_search{display:flex;flex-direction:column;align-items:flex-start;gap:18px}.monday-storybook-attention-box_lable{font-size:14px;padding-left:5px;margin-top:4px}.monday-storybook-attention-box_inline-container{display:flex;align-items:center;justify-content:center;gap:8px}.monday-storybook-attention-box_name{font-size:14px}.monday-storybook-attention-box_name span{color:var(--sb-secondary-text-color)}.monday-storybook-attention-box_icon{margin:0 5px 0 8px}.monday-storybook-attention-box_info{display:flex;justify-content:space-between}.monday-storybook-attention-box_att-box{width:430px;margin-top:10px}","",{version:3,sources:["webpack://./src/components/AttentionBox/__stories__/attentionBox.stories.scss"],names:[],mappings:"AAGE,6CACE,WAAA,CAGF,+CACE,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,QAAA,CAGF,sCACE,iBAAA,CACA,gBAAA,CACA,cAAA,CACA,gBAAA,CACA,aAAA,CAGF,qCACE,cAAA,CACA,gBAAA,CACA,iBAAA,CAGF,4CACE,YAAA,CACA,kBAAA,CACA,QAAA,CACA,wBAAA,CAGF,+CACE,YAAA,CACA,kBAAA,CACA,OAAA,CAGF,wCACE,YAAA,CACA,qBAAA,CAGF,2CACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,YAAA,CACA,WAAA,CAGF,oCACE,WAAA,CAGF,uCACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,QAAA,CAGF,sCACE,cAAA,CACA,gBAAA,CACA,cAAA,CAGF,iDACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,OAAA,CAGF,qCACE,cAAA,CAEA,0CACE,oCAAA,CAIJ,qCACE,kBAAA,CAGF,qCACE,YAAA,CACA,6BAAA,CAGF,wCACE,WAAA,CACA,eAAA",sourcesContent:['@import "../../../styles/typography";\n\n.monday-storybook-attention-box {\n  &--fixed-width {\n    width: 430px;\n  }\n\n  &_column-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 15px;\n  }\n\n  &_title {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 28px;\n    display: block;\n  }\n\n  &_text {\n    font-size: 14px;\n    line-height: 22px;\n    margin: 4px 0 10px;\n  }\n\n  &_row-wrapper {\n    display: flex;\n    flex-direction: row;\n    gap: 52px;\n    align-content: flex-start;\n  }\n\n  &_inline-wrapper {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n\n  &_wrapper {\n    display: flex;\n    flex-direction: column;\n  }\n\n  &_search-bar {\n    display: flex;\n    flex-direction: column;\n    gap: 18px;\n    padding: 16px;\n    width: 380px;\n  }\n\n  &_box {\n    width: 340px;\n  }\n\n  &_search {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 18px;\n  }\n\n  &_lable {\n    font-size: 14px;\n    padding-left: 5px;\n    margin-top: 4px;\n  }\n\n  &_inline-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n  }\n\n  &_name {\n    font-size: 14px;\n\n    span {\n      color: var(--sb-secondary-text-color);\n    }\n  }\n\n  &_icon {\n    margin: 0 5px 0 8px;\n  }\n\n  &_info {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  &_att-box {\n    width: 430px;\n    margin-top: 10px;\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/vibe-storybook-components/dist/components/story-description/story-description.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>p});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),withStaticProps=__webpack_require__("../../node_modules/vibe-storybook-components/dist/types/withStaticProps.js"),FlexConstants=__webpack_require__("../../node_modules/vibe-storybook-components/dist/helpers/components/Flex/FlexConstants.js"),Flex=__webpack_require__("../../node_modules/vibe-storybook-components/dist/helpers/components/Flex/Flex.js"),e_description="story-description-module_description__yFjQO",e_vertical="story-description-module_vertical__C1SJj";const m=t=>{var o,l,n,{description:a="",headerStyle:p,children:u,vertical:v=!1,className:f,align:j,justify:g=(null===(o=m.justify)||void 0===o?void 0:o.START),headerAlign:h,headerJustify:y}=t;const x=(0,react.useMemo)((()=>{var i,s;return v?null===(i=m.directions)||void 0===i?void 0:i.COLUMN:null===(s=m.directions)||void 0===s?void 0:s.ROW}),[v]);return(0,jsx_runtime.jsxs)(Flex.c,{direction:x,gap:null===(l=m.gaps)||void 0===l?void 0:l.MEDIUM,justify:g,align:j||void 0,className:f,children:[(0,jsx_runtime.jsx)(Flex.c,{className:classnames_default()(e_description,{[e_vertical]:v}),style:Object.assign({width:"120px"},p),justify:y,align:h||(null===(n=m.align)||void 0===n?void 0:n.CENTER),children:a}),u]})};var p=(0,withStaticProps.m)(m,{justify:FlexConstants.or,align:FlexConstants.Aj,gaps:FlexConstants.iW,directions:FlexConstants.Ko})},"../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}}]);