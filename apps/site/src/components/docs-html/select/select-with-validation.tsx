
export default function SelectWithValidation() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex w-72 flex-col items-center gap-4">
  <div class="w-full"><button tabindex="0" type="button" class="flex items-center gap-4 justify-between h-max w-full outline-none focus:outline-none text-slate-600 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success select-none text-start data-[shape=pill]:rounded-full [&amp;_data-slot=placeholder]:text-foreground/60 text-sm rounded-md py-2 px-2.5 ring shadow-sm hover:border-error hover:ring-error/10 focus:border-error focus:ring-error/10 data-[open=true]:border-error data-[open=true]:ring-error/10" data-open="false" data-error="true" data-success="false" aria-expanded="false" aria-haspopup="listbox" role="combobox"><span data-slot="placeholder">Select Version</span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-[1em] w-[1em] translate-x-0.5 stroke-[1.5]">
        <path d="M17 8L12 3L7 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M17 16L12 21L7 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg></button><input readonly="" style="display:none" value="" /><small class="font-sans antialiased text-sm text-red-500 mt-1 block">Something went wrong!</small></div>
  <div class="w-full"><button tabindex="0" type="button" class="flex items-center gap-4 justify-between h-max w-full outline-none focus:outline-none text-slate-600 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success select-none text-start data-[shape=pill]:rounded-full [&amp;_data-slot=placeholder]:text-foreground/60 text-sm rounded-md py-2 px-2.5 ring shadow-sm hover:border-success hover:ring-success/10 focus:border-success focus:ring-success/10 data-[open=true]:border-success data-[open=true]:ring-success/10" data-open="false" data-error="false" data-success="true" aria-expanded="false" aria-haspopup="listbox" role="combobox"><span data-slot="placeholder">Select Version</span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-[1em] w-[1em] translate-x-0.5 stroke-[1.5]">
        <path d="M17 8L12 3L7 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M17 16L12 21L7 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg></button><input readonly="" style="display:none" value="" /><small class="font-sans antialiased text-sm text-green-500 mt-1 block">Congratulations 🎉</small></div>
</div>
`
      }}
    />
  );
}
