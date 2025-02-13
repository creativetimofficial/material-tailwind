
export default function InputColors() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-72 space-y-4">
  <div class="relative w-full">
    <input type="text" class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-red-500 data-[success=true]:border-green-500 text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 peer" data-error="false" data-success="false" data-icon-placement="" placeholder="Input Primary" />
  </div>
  <div class="relative w-full">
    <input type="text" class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-red-500 data-[success=true]:border-green-500 text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-slate-500 hover:ring-slate-200/10 focus:border-secondary focus:ring-slate-200/10 peer" data-error="false" data-success="false" data-icon-placement="" placeholder="Input Secondary" />
  </div>
  <div class="relative w-full">
    <input type="text" class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-red-500 data-[success=true]:border-green-500 text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-blue-500 hover:ring-blue-500/10 focus:border-blue-500 focus:ring-blue-500/10 peer" data-error="false" data-success="false" data-icon-placement="" placeholder="Input Info" />
  </div>
  <div class="relative w-full">
    <input type="text" class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-red-500 data-[success=true]:border-green-500 text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-green-500 hover:ring-green-500/10 focus:border-green-500 focus:ring-green-500/10 peer" data-error="false" data-success="false" data-icon-placement="" placeholder="Input Success" />
  </div>
  <div class="relative w-full">
    <input type="text" class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-red-500 data-[success=true]:border-green-500 text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-amber-500 hover:ring-amber-500/10 focus:border-amber-500 focus:ring-amber-500/10 peer" data-error="false" data-success="false" data-icon-placement="" placeholder="Input Warning" />
  </div>
  <div class="relative w-full">
    <input type="text" class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-red-500 data-[success=true]:border-green-500 text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-red-500 hover:ring-red/10 focus:border-red-500 focus:ring-red-500/10 peer" data-error="false" data-success="false" data-icon-placement="" placeholder="Input Error" />
  </div>
</div>`
      }}
    />
  );
}
