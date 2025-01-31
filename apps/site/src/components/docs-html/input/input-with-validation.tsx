

export default function InputWithValidation() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="w-72 space-y-6">
  <div class="relative w-full rounded-md text-sm leading-none"><input placeholder="Input Error" class="peer h-full w-full select-none rounded-[inherit] border border-red-500 bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-error hover:ring-error/10 focus:border-error focus:outline-none focus:ring-error/10 dark:text-white" type="text" /><small class="mt-1 block font-sans text-sm text-red-500 antialiased">Something went wrong!</small></div>
  <div class="relative w-full rounded-md text-sm leading-none"><input placeholder="Input Success" class="peer h-full w-full select-none rounded-[inherit] border border-green-500 bg-transparent px-2.5 py-[8.5px] leading-[inherit] text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-success hover:ring-success/10 focus:border-success focus:outline-none focus:ring-success/10 dark:text-white" type="text" /><small class="mt-1 block font-sans text-sm text-green-500 antialiased">Congratulations 🎉</small></div>
</div>
`
      }}
    />
  );
}
