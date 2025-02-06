

export default function SwitchColors() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="flex flex-wrap justify-center gap-4">
  <input class="relative inline-block h-6 w-10 appearance-none rounded-full before:absolute before:left-0 before:top-0 before:inline-block before:h-full before:w-full before:rounded-full before:bg-slate-200 before:transition-colors before:duration-200 before:ease-in after:absolute after:left-0.5 after:top-2/4 after:h-5 after:w-5 after:-translate-y-2/4 after:rounded-full after:bg-white after:transition-transform after:duration-200 after:ease-in checked:before:bg-slate-800 checked:after:translate-x-[calc(100%-4px)] dark:after:bg-white" type="checkbox" checked />
  <input class="relative inline-block h-6 w-10 appearance-none rounded-full before:absolute before:left-0 before:top-0 before:inline-block before:h-full before:w-full before:rounded-full before:bg-slate-200 before:transition-colors before:duration-200 before:ease-in after:absolute after:left-0.5 after:top-2/4 after:h-5 after:w-5 after:-translate-y-2/4 after:rounded-full after:bg-white after:transition-transform after:duration-200 after:ease-in checked:before:bg-slate-200 checked:after:translate-x-[calc(100%-4px)] dark:after:bg-white" type="checkbox" checked />
  <input class="relative inline-block h-6 w-10 appearance-none rounded-full before:absolute before:left-0 before:top-0 before:inline-block before:h-full before:w-full before:rounded-full before:bg-slate-200 before:transition-colors before:duration-200 before:ease-in after:absolute after:left-0.5 after:top-2/4 after:h-5 after:w-5 after:-translate-y-2/4 after:rounded-full after:bg-white after:transition-transform after:duration-200 after:ease-in checked:before:bg-blue-500 checked:after:translate-x-[calc(100%-4px)] dark:after:bg-white" type="checkbox" checked />
  <input class="relative inline-block h-6 w-10 appearance-none rounded-full before:absolute before:left-0 before:top-0 before:inline-block before:h-full before:w-full before:rounded-full before:bg-slate-200 before:transition-colors before:duration-200 before:ease-in after:absolute after:left-0.5 after:top-2/4 after:h-5 after:w-5 after:-translate-y-2/4 after:rounded-full after:bg-white after:transition-transform after:duration-200 after:ease-in checked:before:bg-green-500 checked:after:translate-x-[calc(100%-4px)] dark:after:bg-white" type="checkbox" checked />
  <input class="relative inline-block h-6 w-10 appearance-none rounded-full before:absolute before:left-0 before:top-0 before:inline-block before:h-full before:w-full before:rounded-full before:bg-slate-200 before:transition-colors before:duration-200 before:ease-in after:absolute after:left-0.5 after:top-2/4 after:h-5 after:w-5 after:-translate-y-2/4 after:rounded-full after:bg-white after:transition-transform after:duration-200 after:ease-in checked:before:bg-amber-500 checked:after:translate-x-[calc(100%-4px)] dark:after:bg-white" type="checkbox" checked />
  <input class="relative inline-block h-6 w-10 appearance-none rounded-full before:absolute before:left-0 before:top-0 before:inline-block before:h-full before:w-full before:rounded-full before:bg-slate-200 before:transition-colors before:duration-200 before:ease-in after:absolute after:left-0.5 after:top-2/4 after:h-5 after:w-5 after:-translate-y-2/4 after:rounded-full after:bg-white after:transition-transform after:duration-200 after:ease-in checked:before:bg-red-500 checked:after:translate-x-[calc(100%-4px)] dark:after:bg-white" type="checkbox" checked />
</div>

`
      }}
    />
  );
}
