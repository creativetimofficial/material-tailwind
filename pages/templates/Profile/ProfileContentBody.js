import React from "react";

export default function ProfileContentBody() {
  return (
    <div className="text-center mt-8">
      <h3 className="text-4xl font-semibold leading-normal text-gray-900 mb-2">
        Jenna Stones
      </h3>
      <div className="text-sm mt-0 mb-2 text-gray-700 font-bold uppercase flex items-center justify-center">
        <i className="material-icons mr-2 text-xl text-gray-700">place</i> Los
        Angeles, California
      </div>
      <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center">
        <i className="material-icons mr-2 text-xl text-gray-700">work</i>
        Solution Manager - Creative Tim Officer
      </div>
      <div className="mb-2 text-gray-700 flex items-center justify-center">
        <i className="material-icons mr-2 text-xl text-gray-700">
          account_balance
        </i>
        University of Computer Science
      </div>
    </div>
  );
}
