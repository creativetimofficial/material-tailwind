import { ReactNode } from "react";

// prop-types
interface Props {
  id: string;
  children: ReactNode;
}

export default function ComponentDemo({ id, children, ...rest }: Props) {
  return (
    <div
      {...rest}
      id={id}
      className="grid min-h-[140px] w-full scroll-mt-48 place-items-center overflow-x-scroll rounded-lg border border-blue-gray-50 bg-[#f8fafc] p-6 lg:overflow-visible"
    >
      {children}
    </div>
  );
}
