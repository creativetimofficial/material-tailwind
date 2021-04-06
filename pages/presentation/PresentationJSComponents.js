import React from "react";
import Link from "next/link";
import PresentationFrameworkCard from "./PresentationFrameworkCard";
import H4 from "components/Typography/Heading4";
import LeadText from "components/Typography/LeadText";
import Icon from "components/Icon/Icon";

export default function PresentationJSComponents() {
  return (
    <div className="flex flex-wrap items-center pt-32">
      <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
        <div className="justify-center flex flex-wrap relative">
          <div className="my-4 w-full lg:w-6/12 px-4">
            <PresentationFrameworkCard
              color="orange-900"
              title="Svelte"
              href="#svelte"
              img="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
            />
            <PresentationFrameworkCard
              color="light-blue-500"
              title="ReactJS"
              href="/documentation/react/alerts"
              img="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
            />
            <PresentationFrameworkCard
              color="gray-900"
              title="NextJS"
              href="/documentation/react/alerts"
              img="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
            />
          </div>
          <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
            <PresentationFrameworkCard
              color="yellow-600"
              title="JavaScript"
              href="#javascript"
              img="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
            />
            <PresentationFrameworkCard
              color="red-700"
              title="Angular"
              href="#angular"
              img="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
            />
            <PresentationFrameworkCard
              color="green-500"
              title="VueJS"
              href="#vue"
              img="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md rounded-full bg-white">
          <Icon
            family="font-awesome"
            name="fas fa-drafting-compass"
            size="xl"
          />
        </div>
        <H4 color="gray">Javascript Components</H4>
        <LeadText color="blueGray">
          In order to create a great User Experience some components require
          JavaScript. In this way you can manipulate the elements on the page
          and give more options to your users.
        </LeadText>
        <LeadText color="blueGray">
          We created a set of Components that are dynamic and come to help you.
        </LeadText>
        <div className="block pb-6">
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
            Alerts
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
            Dropdowns
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
            Menus
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
            Modals
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
            Navbars
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
            Popovers
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
            Tabs
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
            Tooltips
          </span>
        </div>
        <Link href="/documentation/react/alerts">
          <a className="font-bold text-blue-gray-900 hover:text-blue-gray-800 transition-all flex items-center gap-2">
            View All <Icon family="font-awesome" name="fas fa-angle-right" />
          </a>
        </Link>
      </div>
    </div>
  );
}
