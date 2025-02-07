export default function PopoverWithImage() {
            return (
              <div
                className="w-full place-items-center"
                dangerouslySetInnerHTML={{
                  __html: 
`
<div class="min-h-80">
  <button type="button" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased" data-dui-toggle="popover" data-dui-placement="bottom" data-dui-popover-class="bg-white w-8/12 text-stone-800 border border-stone-200 rounded-lg shadow-sm p-2 z-50"> More Info </button>
  <div data-dui-popover-content class="hidden grid grid-cols-2">
    <div>
      <p class="font-sans text-base text-stone-800 dark:text-white mb-1 font-semibold">David UI</p>
      <small class="font-sans text-sm mb-4 block text-stone-500">David UI is an easy to use components library for Tailwind CSS and Material Design. It features multiple React and HTML components, all written with Tailwind CSS classes and Material Design guidelines.</small>
      <a href="#popover-with-image" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">
        Read More 
        <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="ml-1.5 h-4 w-4 stroke-2">
          <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </a>
    </div>
    <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/mt-demo.jpg" alt="image" class="h-auto max-h-[220px] w-full rounded-[5px] object-cover">
  </div>
</div>
`
                }}
              />
            );
          }