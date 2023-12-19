import React from "react";
import { Input, Typography, Button } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

export function ClipboardCopyInput() {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(
    "npm i @material-tailwind",
  );

  return (
    <div className="flex flex-col items-start gap-y-4">
      <div className="w-72">
        <Input
          value={inputValue}
          type="email"
          placeholder="Enter to copy"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: "hidden",
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
      </div>
      <Button
        onMouseLeave={() => setCopied(false)}
        onClick={() => {
          copy(inputValue);
          setCopied(true);
        }}
      >
        {copied ? (
          <div className="flex items-center gap-x-1">
            <CheckIcon className="h-5 w-5 text-green-700" />
            <Typography variant="paragraph">Copied</Typography>
          </div>
        ) : (
          <div className="flex items-center gap-x-1">
            <DocumentDuplicateIcon className="h-5 w-5 text-white" />
            <Typography variant="paragraph">Copy</Typography>
          </div>
        )}
      </Button>
    </div>
  );
}
