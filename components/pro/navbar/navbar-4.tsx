export default function SectionNavbar4() {
  return (
    <div className="h-screen bg-gradient-to-tr from-blue-500 to-blue-700 p-2">
      <nav className="navbar max-w-screen-2xl rounded-xl py-4 px-8 mx-auto shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 bg-white text-white">
        <div className="container mx-auto lg:flex">
          <div className="flex items-center justify-between">
            <a className="nav-brand mr-auto ml-4" href="#">Material Tailwind</a>
            <button
              data-trigger="true"
              className="navbar-trigger ml-auto mr-0 mb-0 block lg:hidden"
              type="button"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-trigger-icon">
                <span bar1="" className="navbar-trigger-bar mt-1">
                  <span className="hidden origin-[10%_10%] rotate-45"></span>
                </span>
                <span bar2="" className="bar2 navbar-trigger-bar mt-2"></span>
                <span bar3="" className="bar3 navbar-trigger-bar mt-2">
                  <span className="mt-[0.4375rem] hidden origin-[10%_90%] -rotate-45"></span>
                </span>
              </span>
            </button>
          </div>

            <div className="collapse navbar-collapse transition-all duration-500 overflow-hidden !basis-auto">
              <ul className="navbar-nav mx-auto">
                <li>
                  <a className="nav-link" aria-current="page" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path><path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path></svg>
                    Pages
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                    Account
                  </a>
                </li>
                <li className="flex">
                  <a className="nav-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg>
                    Blocks
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
                    Docs
                  </a>
                </li>
              </ul>
            </div>
            <button className="button button-blue button-sm hidden lg:inline-block" type="button">Buy Now</button>
        </div>
      </nav>
    </div>  
  )
}