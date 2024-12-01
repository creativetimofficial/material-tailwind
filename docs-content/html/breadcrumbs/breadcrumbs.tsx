export function BreadcrumbsDefault() {
  return (
    <nav aria-label="breadcrumb" className="w-max">
      <ol className="flex w-full flex-wrap items-center rounded-md bg-slate-50 px-4 py-2">
        <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
          <a href="#">Docs</a>
          <span className="pointer-events-none mx-2 text-slate-800">
            /
          </span>
        </li>
        <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
          <a href="#">Components</a>
          <span className="pointer-events-none mx-2 text-slate-800">
            /
          </span>
        </li>
        <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
          <a href="#">Breadcrumbs</a>
        </li>
      </ol>
    </nav>
  );
}
