
export default function DropdownDemo() {
            return (
              <div
                className="w-full place-items-center"
                dangerouslySetInnerHTML={{
                  __html: 
`
<div class="dropdown" data-dui-placement="bottom-start">
  <button data-dui-toggle="dropdown" aria-expanded="false" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">
    Open
  </button>
  <div data-dui-role="menu" class="hidden mt-2 bg-white border border-stone-200 rounded-lg shadow-sm p-1 z-10">
    <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Team</a>
    <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Project</a>
    <div class="dropdown" data-dui-placement="right-start">
      <p data-dui-toggle="dropdown" aria-expanded="false" href="javascript:void(0)" class="block cursor-pointer px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md flex items-center">
        My Profile
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 ml-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </a>
      <div data-dui-role="menu" class="hidden mt-2 bg-white border border-stone-200 rounded-lg shadow-sm  p-1 z-10 w-max flex flex-col">
        <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Edit Profile</a>
        <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Change Password</a>
        <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Upgrade to PRO</a>
      </div>
    </div>
  </div>
</div>
`
                }}
              />
            );
          }