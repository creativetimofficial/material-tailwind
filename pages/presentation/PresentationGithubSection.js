import React from "react";
import H4 from "components/Typography/Heading4";
import Icon from "components/Icon/Icon";
import LeadText from "components/Typography/LeadText";
import Button from "components/Button/Button";

export default function PresentationGithubSection() {
  return (
    <section className="py-20 bg-blue-gray-800 overflow-hidden">
      <div className="container max-w-7xl mx-auto pb-64">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-8/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md rounded-full bg-white">
              <Icon family="font-awesome" name="fas fa-code-branch" size="xl" />
            </div>
            <div className="text-white">
              <H4>Open Source</H4>
            </div>
            <div className="text-blue-gray-200">
              <LeadText>
                Since{" "}
                <a
                  href="https://tailwindcss.com/?ref=material-tailwind"
                  className="text-blue-gray-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </a>{" "}
                is an open source project we wanted to <br />
                continue this movement too. You can give this version a try to
                feel <br />
                the design and also test the quality of the code!
              </LeadText>
              <LeadText>
                Get it free on Github and please help us spread the news with a
                Star!
              </LeadText>
            </div>
            <a
              href="https://github.com/creativetimofficial/material-tailwind?ref=material-tailwind"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block"
            >
              <Button color="blueGray" size="lg" ripple="light">
                Github Star
              </Button>
            </a>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
            <i
              className="fab fa-github text-blue-gray-900 absolute -top-150-px -right-100 opacity-50"
              style={{ fontSize: "50rem", top: "-150px", right: "-320px" }}
            ></i>
          </div>
        </div>
      </div>
    </section>
  );
}
