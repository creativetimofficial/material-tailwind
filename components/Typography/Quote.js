import React from "react";

export default function Quote() {
  return (
    <>
      <div className="flex flex-wrap items-center">
        <div className="w-full sm:w-3/12">
          <small className="text-gray-600 text-sm font-semibold uppercase">
            Quote
          </small>
        </div>
        <div className="w-full sm:w-9/12">
          <p className="text-base font-light leading-relaxed mt-0 mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="block text-gray-600">
            - Someone famous in <cite>Source Title</cite>
          </footer>
        </div>
      </div>
    </>
  );
}
