

export default function SwitchWithDescription() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="flex gap-2">
    <input id="switch-description" class="relative inline-block h-6 w-10 appearance-none rounded-full before:absolute before:left-0 before:top-0 before:inline-block before:h-full before:w-full before:rounded-full before:bg-slate-200 before:transition-colors before:duration-200 before:ease-in after:absolute after:left-0.5 after:top-2/4 after:h-5 after:w-5 after:-translate-y-2/4 after:rounded-full after:bg-white after:transition-transform after:duration-200 after:ease-in checked:before:bg-slate-800 checked:after:translate-x-[calc(100%-4px)] dark:after:bg-white" type="checkbox" />
    <label for="switch-description" class="-translate-y-1">
      <p class="font-sans text-base font-semibold text-slate-800 antialiased dark:text-white">Remember Me</p>
      <small class="font-sans text-sm text-slate-600 antialiased">You&#x27;ll be able to login without password for 24 hours.</small>
    </label>
</div>
`
      }}
    />
  );
}
