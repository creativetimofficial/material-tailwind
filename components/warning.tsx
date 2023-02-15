import React from "react";
import { Alert } from "@material-tailwind/react";

// prop-types
interface Props {
  children: React.ReactElement;
}

export default function Warning({ children, ...rest }: Props) {
  return (
    <Alert
      icon={<span className="inline-block -translate-y-2 text-xl">⛔️</span>}
      className="my-4 border border-red-500/10 bg-red-500/10 px-4 py-2 text-red-900"
    >
      {children}
    </Alert>
  );
}
