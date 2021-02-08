import React from "react";

export default function LeadText() {
  return (
    <>
      <div className="flex flex-wrap items-center">
        <div className="w-full sm:w-3/12">
          <small className="text-gray-600 text-sm font-semibold uppercase">
            Leading Text
          </small>
        </div>
        <div className="w-full sm:w-9/12">
          <p className="text-lg font-light leading-relaxed mt-6 mb-4">
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at.
          </p>
        </div>
      </div>
    </>
  );
}
