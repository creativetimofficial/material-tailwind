import React from "react";
import routes from "routes";
import Sidebar from "components/Documentation/Sidebar";
import Footer from "components/Documentation/Footer";

export default function Container({ children }) {
  return (
    <div className="container max-w-full flex">
      <div className="flex w-full">
        <Sidebar routes={routes} />
        <div className="w-full flex flex-col justify-between">
          <div className="pt-9 px-9 min-w-0 w-full flex-auto flex items-start gap-10">
            <div className="w-full lg:w-8/12">{children}</div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
