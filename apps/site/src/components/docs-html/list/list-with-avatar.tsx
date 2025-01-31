

export default function ListWithAvatar() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<ul class="flex min-w-[240px] flex-col gap-0.5">
  <li class="flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-slate-600 transition-all duration-300 ease-in hover:bg-surface hover:text-black focus:bg-surface focus:text-black aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white"><span class="me-2.5 grid shrink-0 place-items-center"><img src="https://dub.sh/TdSBP0D" alt="profile-picture" class="inline-block h-11 w-11 rounded-full object-cover object-center"/></span>
    <div>
      <p class="font-sans text-base font-semibold text-slate-800 antialiased dark:text-white">Alex Andrew</p><small class="font-sans text-sm text-slate-600 antialiased">Software Engineer @ Material Tailwind</small>
    </div>
  </li>
  <li class="flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-slate-600 transition-all duration-300 ease-in hover:bg-surface hover:text-black focus:bg-surface focus:text-black aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white"><span class="me-2.5 grid shrink-0 place-items-center"><img src="https://dub.sh/rNFOKKJ" alt="profile-picture" class="inline-block h-11 w-11 rounded-full object-cover object-center"/></span>
    <div>
      <p class="font-sans text-base font-semibold text-slate-800 antialiased dark:text-white">Alexander</p><small class="font-sans text-sm text-slate-600 antialiased">Backend Developer @ Material Tailwind</small>
    </div>
  </li>
  <li class="flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-slate-600 transition-all duration-300 ease-in hover:bg-surface hover:text-black focus:bg-surface focus:text-black aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white"><span class="me-2.5 grid shrink-0 place-items-center"><img src="https://dub.sh/6i238JA" alt="profile-picture" class="inline-block h-11 w-11 rounded-full object-cover object-center"/></span>
    <div>
      <p class="font-sans text-base font-semibold text-slate-800 antialiased dark:text-white">Emma Willever</p><small class="font-sans text-sm text-slate-600 antialiased">UI/UX Designer @ Material Tailwind</small>
    </div>
  </li>
</ul>
`
      }}
    />
  );
}
