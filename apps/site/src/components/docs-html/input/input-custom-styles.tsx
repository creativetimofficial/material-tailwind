export function InputCustomStyles() {
  return (
    <div className="relative w-72 rounded-md text-sm leading-none">
      <input
        placeholder="Username"
        className="peer h-full w-full select-none rounded-none border-0 border-b border-gray-400 bg-transparent px-2.5 py-[8.5px] pl-[26px] pr-0.5 ps-8 leading-[inherit] text-black outline-hidden ring-0 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-gray-900 hover:ring-primary/10 focus:border-gray-900 focus:outline-hidden focus:ring-primary/10 dark:border-gray-600 dark:text-white dark:hover:border-gray-50 dark:focus:border-gray-50"
        type="text"
      />
      <span className="pointer-events-none absolute left-px top-1/2 h-5 w-5 -translate-y-1/2 overflow-hidden text-foreground/70 transition-all duration-300 ease-in peer-hover:text-black peer-focus:text-black dark:peer-hover:text-white dark:peer-focus:text-white">
        <svg
          width="1.5em"
          height="1.5em"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className="h-full w-full"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </span>
    </div>
  );
}
