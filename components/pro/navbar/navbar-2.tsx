export default function SectionNavbar2() {
  return (
    <nav className="navbar w-full bg-blue-500 rounded-none my-5 py-4">
      <div className="container mx-auto lg:flex">
        <div className="flex items-center justify-between">
          <a className="nav-brand mr-auto ml-4 !text-white" href="#">Material Tailwind</a>
          <button
            data-trigger="true"
            className="navbar-trigger ml-auto mr-0 mb-0 block lg:hidden"
            type="button"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-trigger-icon">
              <span bar1="" className="navbar-trigger-bar mt-1 !bg-white">
                <span className="hidden origin-[10%_10%] rotate-45 !bg-white"></span>
              </span>
              <span bar2="" className="bar2 navbar-trigger-bar mt-2 !bg-white"></span>
              <span bar3="" className="bar3 navbar-trigger-bar mt-2 !bg-white">
                <span className="mt-[0.4375rem] hidden origin-[10%_90%] -rotate-45 !bg-white"></span>
              </span>
            </span>
          </button>
        </div>

          <div className="collapse navbar-collapse transition-all duration-500 overflow-hidden !basis-auto">
            <ul className="navbar-nav mx-auto">
              <li>
                <a className="nav-link !text-white" aria-current="page" href="#">
                  <i className="material-icons mr-2 text-base opacity-60">article</i>
                  <span>Documantation</span>
                </a>
              </li>
              <li>
                <a className="nav-link !text-white" href="#">
                  <i className="material-icons mr-2 text-base opacity-60">apps</i>
                  <span>Components</span>
                </a>
              </li>
              <li className="flex">
                <a className="nav-link !text-white" href="#">
                  <i className="material-icons mr-2 text-base opacity-60"
                    >view_carousel</i
                  >
                  <span>Templates</span>
                </a>
              </li>
              <li>
                <a className="nav-link !text-white" href="#">
                  <i className="fab fa-github mr-2 text-base opacity-60"></i>
                  <span>Github</span>
                </a>
              </li>
            </ul>
          </div>
          <button className="button button-light text-blue-grey-900 button-sm hidden lg:inline-block" type="button">Buy Now</button>
      </div>
    </nav>
  )
}