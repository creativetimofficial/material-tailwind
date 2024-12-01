import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  route: string;
  center?: boolean;
}

export const FrameworkCard = React.forwardRef(
  ({ children, route, center = false }: Props, ref: any) => {
    return (
      <Link
        ref={ref}
        href={route}
        className={`grid w-full min-w-[7rem] transform cursor-pointer ${
          center ? "place-items-center" : ""
        } rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25`}
      >
        {children}
      </Link>
    );
  },
);

FrameworkCard.displayName = "FrameworkCard";

export default FrameworkCard;
