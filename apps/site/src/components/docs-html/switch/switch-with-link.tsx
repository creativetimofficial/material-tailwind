export function SwitchWithLink() {
  return (
    <div className="flex items-center gap-2">
      <input
        id="switch-link"
        className="relative inline-block h-6 w-10 appearance-none rounded-full before:absolute before:left-0 before:top-0 before:inline-block before:h-full before:w-full before:rounded-full before:bg-surface before:transition-colors before:duration-200 before:ease-in after:absolute after:left-0.5 after:top-2/4 after:h-5 after:w-5 after:-translate-y-2/4 after:rounded-full after:bg-background after:transition-transform after:duration-200 after:ease-in checked:before:bg-primary checked:after:translate-x-[calc(100%-4px)] dark:after:bg-white"
        type="checkbox"
      />
      <label
        htmlFor="switch-link"
        className="flex gap-1 font-sans text-base text-foreground antialiased"
      >
        I agree with the
        <a href="#" className="font-sans text-base text-primary antialiased">
          terms and conditions
        </a>
      </label>
    </div>
  );
}
