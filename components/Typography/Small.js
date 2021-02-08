import React from "react";

export default function Small() {
  return (
    <>
      <div className="flex flex-wrap items-center mt-4">
        <div className="w-full sm:w-3/12">
          <small className="text-gray-600 text-sm font-semibold uppercase">
            Small
          </small>
        </div>
        <div className="w-full sm:w-9/12">
          <small className="font-normal leading-normal mt-0 mb-4">
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at.
          </small>
        </div>
      </div>
    </>
  );
}
