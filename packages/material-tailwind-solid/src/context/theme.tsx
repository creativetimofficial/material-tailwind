import { createContext, useContext, createMemo } from "solid-js";
import type { ParentComponent } from "solid-js";
import { deepmerge } from "deepmerge-ts";
import defaultTheme from "../theme/index";
import type { Theme } from "../theme/index";
import type { DeepPartial } from "ts-essentials";

const MaterialTailwindTheme = createContext(() => defaultTheme);

const ThemeProvider: ParentComponent<IThemeProvider> = (props) => {
  const theme = createMemo(() => deepmerge(defaultTheme, props.defaultValue) as Theme);

  return (
    <MaterialTailwindTheme.Provider value={theme}>{props.children}</MaterialTailwindTheme.Provider>
  );
};

const useTheme = () => useContext(MaterialTailwindTheme);

interface IThemeProvider {
  defaultValue?: DeepPartial<Theme>;
}

export { MaterialTailwindTheme, ThemeProvider, useTheme };
