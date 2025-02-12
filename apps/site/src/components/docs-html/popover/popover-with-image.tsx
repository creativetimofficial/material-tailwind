
export default function PopoverWithImage() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="min-h-80">
  <button type="button" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group" data-toggle="popover" data-placement="bottom" data-popover-class="bg-white w-8/12 md:w-4/12 text-slate-800 border border-slate-200 rounded-lg shadow-xl shadow-slate-950/[0.025] p-2 z-50"> More Info </button>
  <div data-popover-content class="hidden grid grid-cols-2">
    <div class="pr-2">
      <p class="font-sans text-base text-slate-800 dark:text-white mb-1 font-semibold">Material Tailwind</p>
      <small class="font-sans text-sm mb-4 block text-slate-500">Material Tailwind is an easy to use components library for Tailwind CSS and Material Design. It features multiple React and HTML components, all written with Tailwind CSS classes and Material Design guidelines.</small>
      <a href="#popover-with-image" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700 outline-none group">
        Read More 
        <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="ml-1.5 h-4 w-4 stroke-2">
          <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </a>
    </div>
    <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/mt-demo.jpg" alt="image" class="h-full w-full rounded-md object-cover">
  </div>
</div>
`
      }}
    />
  );
}
