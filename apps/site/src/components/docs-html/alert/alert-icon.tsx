export function AlertIcon() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<div
  role="alert"
  class="relative flex items-start w-full p-2 border rounded-md border-primary bg-primary text-primary-foreground"
>
  <span class="grid p-1 shrink-0 place-items-center">
    <svg
      width="1.5em"
      height="1.5em"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      class="w-5 h-5"
    >
      <path
        d="M12 7L12 13"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M12 17.01L12.01 16.9989"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </span>
  <div class="m-1.5 w-full font-sans text-base leading-none">
    A simple alert for showing message.
  </div>
</div>
`,
      }}
    />
  );
}
