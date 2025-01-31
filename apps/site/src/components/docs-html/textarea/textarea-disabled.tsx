

export default function TextareaDisabled() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<textarea rows="8" disabled="" placeholder="Message here..." class="peer pointer-events-none block w-full resize-none rounded-md border border-slate-200 bg-transparent p-2.5 text-sm leading-none text-slate-800 opacity-50 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:outline-none focus:ring-slate-800/10 dark:text-white"></textarea>
`
      }}
    />
  );
}
