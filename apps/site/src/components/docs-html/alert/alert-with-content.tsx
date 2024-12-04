export default function AlertWithContent() {
  return (
    <div className="w-full"
      dangerouslySetInnerHTML={{
        __html: `
<div
  id="alert-content"
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
        d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
        fill="currentColor"
      ></path>
    </svg>
  </span>
  <div class="m-1.5 mt-0.5 w-full font-sans text-base leading-none">
    <p class="mb-1 font-sans text-base antialiased font-bold text-inherit">
      Success
    </p>
    <p class="font-sans text-base antialiased text-inherit">
      I don't know what that word means. I'm happy. But success, that goes
      back to what in somebody's eyes success means. For me, success is
      inner peace. That's a good day for me.
    </p>
  </div>
  <button
    id="content-close-trigger"
    class="outline-none"
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      class="w-5 h-5 m-1 stroke-2"
    >
      <path
        d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </button>
</div>

<!-- script that runs the alert dismiss functionality -->
<script>
  const alert = document.querySelector("#alert-content");
  const alertDismissTrigger = document.querySelector(
    "#content-close-trigger",
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
