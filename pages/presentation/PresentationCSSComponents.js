import React from "react";
import Link from "next/link";
import H4 from "components/Typography/Heading4";
import Icon from "components/Icon/Icon";
import LeadText from "components/Typography/LeadText";

export default function PresentationCSSComponents() {
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md rounded-full bg-white">
          <Icon family="font-awesome" name="fas fa-sitemap" size="xl" />
        </div>
        <H4 color="gray">CSS Components</H4>
        <LeadText color="blueGray">
          Every element that you need in a product comes built in as a
          component. All components fit perfectly with each other and can have
          different colours.
        </LeadText>
        <div className="block pb-6">
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
            Button
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
            Inputs
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
            Labels
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
            Menus
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
            Navbars
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
            Pagination
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
            Progressbars
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
            Typography
          </span>
        </div>
        <Link href="/documentation/react/buttons/filled">
          <a className="font-bold text-blue-gray-900 hover:text-blue-gray-800 transition-all flex items-center gap-2">
            View All <Icon family="font-awesome" name="fas fa-angle-right" />
          </a>
        </Link>
      </div>

      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
        <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
          <img
            alt="..."
            src={require("assets/img/button.svg")}
            className="w-full align-middle rounded absolute shadow-lg z-20"
            style={{
              maxWidth: "100px",
              left: "100px",
              top: "125px",
            }}
          />
          <img
            alt="..."
            src={require("assets/img/card.svg")}
            className="w-full align-middle rounded-lg absolute"
            style={{
              maxWidth: "280px",
              left: "210px",
              top: "-210px",
            }}
          />
          <img
            alt="..."
            src={require("assets/img/dropdown.svg")}
            className="w-full align-middle rounded-lg absolute z-10"
            style={{
              maxWidth: "180px",
              left: "0",
              top: "-100px",
            }}
          />
          <img
            alt="..."
            src={require("assets/img/menu.svg")}
            className="w-full align-middle rounded-lg absolute shadow-lg"
            style={{
              maxWidth: "580px",
              left: "0",
              top: "210px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
