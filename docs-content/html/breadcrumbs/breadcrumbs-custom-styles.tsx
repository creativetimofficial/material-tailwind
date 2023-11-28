export function BreadcrumbsCustomStyles() {
  return (
    <nav aria-label="breadcrumb" className="w-max">
      <ol className="flex w-full flex-wrap items-center rounded-full border border-white bg-blue-gray-50 bg-opacity-60 bg-gradient-to-tr from-gray-900 to-gray-800 p-1">
        <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-light-blue-500">
          <a
            href="#"
            className="rounded-full bg-white px-3 py-1 font-medium text-gray-900"
          >
            Docs
          </a>
          <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </span>
        </li>
        <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-light-blue-500">
          <a
            href="#"
            className="rounded-full bg-white px-3 py-1 font-medium text-gray-900"
          >
            Components
          </a>
          <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </span>
        </li>
        <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-light-blue-500">
          <a
            href="#"
            className="rounded-full bg-white px-3 py-1 font-medium text-gray-900"
          >
            Breadcrumbs
          </a>
        </li>
      </ol>
    </nav>
  );
}
