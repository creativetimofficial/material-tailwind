import { ReactNode } from "react";

export default function ComponentCard({
  children,
  ...rest
}: {
  children: ReactNode;
}) {
  return (
    <div
      {...rest}
      className="grid place-items-center w-full min-h-[150px] bg-[#f8fafc] p-6 border border-blue-grey-50 rounded-lg"
    >
      {children}
    </div>
  );
}
