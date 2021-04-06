import React from "react";

export default function LoginContainer({ children }) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="max-w-sm w-96">{children}</div>
    </div>
  );
}
