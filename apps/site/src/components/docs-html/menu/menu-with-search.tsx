
export default function MenuWithSearch() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="menu" data-placement="bottom-start">
  <button data-toggle="menu" aria-expanded="false" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"> Open </button>
  <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
    <div class="relative w-full mb-1">
      <input placeholder="Search..." type="text" class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 ring-transparent border border-slate-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 transition-all duration-300 ease-in peer" />
    </div>
    <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Team</a>
    <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Project</a>
    <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">My Profile</a>
  </div>
</div>`
      }}
    />
  );
}
