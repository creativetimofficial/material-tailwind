import React from "react";
import Link from "next/link";
import Card from "components/Card/Card";
import CardImage from "components/Card/CardImage";
import CardBody from "components/Card/CardBody";
import Icon from "components/Icon/Icon";
import H4 from "components/Typography/Heading4";
import H6 from "components/Typography/Heading6";
import LeadText from "components/Typography/LeadText";
import Paragraph from "components/Typography/Paragraph";

export default function LandingWorkingSectionBody() {
  return (
    <div className="flex flex-wrap items-center mt-32">
      <div className="w-full md:w-5/12 px-4 mx-auto">
        <div className="text-blue-gray-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
          <Icon name="people" size="3xl" />
        </div>
        <H4 color="gray">Working with us is a pleasure</H4>
        <LeadText color="blueGray">
          Don't let your uses guess by attaching tooltips and popoves to any
          element. Just make sure you enable them first via JavaScript.
        </LeadText>
        <LeadText color="blueGray">
          The kit comes with three pre-built pages to help you get started
          faster. You can change the text and images and you're good to go. Just
          make sure you enable them first via JavaScript.
        </LeadText>
        <Link href="/">
          <a
            href="#pablo"
            className="font-medium text-light-blue-500 mt-2 inline-block"
          >
            Read More
          </a>
        </Link>
      </div>

      <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
        <Card>
          <CardImage
            alt="Card Image"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
          />
          <CardBody>
            <H6 color="gray">Top Notch Services</H6>
            <Paragraph color="blueGray">
              The Arctic Ocean freezes every winter and much of the sea-ice then
              thaws every summer, and that process will continue whatever
              happens.
            </Paragraph>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
