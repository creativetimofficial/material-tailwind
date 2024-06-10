export function ProgressColors() {
  return (
    <div className="w-full space-y-4">
      <div className="block h-4 w-full overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-none bg-primary"
          style={{ width: "50%" }}
        ></div>
      </div>
      <div className="block h-4 w-full overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-none bg-secondary"
          style={{ width: "50%" }}
        ></div>
      </div>
      <div className="block h-4 w-full overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-none bg-info"
          style={{ width: "50%" }}
        ></div>
      </div>
      <div className="block h-4 w-full overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-none bg-success"
          style={{ width: "50%" }}
        ></div>
      </div>
      <div className="block h-4 w-full overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-none bg-warning"
          style={{ width: "50%" }}
        ></div>
      </div>
      <div className="block h-4 w-full overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-none bg-error"
          style={{ width: "50%" }}
        ></div>
      </div>
    </div>
  );
}
