export default function SectionFooter1() {
  return (
    <div className="my-20">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="w-full md:w-8/12">
            <h5 className="font-bold text-xl mb-6">Material Tailwind</h5>
            <ul className="flex gap-8 list-unstyled">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="block pb-2 text-md font-normal text-grey-700 hover:text-grey-900"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="block pb-2 text-md font-normal text-grey-700 hover:text-grey-900"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="block pb-2 text-md font-normal text-grey-700 hover:text-grey-900"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="block pb-2 text-md font-normal text-grey-700 hover:text-grey-900"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="block pb-2 text-md font-normal text-grey-700 hover:text-grey-900"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="block pb-2 text-md font-normal text-grey-700 hover:text-grey-900"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          

          <div className="w-full md:mb-2 md:w-4/12 ">
            <p className="text-blue-gray-900 font-semibold mb-4">Stay up to date</p>

            <div className="flex">
              <div className="input-group input-group-outline w-full lg:w-8/12 mr-4">
                <label className="form-label">Enter your email</label>
                <input type="text" className="form-control" />
              </div>
              <button className="button button-pink w-full lg:w-4/12" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="horizontal dark my-12" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <p className="py-1 font-normal text-grey-500">
            Copyright © {/* */}2077{/* */} Material Tailwind by{/* */}{" "}
            <a
              href="https://www.creative-tim.com?ref=material-tailwind"
              target="_blank"
              rel="noreferrer"
              className="text-inherit transition-all"
            >
              Creative Tim.
            </a>
          </p>
          <div className="w-full px-4 text-center md:w-4/12 md:px-0 md:text-right">
            <ul className="flex gap-8 list-unstyled justify-end">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="block pb-2 text-md font-normal text-grey-500 hover:text-grey-700"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="block pb-2 text-md font-normal text-grey-500 hover:text-grey-700"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="block pb-2 text-md font-normal text-grey-500 hover:text-grey-700"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
