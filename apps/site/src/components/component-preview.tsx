"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Fira_Code } from "next/font/google";
import { IconButton } from "@material-tailwind/react/dist";
import { Check, Copy } from "iconoir-react";

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

export function ComponentPreview({
  demo,
  children,
  className,
}: ComponentPreviewProps) {
  const codeRef = React.useRef<any>(null);
  const [isCopied, setIsCopied] = React.useState(false);

  const copyCode = () => setIsCopied(true);
  const resetCopy = () => setIsCopied(false);

  const containerStyles = twMerge(
    "border-gray-100 rounded-lg border p-2 dark:border-gray-900",
    className,
  );

  const codeBlockStyles = twMerge(
    firaCode.className,
    "code-preview relative bg-gray-950 rounded-md",
  );

  return (
    <div className={containerStyles}>
      <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-md lg:overflow-hidden">
        {demo}
      </div>
      <div className={codeBlockStyles}>
        <IconButton
          size="sm"
          variant="ghost"
          ripple={false}
          onClick={copyCode}
          onMouseLeave={resetCopy}
          className="absolute right-1 top-1 z-10 text-gray-100"
        >
          {isCopied ? <Check /> : <Copy />}
        </IconButton>
        {React.cloneElement(children, { ref: codeRef })}
      </div>
    </div>
  );
}

export default ComponentPreview;
