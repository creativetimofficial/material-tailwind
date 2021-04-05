import React from "react";
import H3 from "components/Typography/Heading3";
import Paragraph from "components/Typography/Paragraph";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

export default function LandingForm() {
  return (
    <div className="flex flex-wrap justify-center mt-24">
      <div className="w-full lg:w-8/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
          <div className="flex-auto p-5 lg:p-10">
            <div className="w-full text-center">
              <H3 color="gray">Want to work with us?</H3>
              <Paragraph color="blueGray">
                Complete this form and we will get back to you in 24 hours.
              </Paragraph>
            </div>
            <div className="flex gap-8 mt-16 mb-10">
              <Input type="text" placeholder="Full Name" color="lightBlue" />
              <Input
                type="email"
                placeholder="Email Address"
                color="lightBlue"
              />
            </div>

            <div className="relative w-full" style={{ height: "150px" }}>
              <textarea
                placeholder=" "
                className="w-full h-full leading-normal shadow-none outline-none focus:outline-none focus:ring-0 px-0 md-input bg-transparent border-none md-input-light-blue-500"
                style={{ resize: "none" }}
              />
              <label className="text-gray-400 absolute left-0 -top-0.5 h-full w-full border border-t-0 border-l-0 border-r-0 border-b border-gray-300 pointer-events-none">
                <span className="absolute top-0 transition-all duration-300">
                  Message
                </span>
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <Button color="lightBlue" ripple="light">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
