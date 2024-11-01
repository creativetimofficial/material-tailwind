"use client";

import { ThemeProvider as MTThemeProvider } from "@material-tailwind/react";

export function ThemeProvider({ children }) {
  return (
    <MTThemeProvider
      value={{
        button: {
          variant: {
            solid: {
              primary:
                "bg-orange-500 border-orange-500 text-primary-foreground hover:bg-orange-400 hover:border-orange-400",
            },
          },
        },
        inputField: {
          color: {
            primary:
              "hover:border-orange-500 hover:ring-orange-500/10 focus:border-orange-500 focus:ring-orange-500/10",
          },
        },
        selectTrigger: {
          color: {
            primary:
              "hover:border-orange-500 hover:ring-orange-500/10 focus:border-orange-500 focus:ring-orange-500/10 data-[open=true]:border-orange-500 data-[open=true]:ring-orange-500/10",
          },
        },
        timelineIcon: {
          color: {
            primary:
              "group-data-[active=true]:bg-orange-500 group-data-[active=true]:text-primary-foreground group-data-[completed=true]:bg-orange-500 group-data-[completed=true]:text-primary-foreground",
          },
        },
        timelineSeparator: {
          color: {
            primary: "group-data-[completed=true]:bg-orange-500",
          },
        },
        typography: {
          color: {
            primary: "text-orange-500",
          },
        },
        chip: {
          variant: {
            solid: {
              primary:
                "bg-orange-500 border-orange-500 text-primary-foreground",
            },
          },
        },
      }}
    >
      {children}
    </MTThemeProvider>
  );
}
