export function ProgressLabelInside() {
  return (
    <div className="block h-6 w-full overflow-hidden rounded-full bg-surface">
      <div
        className="grid h-full place-items-center rounded-none bg-primary"
        style={{ width: "50%" }}
      >
        <small className="font-sans text-sm text-secondary antialiased">
          50% Completed
        </small>
      </div>
    </div>
  );
}
