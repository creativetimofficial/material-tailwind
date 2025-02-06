

export default function TextareaWithValidation() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<<div class="w-full space-y-6">
  <div class="w-full space-y-1">
    <textarea rows="8" placeholder="Textarea Error" class="peer block w-full resize-none rounded-md border border-red-500 bg-transparent p-2.5 text-sm leading-none text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-error hover:ring-error/10 focus:border-error focus:outline-none focus:ring-error/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"></textarea>
    <small class="font-sans text-sm text-red-500 antialiased">Something went wrong!</small>
  </div>
  
  <div class="w-full space-y-1">
    <textarea rows="8" placeholder="Textarea Success" class="peer block w-full resize-none rounded-md border border-green-500 bg-transparent p-2.5 text-sm leading-none text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-success hover:ring-success/10 focus:border-success focus:outline-none focus:ring-success/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"></textarea>
    <small class="font-sans text-sm text-green-500 antialiased">Congratulations 🎉</small>
  </div>
</div>
`
      }}
    />
  );
}
