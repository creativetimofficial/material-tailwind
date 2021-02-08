import React from "react";

export default function ProgressBadgeMulti() {
  return (
    <>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span
              className={
                "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200"
              }
            >
              Task in progress
            </span>
          </div>
          <div className="text-right">
            <span
              className={"text-xs font-semibold inline-block text-yellow-600"}
            >
              50%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
          <div
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
            style={{ width: "10%" }}
          ></div>
          <div
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
            style={{ width: "15%" }}
          ></div>
          <div
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
            style={{ width: "25%" }}
          ></div>
        </div>
      </div>
    </>
  );
}
