

export default function ListWithLink() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<ul class="flex min-w-[240px] flex-col gap-0.5"><a href="#list-with-link" class="flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-slate-600 transition-all duration-300 ease-in hover:bg-surface hover:text-black focus:bg-surface focus:text-black dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white">Inbox</a><a href="#list-with-link" class="flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-slate-600 transition-all duration-300 ease-in hover:bg-surface hover:text-black focus:bg-surface focus:text-black dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white">Trash</a><a href="#list-with-link" class="flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-slate-600 transition-all duration-300 ease-in hover:bg-surface hover:text-black focus:bg-surface focus:text-black dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white">Settings</a></ul>
`
      }}
    />
  );
}
