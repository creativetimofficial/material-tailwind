
export default function TransactionsTable() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full px-2">
  <div class="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
    <div>
      <h6 class="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current">
        Recent Transactions
      </h6>
      <p class="font-sans antialiased text-base text-current mt-1">
        These are details about the last transactions
      </p>
    </div>
    <div class="flex w-full shrink-0 gap-2 md:w-max">
      <div class="w-full md:w-72">
        <div class="relative w-full">
          <input data-icon-placement="end" class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 peer" placeholder="Search" type="text" />
          <span data-placement="end" class="pointer-events-none absolute top-1/2 -translate-y-1/2 text-slate-600/70 peer-focus:text-slate-800 peer-focus:text-slate-800 dark:peer-hover:text-white dark:peer-focus:text-white transition-all duration-300 ease-in overflow-hidden w-5 h-5 data-[placement=start]:left-2.5 data-[placement=end]:right-2.5">
            <svg class="h-5 w-5" width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
              <path d="M17 17L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        </div>
      </div>
      <button class="flex items-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed text-sm rounded-md py-1.5 px-3 shadow-sm hover:shadow bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700">
        <svg class="h-4 w-4" width="1.5em" height="1.5em" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
          <path d="M6 20L18 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M12 4V16M12 16L15.5 12.5M12 16L8.5 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        Download
      </button>
    </div>
  </div>
  <div class="w-full overflow-hidden rounded-lg border border-slate-200">
    <table class="w-full text-left">
      <thead class="border-b border-slate-200 bg-slate-100 text-sm font-medium text-slate-600 dark:bg-surface-dark">
        <tr>
          <th class="px-2.5 py-2 text-start font-medium">
            Transaction
          </th>
          <th class="px-2.5 py-2 text-start font-medium">
            Amount
          </th>
          <th class="px-2.5 py-2 text-start font-medium">
            Date
          </th>
          <th class="px-2.5 py-2 text-start font-medium">
            Status
          </th>
          <th class="px-2.5 py-2 text-start font-medium">
            Account
          </th>
          <th class="px-2.5 py-2 text-start font-medium">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="p-4 border-b border-surface-light">
            <div class="flex items-center gap-3">
              <img class="inline-block object-center w-11 h-11 rounded-md border border-surface-light bg-slate-100 object-contain p-1 dark:bg-surface-dark" src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg" alt="Spotify" />
              <small class="font-sans antialiased text-sm text-current font-bold">
                Spotify
              </small>
            </div>
          </td>
          <td class="p-4 border-b border-surface-light">
            <small class="font-sans antialiased text-sm text-current">
              $2,500
            </small>
          </td>
          <td class="p-4 border-b border-surface-light">
            <small class="font-sans antialiased text-sm text-current">
              Wed 3:00pm
            </small>
          </td>
          <td class="p-4 border-b border-surface-light">
            <div class="w-max">
              <div class="relative inline-flex w-max items-center border font-sans font-medium rounded-md text-xs p-0.5 bg-green-500/10 border-transparent text-green-500 shadow-none">
                <span class="font-sans text-current my-0.5 mx-1.5">
                  paid
                </span>
              </div>
            </div>
          </td>
          <td class="p-4 border-b border-surface-light">
            <div class="flex items-center gap-3">
              <div class="h-9 w-12 rounded-md border border-surface-light p-1">
                <img class="inline-block object-center rounded h-full w-full object-contain p-1" src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png" alt="visa" />
              </div>
              <div class="flex flex-col">
                <small class="font-sans antialiased text-sm text-current capitalize">
                  visa 1234
                </small>
                <small class="font-sans antialiased text-sm text-current opacity-70">
                  06/2026
                </small>
              </div>
            </div>
          </td>
          <td class="p-4 border-b border-surface-light">
            <button class="inline-grid place-items-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[38px] min-h-[38px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none outline-none group">
              <svg class="h-4 w-4" width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                <path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </td>
        </tr>
        <tr>
          <td class="p-4 border-b border-surface-light">
            <div class="flex items-center gap-3">
              <img class="inline-block object-center w-11 h-11 rounded-md border border-surface-light bg-slate-100 object-contain p-1 dark:bg-surface-dark" src="https://docs.material-tailwind.com/img/logos/logo-amazon.svg" alt="Amazon" />
              <small class="font-sans antialiased text-sm text-current font-bold">
                Amazon
              </small>
            </div>
          </td>
          <td class="p-4 border-b border-surface-light">
            <small class="font-sans antialiased text-sm text-current">
              $5,000
            </small>
          </td>
          <td class="p-4 border-b border-surface-light">
            <small class="font-sans antialiased text-sm text-current">
              Wed 1:00pm
            </small>
          </td>
          <td class="p-4 border-b border-surface-light">
            <div class="w-max">
              <div class="relative inline-flex w-max items-center border font-sans font-medium rounded-md text-xs p-0.5 bg-green-500/10 border-transparent text-green-500 shadow-none">
                <span class="font-sans text-current my-0.5 mx-1.5">
                  paid
                </span>
              </div>
            </div>
          </td>
          <td class="p-4 border-b border-surface-light">
            <div class="flex items-center gap-3">
              <div class="h-9 w-12 rounded-md border border-surface-light p-1">
                <img class="inline-block object-center rounded h-full w-full object-contain p-1" src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png" alt="master-card" />
              </div>
              <div class="flex flex-col">
                <small class="font-sans antialiased text-sm text-current capitalize">
                  master card 1234
                </small>
                <small class="font-sans antialiased text-sm text-current opacity-70">
                  06/2026
                </small>
              </div>
            </div>
          </td>
          <td class="p-4 border-b border-surface-light">
            <button class="inline-grid place-items-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[38px] min-h-[38px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none outline-none group">
              <svg class="h-4 w-4" width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                <path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </td>
        </tr>
        <tr>
          <td class="p-4 border-b border-surface-light">
            <div class="flex items-center gap-3">
              <img class="inline-block object-center w-11 h-11 rounded-md border border-surface-light bg-slate-100 object-contain p-1 dark:bg-surface-dark" src="https://docs.material-tailwind.com/img/logos/logo-pinterest.svg" alt="Pinterest" />
              <small class="font-sans antialiased text-sm text-current font-bold">
                Pinterest
              </small>
            </div>
          </td>
          <td class="p-4 border-b border-surface-light">
            <small class="font-sans antialiased text-sm text-current">
              $3,400
            </small>
          </td>
          <td class="p-4 border-b border-surface-light">
            <small class="font-sans antialiased text-sm text-current">
              Mon 7:40pm
            </small>
          </td>
          <td class="p-4 border-b border-surface-light">
            <div class="w-max">
              <div class="relative inline-flex w-max items-center border font-sans font-medium rounded-md text-xs p-0.5 bg-warning/10 border-transparent text-amber-500 shadow-none">
                <span class="font-sans text-current my-0.5 mx-1.5">
                  pending
                </span>
              </div>
            </div>
          </td>
          <td class="p-4 border-b border-surface-light">
            <div class="flex items-center gap-3">
              <div class="h-9 w-12 rounded-md border border-surface-light p-1">
                <img class="inline-block object-center rounded h-full w-full object-contain p-1" src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png" alt="master-card" />
              </div>
              <div class="flex flex-col">
                <small class="font-sans antialiased text-sm text-current capitalize">
                  master card 1234
                </small>
                <small class="font-sans antialiased text-sm text-current opacity-70">
                  06/2026
                </small>
              </div>
            </div>
          </td>
          <td class="p-4 border-b border-surface-light">
            <button class="inline-grid place-items-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[38px] min-h-[38px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none outline-none group">
              <svg class="h-4 w-4" width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                <path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </td>
        </tr>
        <tr>
          <td class="p-4 border-b border-surface-light">
            <div class="flex items-center gap-3">
              <img class="inline-block object-center w-11 h-11 rounded-md border border-surface-light bg-slate-100 object-contain p-1 dark:bg-surface-dark" src="https://docs.material-tailwind.com/img/logos/logo-google.svg" alt="Google" />
              <small class="font-sans antialiased text-sm text-current font-bold">
                Google
              </small>
            </div>
          </td>
          <td class="p-4 border-b border-surface-light">
            <small class="font-sans antialiased text-sm text-current">
              $1,000
            </small>
          </td>
          <td class="p-4 border-b border-surface-light">
            <small class="font-sans antialiased text-sm text-current">
              Wed 5:00pm
            </small>
          </td>
          <td class="p-4 border-b border-surface-light">
            <div class="w-max">
              <div class="relative inline-flex w-max items-center border font-sans font-medium rounded-md text-xs p-0.5 bg-green-500/10 border-transparent text-green-500 shadow-none">
                <span class="font-sans text-current my-0.5 mx-1.5">
                  paid
                </span>
              </div>
            </div>
          </td>
          <td class="p-4 border-b border-surface-light">
            <div class="flex items-center gap-3">
              <div class="h-9 w-12 rounded-md border border-surface-light p-1">
                <img class="inline-block object-center rounded h-full w-full object-contain p-1" src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png" alt="visa" />
              </div>
              <div class="flex flex-col">
                <small class="font-sans antialiased text-sm text-current capitalize">
                  visa 1234
                </small>
                <small class="font-sans antialiased text-sm text-current opacity-70">
                  06/2026
                </small>
              </div>
            </div>
          </td>
          <td class="p-4 border-b border-surface-light">
            <button class="inline-grid place-items-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[38px] min-h-[38px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none outline-none group">
              <svg class="h-4 w-4" width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                <path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </td>
        </tr>
        <tr>
          <td class="p-4">
            <div class="flex items-center gap-3">
              <img class="inline-block object-center w-11 h-11 rounded-md border border-surface-light bg-slate-100 object-contain p-1 dark:bg-surface-dark" src="https://docs.material-tailwind.com/img/logos/logo-netflix.svg" alt="netflix" />
              <small class="font-sans antialiased text-sm text-current font-bold">
                Netflix
              </small>
            </div>
          </td>
          <td class="p-4">
            <small class="font-sans antialiased text-sm text-current">
              $14,000
            </small>
          </td>
          <td class="p-4">
            <small class="font-sans antialiased text-sm text-current">
              Wed 3:30am
            </small>
          </td>
          <td class="p-4">
            <div class="w-max">
              <div class="relative inline-flex w-max items-center border font-sans font-medium rounded-md text-xs p-0.5 bg-red-500/10 border-transparent text-red-500 shadow-none">
                <span class="font-sans text-current my-0.5 mx-1.5">
                  cancelled
                </span>
              </div>
            </div>
          </td>
          <td class="p-4">
            <div class="flex items-center gap-3">
              <div class="h-9 w-12 rounded-md border border-surface-light p-1">
                <img class="inline-block object-center rounded h-full w-full object-contain p-1" src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png" alt="visa" />
              </div>
              <div class="flex flex-col">
                <small class="font-sans antialiased text-sm text-current capitalize">
                  visa 1234
                </small>
                <small class="font-sans antialiased text-sm text-current opacity-70">
                  06/2026
                </small>
              </div>
            </div>
          </td>
          <td class="p-4">
            <button class="inline-grid place-items-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[38px] min-h-[38px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none outline-none group">
              <svg class="h-4 w-4" width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
                <path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="flex items-center justify-between border-t border-surface-light py-4">
    <button class="inline-flex items-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed text-sm rounded-md py-1.5 px-3 shadow-sm hover:shadow bg-transparent border-slate-200 text-slate-800 hover:bg-slate-200">
      Previous
    </button>
    <div class="flex items-center gap-2">
      <button class="inline-grid place-items-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-md shadow-sm hover:shadow bg-slate-200 border-slate-200 text-slate-800 hover:bg-slate-100 hover:bg-slate-100">
        1
      </button>
      <button class="inline-grid place-items-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none">
        2
      </button>
      <button class="inline-grid place-items-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none">
        3
      </button>
      <button class="inline-grid place-items-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none">
        ...
      </button>
      <button class="inline-grid place-items-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none">
        8
      </button>
      <button class="inline-grid place-items-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none">
        9
      </button>
      <button class="inline-grid place-items-center border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent border-transparent text-slate-800 hover:bg-slate-200/10 hover:border-slate-600/10 shadow-none hover:shadow-none">
        10
      </button>
    </div>
    <button class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-1.5 px-3 shadow-sm hover:shadow bg-transparent border-slate-200 text-slate-800 hover:bg-slate-200" data-shape="default" data-width="default">
      Next
    </button>
  </div>
</div>
`
      }}
    />
  );
}
