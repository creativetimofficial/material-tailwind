import { SearchButton } from "components/search";

export default function Test() {
  return (
    <div className="p-24">
      <div className="pointer-events-auto relative w-96 bg-white dark:bg-blue-gray-900">
        <SearchButton className="dark:highlight-white/5 hidden w-full items-center rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-blue-gray-400 shadow-sm ring-1 ring-blue-gray-900/10 hover:ring-blue-gray-300 dark:bg-blue-gray-800 dark:hover:bg-blue-gray-700 lg:flex">
          {({ actionKey }) => (
            <>
              <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-3 flex-none">
                <path
                  d="m19 19-3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="11"
                  cy="11"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Quick search...
              {actionKey && (
                <span className="ml-auto flex-none pl-3 text-xs font-semibold">
                  {actionKey[0]}K
                </span>
              )}
            </>
          )}
        </SearchButton>
      </div>
    </div>
  );
}
