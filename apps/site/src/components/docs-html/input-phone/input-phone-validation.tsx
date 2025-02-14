
export default function InputWithValidation() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-72 space-y-6">
  <div>
    <div class="relative w-full">
      <label class="block mb-2 text-sm font-semibold antialiased text-slate-800">
        Phone Number
      </label>
      <input 
        type="tel"
        value="+1 123-456-7890"
        maxlength="16"
        title="Phone number format: +1 123-456-7890"
        placeholder="e.g., +1 123-456-7890"
        class="aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-red-500 data-[success=true]:border-green-500 text-sm rounded-md py-2 px-2.5 shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-red-500 hover:ring-red-500/10 focus:border-red-500 focus:ring-red-500/10 w-full peer"
        data-error="true"
        data-success="false"
        data-icon-placement=""
      />
      <small class="block font-sans antialiased text-sm text-red-500 ml-0.5 mt-1">
        Invalid phone number format
      </small>
    </div>
  </div>
  <div>
    <div class="relative w-full">
      <label class="block mb-2 text-sm font-semibold antialiased text-slate-800">
        Phone Number
      </label>
      <input
        type="tel"
        value="+1 123-456-7890"
        maxlength="16"
        title="Phone number format: +1 123-456-7890"
        placeholder="e.g., +1 123-456-7890"
        class="aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-red-500 data-[success=true]:border-green-500 text-sm rounded-md py-2 px-2.5 shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-green-500 hover:ring-green-500/10 focus:border-green-500 focus:ring-green-500/10 w-full peer"
        data-error="false"
        data-success="true"
        data-icon-placement=""
      />
      <small class="block font-sans antialiased text-sm text-green-500 ml-0.5 mt-1">
        Valid phone number format
      </small>
    </div>
  </div>
</div>`
      }}
    />
  );
}
