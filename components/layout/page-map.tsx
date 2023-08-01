import React from "react";
import { Typography } from "@material-tailwind/react";

export default function PageMap({ frontMatter }) {
  const [hash, setHash] = React.useState(frontMatter[0]);

  React.useEffect(() => {
    const hashLink = window.location.hash.replace("#", "");

    setHash(hashLink);
  }, []);

  React.useEffect(() => {
    window.addEventListener("hashchange", () => {
      const hashLink = window.location.hash.replace("#", "");

      setHash(hashLink);
    });
  }, []);

  return (
    <aside className="relative ml-auto hidden h-screen w-64 pt-24 pb-4 lg:block">
      <div className="fixed h-screen w-64">
        <Typography
          variant="small"
          className="font-bold capitalize text-primary"
        >
          On This Page
        </Typography>
        <ul className="list-none pt-2">
          {frontMatter.navigation &&
            frontMatter.navigation.map((el, key) => (
              <li key={key}>
                <a
                  href={`#${el}`}
                  className={`relative list-item w-full py-1 text-xs capitalize transition-colors hover:text-primary focus:text-primary ${
                    hash === el
                      ? "font-medium text-blue-500"
                      : "font-normal text-gray-600"
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
