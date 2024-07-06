export function BreadcrumbsCustomSeparator() {
  return (
    <nav aria-label="breadcrumb" className="w-max">
      <ol className="flex w-full flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 px-4 py-2">
        <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-light-blue-500">
          <a href="#" className="opacity-60">
            Docs
          </a>
          <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
            -
          </span>
        </li>
        <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-light-blue-500">
          <a href="#" className="opacity-60">
            Components
          </a>
          <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
            -
          </span>
        </li>
        <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-light-blue-500">
          <a href="#">Breadcrumbs</a>
        </li>
      </ol>
    </nav>
  );
}
