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
        <Typography variant="h6" color="blue-gray" className="capitalize">
          On This Page
        </Typography>
        <ul className="list-none pl-4 pt-2">
          {frontMatter.navigation &&
            frontMatter.navigation.map((el, key) => (
              <li key={key}>
                <a
                  href={`#${el}`}
                  className={`before:content-[' '] hover:text-blue-gray-900 hover:before:bg-blue-gray-900 focus:text-blue-gray-900 focus:before:bg-blue-gray-900 relative list-item w-full py-1 px-1 text-sm capitalize transition-colors before:absolute before:-left-3 before:top-2/4 before:h-1 before:w-1 before:-translate-y-2/4 before:rounded-full before:transition-colors ${
                    hash === el
                      ? "text-blue-gray-900 before:bg-blue-gray-900 font-semibold"
                      : "text-blue-gray-500 before:bg-blue-gray-300 font-normal"
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
