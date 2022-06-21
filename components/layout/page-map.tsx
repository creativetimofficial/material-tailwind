import { useState, useEffect } from "react";

// @material-tailwind/react components
import { Typography } from "@material-tailwind/react";

export default function PageMap({ frontMatter }) {
  const [hash, setHash] = useState(frontMatter[0]);

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      const hashLink = window.location.hash.replace("#", "");

      setHash(hashLink);
    });
  }, []);

  return (
    <aside className="relative hidden h-screen w-64 pt-20 pb-4 pl-16 lg:block">
      <div className="fixed h-screen w-64">
        <Typography variant="h6" color="blue-grey" className="capitalize">
          On This Page
        </Typography>
        <ul className="list-none pl-4 pt-2">
          {frontMatter.navigation &&
            frontMatter.navigation.map((el, key) => (
              <li key={key}>
                <a
                  href={`#${el}`}
                  className={`before:content-[' '] relative list-item w-full py-1 px-1 text-sm capitalize transition-colors before:absolute before:-left-3 before:top-2/4 before:h-1 before:w-1 before:-translate-y-2/4 before:rounded-full before:transition-colors hover:text-blue-grey-900 hover:before:bg-blue-grey-900 focus:text-blue-grey-900 focus:before:bg-blue-grey-900 ${
                    hash === el
                      ? "font-semibold text-blue-grey-900 before:bg-blue-grey-900"
                      : "font-normal text-blue-grey-500 before:bg-blue-grey-300"
                  }`}
                >
                  {el.includes("-") ? el.split("-").join(" ") : el}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
}
