"use client";

import { useState } from "react";
import { Tooltip, IconButton } from "@material-tailwind/react";

import { useTheme } from "next-themes";

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

// Import the styles
import { atomOneLight, atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Import the languages
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';


// Register the languages
SyntaxHighlighter.registerLanguage('react', typescript);
SyntaxHighlighter.registerLanguage('html', html);

interface CodePreviewWithCopyProps {
  codeSnippet: string;
}

export default function CodePreviewWithCopy({
  codeSnippet,
}: CodePreviewWithCopyProps) {
  const [isCopied, setIsCopied] = useState(false);
  // const { resolvedTheme } = useTheme();

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset copy state after 2 seconds
  };

  const resetCopy = () => {
    if (isCopied) setIsCopied(false);
  };

  return (
    <div className="relative overflow-scroll border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 bg-white lg:max-w-[calc(80rem-480px-2rem-52px)] max-w-full mt-5">
      {/* Tooltip with Copy Button */}
      <Tooltip>
        <Tooltip.Trigger as="span" className="absolute right-2 top-2 z-3">
          <IconButton
            size="sm"
            variant="solid"
            className="bg-slate-50 hover:bg-white dark:bg-slate-800/90 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 hover:border-slate-300 dark:border-slate-700"
            ripple={false}
            onClick={copyCode}
            onMouseLeave={resetCopy}
        >
            {!isCopied ? (
              <svg
                className="w-5 h-5"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            )}
          </IconButton>
        </Tooltip.Trigger>
        <Tooltip.Content>
          {isCopied ? "Copied" : "Copy"}
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>

      {/* Code Block */}
      <div className="overflow-x-auto p-4">
        <SyntaxHighlighter
          language={'jsx'}
          style={atomOneLight}
          showLineNumbers
          lineNumberStyle={{ color: "#9CA3AF" }}
        >
          {codeSnippet}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
