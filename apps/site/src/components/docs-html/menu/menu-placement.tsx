
export default function MenuPlacement() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="grid grid-cols-3 gap-4 text-center">
  <!-- Top -->
  <div class="menu" data-placement="top">
    <button data-toggle="menu" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Top</button>
    <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">My Profile</a>
    </div>
  </div>
  <div class="menu" data-placement="top-start">
    <button data-toggle="menu" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Top Start</button>
    <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">My Profile</a>
    </div>
  </div>
  <div class="menu" data-placement="top-end">
    <button data-toggle="menu" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Top End</button>
    <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">My Profile</a>
    </div>
  </div>

  <!-- Right -->
  <div class="menu" data-placement="right">
    <button data-toggle="menu" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Right</button>
      <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">My Profile</a>
    </div>
  </div>
  <div class="menu" data-placement="right-start">
    <button data-toggle="menu" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Right Start</button>
    <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">My Profile</a>
    </div>
  </div>
  <div class="menu" data-placement="right-end">
    <button data-toggle="menu" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Right End</button>
    <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">My Profile</a>
    </div>
  </div>

  <!-- Bottom -->
  <div class="menu" data-placement="bottom">
    <button data-toggle="menu" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Bottom</button>
    <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">My Profile</a>
    </div>
  </div>
  <div class="menu" data-placement="bottom-start">
    <button data-toggle="menu" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Bottom Start</button>
    <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">My Profile</a>
    </div>
  </div>
  <div class="menu" data-placement="bottom-end">
    <button data-toggle="menu" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Bottom End</button>
    <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">My Profile</a>
    </div>
  </div>

  <!-- Left -->
  <div class="menu" data-placement="left">
    <button data-toggle="menu" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Left</button>
    <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">My Profile</a>
    </div>
  </div>
  <div class="menu" data-placement="left-start">
    <button data-toggle="menu" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Left Start</button>
    <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">My Profile</a>
    </div>
  </div>
  <div class="menu" data-placement="left-end">
    <button data-toggle="menu" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">Left End</button>
    <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">My Profile</a>
    </div>
  </div>
</div>`
      }}
    />
  );
}
