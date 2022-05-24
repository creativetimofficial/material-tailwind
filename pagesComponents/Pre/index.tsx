import { cloneElement, ReactElement, useRef, useState, useEffect } from "react";
import {
  IconButton,
  Tooltip
} from "../../packages/material-tailwind-react/src";

function copyToClipboard(text) {
  return new Promise<void>((resolve, reject) => {
    if (navigator?.clipboard) {
      const cb = navigator.clipboard;

      cb.writeText(text).then(resolve).catch(reject);
    } else {
      try {
        const body = document.querySelector("body");

        const textarea = document.createElement("textarea");
        body?.appendChild(textarea);

        textarea.value = text;
        textarea.select();
        document.execCommand("copy");

        body?.removeChild(textarea);

        resolve();
      } catch (e) {
        reject(e);
      }
    }
  });
}

export default function Pre({ children, color, ...rest }) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  const handleCopy = () => {
    copyToClipboard(codeRef.current.innerText);
    setCopied(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 3000);

    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <>
      <div className="absolute right-0 -bottom-12">
        <Tooltip
          content={copied ? "Copied" : "Copy"}
          placement="bottom"
          className="text-xs font-medium py-1 px-2 rounded-md"
        >
          <IconButton
            type="button"
            variant="text"
            size="sm"
            color={color}
            onClick={handleCopy}
          >
            {copied ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                strokeWidth={2.5}
              >
                <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            )}
          </IconButton>
        </Tooltip>
      </div>
      <pre {...rest}>
        {cloneElement(children as ReactElement, { ref: codeRef })}
      </pre>
    </>
  );
}
