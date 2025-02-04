
export default function SelectDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<button tabindex="0" type="button" class="flex items-center gap-4 justify-between h-max outline-none focus:outline-none text-slate-600 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success select-none text-start data-[shape=pill]:rounded-full [&amp;_data-slot=placeholder]:text-foreground/60 text-sm rounded-md py-2 px-2.5 ring shadow-sm hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 data-[open=true]:border-primary data-[open=true]:ring-primary/10 w-72" data-open="false" data-error="false" data-success="false" aria-expanded="false" aria-haspopup="listbox" role="combobox"><span data-slot="placeholder">Select Version</span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-[1em] w-[1em] translate-x-0.5 stroke-[1.5]">
    <path d="M17 8L12 3L7 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M17 16L12 21L7 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg></button><input readonly="" style="display:none" value="" />
`
      }}
    />
  );
}
