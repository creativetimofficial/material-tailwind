export function ProgressLabelOutside() {
  return (
    <div className="w-full space-y-2">
      <p className="flex items-center justify-between font-sans text-base font-semibold text-black antialiased dark:text-white">
        <span>Completed</span>
        <span>50%</span>
      </p>
      <div className="block h-4 w-full overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-none bg-primary"
          style={{ width: "50%" }}
        ></div>
      </div>
    </div>
  );
}
