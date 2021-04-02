import React from "react";

export default function ProfileContent({ children }) {
  return (
    <section className="relative py-16 bg-gray-50">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-xl -mt-64">
          <div className="px-6">{children}</div>
        </div>
      </div>
    </section>
  );
}
