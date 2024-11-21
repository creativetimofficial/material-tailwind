"use client";

// @components
import * as React from "react";
import { Check, Copy } from "iconoir-react";
import { Fira_Code } from "next/font/google";
import { IconButton, Button, Tooltip } from "@material-tailwind/react";

// @hooks
import { useTheme } from "next-themes";
import { useCopyToClipboard } from "usehooks-ts";

// @utils
import { twMerge } from "tailwind-merge";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

// Import the styles
import { github, atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Import the languages
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';

// Register the languages
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('html', html);

const firaCode = Fira_Code({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

const MIN_CODE_HEIGHT = 400;

interface CodePreview {
  codeBlock: any;
  className?: string;
  language?: string;
}

function getHtmlCodeContent(codeContent: string) {
  const regex = /__html:\s*`([\s\S]*?)`/;
  const match = codeContent.match(regex);

  if (match && match[1]) {
    const htmlContent = match[1];
    return htmlContent;
  } else {
    console.log('No HTML content found');
    return '';
  }
}

export function CodePreview({ codeBlock, className, language }: CodePreview) {
  const { resolvedTheme } = useTheme();
  const codeRef = React.useRef<any>(null);

  const [, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = React.useState(false);
  const [showCode, setShowCode] = React.useState(false);
  const [codeHeight, setCodeHeight] = React.useState(0);

  async function copyCode() {
    setIsCopied(true);

    const codeContent = language === "html" ? getHtmlCodeContent(codeBlock) : codeBlock;

    copy(codeContent);
  }

  function resetCopy() {
    setIsCopied(false);
  }

  

  const codeBlockStyles = twMerge(
    firaCode.className,
    "code-preview relative overflow-hidden border-t border-surface",
    showCode && "pb-12",
  );

  React.useEffect(() => {
    const element = codeRef.current;
  
    if (element) {
      const preElement = element.querySelector("pre");
  
      if (preElement) {
        setCodeHeight(preElement.clientHeight);
      }
    }
  
    return () => {
      setCodeHeight(0);
    };
  }, [resolvedTheme]);

  React.useEffect(() => {
    if (codeRef.current) {
      const preElement = codeRef.current.querySelector("pre");
  
      if (preElement) {
        setCodeHeight(preElement.clientHeight);
      }
    }
  }, [codeBlock]);
  

  return (
    
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
          <SyntaxHighlighter
            language={language}
            style={resolvedTheme === 'dark' ? github : github}
            showLineNumbers
          >
            {codeBlock && language === "html"
              ? getHtmlCodeContent(codeBlock)
              : codeBlock}
          </SyntaxHighlighter>
        </div>
        {codeHeight > MIN_CODE_HEIGHT && (
          <div className="absolute bottom-0 left-1/2 grid h-16 w-full -translate-x-1/2 items-end justify-center rounded-b-lg bg-gradient-to-t from-background via-background/75 to-transparent pb-2">
            <Button
              size="xs"
              color="secondary"
              onClick={() => setShowCode((cur) => !cur)}
            >
              {showCode ? "Hide Code" : "Show Code"}
            </Button>
          </div>
        )}
      </div>
  );
}

export default CodePreview;
