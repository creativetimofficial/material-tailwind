import React from "react";

export default function LoginContainer({ children }) {
  return (
    <div className="grid place-items-center">
      <div className="top-1/2 max-w-sm w-10/12">{children}</div>
    </div>
  );
}
