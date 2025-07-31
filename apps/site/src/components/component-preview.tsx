"use client";

// @components
import React from "react";
import { Check, Copy } from "iconoir-react";
import { Fira_Code } from "next/font/google";
import { IconButton, Button, Tooltip } from "@material-tailwind/react";

// @hooks
import { useTheme } from "next-themes";
import { useCopyToClipboard } from "usehooks-ts";

// @utils
import { twMerge } from "tailwind-merge";
import * as prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";
import * as prettierPluginEstree from "prettier/plugins/estree";

const firaCode = Fira_Code({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

interface ComponentPreviewProps {
  demo: React.ReactNode;
  children: any;
  className?: string;
}

const MIN_CODE_HEIGHT = 260;

export function ComponentPreview({
  demo,
  children,
  className,
}: ComponentPreviewProps) {
  const { resolvedTheme } = useTheme();
  const codeRef = React.useRef<any>(null);

  const [, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = React.useState(false);
  const [showCode, setShowCode] = React.useState(false);
  const [codeHeight, setCodeHeight] = React.useState(0);

  async function copyCode() {
    setIsCopied(true);

    const codeContent = codeRef.current.innerText;

    const formattedCode = await prettier.format(codeContent, {
      parser: "babel",
      plugins: [parserBabel, prettierPluginEstree],
    });

    copy(formattedCode);
  }

  function resetCopy() {
    setIsCopied(false);
  }

  const containerStyles = twMerge(
    "border-surface rounded-lg border mt-4 lg:max-w-[calc(80rem-480px-2rem-52px)] max-w-full",
    className,
  );

  const codeBlockStyles = twMerge(
    firaCode.className,
    "code-preview relative border-t border-surface overflow-hidden",
    showCode && "pb-12",
  );

  React.useEffect(() => {
    const element = codeRef.current;

    if (element) {
      if (resolvedTheme === "dark") {
        const preElement = element
          .querySelector(`div[data-bright-mode="dark"]`)
          .querySelector("pre");

        setCodeHeight(preElement.clientHeight);
      }

      if (resolvedTheme === "light") {
        const preElement = element
          .querySelector(`div[data-bright-mode="light"]`)
          .querySelector("pre");

        setCodeHeight(preElement.clientHeight);
      }
    }

    return () => {
      setCodeHeight(0);
    };
  }, []);

  return (
    <div className={containerStyles} data-theme={resolvedTheme}>
      <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-md p-4 lg:overflow-hidden">
        {demo}
      </div>
      <div className={codeBlockStyles}>
        <Tooltip>
          <Tooltip.Trigger as="span" className="absolute right-1 top-1 z-10">
            <IconButton
              size="sm"
              variant="ghost"
              color="secondary"
              ripple={false}
              onClick={copyCode}
              onMouseLeave={resetCopy}
            >
              {isCopied ? <Check /> : <Copy />}
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>
            {isCopied ? "Copied" : "Copy"}
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <div
          ref={codeRef}
          style={{
            height: showCode
              ? "auto"
              : codeHeight <= MIN_CODE_HEIGHT
                ? "unset"
                : `${MIN_CODE_HEIGHT}px`,
          }}
        >
          {children}
        </div>
        {codeHeight > MIN_CODE_HEIGHT && (
          <div className="absolute bottom-0 left-1/2 grid h-16 w-full -translate-x-1/2 items-end justify-center rounded-b-lg bg-linear-to-t from-background via-background/75 to-transparent pb-2">
            <Button
              size="sm"
              color="secondary"
              onClick={() => setShowCode((cur) => !cur)}
            >
              {showCode ? "Hide Code" : "Show Code"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ComponentPreview;
