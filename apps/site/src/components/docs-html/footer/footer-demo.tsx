export function FooterDemo() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 border-t border-surface py-4 text-center md:justify-between">
      <p className="font-sans text-base text-inherit antialiased">
        © 2024 Material Tailwind
      </p>
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
    </footer>
  );
}
