export function BadgeOverlap() {
  return (
    <div className="flex w-full items-center justify-center gap-8">
      <div className="relative inline-flex">
        <div className="">
          <button className="relative inline-grid min-h-[36px] min-w-[36px] select-none place-items-center overflow-hidden rounded-md border border-secondary bg-secondary text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary-light hover:bg-secondary-light">
            <svg
              width="1.5em"
              height="1.5em"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
              className="h-4 w-4 stroke-2"
            >
              <path
                d="M18 8.4C18 6.70261 17.3679 5.07475 16.2426 3.87452C15.1174 2.67428 13.5913 2 12 2C10.4087 2 8.88258 2.67428 7.75736 3.87452C6.63214 5.07475 6 6.70261 6 8.4C6 15.8667 3 18 3 18H21C21 18 18 15.8667 18 8.4Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <span className="absolute right-[6%] top-[6%] grid min-h-[10px] min-w-[10px] -translate-y-1/2 translate-x-1/2 place-items-center rounded-full border border-primary bg-primary px-1 py-0.5 text-xs leading-none text-primary-foreground">
          5
        </span>
      </div>
      <div className="relative inline-flex">
        <div className="">
          <button className="relative inline-grid min-h-[36px] min-w-[36px] select-none place-items-center overflow-hidden rounded-md border border-secondary bg-secondary text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary-light hover:bg-secondary-light">
            <svg
              width="1.5em"
              height="1.5em"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
              className="h-4 w-4 stroke-2"
            >
              <path
                d="M18 8.4C18 6.70261 17.3679 5.07475 16.2426 3.87452C15.1174 2.67428 13.5913 2 12 2C10.4087 2 8.88258 2.67428 7.75736 3.87452C6.63214 5.07475 6 6.70261 6 8.4C6 15.8667 3 18 3 18H21C21 18 18 15.8667 18 8.4Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <span className="absolute right-[6%] top-[6%] grid min-h-[10px] min-w-[10px] -translate-y-1/2 translate-x-1/2 place-items-center rounded-full border border-primary bg-primary px-1 py-0.5 text-xs leading-none text-primary-foreground"></span>
      </div>
      <div className="relative inline-flex">
        <div className="">
          <img
            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
            alt="profile-picture"
            className="inline-block h-11 w-11 rounded-full object-cover object-center"
          />
        </div>
        <span className="absolute bottom-[14%] right-[14%] grid min-h-[10px] min-w-[10px] translate-x-1/2 translate-y-1/2 place-items-center rounded-full border border-primary bg-primary px-1 py-0.5 text-xs leading-none text-primary-foreground">
          5
        </span>
      </div>
      <div className="relative inline-flex">
        <div className="">
          <img
            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
            alt="profile-picture"
            className="inline-block h-11 w-11 rounded-full object-cover object-center"
          />
        </div>
        <span className="absolute bottom-[14%] right-[14%] grid min-h-[10px] min-w-[10px] translate-x-1/2 translate-y-1/2 place-items-center rounded-full border border-primary bg-primary px-1 py-0.5 text-xs leading-none text-primary-foreground"></span>
      </div>
    </div>
  );
}
