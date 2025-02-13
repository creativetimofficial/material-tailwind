
export default function InputWithLabel() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-72 space-y-1">
  <label for="email" class="font-sans antialiased text-sm text-slate-800 dark:text-white font-semibold">
    Email
  </label>
  <div class="relative w-full">
    <input 
      id="email" 
      placeholder="someone@example.com" 
      type="email" 
      class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-red-500 data-[success=true]:border-green-500 text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 peer" 
      data-error="false" 
      data-success="false" 
      data-icon-placement="" 
    />
  </div>
</div>`
      }}
    />
  );
}
