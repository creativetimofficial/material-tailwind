export function ProgressSizes() {
  return (
    <div className="w-full space-y-6">
      <div className="block h-2 w-full overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-none bg-primary"
          style={{ width: "50%" }}
        ></div>
      </div>
      <div className="block h-4 w-full overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-none bg-primary"
          style={{ width: "50%" }}
        ></div>
      </div>
      <div className="block h-6 w-full overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-none bg-primary"
          style={{ width: "50%" }}
        ></div>
      </div>
    </div>
  );
}
