"use client";

// @components
import * as React from "react";
import { Check, Copy } from "iconoir-react";
import { Fira_Code } from "next/font/google";
import { IconButton, Button } from "@material-tailwind/react";

// @hooks
import { useCopyToClipboard } from "usehooks-ts";

// @utils
import { twMerge } from "tailwind-merge";

const firaCode = Fira_Code({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

const MIN_CODE_HEIGHT = 400;

interface CodePreview {
  children: any;
  className?: string;
}

export function CodePreview({ children, className }: CodePreview) {
  const codeRef = React.useRef<any>(null);
  const [, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = React.useState(false);
  const [showCode, setShowCode] = React.useState(false);
  const [codeHeight, setCodeHeight] = React.useState(0);

  const copyCode = () => {
    setIsCopied(true);
    copy(codeRef.current.innerText);
  };
  const resetCopy = () => setIsCopied(false);

  const containerStyles = twMerge(
    "border-surface rounded-lg border p-2 my-4 max-w-full lg:max-w-[calc(80rem-480px-2rem-52px)]",
    className,
  );

  const codeBlockStyles = twMerge(
    firaCode.className,
    "code-preview relative bg-black rounded-[5px] overflow-hidden",
    showCode && "pb-12",
  );

  React.useEffect(() => {
    const element = codeRef.current;

    if (element) {
      setCodeHeight(element.firstChild.clientHeight);
    }

    return () => {
      setCodeHeight(0);
    };
  }, []);

  return (
    <div className={containerStyles}>
      <div className={codeBlockStyles}>
        <IconButton
          size="sm"
          variant="ghost"
          ripple={false}
          onClick={copyCode}
          onMouseLeave={resetCopy}
          className="absolute right-1 top-1 z-10 text-gray-100 hover:border-transparent hover:bg-transparent"
        >
          {isCopied ? <Check /> : <Copy />}
        </IconButton>
        {React.cloneElement(children, {
          ref: codeRef,
          style: {
            height: showCode
              ? "auto"
              : codeHeight <= MIN_CODE_HEIGHT
                ? "unset"
                : `${MIN_CODE_HEIGHT}px`,
          },
        })}
        {codeHeight > MIN_CODE_HEIGHT && (
          <div className="absolute bottom-0 left-1/2 z-10 grid h-20 w-full -translate-x-1/2 items-end justify-center bg-gradient-to-t from-black via-black/75 to-transparent pb-2">
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

export default CodePreview;
