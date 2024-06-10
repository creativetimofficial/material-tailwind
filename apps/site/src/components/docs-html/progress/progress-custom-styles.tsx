export function ProgressCustomStyles() {
  return (
    <div className="block h-4 w-full overflow-hidden rounded-full border border-gray-900/10 bg-gray-900/5 p-1 dark:border-gray-800 dark:bg-gray-900">
      <div
        className="h-full rounded-full bg-primary"
        style={{ width: "50%" }}
      ></div>
    </div>
  );
}
