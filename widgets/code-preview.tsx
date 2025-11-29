import React from "react";
import { Tooltip, IconButton } from "@material-tailwind/react";
import {
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import copyToClipboard from "utils/copy-to-clipboard";

export function CodePreview({
  id,
  component,
  link,
  children,
  className,
  noPadding,
}) {
  const codeRef = React.useRef(null);
  const [mode, setMode] = React.useState("preview");
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    copyToClipboard(codeRef.current.innerText);
    setCopied(true);
  };

  return (
    <div
      id={id}
      className={`scroll-mt-64 overflow-hidden rounded-xl border border-blue-gray-50 ${
        mode === "code" ? "bg-[#1e293b]" : "bg-white"
      } ${className || ""}`}
    >
      <div
        className={`flex items-center justify-between border-b border-blue-gray-50 p-1 ${
          mode === "code" ? "border-opacity-10" : ""
        }`}
      >
        <div className="flex w-full items-center justify-end gap-2">
          {/* {link && (
            <Menu open={isMenuOpen} handler={setIsMenuOpen}>
              <MenuHandler>
                <Button
                  variant="text"
                  size="sm"
                  color={mode === "code" ? "white" : "blue-gray"}
                  className={`flex items-center gap-2 px-3 ${
                    mode === "code"
                      ? "text-white/80 hover:text-white"
                      : "hover:text-blue-gray-900"
                  } ${
                    mode === "code" && isMenuOpen
                      ? "bg-white/10 text-white"
                      : ""
                  } ${
                    mode === "preview" && isMenuOpen
                      ? "bg-blue-gray-500/10 text-blue-gray-900"
                      : ""
                  }`}
                >
                  {version}
                  <ChevronDownIcon
                    strokeWidth={4}
                    className={`h-2.5 w-2.5 transform transition-transform ${
                      isMenuOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="flex min-w-[100px] flex-col gap-1 rounded-lg p-1.5">
                <Link href={`/docs/html/${link}`}>
                  <MenuItem
                    className={`px-2.5 py-1.5 text-xs font-medium ${
                      version === "html"
                        ? "bg-blue-gray-50/80 text-blue-gray-900"
                        : ""
                    }`}
                    onClick={() => setVersion("html")}
                  >
                    HTML
                  </MenuItem>
                </Link>
                <Link href={`/docs/react/${link}`}>
                  <MenuItem
                    className={`px-2.5 py-1.5 text-xs font-medium ${
                      version === "react"
                        ? "bg-blue-gray-50/80 text-blue-gray-900"
                        : ""
                    }`}
                    onClick={() => setVersion("react")}
                  >
                    React
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          )} */}
          <Tooltip
            content={copied ? "Copied" : "Copy"}
            placement="top"
            className="rounded-md px-2 py-1 text-xs font-medium"
          >
            <IconButton
              type="button"
              variant="text"
              size="sm"
              color={mode === "code" ? "white" : "blue-gray"}
              className={
                mode === "code"
                  ? "text-white/80 hover:text-white"
                  : "hover:text-blue-gray-900"
              }
              onClick={handleCopy}
              onMouseLeave={() => setCopied(false)}
            >
              {copied ? (
                <ClipboardDocumentCheckIcon
                  className="h-5 w-5"
                  strokeWidth={1.5}
                />
              ) : (
                <ClipboardDocumentListIcon
                  className="h-5 w-5"
                  strokeWidth={1.5}
                />
              )}
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div
        className={`grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible ${
          noPadding ? "" : "p-6"
        }`}
      >
        {component}
      </div>
      <div className="code-preview block max-h-[40rem] overflow-scroll rounded-b-xl">
        {React.cloneElement(children, { ref: codeRef })}
      </div>
    </div>
  );
}

export default CodePreview;
