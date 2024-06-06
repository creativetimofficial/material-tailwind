export function CardWithLink() {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-lg border border-surface bg-background shadow-lg shadow-black/5">
      <div className="m-1.5 mx-3 mt-3 h-max w-[calc(100%-12px)] rounded-[5px]">
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className="h-16 w-16"
        >
          <path
            d="M4.9984 2H2V4.9984H4.9984V2Z"
            stroke="currentColor"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4.99854 3.50098H18.9987"
            stroke="currentColor"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3.5 4.99854V19.0005"
            stroke="currentColor"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20.4978 5V19.002"
            stroke="currentColor"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4.99854 20.501H18.9987"
            stroke="currentColor"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4.9984 19H2V21.9984H4.9984V19Z"
            stroke="currentColor"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21.9974 2.00195H18.999V5.00035H21.9974V2.00195Z"
            stroke="currentColor"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21.9974 19.002H18.999V22.0004H21.9974V19.002Z"
            stroke="currentColor"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.9966 15.002L7.99658 8.00195L14.9966 11.002L11.9986 12.0009L10.9966 15.002Z"
            stroke="currentColor"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.999 12.002L14.997 15.002L11.999 12.002Z"
            stroke="currentColor"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div className="h-max w-full rounded px-3 py-2">
        <h6 className="font-sans text-base font-bold text-inherit antialiased md:text-lg lg:text-xl">
          UI/UX Review Check
        </h6>
        <p className="my-1 font-sans text-base text-foreground antialiased">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </p>
      </div>
      <div className="w-full rounded px-3 pb-3 pt-1.5">
        <a
          href="#"
          className="inline-flex w-full select-none items-center justify-center rounded-md border border-primary bg-primary px-2.5 py-1.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
