export function ListDemo() {
  return (
    <ul className="flex min-w-[240px] flex-col gap-0.5">
      <li className="flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-foreground transition-all duration-300 ease-in hover:bg-surface hover:text-black focus:bg-surface focus:text-black dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white">
        Inbox
      </li>
      <li className="flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-foreground transition-all duration-300 ease-in hover:bg-surface hover:text-black focus:bg-surface focus:text-black dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white">
        Trash
      </li>
      <li className="flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-foreground transition-all duration-300 ease-in hover:bg-surface hover:text-black focus:bg-surface focus:text-black dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white">
        Settings
      </li>
    </ul>
  );
}
