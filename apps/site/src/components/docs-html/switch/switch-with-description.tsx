export function SwitchWithDescription() {
  return (
    <div className="flex gap-2">
      <input
        id="switch-description"
        className="relative inline-block h-6 w-10 appearance-none rounded-full before:absolute before:left-0 before:top-0 before:inline-block before:h-full before:w-full before:rounded-full before:bg-surface before:transition-colors before:duration-200 before:ease-in after:absolute after:left-0.5 after:top-2/4 after:h-5 after:w-5 after:-translate-y-2/4 after:rounded-full after:bg-background after:transition-transform after:duration-200 after:ease-in checked:before:bg-primary checked:after:translate-x-[calc(100%-4px)] dark:after:bg-white"
        type="checkbox"
      />
      <label htmlFor="switch-description" className="-translate-y-1">
        <p className="font-sans text-base font-semibold text-black antialiased dark:text-white">
          Remember Me
        </p>
        <small className="font-sans text-sm text-foreground antialiased">
          You'll be able to login without password for 24 hours.
        </small>
      </label>
    </div>
  );
}
