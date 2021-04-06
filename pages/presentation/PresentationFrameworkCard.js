import React from "react";
import Link from "next/link";
import H6 from "components/Typography/Heading5";

export default function PresentationFrameworkCard({ color, href, img, title }) {
  return (
    <Link
      href={href}
      as={
        (process.env.NODE_ENV === "production" ? "/material-tailwind" : "") +
        href
      }
    >
      <a>
        <div
          className={`bg-${color} shadow-xl rounded-xl text-center p-8 mt-8`}
        >
          <img
            alt="..."
            className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
            src={img}
          />
          <div className="text-white mt-4">
            <H6>{title}</H6>
          </div>
        </div>
      </a>
    </Link>
  );
}
