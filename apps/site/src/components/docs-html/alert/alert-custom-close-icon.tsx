export function AlertCustomCloseIcon() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<div
  id="alert2"
  role="alert"
  class="relative flex items-start w-full p-2 border rounded-md border-primary bg-primary text-primary-foreground"
>
  <span class="grid p-1 shrink-0 place-items-center">
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      class="w-5 h-5"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V7C11.25 6.58579 11.5858 6.25 12 6.25ZM12.5675 17.5008C12.8446 17.1929 12.8196 16.7187 12.5117 16.4416C12.2038 16.1645 11.7296 16.1894 11.4525 16.4973L11.4425 16.5084C11.1654 16.8163 11.1904 17.2905 11.4983 17.5676C11.8062 17.8447 12.2804 17.8197 12.5575 17.5119L12.5675 17.5008Z"
        fill="currentColor"
      ></path>
    </svg>
  </span>
  <div class="m-1.5 w-full font-sans text-base leading-none">
    Sorry, something went wrong please try again.
  </div>
  <button
    id="alert-close-trigger"
    class="inline-flex select-none items-center justify-center rounded-md border border-primary bg-primary px-2.5 py-1.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light"
  >
    Close
  </button>
</div>

<script>
  const alert = document.querySelector("#alert2");
  const alertDismissTrigger = document.querySelector(
    "#alert-close-trigger",
  );

  if (alert && alertDismissTrigger) {
    alertDismissTrigger.addEventListener("click", () => {
      alert.remove();
    });
  }
</script>
        `
      }}
    />
  );
}
