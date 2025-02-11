
export default function ListWithAvatar() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<ul class="flex flex-col gap-0.5 min-w-60">
  <li class="flex items-center cursor-pointer py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white data-[selected=true]:bg-surface data-[selected=true]:text-black dark:data-[selected=true]:text-white dark:bg-opacity-70"><span class="grid place-items-center shrink-0 me-2.5"><img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind/team-1.jpg" alt="profile-picture" class="inline-block object-cover object-center data-[shape=square]:rounded-none data-[shape=circular]:rounded-full data-[shape=rounded]:rounded-[current] w-11 h-11 rounded-md" data-shape="circular"/></span>
    <div>
      <p class="font-sans antialiased text-base text-slate-800 dark:text-white font-semibold">Alex Andrew</p><small class="font-sans antialiased text-sm text-slate-600">Software Engineer @ Material Tailwind</small>
    </div>
  </li>
  <li class="flex items-center cursor-pointer py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white data-[selected=true]:bg-surface data-[selected=true]:text-black dark:data-[selected=true]:text-white dark:bg-opacity-70"><span class="grid place-items-center shrink-0 me-2.5"><img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind/team-3.jpg" alt="profile-picture" class="inline-block object-cover object-center data-[shape=square]:rounded-none data-[shape=circular]:rounded-full data-[shape=rounded]:rounded-[current] w-11 h-11 rounded-md" data-shape="circular"/></span>
    <div>
      <p class="font-sans antialiased text-base text-slate-800 dark:text-white font-semibold">Alexander</p><small class="font-sans antialiased text-sm text-slate-600">Backend Developer @ Material Tailwind</small>
    </div>
  </li>
  <li class="flex items-center cursor-pointer py-1.5 px-2.5 rounded-md align-middle select-none font-sans transition-all duration-300 ease-in aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent text-slate-600 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 focus:bg-slate-200 focus:text-slate-800 dark:focus:text-white data-[selected=true]:bg-surface data-[selected=true]:text-black dark:data-[selected=true]:text-white dark:bg-opacity-70"><span class="grid place-items-center shrink-0 me-2.5"><img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/material-tailwind/team-2.jpg" alt="profile-picture" class="inline-block object-cover object-center data-[shape=square]:rounded-none data-[shape=circular]:rounded-full data-[shape=rounded]:rounded-[current] w-11 h-11 rounded-md" data-shape="circular"/></span>
    <div>
      <p class="font-sans antialiased text-base text-slate-800 dark:text-white font-semibold">Emma Willever</p><small class="font-sans antialiased text-sm text-slate-600">UI/UX Designer @ Material Tailwind</small>
    </div>
  </li>
</ul>
`
      }}
    />
  );
}
