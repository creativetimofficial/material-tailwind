
export default function DropdownDemo() {
            return (
              <div
                className="w-full place-items-center"
                dangerouslySetInnerHTML={{
                  __html: 
`
<div class="dropdown" data-placement="bottom-start">
  <button data-toggle="dropdown" aria-expanded="false" class="inline-flex select-none items-center justify-center rounded-md border border-slate-800 bg-slate-800 px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
    Open
  </button>
  <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-1 z-10">
    <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-md">Add Team</a>
    <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-md">Add Project</a>
    <div class="dropdown" data-placement="right-start">
      <p data-toggle="dropdown" aria-expanded="false" href="javascript:void(0)" class="block cursor-pointer px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-md flex items-center">
        My Profile
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 ml-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </a>
      <div data-role="menu" class="hidden mt-2 bg-white border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025]  p-1 z-10 w-max flex flex-col">
        <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Edit Profile</a>
        <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Change Password</a>
        <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-md">Upgrade to PRO</a>
      </div>
    </div>
  </div>
</div>

`
                }}
              />
            );
          }