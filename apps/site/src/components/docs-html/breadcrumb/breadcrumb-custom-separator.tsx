

export default function BreadcrumbCustomSeparator() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<nav class="flex flex-wrap items-center gap-1 p-1"><a href="/docs" class="inline-flex items-center gap-1.5 text-sm text-slate-800 transition-colors duration-300 ease-in hover:text-primary dark:text-white dark:hover:text-primary">Docs</a><span class="inline-block mx-1 text-sm text-slate-800 opacity-50 pointer-events-none select-none dark:text-white">-</span><a href="/docs/components" class="inline-flex items-center gap-1.5 text-sm text-slate-800 transition-colors duration-300 ease-in hover:text-primary dark:text-white dark:hover:text-primary">Components</a><span class="inline-block mx-1 text-sm text-slate-800 opacity-50 pointer-events-none select-none dark:text-white">-</span><a href="/docs/components/breadcrumb" class="inline-flex items-center gap-1.5 text-sm text-slate-800 transition-colors duration-300 ease-in hover:text-primary dark:text-white dark:hover:text-primary">Breadcrumb</a></nav>
`
      }}
    />
  );
}
