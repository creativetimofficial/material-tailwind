export function InputWithValidation() {
  return (
    <div className="w-72 space-y-6">
      <div className="relative w-full rounded-md text-sm leading-none">
        <input
          placeholder="Input Error"
          className="peer h-full w-full select-none rounded-[inherit] border border-error bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-error hover:ring-error/10 focus:border-error focus:outline-hidden focus:ring-error/10 dark:text-white"
          type="text"
        />
        <small className="mt-1 block font-sans text-sm text-error antialiased">
          Something went wrong!
        </small>
      </div>
      <div className="relative w-full rounded-md text-sm leading-none">
        <input
          placeholder="Input Success"
          className="peer h-full w-full select-none rounded-[inherit] border border-success bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-success hover:ring-success/10 focus:border-success focus:outline-hidden focus:ring-success/10 dark:text-white"
          type="text"
        />
        <small className="mt-1 block font-sans text-sm text-success antialiased">
          Congratulations 🎉
        </small>
      </div>
    </div>
  );
}
