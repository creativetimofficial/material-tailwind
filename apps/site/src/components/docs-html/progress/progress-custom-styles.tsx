

export default function ProgressCustomStyles() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="block h-4 w-full overflow-hidden rounded-full border border-gray-900/10 bg-gray-900/5 p-1 dark:border-gray-800 dark:bg-gray-900">
  <div class="h-full rounded-full bg-slate-800" style="width:50%"></div>
</div>
`
      }}
    />
  );
}
