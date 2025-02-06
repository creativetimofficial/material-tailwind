export function FooterWithLogo() {
  return (
    <footer className="w-full">
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 text-center md:justify-between">
        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/logo.png" alt="brand" className="w-8" />
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <li>
            <a
              href="#"
              className="font-sans text-base text-inherit antialiased hover:text-primary"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-sans text-base text-inherit antialiased hover:text-primary"
            >
              License
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-sans text-base text-inherit antialiased hover:text-primary"
            >
              Contribute
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-sans text-base text-inherit antialiased hover:text-primary"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-4 border-surface" />
      <p className="text-center font-sans text-base text-inherit antialiased">
        © 2024 Material Tailwind
      </p>
    </footer>
  );
}
