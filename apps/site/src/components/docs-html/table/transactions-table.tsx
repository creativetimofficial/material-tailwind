export function TransactionsTable() {
  return (
    <div className="w-full px-2">
      <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <h6 className="font-sans text-base font-bold text-inherit antialiased md:text-lg lg:text-xl">
            Recent Transactions
          </h6>
          <p className="mt-1 font-sans text-base text-inherit antialiased">
            These are details about the last transactions
          </p>
        </div>
        <div className="flex w-full shrink-0 gap-2 md:w-max">
          <div className="w-full md:w-72">
            <div className="relative w-full rounded-md text-sm leading-none aria-disabled:cursor-not-allowed">
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
                d="M6 20L18 20"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12 4V16M12 16L15.5 12.5M12 16L8.5 12.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Download
          </button>
        </div>
      </div>
      <div className="w-full overflow-hidden rounded-lg border border-surface">
        <table className="w-full text-left">
          <thead className="border-b border-surface bg-surface-light text-sm font-medium text-foreground dark:bg-surface-dark">
            <tr>
              <th className="px-2.5 py-2 text-start font-medium">
                Transaction
              </th>
              <th className="px-2.5 py-2 text-start font-medium">Amount</th>
              <th className="px-2.5 py-2 text-start font-medium">Date</th>
              <th className="px-2.5 py-2 text-start font-medium">Status</th>
              <th className="px-2.5 py-2 text-start font-medium">Account</th>
              <th className="px-2.5 py-2 text-start font-medium"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-surface-light p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg"
                    alt="Spotify"
                    className="inline-block h-11 w-11 rounded-full border border-surface-light bg-surface-light object-contain object-center p-1 dark:bg-surface-dark"
                  />
                  <small className="font-sans text-sm font-bold text-inherit antialiased">
                    Spotify
                  </small>
                </div>
              </td>
              <td className="border-b border-surface-light p-4">
                <small className="font-sans text-sm text-inherit antialiased">
                  $2,500
                </small>
              </td>
              <td className="border-b border-surface-light p-4">
                <small className="font-sans text-sm text-inherit antialiased">
                  Wed 3:00pm
                </small>
              </td>
              <td className="border-b border-surface-light p-4">
                <div className="w-max">
                  <div
                    data-open="true"
                    className="relative inline-flex select-none items-center rounded-full border border-transparent bg-success/10 p-0.5 font-sans text-xs font-medium leading-none text-success"
                  >
                    <span className="font-inherit mx-1.5 my-0.5 leading-none text-inherit">
                      paid
                    </span>
                  </div>
                </div>
              </td>
              <td className="border-b border-surface-light p-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-12 rounded-md border border-surface-light p-1">
                    <img
                      src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                      alt="visa"
                      className="inline-block h-full w-full rounded-none object-contain object-center p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <small className="font-sans text-sm capitalize text-inherit antialiased">
                      visa 1234
                    </small>
                    <small className="font-sans text-sm text-inherit antialiased opacity-70">
                      06/2026
                    </small>
                  </div>
                </div>
              </td>
              <td className="border-b border-surface-light p-4">
                <button className="group inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground outline-hidden transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    className="h-4 w-4"
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
            <tr>
              <td className="border-b border-surface-light p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://docs.material-tailwind.com/img/logos/logo-amazon.svg"
                    alt="Amazon"
                    className="inline-block h-11 w-11 rounded-full border border-surface-light bg-surface-light object-contain object-center p-1 dark:bg-surface-dark"
                  />
                  <small className="font-sans text-sm font-bold text-inherit antialiased">
                    Amazon
                  </small>
                </div>
              </td>
              <td className="border-b border-surface-light p-4">
                <small className="font-sans text-sm text-inherit antialiased">
                  $5,000
                </small>
              </td>
              <td className="border-b border-surface-light p-4">
                <small className="font-sans text-sm text-inherit antialiased">
                  Wed 1:00pm
                </small>
              </td>
              <td className="border-b border-surface-light p-4">
                <div className="w-max">
                  <div className="relative inline-flex select-none items-center rounded-full border border-transparent bg-success/10 p-0.5 font-sans text-xs font-medium leading-none text-success">
                    <span className="font-inherit mx-1.5 my-0.5 leading-none text-inherit">
                      paid
                    </span>
                  </div>
                </div>
              </td>
              <td className="border-b border-surface-light p-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-12 rounded-md border border-surface-light p-1">
                    <img
                      src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                      alt="master-card"
                      className="inline-block h-full w-full rounded-none object-contain object-center p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <small className="font-sans text-sm capitalize text-inherit antialiased">
                      master card 1234
                    </small>
                    <small className="font-sans text-sm text-inherit antialiased opacity-70">
                      06/2026
                    </small>
                  </div>
                </div>
              </td>
              <td className="border-b border-surface-light p-4">
                <button className="group inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground outline-hidden transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    className="h-4 w-4"
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
            <tr>
              <td className="border-b border-surface-light p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://docs.material-tailwind.com/img/logos/logo-pinterest.svg"
                    alt="Pinterest"
                    className="inline-block h-11 w-11 rounded-full border border-surface-light bg-surface-light object-contain object-center p-1 dark:bg-surface-dark"
                  />
                  <small className="font-sans text-sm font-bold text-inherit antialiased">
                    Pinterest
                  </small>
                </div>
              </td>
              <td className="border-b border-surface-light p-4">
                <small className="font-sans text-sm text-inherit antialiased">
                  $3,400
                </small>
              </td>
              <td className="border-b border-surface-light p-4">
                <small className="font-sans text-sm text-inherit antialiased">
                  Mon 7:40pm
                </small>
              </td>
              <td className="border-b border-surface-light p-4">
                <div className="w-max">
                  <div className="relative inline-flex select-none items-center rounded-full border border-transparent bg-warning/10 p-0.5 font-sans text-xs font-medium leading-none text-warning">
                    <span className="font-inherit mx-1.5 my-0.5 leading-none text-inherit">
                      pending
                    </span>
                  </div>
                </div>
              </td>
              <td className="border-b border-surface-light p-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-12 rounded-md border border-surface-light p-1">
                    <img
                      src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                      alt="master-card"
                      className="inline-block h-full w-full rounded-none object-contain object-center p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <small className="font-sans text-sm capitalize text-inherit antialiased">
                      master card 1234
                    </small>
                    <small className="font-sans text-sm text-inherit antialiased opacity-70">
                      06/2026
                    </small>
                  </div>
                </div>
              </td>
              <td className="border-b border-surface-light p-4">
                <button className="group inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground outline-hidden transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    className="h-4 w-4"
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
            <tr>
              <td className="border-b border-surface-light p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://docs.material-tailwind.com/img/logos/logo-google.svg"
                    alt="Google"
                    className="inline-block h-11 w-11 rounded-full border border-surface-light bg-surface-light object-contain object-center p-1 dark:bg-surface-dark"
                  />
                  <small className="font-sans text-sm font-bold text-inherit antialiased">
                    Google
                  </small>
                </div>
              </td>
              <td className="border-b border-surface-light p-4">
                <small className="font-sans text-sm text-inherit antialiased">
                  $1,000
                </small>
              </td>
              <td className="border-b border-surface-light p-4">
                <small className="font-sans text-sm text-inherit antialiased">
                  Wed 5:00pm
                </small>
              </td>
              <td className="border-b border-surface-light p-4">
                <div className="w-max">
                  <div className="relative inline-flex select-none items-center rounded-full border border-transparent bg-success/10 p-0.5 font-sans text-xs font-medium leading-none text-success">
                    <span className="font-inherit mx-1.5 my-0.5 leading-none text-inherit">
                      paid
                    </span>
                  </div>
                </div>
              </td>
              <td className="border-b border-surface-light p-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-12 rounded-md border border-surface-light p-1">
                    <img
                      src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                      alt="visa"
                      className="inline-block h-full w-full rounded-none object-contain object-center p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <small className="font-sans text-sm capitalize text-inherit antialiased">
                      visa 1234
                    </small>
                    <small className="font-sans text-sm text-inherit antialiased opacity-70">
                      06/2026
                    </small>
                  </div>
                </div>
              </td>
              <td className="border-b border-surface-light p-4">
                <button className="group inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground outline-hidden transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    className="h-4 w-4"
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
            <tr>
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://docs.material-tailwind.com/img/logos/logo-netflix.svg"
                    alt="netflix"
                    className="inline-block h-11 w-11 rounded-full border border-surface-light bg-surface-light object-contain object-center p-1 dark:bg-surface-dark"
                  />
                  <small className="font-sans text-sm font-bold text-inherit antialiased">
                    netflix
                  </small>
                </div>
              </td>
              <td className="p-4">
                <small className="font-sans text-sm text-inherit antialiased">
                  $14,000
                </small>
              </td>
              <td className="p-4">
                <small className="font-sans text-sm text-inherit antialiased">
                  Wed 3:30am
                </small>
              </td>
              <td className="p-4">
                <div className="w-max">
                  <div
                    data-open="true"
                    className="relative inline-flex select-none items-center rounded-full border border-transparent bg-error/10 p-0.5 font-sans text-xs font-medium leading-none text-error"
                  >
                    <span className="font-inherit mx-1.5 my-0.5 leading-none text-inherit">
                      cancelled
                    </span>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-12 rounded-md border border-surface-light p-1">
                    <img
                      src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                      alt="visa"
                      className="inline-block h-full w-full rounded-none object-contain object-center p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <small className="font-sans text-sm capitalize text-inherit antialiased">
                      visa 1234
                    </small>
                    <small className="font-sans text-sm text-inherit antialiased opacity-70">
                      06/2026
                    </small>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <button className="group inline-grid min-h-[36px] min-w-[36px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground outline-hidden transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    className="h-4 w-4"
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
        <button className="inline-flex select-none items-center justify-center rounded-md border border-secondary bg-transparent px-2.5 py-1.5 text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
          Previous
        </button>
        <div className="flex items-center gap-2">
          <button className="inline-grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-secondary bg-secondary text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary-light hover:bg-secondary-light disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            1
          </button>
          <button className="inline-grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            2
          </button>
          <button className="inline-grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            3
          </button>
          <button className="inline-grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            ...
          </button>
          <button className="inline-grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            8
          </button>
          <button className="inline-grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            9
          </button>
          <button className="inline-grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-md border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary/10 hover:bg-secondary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            10
          </button>
        </div>
        <button className="inline-flex select-none items-center justify-center rounded-md border border-secondary bg-transparent px-2.5 py-1.5 text-center align-middle font-sans text-sm font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
          Next
        </button>
      </div>
    </div>
  );
}
