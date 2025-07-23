export function ButtonGroupWithIcon() {
  return (
    <div className="flex flex-col gap-4">
      <div className="inline-flex flex-row ">
        <button
          data-ripple-dark="true"
          className="inline-flex select-none items-center justify-center rounded-md border border-transparent bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:border-primary/5 hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="mr-1.5 h-4 w-4 stroke-2"
          >
            <path
              d="M12 11.6667H8M12 11.6667C12 11.6667 15.3333 11.6667 15.3333 8.33333C15.3333 5.00002 12 5 12 5C12 5 12 5 12 5H8.6C8.26863 5 8 5.26863 8 5.6V11.6667M12 11.6667C12 11.6667 16 11.6667 16 15.3333C16 19 12 19 12 19C12 19 12 19 12 19H8.6C8.26863 19 8 18.7314 8 18.4V11.6667"
              stroke="currentColor"
            ></path>
          </svg>
          Bold
        </button>
        <button
          data-ripple-dark="true"
          className="inline-flex select-none items-center justify-center rounded-md border border-transparent bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:border-primary/5 hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="mr-1.5 h-4 w-4 stroke-2"
          >
            <path
              d="M11 5L14 5M17 5L14 5M14 5L10 19M10 19L7 19M10 19L13 19"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          Italic
        </button>
        <button
          data-ripple-dark="true"
          className="inline-flex select-none items-center justify-center rounded-md border border-transparent bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:border-primary/5 hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="mr-1.5 h-4 w-4 stroke-2"
          >
            <path
              d="M16 5V11C16 13.2091 14.2091 15 12 15V15C9.79086 15 8 13.2091 8 11V5"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6 19L18 19"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          Underline
        </button>
      </div>
      <div className="inline-flex flex-row">
        <button
          data-ripple-light="true"
          className="inline-flex select-none items-center justify-center rounded-md rounded-r-none border border-primary bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="mr-1.5 h-4 w-4 stroke-2"
          >
            <path
              d="M12 11.6667H8M12 11.6667C12 11.6667 15.3333 11.6667 15.3333 8.33333C15.3333 5.00002 12 5 12 5C12 5 12 5 12 5H8.6C8.26863 5 8 5.26863 8 5.6V11.6667M12 11.6667C12 11.6667 16 11.6667 16 15.3333C16 19 12 19 12 19C12 19 12 19 12 19H8.6C8.26863 19 8 18.7314 8 18.4V11.6667"
              stroke="currentColor"
            ></path>
          </svg>
          Bold
        </button>
        <button
          data-ripple-light="true"
          className="inline-flex select-none items-center justify-center rounded-none border border-l-0 border-primary bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="mr-1.5 h-4 w-4 stroke-2"
          >
            <path
              d="M11 5L14 5M17 5L14 5M14 5L10 19M10 19L7 19M10 19L13 19"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          Italic
        </button>
        <button
          data-ripple-light="true"
          className="inline-flex select-none items-center justify-center rounded-md rounded-l-none border border-l-0 border-primary bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="mr-1.5 h-4 w-4 stroke-2"
          >
            <path
              d="M16 5V11C16 13.2091 14.2091 15 12 15V15C9.79086 15 8 13.2091 8 11V5"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6 19L18 19"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          Underline
        </button>
      </div>
      <div className="inline-flex flex-row">
        <button
          data-ripple-light="true"
          className="inline-flex select-none items-center justify-center rounded-md rounded-r-none border border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="mr-1.5 h-4 w-4 stroke-2"
          >
            <path
              d="M12 11.6667H8M12 11.6667C12 11.6667 15.3333 11.6667 15.3333 8.33333C15.3333 5.00002 12 5 12 5C12 5 12 5 12 5H8.6C8.26863 5 8 5.26863 8 5.6V11.6667M12 11.6667C12 11.6667 16 11.6667 16 15.3333C16 19 12 19 12 19C12 19 12 19 12 19H8.6C8.26863 19 8 18.7314 8 18.4V11.6667"
              stroke="currentColor"
            ></path>
          </svg>
          Bold
        </button>
        <button
          data-ripple-light="true"
          className="inline-flex select-none items-center justify-center rounded-none border border-l-0 border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="mr-1.5 h-4 w-4 stroke-2"
          >
            <path
              d="M11 5L14 5M17 5L14 5M14 5L10 19M10 19L7 19M10 19L13 19"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          Italic
        </button>
        <button
          data-ripple-light="true"
          className="inline-flex select-none items-center justify-center rounded-md rounded-l-none border border-l-0 border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="mr-1.5 h-4 w-4 stroke-2"
          >
            <path
              d="M16 5V11C16 13.2091 14.2091 15 12 15V15C9.79086 15 8 13.2091 8 11V5"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6 19L18 19"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          Underline
        </button>
      </div>
      <div className="inline-flex flex-row">
        <button
          data-ripple-light="true"
          className="inline-flex select-none items-center justify-center rounded-md rounded-r-none border border-primary bg-linear-to-tr from-primary-dark to-primary-light px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="mr-1.5 h-4 w-4 stroke-2"
          >
            <path
              d="M12 11.6667H8M12 11.6667C12 11.6667 15.3333 11.6667 15.3333 8.33333C15.3333 5.00002 12 5 12 5C12 5 12 5 12 5H8.6C8.26863 5 8 5.26863 8 5.6V11.6667M12 11.6667C12 11.6667 16 11.6667 16 15.3333C16 19 12 19 12 19C12 19 12 19 12 19H8.6C8.26863 19 8 18.7314 8 18.4V11.6667"
              stroke="currentColor"
            ></path>
          </svg>
          Bold
        </button>
        <button
          data-ripple-light="true"
          className="inline-flex select-none items-center justify-center rounded-none border border-l-0 border-primary bg-linear-to-tr from-primary-dark to-primary-light px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="mr-1.5 h-4 w-4 stroke-2"
          >
            <path
              d="M11 5L14 5M17 5L14 5M14 5L10 19M10 19L7 19M10 19L13 19"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          Italic
        </button>
        <button
          data-ripple-light="true"
          className="inline-flex select-none items-center justify-center rounded-md rounded-l-none border border-l-0 border-primary bg-linear-to-tr from-primary-dark to-primary-light px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="mr-1.5 h-4 w-4 stroke-2"
          >
            <path
              d="M16 5V11C16 13.2091 14.2091 15 12 15V15C9.79086 15 8 13.2091 8 11V5"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6 19L18 19"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          Underline
        </button>
      </div>
    </div>
  );
}
