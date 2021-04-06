import React from "react";
import Icon from "components/Icon/Icon";
import H6 from "components/Typography/Heading6";
import Paragraph from "components/Typography/Paragraph";

export default function PresentationInfoCard({ icon, title, children }) {
  return (
    <div className="relative flex flex-col mt-4">
      <div className="px-4 py-5 flex-auto">
        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-white">
          <Icon family="font-awesome" name={icon} />
        </div>
        <H6 color="gray">{title}</H6>
        <Paragraph color="blueGray">{children}</Paragraph>
      </div>
    </div>
  );
}
