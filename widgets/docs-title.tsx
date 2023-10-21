import { HashtagIcon } from "@heroicons/react/24/outline";

export function DocsTitle({ children, href }) {
  return (
    <div id={href} className="group relative -ml-4 flex scroll-mt-40 items-center pl-4">
      <a
        href={`#${href}`}
        className="absolute z-50 -ml-10 mb-2.5 rounded-md border border-blue-gray-50 bg-blue-gray-50/50 p-1 opacity-0 hover:opacity-100 group-hover:opacity-100"
      >
        <HashtagIcon className="pointer-events-none h-3.5 w-3.5 rounded-lg" strokeWidth={2.5} />
      </a>
      {children}
    </div>
  );
}

export default DocsTitle;
