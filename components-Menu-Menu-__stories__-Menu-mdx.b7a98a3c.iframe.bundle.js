"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[2808],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Menu/Menu/__stories__/Menu.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_stories_Menu});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),tip=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/tip/tip.js"),storybook_link=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/storybook-link/storybook-link.js"),DialogContentContainer=__webpack_require__("./src/components/DialogContentContainer/DialogContentContainer.tsx"),Menu=__webpack_require__("./src/components/Menu/Menu/Menu.tsx"),MenuItem=__webpack_require__("./src/components/Menu/MenuItem/MenuItem.tsx"),Search=__webpack_require__("./src/components/Search/Search.tsx"),Calendar=__webpack_require__("./src/components/Icon/Icons/components/Calendar.tsx"),Wand=__webpack_require__("./src/components/Icon/Icons/components/Wand.tsx"),Filter=__webpack_require__("./src/components/Icon/Icons/components/Filter.tsx"),Menu_stories_module=__webpack_require__("./src/components/Menu/Menu/__stories__/Menu.stories.module.scss"),TipCombobox=function TipCombobox(){return(0,jsx_runtime.jsxs)(tip.c,{children:["Need to place a search field to filter results? Use the"," ",(0,jsx_runtime.jsx)(storybook_link.c,{size:storybook_link.c.sizes.SMALL,page:"Inputs/Combobox",children:"Combobox"})," ","component instead"]})};TipCombobox.displayName="TipCombobox";var ComponentRuleSimpleActions=function ComponentRuleSimpleActions(){return(0,jsx_runtime.jsx)(DialogContentContainer.c,{children:(0,jsx_runtime.jsxs)(Menu.c,{children:[(0,jsx_runtime.jsx)(MenuItem.c,{title:"Item 1",icon:Calendar.c}),(0,jsx_runtime.jsx)(MenuItem.c,{title:"Item 2",icon:Wand.c}),(0,jsx_runtime.jsx)(MenuItem.c,{title:"Item 3",icon:Filter.c})]})})};ComponentRuleSimpleActions.displayName="ComponentRuleSimpleActions";var ComponentRuleWithSearch=function ComponentRuleWithSearch(){return(0,jsx_runtime.jsxs)(DialogContentContainer.c,{children:[(0,jsx_runtime.jsx)(Search.c,{size:Search.c.sizes.SMALL,wrapperClassName:Menu_stories_module.c["component-rule-search"]}),(0,jsx_runtime.jsxs)(Menu.c,{children:[(0,jsx_runtime.jsx)(MenuItem.c,{title:"Item 1",icon:Calendar.c}),(0,jsx_runtime.jsx)(MenuItem.c,{title:"Item 2",icon:Wand.c}),(0,jsx_runtime.jsx)(MenuItem.c,{title:"Item 3",icon:Filter.c})]})]})};ComponentRuleWithSearch.displayName="ComponentRuleWithSearch";var ComponentRuleDefaultWidth=function ComponentRuleDefaultWidth(){return(0,jsx_runtime.jsx)(DialogContentContainer.c,{children:(0,jsx_runtime.jsxs)(Menu.c,{children:[(0,jsx_runtime.jsx)(MenuItem.c,{title:"Item 1",icon:Calendar.c}),(0,jsx_runtime.jsx)(MenuItem.c,{title:"Item 2",icon:Filter.c})]})})};ComponentRuleDefaultWidth.displayName="ComponentRuleDefaultWidth";var ComponentRuleLargeWidth=function ComponentRuleLargeWidth(){return(0,jsx_runtime.jsx)(DialogContentContainer.c,{className:Menu_stories_module.c["component-rule-large-dialog"],children:(0,jsx_runtime.jsxs)(Menu.c,{className:Menu_stories_module.c["component-rule-large-menu"],children:[(0,jsx_runtime.jsx)(MenuItem.c,{title:"Item 1",icon:Calendar.c}),(0,jsx_runtime.jsx)(MenuItem.c,{title:"Item 2",icon:Filter.c})]})})};ComponentRuleLargeWidth.displayName="ComponentRuleLargeWidth",TipCombobox.__docgenInfo={description:"",methods:[],displayName:"TipCombobox"},ComponentRuleSimpleActions.__docgenInfo={description:"",methods:[],displayName:"ComponentRuleSimpleActions"},ComponentRuleWithSearch.__docgenInfo={description:"",methods:[],displayName:"ComponentRuleWithSearch"},ComponentRuleDefaultWidth.__docgenInfo={description:"",methods:[],displayName:"ComponentRuleDefaultWidth"},ComponentRuleLargeWidth.__docgenInfo={description:"",methods:[],displayName:"ComponentRuleLargeWidth"};var Menu_stories=__webpack_require__("./src/components/Menu/Menu/__stories__/Menu.stories.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3"},(0,lib.MN)(),props.components),{PropsTable,UsageGuidelines,ComponentRules,StorybookLink,RelatedComponents}=_components;return ComponentRules||_missingMdxReference("ComponentRules",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),StorybookLink||_missingMdxReference("StorybookLink",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{of:Menu_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"menu",children:"Menu"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A menu is a navigable contextual list of items that can be selected."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:Menu_stories.Overview})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:["A menu offers a list of actions or functions that a user can access.","Menu height is dynamic according to the content it contains and its location on the screen.","Closing menus can be done by selecting a value or clicking any where outside the menu.","Menu items can include icons, radio buttons, and checkboxes.","If a menu dropdown contains a mix of links and buttons, separate them with a content divider with links at the top and buttons at the bottom.","Menu should contains at least two menu items."]}),"\n",(0,jsx_runtime.jsx)(TipCombobox,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:Menu_stories.Sizes})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"menu-with-icons",children:"Menu with icons"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:Menu_stories.MenuWithIcons})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,jsx_runtime.jsx)(ComponentRules,{rules:[{positive:{component:(0,jsx_runtime.jsx)(ComponentRuleSimpleActions,{}),description:"Use menus for simple actions."},negative:{component:(0,jsx_runtime.jsx)(ComponentRuleWithSearch,{}),description:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Don’t place a search component near to menu for implement a filter capability. See"," ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Inputs/Combobox",children:"Combobox."})]})}},{positive:{component:(0,jsx_runtime.jsx)(ComponentRuleDefaultWidth,{}),description:"Keep to the default menu width."},negative:{component:(0,jsx_runtime.jsx)(ComponentRuleLargeWidth,{}),description:"Don’t change the width of the menu, only change the height."}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"menu-with-sub-menu",children:"Menu with sub menu"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:Menu_stories.MenuWithSubMenu})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"menu-with-2-depth-sub-menu",children:"Menu with 2-depth sub menu"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:Menu_stories.MenuWith2DepthSubMenu})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"menu-with-grid-items-and-sub-menu",children:"Menu with grid items and sub menu"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Grid menu items are navigable with a keyboard as well"}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:Menu_stories.MenuWithGridItemsAndSubMenu})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.Qz,component_description_map.CE,component_description_map.Wb]})]})}const _stories_Menu=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);