export function AlertDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<div
  role="alert"
  class="relative flex items-start w-full p-2 border rounded-md border-primary bg-primary text-primary-foreground"
>
  <div class="m-1.5 w-full font-sans text-base leading-none">
    A simple alert for showing message.
  </div>
</div>
`,
      }}
    />
  );
}
