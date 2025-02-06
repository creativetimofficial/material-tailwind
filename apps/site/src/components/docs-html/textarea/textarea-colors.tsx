

export default function TextareaColors() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full space-y-4">
  <textarea rows="8" placeholder="Textarea Primary" class="peer block w-full resize-none rounded-md border border-slate-200 bg-transparent p-2.5 text-sm leading-none text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:outline-none focus:ring-slate-800/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"></textarea>
  <textarea rows="8" placeholder="Textarea Secondary" class="peer block w-full resize-none rounded-md border border-slate-200 bg-transparent p-2.5 text-sm leading-none text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-slate-500 hover:ring-secondary/10 focus:border-secondary focus:outline-none focus:ring-secondary/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"></textarea>
  <textarea rows="8" placeholder="Textarea Info" class="peer block w-full resize-none rounded-md border border-slate-200 bg-transparent p-2.5 text-sm leading-none text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-info hover:ring-info/10 focus:border-info focus:outline-none focus:ring-info/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"></textarea>
  <textarea rows="8" placeholder="Textarea Success" class="peer block w-full resize-none rounded-md border border-slate-200 bg-transparent p-2.5 text-sm leading-none text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-success hover:ring-success/10 focus:border-success focus:outline-none focus:ring-success/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"></textarea>
  <textarea rows="8" placeholder="Textarea Warning" class="peer block w-full resize-none rounded-md border border-slate-200 bg-transparent p-2.5 text-sm leading-none text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-warning hover:ring-warning/10 focus:border-warning focus:outline-none focus:ring-warning/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"></textarea>
  <textarea rows="8" placeholder="Textarea Error" class="peer block w-full resize-none rounded-md border border-slate-200 bg-transparent p-2.5 text-sm leading-none text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-error hover:ring-error/10 focus:border-error focus:outline-none focus:ring-error/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"></textarea>
</div>

`
      }}
    />
  );
}
