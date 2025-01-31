

export default function BreadcrumbWithIcon() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<nav class="flex flex-wrap items-center gap-1 p-1"><a href="/" class="inline-flex items-center gap-1.5 text-sm text-slate-800 transition-colors duration-300 ease-in hover:text-primary dark:text-white dark:hover:text-primary"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-[18px] w-[18px]">
      <path d="M17 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M9 17H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg></a><span class="inline-block mx-1 text-sm text-slate-800 opacity-50 pointer-events-none select-none dark:text-white">/</span><a href="#" class="inline-flex items-center gap-1.5 text-sm text-slate-800 transition-colors duration-300 ease-in hover:text-primary dark:text-white dark:hover:text-primary">Components</a><span class="inline-block mx-1 text-sm text-slate-800 opacity-50 pointer-events-none select-none dark:text-white">/</span><a href="#" class="inline-flex items-center gap-1.5 text-sm text-slate-800 transition-colors duration-300 ease-in hover:text-primary dark:text-white dark:hover:text-primary">Breadcrumb</a></nav>
`
      }}
    />
  );
}
