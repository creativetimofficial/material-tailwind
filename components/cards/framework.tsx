import { ReactNode, forwardRef } from "react";

// next.js components
import Link from "next/link";

// prop-types
interface Props {
  children: ReactNode;
  route: string;
  center?: boolean;
}

const Framework = forwardRef(
  ({ children, route, center = false }: Props, ref: any) => {
    return (
      <Link href={route}>
        <a
          ref={ref}
          className={`grid w-full min-w-[7rem] transform cursor-pointer ${
            center ? "place-items-center" : ""
          } border-blue-gray-50 hover:border-blue-gray-100 hover:bg-blue-gray-50 rounded-xl border bg-white px-3 py-2 transition-all hover:scale-105 hover:bg-opacity-25`}
        >
          {children}
        </a>
      </Link>
    );
  }
);

Framework.displayName = "Framework";

export default Framework;
