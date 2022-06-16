import { ReactNode } from "react";

// prop-types
interface Props {
  children: ReactNode;
}

export default function ComponentPreview({ children, ...rest }: Props) {
  return (
    <div
      {...rest}
      className="grid min-h-[140px] w-full scroll-mt-48 place-items-center overflow-x-scroll rounded-lg border border-blue-grey-50 bg-[#f8fafc] p-6 lg:overflow-visible"
    >
      {children}
    </div>
  );
}
