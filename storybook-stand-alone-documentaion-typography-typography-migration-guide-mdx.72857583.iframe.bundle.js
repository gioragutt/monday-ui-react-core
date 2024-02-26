"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[5548],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/storybook/stand-alone-documentaion/typography/typograpghy.stories.helpers.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aQ:()=>TipHowToUseFonts,g3:()=>TipNextEndpoint,s5:()=>TipUseComponent});__webpack_require__("../../node_modules/react/index.js");var vibe_storybook_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/tip/tip.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/link/link.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),TipHowToUseFonts=function TipHowToUseFonts(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_2__.c,{title:"How to use the fonts?",children:["Figtree and Poppins are both Google Fonts. Click",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_3__.c,{size:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_3__.c.sizes.SMALL,href:"https://fonts.google.com/specimen/Figtree",children:"here"}),"to download Figtree, and click",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_3__.c,{size:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_3__.c.sizes.SMALL,href:"https://fonts.google.com/specimen/Poppins",children:"here"}),"to download Poppins."]})};TipHowToUseFonts.displayName="TipHowToUseFonts";var TipNextEndpoint=function TipNextEndpoint(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_2__.c,{emoji:"⚠️",title:"Notice",children:["Heading is imported from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"/next"})," since ","there's"," a legacy component with the same name. This component will replace the legacy component in the next major version."]})};TipNextEndpoint.displayName="TipNextEndpoint";var TipUseComponent=function TipUseComponent(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_2__.c,{title:"Notice",children:"No need to define classes for text element and use typography CSS variables anymore, these components cover all the possible variants."})};TipUseComponent.displayName="TipUseComponent"},"./src/storybook/stand-alone-documentaion/typography/typography-migration-guide.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>typography_migration_guide});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),link_link=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/link/link.js"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx");const migrationTable_namespaceObject=__webpack_require__.p+"static/media/migrationTable.3100f232.png";var typograpghy_stories_helpers=__webpack_require__("./src/storybook/stand-alone-documentaion/typography/typograpghy.stories.helpers.tsx");function _createMdxContent(props){const _components=Object.assign({ul:"ul",li:"li",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},(0,lib.MN)(),props.components),{ComponentName,StorybookLink,UsageGuidelines,RelatedComponents}=_components;return ComponentName||_missingMdxReference("ComponentName",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),StorybookLink||_missingMdxReference("StorybookLink",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{title:"Typography Migration Guide"}),"\n",(0,jsx_runtime.jsx)(ComponentName,{withFoundationBackground:!0,children:"Typography Migration Guide"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#why",children:"Why"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#when-to-use",children:"When to use"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#how-to-import",children:"How to import"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#how-to-use",children:"How to use"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#how-to-migrate",children:"How to migrate"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#more-information",children:"More information"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related Components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["A new typography change was introduced in ",(0,jsx_runtime.jsx)(_components.code,{children:"v2.24.0+"}),", including two new components: ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Text/Text",children:" Text "})," and ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Text/Heading",children:"\nHeading"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"why",children:"Why?"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"In order to produce a unified language, Vibe now uses a well defined set of typography variants and weights.\nThis change allows designers crating more accurate and refined designs, while enhancing the developer experience, making implementation easier and more intuitive."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:[(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Use the ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Text/Text",children:"Text"})," component for paragraphs, labels, and texts up to 16px. It includes 2 variants: ",(0,jsx_runtime.jsx)(_components.code,{children:"Text1"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"Text2"}),". Each variant has a fixed size and three different weights."]}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Use the ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Text/Heading",children:"Heading"})," component the for titles and text from 18px and up. It includes 3 variants: ",(0,jsx_runtime.jsx)(_components.code,{children:"H1"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"H2"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"H3"}),". Each of these variant is mapped to an ",(0,jsx_runtime.jsx)(_components.code,{children:"h1"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"h2"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"h3"})," element accordingly."]})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"how-to-import",children:"How to import"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:'import { Text } from "monday-ui-react-core";\nimport { Heading } from "monday-ui-react-core/next";\n'})}),"\n",(0,jsx_runtime.jsx)(typograpghy_stories_helpers.g3,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'Each of these components can get the variants as a prop. You also get out-of-the-box built-in colors and an "ellipsis" with a Tooltip for a long text that breaks the line. For example:'}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<Text type={Text.types.TEXT1} weight={Text.weights.NORMAL}>\n  This is text1 normal\n</Text>\n"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<Heading type={Heading.types.H2} weight={Heading.weights.NORMAL}>\n  Normal H2 title\n</Heading>\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["For a more detailed breakdown of the variants see the ",(0,jsx_runtime.jsx)(link_link.c,{href:"/?path=/docs/foundations-typography--docs#type-styles",withoutSpacing:!0,target:link_link.c.targets.PARENT,children:"Type Styles table"}),"."]}),"\n",(0,jsx_runtime.jsx)(typograpghy_stories_helpers.s5,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"how-to-migrate",children:"How to migrate"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["For every new usage, ",(0,jsx_runtime.jsx)("strong",{children:"use the new components"}),". For existing usages, ",(0,jsx_runtime.jsx)("strong",{children:"refactor gradually"})," according to the migration table below:"]}),"\n",(0,jsx_runtime.jsx)("img",{src:migrationTable_namespaceObject,alt:"Migration table"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"what-if-i-cant-use-a-component",children:"What if I can't use a component?"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["We highly suggest using the new components, but if it is still needed, SCSS mixins and CSS custom properties (CSS Variables) are still available. Read the ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Foundations/Typography",children:"Typography Foundation"})," docs for more information."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"what-if-i-need-a-variant-that-doesnt-exist",children:"What if I need a variant that doesn't exist?"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Contact the design system team for support."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"more-information",children:"More information"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Learn more about the components APIs and functionality in the ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Text/Text",children:" Text "})," and ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Text/Heading",children:"\nHeading"})," pages."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.g3,component_description_map.Wg,component_description_map.kN]})]})}const typography_migration_guide=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);