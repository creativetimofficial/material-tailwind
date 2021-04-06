import React from "react";
import H4 from "components/Typography/Heading4";
import Icon from "components/Icon/Icon";
import LeadText from "components/Typography/LeadText";
import Paragraph from "components/Typography/Paragraph";

export default function PresentationDocumentation() {
  return (
    <div className="items-center flex flex-wrap pt-48">
      <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
        <div className="md:pr-12">
          <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md rounded-full bg-white">
            <Icon family="font-awesome" name="fas fa-file-alt" size="xl" />
          </div>
          <H4 color="gray">Complex Documentation</H4>
          <LeadText color="blueGray">
            This extension comes a lot of fully coded examples that help you get
            started faster. You can adjust the colors and also the programming
            language. You can change the text and images and you're good to go.
          </LeadText>
          <ul className="list-none mt-6">
            <li className="py-2">
              <div className="flex items-center">
                <span className="text-xs font-semibold w-7 h-7 grid place-items-center uppercase rounded-full text-blue-gray-800 bg-gray-100 mr-3">
                  <Icon family="font-awesome" name="fas fa-fingerprint" />
                </span>
                <Paragraph color="blueGray" style={{ margin: "0" }}>
                  Built by Developers for Developers
                </Paragraph>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <span className="text-xs font-semibold w-7 h-7 grid place-items-center uppercase rounded-full text-blue-gray-800 bg-gray-100 mr-3">
                  <Icon family="font-awesome" name="fab fa-html5" />
                </span>
                <Paragraph color="blueGray" style={{ margin: "0" }}>
                  Carefully crafted code for Components
                </Paragraph>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <span className="text-xs font-semibold w-7 h-7 grid place-items-center uppercase rounded-full text-blue-gray-800 bg-gray-100 mr-3">
                  <Icon family="font-awesome" name="far fa-paper-plane" />
                </span>
                <Paragraph color="blueGray" style={{ margin: "0" }}>
                  Dynamic Javascript Components
                </Paragraph>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
        <img
          alt="..."
          className="max-w-full rounded-xl shadow-xl"
          src={require("assets/img/documentation.png")}
        />
      </div>
    </div>
  );
}
