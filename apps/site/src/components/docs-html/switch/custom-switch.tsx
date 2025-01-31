

export default function CustomSwitch() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<input class="relative inline-block h-6 w-10 appearance-none rounded-full before:absolute before:left-0 before:top-0 before:inline-block before:h-full before:w-full before:rounded-full before:bg-slate-200 before:transition-colors before:duration-200 before:ease-in after:absolute after:left-0.5 after:top-2/4 after:h-5 after:w-5 after:-translate-y-2/4 after:rounded-full after:bg-white after:shadow-sm after:shadow-black/10 after:transition-transform after:duration-200 after:ease-in checked:before:bg-[#2ec946] checked:after:translate-x-[calc(100%-4px)] dark:after:bg-white" type="checkbox" />
`
      }}
    />
  );
}
