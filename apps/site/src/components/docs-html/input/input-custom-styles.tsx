
export default function InputCustomStyles() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-72">
  <div class="relative w-full"><input placeholder="Username" type="text" class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success select-none data-[shape=pill]:rounded-full text-sm py-2 px-2.5 data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:ring-slate-800/10 focus:ring-slate-800/10 rounded-none border-0 border-b border-gray-400 pr-0.5 shadow-none ring-0 hover:border-gray-900 focus:border-gray-900 data-[icon-placement=start]:!pl-[26px] dark:border-gray-600 dark:hover:border-gray-50 dark:focus:border-gray-50 peer" data-error="false" data-success="false" data-shape="default" data-icon-placement="" /><span class="pointer-events-none absolute top-1/2 -translate-y-1/2 text-slate-600/70 peer-focus:text-slate-800 peer-focus:text-slate-800 dark:peer-hover:text-white dark:peer-focus:text-white transition-all duration-300 ease-in overflow-hidden w-5 h-5 data-[placement=end]:right-2.5 data-[placement=start]:left-px" data-error="false" data-success="false" data-placement="start"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-full w-full"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div>
</div>
`
      }}
    />
  );
}
