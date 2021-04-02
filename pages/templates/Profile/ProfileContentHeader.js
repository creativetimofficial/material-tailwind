import React from "react";
import Button from "components/Button/Button";

export default function ProfileContentHeader() {
  const profilePicture = require("../../../assets/img/team-2-800x800.jpg");
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
        <div className="relative">
          <img
            alt="Profile picture"
            src={profilePicture}
            className="shadow-xl rounded-full h-auto align-middle border-none w-40 -mt-20"
          />
        </div>
      </div>
      <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
        <Button color="lightBlue" ripple="light">
          Conntect
        </Button>
      </div>
      <div className="w-full lg:w-4/12 px-4 lg:order-1">
        <div className="flex justify-center py-4 lg:pt-4 pt-8">
          <div className="mr-4 p-3 text-center">
            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
              22
            </span>
            <span className="text-sm text-gray-700">Friends</span>
          </div>
          <div className="mr-4 p-3 text-center">
            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
              10
            </span>
            <span className="text-sm text-gray-700">Photos</span>
          </div>
          <div className="lg:mr-4 p-3 text-center">
            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
              89
            </span>
            <span className="text-sm text-gray-700">Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
