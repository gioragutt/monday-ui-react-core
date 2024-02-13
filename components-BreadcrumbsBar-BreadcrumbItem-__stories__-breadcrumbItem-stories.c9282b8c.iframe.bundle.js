"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[1212],{"./src/components/BreadcrumbsBar/BreadcrumbItem/__stories__/breadcrumbItem.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,States:()=>States,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BreadcrumbItem_stories_breadcrumbItem_stories});__webpack_require__("../../node_modules/react/index.js");var createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),createComponentTemplate=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js"),BreadcrumbsBar=__webpack_require__("./src/components/BreadcrumbsBar/BreadcrumbsBar.tsx"),BreadcrumbItem=__webpack_require__("./src/components/BreadcrumbsBar/BreadcrumbItem/BreadcrumbItem.tsx"),Workspace=__webpack_require__("./src/components/Icon/Icons/components/Workspace.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),breadcrumbItem_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/BreadcrumbsBar/BreadcrumbItem/__stories__/breadcrumbItem.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(breadcrumbItem_stories.c,options);breadcrumbItem_stories.c&&breadcrumbItem_stories.c.locals&&breadcrumbItem_stories.c.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,createStoryMetaSettingsDecorator.w)({component:BreadcrumbItem.c,iconPropNamesArray:["icon"]}),breadcrumbItemTemplate=(0,createComponentTemplate.q)(BreadcrumbItem.c);const BreadcrumbItem_stories_breadcrumbItem_stories={title:"Navigation/BreadcrumbsBar/BreadcrumbItem",component:BreadcrumbItem.c,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:breadcrumbItemTemplate.bind({}),name:"Overview",args:{text:"Workspace",icon:Workspace.c}},States={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumb-item_column-wrapper",children:[(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[(0,jsx_runtime.jsx)("span",{children:"Link"}),(0,jsx_runtime.jsx)(BreadcrumbsBar.c,{type:BreadcrumbsBar.c.types.NAVIGATION,children:(0,jsx_runtime.jsx)(BreadcrumbItem.c,{text:"Workspace",icon:Workspace.c,link:"https://www.google.com"})})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[(0,jsx_runtime.jsx)("span",{children:"Function"}),(0,jsx_runtime.jsx)(BreadcrumbsBar.c,{type:BreadcrumbsBar.c.types.NAVIGATION,children:(0,jsx_runtime.jsx)(BreadcrumbItem.c,{text:"Workspace",icon:Workspace.c,onClick:function onClick(){alert("Hello")}})})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[(0,jsx_runtime.jsx)("span",{children:"Disabled"}),(0,jsx_runtime.jsx)(BreadcrumbsBar.c,{children:(0,jsx_runtime.jsx)(BreadcrumbItem.c,{text:"Workspace",icon:Workspace.c,disabled:!0})})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[(0,jsx_runtime.jsx)("span",{children:"Current"}),(0,jsx_runtime.jsx)(BreadcrumbsBar.c,{children:(0,jsx_runtime.jsx)(BreadcrumbItem.c,{text:"Workspace",icon:Workspace.c,isCurrent:!0})})]})]})},name:"States"},WithIcon={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumb-item_column-wrapper",children:[(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[(0,jsx_runtime.jsx)("span",{children:"With Icon"}),(0,jsx_runtime.jsx)(BreadcrumbsBar.c,{children:(0,jsx_runtime.jsx)(BreadcrumbItem.c,{text:"Workspace",icon:Workspace.c})})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-breadcrumb-item_row-wrapper",children:[(0,jsx_runtime.jsx)("span",{children:"Without Icon"}),(0,jsx_runtime.jsx)(BreadcrumbsBar.c,{children:(0,jsx_runtime.jsx)(BreadcrumbItem.c,{text:"Workspace"})})]})]})},name:"With icon"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: breadcrumbItemTemplate.bind({}),\n  name: "Overview",\n  args: {\n    text: "Workspace",\n    icon: Workspace\n  }\n}',...Overview.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-breadcrumb-item_column-wrapper">\n      <div className="monday-storybook-breadcrumb-item_row-wrapper">\n        <span>Link</span>\n        <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>\n          <BreadcrumbItem text="Workspace" icon={Workspace} link="https://www.google.com" />\n        </BreadcrumbsBar>\n      </div>\n      <div className="monday-storybook-breadcrumb-item_row-wrapper">\n        <span>Function</span>\n        <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>\n          <BreadcrumbItem text="Workspace" icon={Workspace} onClick={() => {\n          alert("Hello");\n        }} />\n        </BreadcrumbsBar>\n      </div>\n      <div className="monday-storybook-breadcrumb-item_row-wrapper">\n        <span>Disabled</span>\n        <BreadcrumbsBar>\n          <BreadcrumbItem text="Workspace" icon={Workspace} disabled />\n        </BreadcrumbsBar>\n      </div>\n      <div className="monday-storybook-breadcrumb-item_row-wrapper">\n        <span>Current</span>\n        <BreadcrumbsBar>\n          <BreadcrumbItem text="Workspace" icon={Workspace} isCurrent />\n        </BreadcrumbsBar>\n      </div>\n    </div>,\n  name: "States"\n}',...States.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-breadcrumb-item_column-wrapper">\n      <div className="monday-storybook-breadcrumb-item_row-wrapper">\n        <span>With Icon</span>\n        <BreadcrumbsBar>\n          <BreadcrumbItem text="Workspace" icon={Workspace} />\n        </BreadcrumbsBar>\n      </div>\n      <div className="monday-storybook-breadcrumb-item_row-wrapper">\n        <span>Without Icon</span>\n        <BreadcrumbsBar>\n          <BreadcrumbItem text="Workspace" />\n        </BreadcrumbsBar>\n      </div>\n    </div>,\n  name: "With icon"\n}',...WithIcon.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","States","WithIcon"]},"./src/storybook/functions/createStoryMetaSettingsDecorator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__,w:()=>createStoryMetaSettingsDecorator});var monday_ui_style_src_Icons_iconsMetaData__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/monday-ui-style/src/Icons/iconsMetaData.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createStoryMetaSettings/createStoryMetaSettings.js"),_components_Icon_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/Icons/index.ts");function createStoryMetaSettingsDecorator(_ref){var component=_ref.component,enumPropNamesArray=_ref.enumPropNamesArray,iconPropNamesArray=_ref.iconPropNamesArray,actionPropsArray=_ref.actionPropsArray,ignoreControlsPropNamesArray=_ref.ignoreControlsPropNamesArray;return(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_1__.u)({component,enumPropNamesArray,iconPropNamesArray,actionPropsArray,ignoreControlsPropNamesArray,iconsMetaData:monday_ui_style_src_Icons_iconsMetaData__WEBPACK_IMPORTED_MODULE_0__.o,allIconsComponents:_components_Icon_Icons__WEBPACK_IMPORTED_MODULE_2__})}const __WEBPACK_DEFAULT_EXPORT__=createStoryMetaSettingsDecorator},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/BreadcrumbsBar/BreadcrumbItem/__stories__/breadcrumbItem.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-breadcrumb-item_column-wrapper{display:flex;flex-direction:column;gap:40px}.monday-storybook-breadcrumb-item_column-wrapper ol{padding:0}.monday-storybook-breadcrumb-item_row-wrapper{display:flex;align-items:center;justify-content:flex-start;gap:50px}.monday-storybook-breadcrumb-item_row-wrapper span{width:100px}","",{version:3,sources:["webpack://./src/components/BreadcrumbsBar/BreadcrumbItem/__stories__/breadcrumbItem.stories.scss"],names:[],mappings:"AACE,iDACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,oDACE,SAAA,CAIJ,8CACE,YAAA,CACA,kBAAA,CACA,0BAAA,CACA,QAAA,CACA,mDACE,WAAA",sourcesContent:[".monday-storybook-breadcrumb-item {\n  &_column-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    ol {\n      padding: 0;\n    }\n  }\n\n  &_row-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 50px;\n    span {\n      width: 100px;\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}}]);