

export default function SimplePagination() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex items-center gap-2">
  <button class="inline-grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:border-slate-600/10 hover:bg-slate-200/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
    <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 stroke-2">
      <path d="M15 6L9 12L15 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </button>
  <p class="flex items-center gap-1 text-sm text-slate-600 antialiased">
    Page
    <span class="text-sm font-semibold text-slate-800 antialiased dark:text-white">2</span>
    of
    <span class="text-sm font-semibold text-slate-800 antialiased dark:text-white">10</span>
  </p>
  <button class="inline-grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle text-sm font-medium leading-none text-slate-800 transition-all duration-300 ease-in hover:border-slate-600/10 hover:bg-slate-200/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
    <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-4 w-4 stroke-2">
      <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </button>
</div>
`
      }}
    />
  );
}
