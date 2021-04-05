import React from "react";
import LeadText from "components/Typography/LeadText";

export default function ProfileContentFooter() {
  return (
    <div className="mb-10 py-2 border-t border-gray-200 text-center">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-9/12 px-4">
          <LeadText color="blueGray">
            An artist of considerable range, Jenna the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </LeadText>
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
