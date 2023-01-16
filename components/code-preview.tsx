import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Tabs,
  TabsHeader,
  Tab,
  Typography,
  Tooltip,
  IconButton,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  EyeIcon,
  CodeBracketIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import copyToClipboard from "utils/copy-to-clipboard";
import { v4 as uuidv4 } from "uuid";

export function CodePreview({ id, component, link, children }) {
  const codeRef = React.useRef(null);
  const { query } = useRouter();
  const [mode, setMode] = React.useState("preview");
  const [copied, setCopied] = React.useState(false);
  const [version, setVersion] = React.useState(query.slug[0]);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleCopy = () => {
    copyToClipboard(codeRef.current.innerText);
    setCopied(true);
  };

  return (
    <div
      id={id}
      className={`scroll-mt-64 rounded-xl border border-blue-gray-50 ${
        mode === "code" ? "bg-[#1e293b]" : "bg-[#f8fafc]"
      }`}
    >
      <div
        className={`flex items-center justify-between border-b border-blue-gray-50 p-1 ${
          mode === "code" ? "border-opacity-10" : ""
        }`}
      >
        <Tabs id={uuidv4()} value={mode} className="w-max overflow-visible">
          <TabsHeader
            className="bg-transparent"
            indicatorProps={{
              className: `shadow-none rounded-lg ${
                mode === "preview" ? "bg-blue-gray-500/10" : "bg-white/10"
              }`,
            }}
          >
            <Tab
              value="preview"
              className="pt-[6px] pb-[5px]"
              onClick={() => setMode("preview")}
            >
              <Typography
                variant="small"
                className={`flex w-[86px] items-center justify-center gap-2 text-center font-medium transition-colors ${
                  mode === "preview" ? "text-blue-gray-900" : "text-white/80"
                }`}
              >
                <EyeIcon strokeWidth={2} className="-mt-px h-4 w-4" />
                Preview
              </Typography>
            </Tab>
            <Tab
              value="code"
              className="pt-[6px] pb-[5px]"
              onClick={() => setMode("code")}
            >
              <Typography
                variant="small"
                className={`flex w-[86px] items-center justify-center gap-2 text-center font-medium transition-colors ${
                  mode === "code" ? "text-white" : "text-blue-gray-500"
                }`}
              >
                <CodeBracketIcon strokeWidth={2} className="-mt-px h-4 w-4" />
                Code
              </Typography>
            </Tab>
          </TabsHeader>
        </Tabs>
        <div className="flex items-center gap-2 px-1">
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
                  mode === "code" && isMenuOpen ? "bg-white/10 text-white" : ""
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
                  className={`py-1.5 px-2.5 text-xs font-medium ${
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
                  className={`py-1.5 px-2.5 text-xs font-medium ${
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
          <Tooltip
            content={copied ? "Copied" : "Copy"}
            placement="top"
            className="rounded-md py-1 px-2 text-xs font-medium"
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
        className={`${
          mode === "preview" ? "grid" : "hidden"
        } min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible`}
      >
        {component}
      </div>
      <div className={`code-preview ${mode === "code" ? "block" : "hidden"}`}>
        {React.cloneElement(children, { ref: codeRef })}
      </div>
    </div>
  );
}

export default CodePreview;
