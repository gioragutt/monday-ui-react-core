"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[5016,3664],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Search/__stories__/Search.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FilterInCombobox:()=>FilterInCombobox,Overview:()=>Overview,Sizes:()=>Sizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Search_stories_Search_stories});__webpack_require__("../../node_modules/react/index.js");var createComponentTemplate=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js"),Search=__webpack_require__("./src/components/Search/Search.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),DialogContentContainer=__webpack_require__("./src/components/DialogContentContainer/DialogContentContainer.tsx"),Combobox=__webpack_require__("./src/components/Combobox/Combobox.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Search_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Search/__stories__/Search.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Search_stories.c,options);Search_stories.c&&Search_stories.c.locals&&Search_stories.c.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),metaSettings=(0,createStoryMetaSettingsDecorator.w)({component:Search.c,enumPropNamesArray:["type","size"],iconPropNamesArray:["secondaryIconName","iconName"]}),searchTemplate=(0,createComponentTemplate.q)(Search.c);const Search_stories_Search_stories={title:"Inputs/Search",component:Search.c,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:searchTemplate.bind({}),name:"Overview",args:{placeholder:"Placeholder text here",wrapperClassName:"monday-storybook-search_size"}},Sizes={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-search_box",children:[(0,jsx_runtime.jsx)(Search.c,{placeholder:"Small",size:Search.c.sizes.SMALL}),(0,jsx_runtime.jsx)(Search.c,{placeholder:"Medium"}),(0,jsx_runtime.jsx)(Search.c,{placeholder:"Large",size:Search.c.sizes.LARGE})]})},name:"Sizes"},FilterInCombobox={render:function render(){return(0,jsx_runtime.jsx)(DialogContentContainer.c,{className:"monday-storybook-search_wrapper",children:(0,jsx_runtime.jsx)(Combobox.c,{placeholder:"Placeholder text here",options:[{id:"1",label:"Cheese Cake"},{id:"2",label:"Muffin"},{id:"3",label:"Cookie"},{id:"4",label:"Cup cake"},{id:"5",label:"Banana lottie"}],size:Combobox.c.sizes.SMALL,optionLineHeight:28})})},name:"Filter in combobox"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: searchTemplate.bind({}),\n  name: "Overview",\n  args: {\n    placeholder: "Placeholder text here",\n    wrapperClassName: "monday-storybook-search_size"\n  }\n}',...Overview.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-search_box">\n      <Search placeholder="Small" size={Search.sizes.SMALL} />\n      <Search placeholder="Medium" />\n      <Search placeholder="Large" size={Search.sizes.LARGE} />\n    </div>,\n  name: "Sizes"\n}',...Sizes.parameters?.docs?.source}}},FilterInCombobox.parameters={...FilterInCombobox.parameters,docs:{...FilterInCombobox.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const option = [{\n      id: "1",\n      label: "Cheese Cake"\n    }, {\n      id: "2",\n      label: "Muffin"\n    }, {\n      id: "3",\n      label: "Cookie"\n    }, {\n      id: "4",\n      label: "Cup cake"\n    }, {\n      id: "5",\n      label: "Banana lottie"\n    }];\n    return <DialogContentContainer className="monday-storybook-search_wrapper">\n        <Combobox placeholder="Placeholder text here" options={option} size={Combobox.sizes.SMALL} optionLineHeight={28} />\n      </DialogContentContainer>;\n  },\n  name: "Filter in combobox"\n}',...FilterInCombobox.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Sizes","FilterInCombobox"]},"./src/components/Search/__stories__/Search.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Search});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),usage_guidelines=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/usage-guidelines/usage-guidelines.js"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),tip=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/tip/tip.js"),storybook_link=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/storybook-link/storybook-link.js"),TipCombobox=function TipCombobox(){return(0,jsx_runtime.jsxs)(tip.c,{title:"Not what you were looking for?",children:["If you need to filter results from a long list, consider using the"," ",(0,jsx_runtime.jsx)(storybook_link.c,{page:"Inputs/Combobox",size:storybook_link.c.sizes.SMALL,children:"Combobox"})," ","component."]})};TipCombobox.displayName="TipCombobox";var Search_stories=__webpack_require__("./src/components/Search/__stories__/Search.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3"},(0,lib.MN)(),props.components),{PropsTable,RelatedComponents}=_components;return PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{of:Search_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"search",children:"Search"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Search lets users quickly find relevant content. A search field allows a user to type a word or phrase to filter through a large amount of data without navigation."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:Search_stories.Overview})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(usage_guidelines.c,{guidelines:["Search query input methods can be extended to include historical suggestions and auto-completion of queries.","Search results are displayed below the search bar.","Always use the search icon to help users identify search fields. Display the search icon as a presentational icon inside the search input.","Let users submit their search by hitting enter. For live-filtering search, update search results immediately without hitting enter and be mindful of performance.","If used as filter, position the search field above and in context to the list of filterable items"]}),"\n",(0,jsx_runtime.jsx)(TipCombobox,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are three sizes available: Small (32px), Medium (40px), and Large (48px)."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:Search_stories.Sizes})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"filter-in-combobox",children:"Filter in combobox"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:Search_stories.FilterInCombobox})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.CE,component_description_map.K0,component_description_map.Qz]})]})}const Search=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Search/__stories__/Search.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-search_wrapper{width:260px}.monday-storybook-search_box{width:448px;display:flex;flex-direction:column;gap:16px}.monday-storybook-search_size{width:240px}","",{version:3,sources:["webpack://./src/components/Search/__stories__/Search.stories.scss"],names:[],mappings:"AACE,iCACE,WAAA,CAGF,6BACE,WAAA,CACA,YAAA,CACA,qBAAA,CACA,QAAA,CAGF,8BACE,WAAA",sourcesContent:[".monday-storybook-search {\n  &_wrapper {\n    width: 260px;\n  }\n\n  &_box {\n    width: 448px;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n  }\n\n  &_size {\n    width: 240px;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}}]);