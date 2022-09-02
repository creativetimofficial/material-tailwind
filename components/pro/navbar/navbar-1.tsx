export default function SectionNavbar1() {
  return (
    <nav className="navbar w-full bg-white my-5">
      <div className="container-lg px-0">
        <div className="flex w-full items-center">
          <a className="nav-brand mr-auto ml-0" href="#">Material Tailwind</a>
          <button
            data-trigger
            className="navbar-trigger ml-auto mr-0 mb-0 block lg:hidden"
            type="button"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-trigger-icon">
              <span bar1="" className="navbar-trigger-bar mt-1"
                ><span className="hidden origin-[10%_10%] rotate-45"></span
              ></span>
              <span bar2="" className="bar2 navbar-trigger-bar mt-2"></span>
              <span bar3="" className="bar3 navbar-trigger-bar mt-2"
                ><span
                  className="mt-mt-[0.4375rem] hidden origin-[10%_90%] -rotate-45"
                ></span
              ></span>
            </span>
          </button>
        </div>
        <div className="collapse navbar-collapse" navbar-menu="">
          <ul className="navbar-nav">
            <li>
              <a className="nav-link" aria-current="page" href="#">
                <i className="material-icons mr-2 text-base opacity-60">article</i>
                <span>Documantation</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <i className="material-icons mr-2 text-base opacity-60">apps</i>
                <span>Components</span>
              </a>
            </li>
            <li className="flex">
              <a className="nav-link" href="#">
                <i className="material-icons mr-2 text-base opacity-60"
                  >view_carousel</i
                >
                <span>Templates</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <i className="fab fa-github mr-2 text-base opacity-60"></i>
                <span>Github</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}