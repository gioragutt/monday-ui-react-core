import { PluginObj } from "@babel/core";
import { defaults } from "lodash";
import { importVisitors } from "./utils/visitors/importVisitors";
import { CssBaseClass } from "./utils/getCssBaseClass";

type PluginOptions = {
  importIdentifier: "styles";
};

export type State = {
  opts: PluginOptions;
  classNames: Map<string, string>;
  cxImported: boolean;
  camelCaseImported: boolean;
  camelCaseImportNeeded: boolean;
  baseCssClass: CssBaseClass | undefined;
};

const PLUGIN_DEFAULTS = {
  importIdentifier: "styles"
};

// 1: Starting point for traverse process
export default (): PluginObj<State> => ({
  name: "react-css-modules",
  visitor: {
    Program: (programPath, state) => {
      // 2:
      programPath.traverse(importVisitors, {
        cxImported: false,
        camelCaseImported: false,
        camelCaseImportNeeded: false,
        classNames: new Map<string, string>(),
        baseCssClass: undefined,
        opts: defaults({}, state.opts, PLUGIN_DEFAULTS)
      });
    }
  }
});

// TODO replace TemplateLiteral inside ObjectProperty (Tipseen...)

// TODO incorrect baseClassName: Toggle

// TODO templateLiteralReplacementVisitors: not only variables, but functions too as in Button `monday-style-button--size-${getActualSize(size)}`

// TODO Button: objectProperty styles weren't replaced
