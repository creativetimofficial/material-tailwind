

export default function ListWithSelectedItem() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<ul class="flex min-w-[240px] flex-col gap-0.5">
  <li class="flex select-none items-center rounded-md bg-slate-200 px-2.5 py-1.5 align-middle font-sans text-slate-800 transition-all duration-300 ease-in focus:bg-surface focus:text-black aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:bg-opacity-70 dark:text-white dark:focus:text-white">Inbox</li>
  <li class="flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-slate-600 transition-all duration-300 ease-in hover:bg-surface hover:text-black focus:bg-surface focus:text-black aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white">Trash</li>
  <li class="flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-slate-600 transition-all duration-300 ease-in hover:bg-surface hover:text-black focus:bg-surface focus:text-black aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white">Settings</li>
</ul>
`
      }}
    />
  );
}
