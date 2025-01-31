

export default function GalleryWithTab() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex flex-col gap-2">
  <div role="tablist" class="flex w-full shrink-0 flex-row rounded-md bg-slate-100 p-1 dark:bg-surface"><button role="tab" class="relative z-[2] inline-flex w-full select-none items-center justify-center px-4 py-1.5 text-center align-middle font-sans font-medium text-slate-800 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-white">HTML</button><button role="tab" class="relative z-[2] inline-flex w-full select-none items-center justify-center px-4 py-1.5 text-center align-middle font-sans font-medium text-slate-800 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-white">React</button><button role="tab" class="relative z-[2] inline-flex w-full select-none items-center justify-center px-4 py-1.5 text-center align-middle font-sans font-medium text-slate-800 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-white">Vue</button><button role="tab" class="relative z-[2] inline-flex w-full select-none items-center justify-center px-4 py-1.5 text-center align-middle font-sans font-medium text-slate-800 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-white">Angular</button><button role="tab" class="relative z-[2] inline-flex w-full select-none items-center justify-center px-4 py-1.5 text-center align-middle font-sans font-medium text-slate-800 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-white">Svelte</button><span class="rounded bg-white shadow-sm shadow-black/10 transition-all duration-300 ease-in"></span></div>
  <div role="tabpanel" class="grid w-full grid-cols-2 gap-4 p-1 md:grid-cols-3" data-active="true">
    <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80" alt="image-photo" /></div>
    <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80" alt="image-photo" /></div>
    <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80" alt="image-photo" /></div>
    <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg" alt="image-photo" /></div>
    <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg" alt="image-photo" /></div>
    <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80" alt="image-photo" /></div>
  </div>
</div>
`
      }}
    />
  );
}
