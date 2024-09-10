export function BreadcrumbsCustomStyles() {
  return (
    <nav aria-label="breadcrumb" className="w-max">
      <ol className="flex w-full flex-wrap items-center rounded-full border border-white bg-slate-800 p-1">
        <li className="flex cursor-pointer items-center text-sm text-white transition-colors duration-300">
          <a
            href="#"
            className="px-3 py-1 hover:underline"
          >
            Docs
          </a>
          <span className="pointer-events-none mx-2 text-white">
            -
          </span>
        </li>
        <li className="flex cursor-pointer items-center text-sm text-white transition-colors duration-300">
          <a
            href="#"
            className="px-3 py-1 hover:underline"
          >
            Components
          </a>
          <span className="pointer-events-none mx-2 text-white">
            -
          </span>
        </li>
        <li className="flex cursor-pointer items-center text-sm text-white transition-colors duration-300">
          <a
            href="#"
            className="px-3 py-1 hover:underline"
          >
            Breadcrumbs
          </a>
        </li>
      </ol>
    </nav>
  );
}
