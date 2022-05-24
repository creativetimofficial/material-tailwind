import SectionSubscribe from "pagesComponents/Sections/SectionSubscribe";
import { Typography } from "../../packages/material-tailwind-react/src";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-6 text-[#1A237E] bg-grey-100 relative z-50">
      <SectionSubscribe />
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 px-4">
            <Typography
              variant="h3"
              color="inherit"
              className="!font-sans mb-2"
            >
              Material Tailwind
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              className="font-normal text-lg mt-0 mb-2 opacity-60"
            >
              Easy to use React components for Tailwind CSS and Material Design.
            </Typography>
            <div className="mt-6">
              <a
                href="https://www.twitter.com/creativetim?ref=material-tailwind"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter bg-white text-light-blue-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
              </a>
              <a
                href="https://www.facebook.com/creativetim?ref=material-tailwind"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-square bg-white text-light-blue-600 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
              </a>
              <a
                href="https://www.dribbble.com/creativetim?ref=material-tailwind"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-dribbble bg-white text-pink-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
              </a>
              <a
                href="https://www.github.com/creativetimofficial?ref=material-tailwind"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github bg-white text-grey-900 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
              </a>
              <a
                href="https://discord.com/invite/gxtg2rJa?ref=material-tailwind"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-discord bg-white text-blue-700 shadow-lg font-lg py-3 px-2.5 items-center justify-center align-center rounded-full outline-none focus:outline-none inline-block text-center"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 md:ml-auto">
                <span className="block text-[#1A237E] text-lg font-bold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-[#1A237E]/60 font-normal block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation?ref=material-tailwind"
                      target="_blank"
                      rel="noreferrer"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#1A237E]/60 font-normal block pb-2 text-sm"
                      href="https://www.creative-tim.com/blog?ref=material-tailwind"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#1A237E]/60 font-normal block pb-2 text-sm"
                      href="https://github.com/creativetimofficial?ref=material-tailwind"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#1A237E]/60 font-normal block pb-2 text-sm"
                      href="https://www.creative-tim.com/templates/free?ref=material-tailwind"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                <span className="block text-[#1A237E] text-lg font-bold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-[#1A237E]/60 font-normal block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=material-tailwind"
                      target="_blank"
                      rel="noreferrer"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#1A237E]/60 font-normal block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=material-tailwind"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Contribute
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#1A237E]/60 font-normal block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/material-tailwind/blob/main/CODE_OF_CONDUCT.md?ref=material-tailwind"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code of Conduct
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#1A237E]/60 font-normal block pb-2 text-sm"
                      href="https://www.creative-tim.com/contact-us?ref=material-tailwind"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-grey-300" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <a
            href="https://vercel.com/?utm_source=creativetim&utm_campaign=oss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center no-underline text-dark font-semibold"
          >
            <span className="mr-1">Sponsored by</span>
            <span>
              <svg height="20" viewBox="0 0 283 64" fill="none">
                <path
                  fill="currentColor"
                  d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                ></path>
              </svg>
            </span>
          </a>
          <div className="w-full md:w-4/12  px-4 md:px-0 text-center md:text-right">
            <div className="text-sm font-medium py-1">
              Copyright &copy; {year} Material Tailwind by{" "}
              <a
                href="https://www.creative-tim.com?ref=material-tailwind"
                target="_blank"
                rel="noreferrer"
                className="text-inherit transition-all"
              >
                Creative Tim.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
