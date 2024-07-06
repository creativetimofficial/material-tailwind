import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

export function ClipboardCopyButton() {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);

  return (
    <Button
      onMouseLeave={() => setCopied(false)}
      onClick={() => {
        copy("npm i @material-tailwind/react");
        setCopied(true);
      }}
      className="flex items-center gap-x-3 px-4 py-2.5 lowercase"
    >
      <Typography
        className="border-r border-gray-400/50 pr-3 font-normal"
        variant="small"
      >
        npm i @material-tailwind/react
      </Typography>
      {copied ? (
        <CheckIcon className="h-4 w-4 text-white" />
      ) : (
        <DocumentDuplicateIcon className="h-4 w-4 text-white" />
      )}
    </Button>
  );
}
