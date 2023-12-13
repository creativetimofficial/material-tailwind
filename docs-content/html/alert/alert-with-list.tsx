export function AlertWithList() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div
        role="alert"
        className="font-regular relative flex w-full rounded-lg bg-gray-900 px-4 py-4 text-base text-white"
      >
        <div className="shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            ></path>
          </svg>
        </div>
        <div className="ml-3 mr-12">
          <p className="block font-sans text-base font-medium leading-relaxed text-inherit antialiased">
            Ensure that these requirements are met:
          </p>
          <ul className="mt-2 ml-2 list-inside list-disc">
            <li>At least 10 characters (and up to 100 characters)</li>
            <li>At least one lowercase character</li>
            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
          </ul>
        </div>
      </div>
      <div
        role="alert"
        className="font-regular relative flex w-full rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 px-4 py-4 text-base text-white"
      >
        <div className="shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            ></path>
          </svg>
        </div>
        <div className="ml-3 mr-12">
          <p className="block font-sans text-base font-medium leading-relaxed text-inherit antialiased">
            Ensure that these requirements are met:
          </p>
          <ul className="mt-2 ml-2 list-inside list-disc">
            <li>At least 10 characters (and up to 100 characters)</li>
            <li>At least one lowercase character</li>
            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
          </ul>
        </div>
      </div>
      <div
        role="alert"
        className="font-regular relative flex w-full rounded-lg border border-gray-900 px-4 py-4 text-base text-gray-900"
      >
        <div className="shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="ml-3 mr-12">
          <p className="block font-sans text-base font-medium leading-relaxed text-inherit antialiased">
            Ensure that these requirements are met:
          </p>
          <ul className="mt-2 ml-2 list-inside list-disc">
            <li>At least 10 characters (and up to 100 characters)</li>
            <li>At least one lowercase character</li>
            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
          </ul>
        </div>
      </div>
      <div
        role="alert"
        className="font-regular relative flex w-full rounded-lg bg-gray-900/10 px-4 py-4 text-base text-gray-900"
      >
        <div className="shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="ml-3 mr-12">
          <p className="block font-sans text-base font-medium leading-relaxed text-inherit antialiased">
            Ensure that these requirements are met:
          </p>
          <ul className="mt-2 ml-2 list-inside list-disc">
            <li>At least 10 characters (and up to 100 characters)</li>
            <li>At least one lowercase character</li>
            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
