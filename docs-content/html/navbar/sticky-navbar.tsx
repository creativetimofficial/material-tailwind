export function StickyNavbar() {
  return (
    <div className="grid w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <div className="max-h-96 overflow-scroll">
        <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto text-white bg-white bg-opacity-90 sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
          <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
            <a href="#"
              className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
              Material Tailwind
            </a>
            <div className="hidden lg:block">
              <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                  <a href="#" className="flex items-center">Pages</a>
                </li>
                <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                  <a href="#" className="flex items-center">Account</a>
                </li>
                <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                  <a href="#" className="flex items-center">Blocks</a>
                </li>
                <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                  <a href="#" className="flex items-center">Docs</a>
                </li>
              </ul>
            </div>
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              type="button">
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </span>
            </button>
          </div>
        </nav>
        <div className="mx-auto max-w-screen-md py-12">
          <div className="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <img
              alt="nature"
              className="h-[32rem] w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2717&amp;q=80"
            />
          </div>
          <h2 className="mb-2 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
            What is Material Tailwind
          </h2>
          <p className="block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Can you help me out? you will get a lot of free exposure doing this
            can my website be in english?. There is too much white space do less
            with more, so that will be a conversation piece can you rework to
            make the pizza look more delicious other agencies charge much lesser
            can you make the blue bluer?. I think we need to start from scratch
            can my website be in english?, yet make it sexy i&apos;ll pay you in
            a week we don&apos;t need to pay upfront i hope you understand can
            you make it stand out more?. Make the font bigger can you help me
            out? you will get a lot of free exposure doing this that&apos;s
            going to be a chunk of change other agencies charge much lesser. Are
            you busy this weekend? I have a new project with a tight deadline
            that&apos;s going to be a chunk of change. There are more projects
            lined up charge extra the next time.
          </p>
        </div>
      </div>
    </div>
  );
}
