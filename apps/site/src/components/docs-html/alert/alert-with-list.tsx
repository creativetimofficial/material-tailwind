export function AlertWithList() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div
        role="alert"
        className="relative flex w-full items-start rounded-md border border-transparent bg-primary/10 p-2 text-primary"
      >
        <span className="grid shrink-0 place-items-center p-1">
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-5 w-5"
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
        <div className="m-1.5 mt-0.5 w-full font-sans text-base leading-none">
          <p className="font-sans text-base text-inherit antialiased">
            Ensure that these requirements are met:
          </p>
          <ul className="ml-2 mt-2 list-inside list-disc space-y-1">
            <li className="list-item font-sans text-sm text-inherit antialiased">
              At least 10 characters (and up to 100 characters)
            </li>
            <li className="list-item font-sans text-sm text-inherit antialiased">
              At least one lowercase character
            </li>
            <li className="list-item font-sans text-sm text-inherit antialiased">
              Inclusion of at least one special character, e.g., ! @ # ?
            </li>
          </ul>
        </div>
      </div>
      <div
        role="alert"
        className="relative flex w-full items-start rounded-md border border-primary bg-transparent p-2 text-primary"
      >
        <span className="grid shrink-0 place-items-center p-1">
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-5 w-5"
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
        <div className="m-1.5 mt-0.5 w-full font-sans text-base leading-none">
          <p className="font-sans text-base text-inherit antialiased">
            Ensure that these requirements are met:
          </p>
          <ul className="ml-2 mt-2 list-inside list-disc space-y-1">
            <li className="list-item font-sans text-sm text-inherit antialiased">
              At least 10 characters (and up to 100 characters)
            </li>
            <li className="list-item font-sans text-sm text-inherit antialiased">
              At least one lowercase character
            </li>
            <li className="list-item font-sans text-sm text-inherit antialiased">
              Inclusion of at least one special character, e.g., ! @ # ?
            </li>
          </ul>
        </div>
      </div>
      <div
        role="alert"
        className="relative flex w-full items-start rounded-md border border-primary bg-primary p-2 text-primary-foreground"
      >
        <span className="grid shrink-0 place-items-center p-1">
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-5 w-5"
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
        <div className="m-1.5 mt-0.5 w-full font-sans text-base leading-none">
          <p className="font-sans text-base text-inherit antialiased">
            Ensure that these requirements are met:
          </p>
          <ul className="ml-2 mt-2 list-inside list-disc space-y-1">
            <li className="list-item font-sans text-sm text-inherit antialiased">
              At least 10 characters (and up to 100 characters)
            </li>
            <li className="list-item font-sans text-sm text-inherit antialiased">
              At least one lowercase character
            </li>
            <li className="list-item font-sans text-sm text-inherit antialiased">
              Inclusion of at least one special character, e.g., ! @ # ?
            </li>
          </ul>
        </div>
      </div>
      <div
        role="alert"
        className="relative flex w-full items-start rounded-md border border-primary bg-linear-to-tr from-primary-dark to-primary-light p-2 text-primary-foreground"
      >
        <span className="grid shrink-0 place-items-center p-1">
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-5 w-5"
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
        <div className="m-1.5 mt-0.5 w-full font-sans text-base leading-none">
          <p className="font-sans text-base text-inherit antialiased">
            Ensure that these requirements are met:
          </p>
          <ul className="ml-2 mt-2 list-inside list-disc space-y-1">
            <li className="list-item font-sans text-sm text-inherit antialiased">
              At least 10 characters (and up to 100 characters)
            </li>
            <li className="list-item font-sans text-sm text-inherit antialiased">
              At least one lowercase character
            </li>
            <li className="list-item font-sans text-sm text-inherit antialiased">
              Inclusion of at least one special character, e.g., ! @ # ?
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
