export function MembersTable() {
  return (
    <div className="w-full">
      <div className="mb-8 flex items-center justify-between gap-8">
        <div>
          <h6 className="font-sans text-base font-bold text-inherit antialiased md:text-lg lg:text-xl">
            Members list
          </h6>
          <p className="mt-1 font-sans text-base text-inherit antialiased">
            See information about all members
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button className="inline-flex select-none items-center justify-center rounded-md border border-secondary bg-secondary px-2.5 py-1.5 text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary-light hover:bg-secondary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
            View all
          </button>
          <button className="flex select-none items-center justify-center gap-3 rounded-md border border-primary bg-primary px-2.5 py-1.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
            <svg
              width="1.5em"
              height="1.5em"
              stroke-width="2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
              className="h-4 w-4"
            >
              <path
                d="M17 10H20M23 10H20M20 10V7M20 10V13"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M1 20V19C1 15.134 4.13401 12 8 12V12C11.866 12 15 15.134 15 19V20"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>{" "}
            Add member
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col gap-2">
          <div
            role="tablist"
            className="flex w-full shrink-0 flex-row rounded-md bg-surface-light p-1 md:w-max dark:bg-surface"
          >
            <button
              role="tab"
              className="relative z-2 inline-flex w-full select-none items-center justify-center px-4 py-1.5 text-center align-middle font-sans font-medium text-black dark:text-white"
            >
              All
            </button>
            <button
              role="tab"
              className="relative z-2 inline-flex w-full select-none items-center justify-center px-4 py-1.5 text-center align-middle font-sans font-medium text-black dark:text-white"
            >
              Monitored
            </button>
            <button
              role="tab"
              className="relative z-2 inline-flex w-full select-none items-center justify-center px-4 py-1.5 text-center align-middle font-sans font-medium text-black dark:text-white"
            >
              Unmonitored
            </button>
            <span className="rounded bg-background shadow-xs shadow-black/10 transition-all duration-300 ease-in"></span>
          </div>
        </div>
        <div className="w-full md:w-72">
          <div className="relative w-full rounded-md text-sm leading-none aria-disabled:cursor-not-allowed data-[shape=pill]:rounded-full">
            <input
              placeholder="Search"
              className="peer h-full w-full select-none rounded-[inherit] border border-surface bg-transparent px-2.5 py-[8.5px] pe-8 leading-[inherit] text-black outline-hidden ring-3 ring-transparent transition-all duration-300 ease-in placeholder:text-foreground/60 hover:border-primary hover:ring-primary/10 focus:border-primary focus:outline-hidden focus:ring-primary/10 disabled:pointer-events-none disabled:opacity-50 dark:text-white"
              type="text"
            />
            <span className="pointer-events-none absolute right-[7px] top-1/2 h-5 w-5 -translate-y-1/2 overflow-hidden text-foreground/70 transition-all duration-300 ease-in peer-hover:text-black peer-focus:text-black dark:peer-hover:text-white dark:peer-focus:text-white">
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
                className="h-5 w-5"
              >
                <path
                  d="M17 17L21 21"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full overflow-hidden rounded-lg border border-surface">
        <table className="w-full">
          <thead className="border-b border-surface bg-surface-light text-sm font-medium text-foreground dark:bg-surface-dark">
            <tr>
              <th className="px-2.5 py-2 text-start font-medium">Member</th>
              <th className="px-2.5 py-2 text-start font-medium">Function</th>
              <th className="px-2.5 py-2 text-start font-medium">Status</th>
              <th className="px-2.5 py-2 text-start font-medium">Employed</th>
              <th className="px-2.5 py-2 text-start font-medium"></th>
            </tr>
          </thead>
          <tbody className="group text-sm text-black dark:text-white">
            <tr className="border-b border-surface last:border-0">
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                    alt="John Michael"
                    className="inline-block h-8 w-8 rounded-full object-cover object-center"
                  />
                  <div className="flex flex-col">
                    <small className="font-sans text-sm text-inherit antialiased">
                      John Michael
                    </small>
                    <small className="font-sans text-sm text-inherit antialiased opacity-70">
                      john@creative-tim.com
                    </small>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <div className="flex flex-col">
                  <small className="font-sans text-sm text-inherit antialiased">
                    Manager
                  </small>
                  <small className="font-sans text-sm text-inherit antialiased opacity-70">
                    Organization
                  </small>
                </div>
              </td>
              <td className="p-3">
                <div className="w-max">
                  <div className="relative inline-flex select-none items-center rounded-full border border-success bg-success p-0.5 font-sans text-xs font-medium leading-none text-success-foreground">
                    <span className="font-inherit mx-1.5 my-0.5 leading-none text-inherit">
                      Online
                    </span>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <small className="font-sans text-sm text-inherit antialiased">
                  23/04/18
                </small>
              </td>
              <td className="p-3">
                <button
                  data-open="false"
                  className="group inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground outline-hidden transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none data-[shape=circular]:rounded-full"
                  data-shape="default"
                >
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    className="h-4 w-4 text-black dark:text-white"
                  >
                    <path
                      d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </td>
            </tr>
            <tr className="border-b border-surface last:border-0">
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg"
                    alt="Alexa Liras"
                    className="inline-block h-8 w-8 rounded-full object-cover object-center"
                  />
                  <div className="flex flex-col">
                    <small className="font-sans text-sm text-inherit antialiased">
                      Alexa Liras
                    </small>
                    <small className="font-sans text-sm text-inherit antialiased opacity-70">
                      alexa@creative-tim.com
                    </small>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <div className="flex flex-col">
                  <small className="font-sans text-sm text-inherit antialiased">
                    Programator
                  </small>
                  <small className="font-sans text-sm text-inherit antialiased opacity-70">
                    Developer
                  </small>
                </div>
              </td>
              <td className="p-3">
                <div className="w-max">
                  <div
                    data-open="true"
                    className="relative inline-flex select-none items-center rounded-full border border-secondary bg-secondary p-0.5 font-sans text-xs font-medium leading-none text-secondary-foreground"
                  >
                    <span className="font-inherit mx-1.5 my-0.5 leading-none text-inherit">
                      Offline
                    </span>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <small className="font-sans text-sm text-inherit antialiased">
                  23/04/18
                </small>
              </td>
              <td className="p-3">
                <button className="group inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground outline-hidden transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    className="h-4 w-4 text-black dark:text-white"
                  >
                    <path
                      d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </td>
            </tr>
            <tr className="border-b border-surface last:border-0">
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg"
                    alt="Laurent Perrier"
                    className="inline-block h-8 w-8 rounded-full object-cover object-center"
                  />
                  <div className="flex flex-col">
                    <small className="font-sans text-sm text-inherit antialiased">
                      Laurent Perrier
                    </small>
                    <small className="font-sans text-sm text-inherit antialiased opacity-70">
                      laurent@creative-tim.com
                    </small>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <div className="flex flex-col">
                  <small className="font-sans text-sm text-inherit antialiased">
                    Executive
                  </small>
                  <small className="font-sans text-sm text-inherit antialiased opacity-70">
                    Projects
                  </small>
                </div>
              </td>
              <td className="p-3">
                <div className="w-max">
                  <div className="relative inline-flex select-none items-center rounded-full border border-secondary bg-secondary p-0.5 font-sans text-xs font-medium leading-none text-secondary-foreground">
                    <span className="font-inherit mx-1.5 my-0.5 leading-none text-inherit">
                      Offline
                    </span>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <small className="font-sans text-sm text-inherit antialiased">
                  19/09/17
                </small>
              </td>
              <td className="p-3">
                <button className="group inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground outline-hidden transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    className="h-4 w-4 text-black dark:text-white"
                  >
                    <path
                      d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </td>
            </tr>
            <tr className="border-b border-surface last:border-0">
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg"
                    alt="Michael Levi"
                    className="inline-block h-8 w-8 rounded-full object-cover object-center"
                  />
                  <div className="flex flex-col">
                    <small className="font-sans text-sm text-inherit antialiased">
                      Michael Levi
                    </small>
                    <small className="font-sans text-sm text-inherit antialiased opacity-70">
                      michael@creative-tim.com
                    </small>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <div className="flex flex-col">
                  <small className="font-sans text-sm text-inherit antialiased">
                    Programator
                  </small>
                  <small className="font-sans text-sm text-inherit antialiased opacity-70">
                    Developer
                  </small>
                </div>
              </td>
              <td className="p-3">
                <div className="w-max">
                  <div className="relative inline-flex select-none items-center rounded-full border border-success bg-success p-0.5 font-sans text-xs font-medium leading-none text-success-foreground">
                    <span className="font-inherit mx-1.5 my-0.5 leading-none text-inherit">
                      Online
                    </span>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <small className="font-sans text-sm text-inherit antialiased">
                  24/12/08
                </small>
              </td>
              <td className="p-3">
                <button className="group inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground outline-hidden transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    className="h-4 w-4 text-black dark:text-white"
                  >
                    <path
                      d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </td>
            </tr>
            <tr className="border-b border-surface last:border-0">
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg"
                    alt="Richard Gran"
                    className="inline-block h-8 w-8 rounded object-cover object-center"
                  />
                  <div className="flex flex-col">
                    <small className="font-sans text-sm text-inherit antialiased">
                      Richard Gran
                    </small>
                    <small className="font-sans text-sm text-inherit antialiased opacity-70">
                      richard@creative-tim.com
                    </small>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <div className="flex flex-col">
                  <small className="font-sans text-sm text-inherit antialiased">
                    Manager
                  </small>
                  <small className="font-sans text-sm text-inherit antialiased opacity-70">
                    Executive
                  </small>
                </div>
              </td>
              <td className="p-3">
                <div className="w-max">
                  <div className="relative inline-flex select-none items-center rounded-full border border-secondary bg-secondary p-0.5 font-sans text-xs font-medium leading-none text-secondary-foreground">
                    <span className="font-inherit mx-1.5 my-0.5 leading-none text-inherit">
                      Offline
                    </span>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <small className="font-sans text-sm text-inherit antialiased">
                  04/10/21
                </small>
              </td>
              <td className="p-3">
                <button
                  data-open="false"
                  className="group inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground outline-hidden transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none data-[shape=circular]:rounded-full"
                  data-shape="default"
                >
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    className="h-4 w-4 text-black dark:text-white"
                  >
                    <path
                      d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-surface-light py-4">
        <small className="font-sans text-sm text-inherit antialiased">
          Page 1 of 10
        </small>
        <div className="flex gap-2">
          <button className="inline-flex select-none items-center justify-center rounded-md border border-secondary bg-transparent px-2.5 py-1.5 text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
            Previous
          </button>
          <button className="inline-flex select-none items-center justify-center rounded-md border border-secondary bg-transparent px-2.5 py-1.5 text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
