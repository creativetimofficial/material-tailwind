import { ReactNode, forwardRef } from "react";

// next.js components
import Link from "next/link";

// prop-types
interface Props {
  children: ReactNode;
  route: string;
}

const Framework = forwardRef<HTMLAnchorElement>(
  ({ children, route }: Props, ref) => {
    return (
      <Link href={route}>
        <a
          ref={ref}
          className="grid h-36 w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-grey-50 bg-white transition-all hover:scale-105 hover:border-blue-grey-100 hover:bg-blue-grey-50 hover:bg-opacity-25"
        >
          <span className="h-24 w-24">{children}</span>
        </a>
      </Link>
    );
  }
);

Framework.displayName = "Framework";

export default Framework;
