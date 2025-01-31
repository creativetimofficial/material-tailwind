
export default function DropdownPlacement() {
            return (
              <div
                className="w-full place-items-center"
                dangerouslySetInnerHTML={{
                  __html: 
`
<div class="grid grid-cols-3 gap-4 text-center">
  <!-- Top -->
  <div class="dropdown" data-dui-placement="top">
    <button data-dui-toggle="dropdown" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Top</button>
    <div data-dui-role="menu" class="hidden mt-2 bg-white border border-stone-200 rounded-lg shadow-sm p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">My Profile</a>
    </div>
  </div>
  <div class="dropdown" data-dui-placement="top-start">
    <button data-dui-toggle="dropdown" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Top Start</button>
    <div data-dui-role="menu" class="hidden mt-2 bg-white border border-stone-200 rounded-lg shadow-sm p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">My Profile</a>
    </div>
  </div>
  <div class="dropdown" data-dui-placement="top-end">
    <button data-dui-toggle="dropdown" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Top End</button>
    <div data-dui-role="menu" class="hidden mt-2 bg-white border border-stone-200 rounded-lg shadow-sm p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">My Profile</a>
    </div>
  </div>

  <!-- Right -->
  <div class="dropdown" data-dui-placement="right">
    <button data-dui-toggle="dropdown" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Right</button>
      <div data-dui-role="menu" class="hidden mt-2 bg-white border border-stone-200 rounded-lg shadow-sm p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">My Profile</a>
    </div>
  </div>
  <div class="dropdown" data-dui-placement="right-start">
    <button data-dui-toggle="dropdown" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Right Start</button>
    <div data-dui-role="menu" class="hidden mt-2 bg-white border border-stone-200 rounded-lg shadow-sm p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">My Profile</a>
    </div>
  </div>
  <div class="dropdown" data-dui-placement="right-end">
    <button data-dui-toggle="dropdown" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Right End</button>
    <div data-dui-role="menu" class="hidden mt-2 bg-white border border-stone-200 rounded-lg shadow-sm p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">My Profile</a>
    </div>
  </div>

  <!-- Bottom -->
  <div class="dropdown" data-dui-placement="bottom">
    <button data-dui-toggle="dropdown" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Bottom</button>
    <div data-dui-role="menu" class="hidden mt-2 bg-white border border-stone-200 rounded-lg shadow-sm p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">My Profile</a>
    </div>
  </div>
  <div class="dropdown" data-dui-placement="bottom-start">
    <button data-dui-toggle="dropdown" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Bottom Start</button>
    <div data-dui-role="menu" class="hidden mt-2 bg-white border border-stone-200 rounded-lg shadow-sm p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">My Profile</a>
    </div>
  </div>
  <div class="dropdown" data-dui-placement="bottom-end">
    <button data-dui-toggle="dropdown" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Bottom End</button>
    <div data-dui-role="menu" class="hidden mt-2 bg-white border border-stone-200 rounded-lg shadow-sm p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">My Profile</a>
    </div>
  </div>

  <!-- Left -->
  <div class="dropdown" data-dui-placement="left">
    <button data-dui-toggle="dropdown" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Left</button>
    <div data-dui-role="menu" class="hidden mt-2 bg-white border border-stone-200 rounded-lg shadow-sm p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">My Profile</a>
    </div>
  </div>
  <div class="dropdown" data-dui-placement="left-start">
    <button data-dui-toggle="dropdown" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Left Start</button>
    <div data-dui-role="menu" class="hidden mt-2 bg-white border border-stone-200 rounded-lg shadow-sm p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">My Profile</a>
    </div>
  </div>
  <div class="dropdown" data-dui-placement="left-end">
    <button data-dui-toggle="dropdown" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Left End</button>
    <div data-dui-role="menu" class="hidden mt-2 bg-white border border-stone-200 rounded-lg shadow-sm p-1 z-10">
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Team</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">Add Project</a>
      <a href="#" class="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 rounded-md">My Profile</a>
    </div>
  </div>
</div>
`
                }}
              />
            );
          }