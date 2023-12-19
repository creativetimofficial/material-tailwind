import React from "react";
import { Input, Typography, Button } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

export function ClipboardCopyButton() {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);

  return (
    <div className="flex flex-col items-start gap-y-4">
      <Button
        onMouseLeave={() => setCopied(false)}
        onClick={() => {
          copy("npm i @material-tailwind");
          setCopied(true);
        }}
        className="flex items-center gap-x-3 lowercase"
      >
        <Typography
          className="border-r border-gray-400 pr-3"
          variant="paragraph"
        >
          npm i @material-tailwind
        </Typography>
        {copied ? (
          <div className="flex items-center gap-x-1">
            <CheckIcon className="h-5 w-5 text-green-700" />
          </div>
        ) : (
          <div className="flex items-center gap-x-1">
            <DocumentDuplicateIcon className="h-5 w-5 text-white" />
          </div>
        )}
      </Button>
    </div>
  );
}
