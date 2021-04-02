import React from "react";

export default function ProfileContentFooter() {
  return (
    <div className="mt-10 py-10 border-t border-gray-200 text-center">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-9/12 px-4">
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            An artist of considerable range, Jenna the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
          <a
            href="#pablo"
            className="font-normal text-light-blue-500 mt-5 block"
            onClick={(e) => e.preventDefault()}
          >
            Show more
          </a>
        </div>
      </div>
    </div>
  );
}
