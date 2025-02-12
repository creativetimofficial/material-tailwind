

export default function BreadcrumbDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<nav class="flex flex-wrap items-center gap-1 p-1">
    <a href="/docs" class="inline-flex items-center gap-1.5 text-sm text-slate-800 transition-colors duration-300 ease-in hover:text-slate-800 dark:text-white dark:hover:text-slate-800">
        Docs
    </a>
    <span class="inline-block mx-1 text-sm text-slate-800 opacity-50 pointer-events-none select-none dark:text-white">/</span>
    <a href="/docs/components" class="inline-flex items-center gap-1.5 text-sm text-slate-800 transition-colors duration-300 ease-in hover:text-slate-800 dark:text-white dark:hover:text-slate-800">
        Components
    </a>
    <span class="inline-block mx-1 text-sm text-slate-800 opacity-50 pointer-events-none select-none dark:text-white">/</span>
    <a href="/docs/components/breadcrumb" class="inline-flex items-center gap-1.5 text-sm text-slate-800 transition-colors duration-300 ease-in hover:text-slate-800 dark:text-white dark:hover:text-slate-800">
        Breadcrumb
    </a>
</nav>
`
      }}
    />
  );
}
