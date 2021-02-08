import React from "react";

export default function ProgressMulti() {
  return (
    <>
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
    </>
  );
}
