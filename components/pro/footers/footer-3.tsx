export default function SectionFooter3() {
  return (
    <div className="my-20 py-20 bg-grey-900">
      <div className="container mx-auto p-8">
        <div className="md:flex items-center">
          <div className="w-full md:w-8/12">
            <h5 className="font-bold text-xl mb-6 text-white">Material Tailwind</h5>
            <p className="text-white/80 mb-8">Track actions taken on your website that originated from social,<br/> and understand the impact on your bottom line.</p>
            <ul className="block md:flex gap-8 list-unstyled">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="block pb-2 text-md font-normal text-white/60 hover:text-white/80"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="block pb-2 text-md font-normal text-white/60 hover:text-white/80"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="block pb-2 text-md font-normal text-white/60 hover:text-white/80"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="block pb-2 text-md font-normal text-white/60 hover:text-white/80"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="block pb-2 text-md font-normal text-white/60 hover:text-white/80"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="block pb-2 text-md font-normal text-white/60 hover:text-white/80"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          

          <div className="w-full md:mb-2 md:w-4/12 lg:w-2/12 ml-auto">
            <p className="text-white font-semibold text-left md:text-right lg:text-left mb-4 mt-6 md:mt-0">Get the app</p>
            <div className="flex md:block">
              <button className="button button-outlined md:button-lg button-light md:mb-4 flex items-center md:ml-auto lg:ml-0">
                <i className="fab fa-apple text-3xl mr-3"></i>
                App Store
                </button>
              <button className="button button-outlined md:button-lg button-light flex items-center ml-auto lg:ml-0">
                <i className="fab fa-google text-3xl mr-3"></i>
                Google Play
              </button>
            </div>
          </div>
        </div>
        <hr className="horizontal light my-10" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <p className="py-1 font-normal text-grey-500">
            Copyright © {/* */}2024{/* */} Material Tailwind by{/* */}{" "}
            <a
              href="https://www.creative-tim.com?ref=material-tailwind"
              target="_blank"
              rel="noreferrer"
              className="text-inherit transition-all"
            >
              Creative Tim.
            </a>
          </p>
          <div className="w-full px-4 text-center lg:w-4/12 md:px-0 md:text-right">
            <div className="flex mt-3 justify-end">
              <button className="button button-link button-text text-white/60 hover:text-white/80 px-4">
                <i className="fab fa-twitter text-xl" aria-hidden="true" />
              </button>
              <button className="button button-link button-text text-white/60 hover:text-white/80 px-4">
                <i className="fab fa-linkedin text-xl" aria-hidden="true" />
              </button>
              <button className="button button-link button-text text-white/60 hover:text-white/80 px-4">
                <i className="fab fa-facebook text-xl" aria-hidden="true" />
              </button>
              <button className="button button-link button-text text-white/60 hover:text-white/80 px-4">
                <i className="fab fa-github text-xl" aria-hidden="true" />
              </button>
              <button className="button button-link button-text text-white/60 hover:text-white/80 px-4">
                <i className="fab fa-tiktok text-xl" aria-hidden="true" />
              </button>
              <button className="button button-link button-text text-white/60 hover:text-white/80 px-4">
                <i className="fab fa-dribbble text-xl" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
