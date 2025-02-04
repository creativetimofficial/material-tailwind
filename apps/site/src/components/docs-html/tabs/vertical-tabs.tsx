
export default function VerticalTabs() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row gap-2" data-orientation="vertical">
  <div role="tablist" class="flex shrink-0 w-max data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col rounded-md p-1 bg-slate-100 dark:bg-surface" aria-orientation="vertical" data-orientation="vertical"><button role="tab" class="inline-flex relative z-[2] py-1.5 px-3 items-center justify-center align-middle text-slate-800 dark:text-white select-none font-sans font-medium text-center text-sm aria-disabled:opacity-50 aria-disabled:pointer-events-none" data-active="true" aria-selected="true">HTML</button><button role="tab" class="inline-flex relative z-[2] py-1.5 px-3 items-center justify-center align-middle text-slate-800 dark:text-white select-none font-sans font-medium text-center text-sm aria-disabled:opacity-50 aria-disabled:pointer-events-none" data-active="false" aria-selected="false">React</button><button role="tab" class="inline-flex relative z-[2] py-1.5 px-3 items-center justify-center align-middle text-slate-800 dark:text-white select-none font-sans font-medium text-center text-sm aria-disabled:opacity-50 aria-disabled:pointer-events-none" data-active="false" aria-selected="false">Vue</button><button role="tab" class="inline-flex relative z-[2] py-1.5 px-3 items-center justify-center align-middle text-slate-800 dark:text-white select-none font-sans font-medium text-center text-sm aria-disabled:opacity-50 aria-disabled:pointer-events-none" data-active="false" aria-selected="false">Angular</button><button role="tab" class="inline-flex relative z-[2] py-1.5 px-3 items-center justify-center align-middle text-slate-800 dark:text-white select-none font-sans font-medium text-center text-sm aria-disabled:opacity-50 aria-disabled:pointer-events-none" data-active="false" aria-selected="false">Svelte</button><span style="width:0;height:0;left:0;top:0;position:absolute;z-index:1" class="bg-white rounded shadow-sm shadow-slate-800/10 transition-all duration-300 ease-in"></span></div>
  <div role="tabpanel" class="p-1 w-full block" data-active="true" data-orientation="vertical">It really matters and then like it really doesn&#x27;t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn&#x27;t matter.</div>
</div>
`
      }}
    />
  );
}
