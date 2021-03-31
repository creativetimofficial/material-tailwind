import React from "react";

export default function IndexFooter() {
  return (
    <>
      <footer className="w-full py-5 px-9 border border-t border-b-0 border-r-0 border-l-0 border-gray-200 mt-16">
        <div className="flex justify-between">
          <p className="text-gray-700 text-center">
            &copy; {new Date().getFullYear()} Material Tailwind
          </p>

          <ul className="list-none flex gap-8">
            <li>
              <a
                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                href="https://github.com/creativetimofficial/material-tailwind/blob/master/LICENSE.md?ref=material-tailwind"
                target="_blank"
              >
                MIT License
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                href="https://github.com/creativetimofficial/material-tailwind/blob/master/CONTRIBUTING.md?ref=material-tailwind"
                target="_blank"
              >
                Contribute
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                href="https://github.com/creativetimofficial/material-tailwind/blob/master/CODE_OF_CONDUCT.md?ref=material-tailwind"
                target="_blank"
              >
                Code of Conduct
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
