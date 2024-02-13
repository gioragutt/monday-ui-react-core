"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[1284],{"./src/storybook/stand-alone-documentaion/catalog/catalog.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Catalog:()=>Catalog,__namedExportsOrder:()=>__namedExportsOrder,default:()=>catalog_stories});var react=__webpack_require__("../../node_modules/react/index.js"),related_components_decorator=__webpack_require__("./src/storybook/components/related-components/related-components-decorator.jsx"),related_components=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/related-components/related-components.js"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),Search=__webpack_require__("./src/components/Search/Search.tsx"),emptyStateExample=__webpack_require__("./src/storybook/stories-common-assets/emptyStateExample.svg"),Heading=__webpack_require__("./src/components/Heading/Heading.tsx"),Text=__webpack_require__("./src/components/Text/Text.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Catalog_stories_EmptyState_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/storybook/stand-alone-documentaion/catalog/EmptyState/Catalog.stories.EmptyState.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Catalog_stories_EmptyState_module.c,options);const EmptyState_Catalog_stories_EmptyState_module=Catalog_stories_EmptyState_module.c&&Catalog_stories_EmptyState_module.c.locals?Catalog_stories_EmptyState_module.c.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),CatalogEmptyState=function CatalogEmptyState(){return(0,jsx_runtime.jsxs)("div",{className:EmptyState_Catalog_stories_EmptyState_module.emptyStateContainer,"aria-labelledby":"empty-state-id",children:[(0,jsx_runtime.jsx)("img",{style:{width:"290px"},src:emptyStateExample,alt:"",role:"presentation"}),(0,jsx_runtime.jsx)(Heading.c,{type:Heading.c.types.H2,id:"empty-state-id",className:EmptyState_Catalog_stories_EmptyState_module.emptyStateHeading,children:"We haven't found this component in the catalog"}),(0,jsx_runtime.jsxs)(Text.c,{element:"span",type:Text.c.types.TEXT1,style:{width:"50%",textAlign:"center"},ellipsis:!1,children:["Not all the components have been added to the Catalog already, please, also check the"," ",(0,jsx_runtime.jsx)(Text.c,{element:"span",type:Text.c.types.TEXT1,weight:Text.c.weights.BOLD,children:"search in the left panel"}),"."]})]})};CatalogEmptyState.displayName="CatalogEmptyState";var Catalog_stories_templates_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/storybook/stand-alone-documentaion/catalog/Catalog/Catalog.stories.templates.module.scss"),Catalog_stories_templates_module_options={};Catalog_stories_templates_module_options.styleTagTransform=styleTagTransform_default(),Catalog_stories_templates_module_options.setAttributes=setAttributesWithoutAttributes_default(),Catalog_stories_templates_module_options.insert=insertBySelector_default().bind(null,"head"),Catalog_stories_templates_module_options.domAPI=styleDomAPI_default(),Catalog_stories_templates_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Catalog_stories_templates_module.c,Catalog_stories_templates_module_options);const Catalog_Catalog_stories_templates_module=Catalog_stories_templates_module.c&&Catalog_stories_templates_module.c.locals?Catalog_stories_templates_module.c.locals:void 0;function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var RELATED_COMPONENT_NAMES=Array.from(component_description_map.kB.keys()).map((function(name){return name.toLowerCase()})).sort(),CatalogTemplate=function CatalogTemplate(){var _useState2=_slicedToArray((0,react.useState)(""),2),query=_useState2[0],setQuery=_useState2[1],componentsToDisplay=RELATED_COMPONENT_NAMES.filter((function(name){return name.replaceAll("-","").includes(query.toLowerCase())}));return(0,jsx_runtime.jsxs)("div",{className:Catalog_Catalog_stories_templates_module.container,children:[(0,jsx_runtime.jsx)(Search.c,{placeholder:"Search by component name...",value:query,onChange:setQuery,wrapperClassName:Catalog_Catalog_stories_templates_module.search}),(0,jsx_runtime.jsx)(related_components_decorator.w,{componentsNames:componentsToDisplay,linkTarget:related_components.c.linkTargets.PARENT}),0===componentsToDisplay.length&&(0,jsx_runtime.jsx)(CatalogEmptyState,{})]})};CatalogTemplate.displayName="CatalogTemplate";const catalog_stories={title:"Catalog"};var Catalog={render:function render(){return(0,jsx_runtime.jsx)(CatalogTemplate,{})},name:"Catalog",parameters:{chromatic:{pauseAnimationAtEnd:!0}}};Catalog.parameters={...Catalog.parameters,docs:{...Catalog.parameters?.docs,source:{originalSource:'{\n  render: () => <CatalogTemplate />,\n  name: "Catalog",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    }\n  }\n}',...Catalog.parameters?.docs?.source}}};const __namedExportsOrder=["Catalog"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/storybook/stand-alone-documentaion/catalog/Catalog/Catalog.stories.templates.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Catalog-stories-templates-module_container{width:100%}.Catalog-stories-templates-module_search{margin-bottom:var(--sb-spacing-large)}","",{version:3,sources:["webpack://./src/storybook/stand-alone-documentaion/catalog/Catalog/Catalog.stories.templates.module.scss"],names:[],mappings:"AAAA,4CACE,UAAA,CAGF,yCACE,qCAAA",sourcesContent:[".container {\n  width: 100%;\n}\n\n.search {\n  margin-bottom: var(--sb-spacing-large);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"Catalog-stories-templates-module_container",search:"Catalog-stories-templates-module_search"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/storybook/stand-alone-documentaion/catalog/EmptyState/Catalog.stories.EmptyState.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Catalog-stories-EmptyState-module_emptyStateContainer{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;padding:var(--sb-spacing-large)}.Catalog-stories-EmptyState-module_emptyStateHeading{margin-block:var(--sb-spacing-large)}","",{version:3,sources:["webpack://./src/storybook/stand-alone-documentaion/catalog/EmptyState/Catalog.stories.EmptyState.module.scss"],names:[],mappings:"AAAA,uDACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,+BAAA,CAGF,qDACE,oCAAA",sourcesContent:[".emptyStateContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: var(--sb-spacing-large);\n}\n\n.emptyStateHeading {\n  margin-block: var(--sb-spacing-large);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={emptyStateContainer:"Catalog-stories-EmptyState-module_emptyStateContainer",emptyStateHeading:"Catalog-stories-EmptyState-module_emptyStateHeading"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/storybook/stories-common-assets/emptyStateExample.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/emptyStateExample.f5f9c287.svg"}}]);