export function PricingCard() {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-lg border border-primary-dark bg-primary shadow-lg shadow-primary-dark/25">
      <div className="m-1.5 h-max w-[calc(100%-12px)] rounded-[5px] py-6 text-center">
        <div
          data-open="true"
          className="relative inline-flex select-none items-center rounded-full border border-primary bg-primary p-1 font-sans text-[15px] font-medium leading-none text-primary-foreground"
        >
          <span className="font-inherit mx-2.5 my-[4.5px] leading-none text-inherit">
            Standard
          </span>
        </div>
        <span className="mt-3 flex justify-center gap-1 font-sans text-7xl font-bold text-primary-foreground antialiased md:text-5xl lg:text-6xl">
          <span className="mt-2 text-4xl">$</span>29
          <span className="self-end text-4xl">/mo</span>
        </span>
      </div>
      <hr className="border-primary-dark" />
      <ul className="h-max w-full space-y-3 rounded px-8 py-2 pb-6 pt-8">
        <li className="flex items-center gap-4 text-white">
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="font-sans text-base text-inherit antialiased">
            5 team members
          </p>
        </li>
        <li className="flex items-center gap-4 text-white">
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="font-sans text-base text-inherit antialiased">
            200+ components
          </p>
        </li>
        <li className="flex items-center gap-4 text-white">
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="font-sans text-base text-inherit antialiased">
            40+ built-in pages
          </p>
        </li>
        <li className="flex items-center gap-4 text-white">
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="font-sans text-base text-inherit antialiased">
            1 year free updates
          </p>
        </li>
        <li className="flex items-center gap-4 text-white">
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="font-sans text-base text-inherit antialiased">
            Life time technical support
          </p>
        </li>
      </ul>
      <div className="w-full rounded px-3 pb-3 pt-1.5">
        <button className="inline-flex w-full select-none items-center justify-center rounded-md border border-white bg-white px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-black transition-all duration-300 ease-in hover:border-white hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
          Buy Now
        </button>
      </div>
    </div>
  );
}
