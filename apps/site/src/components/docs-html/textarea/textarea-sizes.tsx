

export default function TextareaSizes() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full space-y-4"><textarea rows="8" placeholder="Textarea Small" class="peer block w-full resize-none rounded-md border border-slate-200 bg-transparent p-1.5 text-sm leading-none text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:outline-none focus:ring-slate-800/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"></textarea><textarea rows="8" placeholder="Textarea Medium" class="peer block w-full resize-none rounded-md border border-slate-200 bg-transparent p-2.5 text-sm leading-none text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:outline-none focus:ring-slate-800/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"></textarea><textarea rows="8" placeholder="Textarea Large" class="peer block w-full resize-none rounded-lg border border-slate-200 bg-transparent p-3.5 text-base leading-none text-slate-800 outline-none ring-4 ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:outline-none focus:ring-slate-800/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"></textarea></div>
`
      }}
    />
  );
}
