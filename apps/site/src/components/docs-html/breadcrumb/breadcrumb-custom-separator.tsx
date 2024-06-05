export function BreadcrumbCustomSeparator() {
  return (
    <nav className="flex flex-wrap items-center gap-1 p-1">
      <a
        href="/docs"
        className="inline-flex items-center gap-1.5 text-sm text-black transition-colors duration-300 ease-in hover:text-primary dark:text-white dark:hover:text-primary"
      >
        Docs
      </a>
      <span className="inline-block mx-1 text-sm text-black opacity-50 pointer-events-none select-none dark:text-white">
        -
      </span>
      <a
        href="/docs/components"
        className="inline-flex items-center gap-1.5 text-sm text-black transition-colors duration-300 ease-in hover:text-primary dark:text-white dark:hover:text-primary"
      >
        Components
      </a>
      <span className="inline-block mx-1 text-sm text-black opacity-50 pointer-events-none select-none dark:text-white">
        -
      </span>
      <a
        href="/docs/components/breadcrumb"
        className="inline-flex items-center gap-1.5 text-sm text-black transition-colors duration-300 ease-in hover:text-primary dark:text-white dark:hover:text-primary"
      >
        Breadcrumb
      </a>
    </nav>
  );
}
