import { deepmerge } from "deepmerge-ts";
import theme from "../theme/index";
import combineMerge from "../utils/combineMerge";
import { createContext, createMemo, useContext } from "solid-js";
import type { ParentComponent } from "solid-js";
export type Theme = typeof theme;
const MaterialTailwindTheme = createContext(theme);

const ThemeProvider: ParentComponent<IThemeProvider> = (props) => {
  const mergedValue = createMemo(() =>
    props.value ? deepmerge(theme, props.value, { arrayMerge: combineMerge }) : theme,
  );

  return (
    <MaterialTailwindTheme.Provider value={mergedValue()}>
      {props.children}
    </MaterialTailwindTheme.Provider>
  );
};

const useTheme = () => useContext(MaterialTailwindTheme);

interface IThemeProvider {
  value?: typeof theme;
}

export { MaterialTailwindTheme, ThemeProvider, useTheme };
