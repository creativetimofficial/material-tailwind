export default function AlertWithList() {
  return (
    <div className="w-full"
      dangerouslySetInnerHTML={{
        __html: `
<div class="flex flex-col w-full gap-2">
  <div
    role="alert"
    class="relative flex items-start w-full p-2 border border-transparent rounded-md bg-primary/10 text-primary"
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
    <div class="m-1.5 mt-0.5 w-full font-sans text-base leading-none">
      <p class="font-sans text-base antialiased text-inherit">
        Ensure that these requirements are met:
      </p>
      <ul class="mt-2 ml-2 space-y-1 list-disc list-inside">
        <li class="font-sans text-sm antialiased list-item text-inherit">
          At least 10 characters (and up to 100 characters)
        </li>
        <li class="font-sans text-sm antialiased list-item text-inherit">
          At least one lowercase character
        </li>
        <li class="font-sans text-sm antialiased list-item text-inherit">
          Inclusion of at least one special character, e.g., ! @ # ?
        </li>
      </ul>
    </div>
  </div>
  <div
    role="alert"
    class="relative flex items-start w-full p-2 bg-transparent border rounded-md border-primary text-primary"
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
    <div class="m-1.5 mt-0.5 w-full font-sans text-base leading-none">
      <p class="font-sans text-base antialiased text-inherit">
        Ensure that these requirements are met:
      </p>
      <ul class="mt-2 ml-2 space-y-1 list-disc list-inside">
        <li class="font-sans text-sm antialiased list-item text-inherit">
          At least 10 characters (and up to 100 characters)
        </li>
        <li class="font-sans text-sm antialiased list-item text-inherit">
          At least one lowercase character
        </li>
        <li class="font-sans text-sm antialiased list-item text-inherit">
          Inclusion of at least one special character, e.g., ! @ # ?
        </li>
      </ul>
    </div>
  </div>
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
    <div class="m-1.5 mt-0.5 w-full font-sans text-base leading-none">
      <p class="font-sans text-base antialiased text-inherit">
        Ensure that these requirements are met:
      </p>
      <ul class="mt-2 ml-2 space-y-1 list-disc list-inside">
        <li class="font-sans text-sm antialiased list-item text-inherit">
          At least 10 characters (and up to 100 characters)
        </li>
        <li class="font-sans text-sm antialiased list-item text-inherit">
          At least one lowercase character
        </li>
        <li class="font-sans text-sm antialiased list-item text-inherit">
          Inclusion of at least one special character, e.g., ! @ # ?
        </li>
      </ul>
    </div>
  </div>
  <div
    role="alert"
    class="relative flex items-start w-full p-2 border rounded-md border-primary bg-gradient-to-tr from-primary-dark to-primary-light text-primary-foreground"
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
    <div class="m-1.5 mt-0.5 w-full font-sans text-base leading-none">
      <p class="font-sans text-base antialiased text-inherit">
        Ensure that these requirements are met:
      </p>
      <ul class="mt-2 ml-2 space-y-1 list-disc list-inside">
        <li class="font-sans text-sm antialiased list-item text-inherit">
          At least 10 characters (and up to 100 characters)
        </li>
        <li class="font-sans text-sm antialiased list-item text-inherit">
          At least one lowercase character
        </li>
        <li class="font-sans text-sm antialiased list-item text-inherit">
          Inclusion of at least one special character, e.g., ! @ # ?
        </li>
      </ul>
    </div>
  </div>
</div>
`,
      }}
    />
  );
}
