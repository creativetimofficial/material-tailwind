import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

export function ClipboardDefault() {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);

  return (
    <div>
      <div className="flex items-center gap-x-4">
        <Typography variant="lead">npm i @material-tailwind/react</Typography>
        <IconButton
          onMouseLeave={() => setCopied(false)}
          onClick={() => {
            copy("npm i @material-tailwind/react");
            setCopied(true);
          }}
        >
          {copied ? (
            <CheckIcon className="h-5 w-5 text-white" />
          ) : (
            <DocumentDuplicateIcon className="h-5 w-5 text-white" />
          )}
        </IconButton>
      </div>
    </div>
  );
}
