

export default function TextareaWithLabel() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full space-y-1.5">
  <label for="message" class="font-sans text-sm font-semibold text-slate-800 antialiased dark:text-white">Message</label>
  <textarea rows="8" id="message" placeholder="Your message..." class="peer block w-full resize-none rounded-md border border-slate-200 bg-transparent p-2.5 text-sm leading-none text-slate-800 outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:outline-none focus:ring-slate-800/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"></textarea>
</div>
`
      }}
    />
  );
}
