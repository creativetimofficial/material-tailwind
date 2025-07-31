export function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <button
        data-ripple-dark="true"
        className="inline-flex select-none items-center justify-center rounded-md border border-transparent bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:border-primary/5 hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Read More
        <svg
          width="1.5em"
          height="1.5em"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className="ml-1 h-4 w-4 stroke-2"
        >
          <path
            d="M9 6L15 12L9 18"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
      <button
        data-ripple-light="true"
        className="inline-flex select-none items-center justify-center rounded-md border border-primary bg-transparent px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary transition-all duration-300 ease-in hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Refresh
        <svg
          width="1.5em"
          height="1.5em"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className="ml-2 h-4 w-4 stroke-2"
        >
          <path
            d="M21.1679 8C19.6247 4.46819 16.1006 2 11.9999 2C6.81459 2 2.55104 5.94668 2.04932 11"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2.88146 16C4.42458 19.5318 7.94874 22 12.0494 22C17.2347 22 21.4983 18.0533 22 13"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7.04932 16H2.64932C2.31795 16 2.04932 16.2686 2.04932 16.6V21"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
      <button
        data-ripple-light="true"
        className="inline-flex select-none items-center justify-center rounded-md border border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        <svg
          width="1.5em"
          height="1.5em"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className="mr-2 h-4 w-4 stroke-2"
        >
          <path
            d="M12 22V13M12 13L15.5 16.5M12 13L8.5 16.5"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        Upload Assets
      </button>
      <button
        data-ripple-light="true"
        className="inline-flex select-none items-center justify-center rounded-md border border-primary bg-linear-to-tr from-primary-dark to-primary-light px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        Give Us Star
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className="ml-2 h-4 w-4 stroke-2"
        >
          <path
            d="M9.95242 9.62272L11.5109 6.31816C11.711 5.89395 12.289 5.89395 12.4891 6.31816L14.0476 9.62272L17.5329 10.1559C17.9801 10.2243 18.1583 10.7996 17.8346 11.1296L15.313 13.7001L15.9081 17.3314C15.9845 17.7978 15.5168 18.1534 15.1167 17.9331L12 16.2177L8.88328 17.9331C8.48316 18.1534 8.01545 17.7978 8.09187 17.3314L8.68695 13.7001L6.16545 11.1296C5.8417 10.7996 6.01993 10.2243 6.46711 10.1559L9.95242 9.62272Z"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M22 12L23 12"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 2V1"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 23V22"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20 20L19 19"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20 4L19 5"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 20L5 19"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 4L5 5"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M1 12L2 12"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
}
