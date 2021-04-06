import React from "react";
import Link from "next/link";
import H1 from "components/Typography/Heading1";
import H5 from "components/Typography/Heading5";
import LeadText from "components/Typography/LeadText";
import Paragraph from "components/Typography/Paragraph";
import Button from "components/Button/Button";
import InputIcon from "components/Input/InputIcon";

export default function PresentationHeader() {
  return (
    <section className="header relative items-center flex">
      <div className="container max-w-7xl mx-auto">
        <div className="w-full px-4 text-center">
          <img
            src={require("assets/img/material-tailwind-logo.png")}
            alt="Material Tailwind Logo"
            className="w-48 mx-auto my-16"
          />
          <H1 color="gray">Material Tailwind</H1>
          <div className="md:w-9/12 mx-auto">
            <LeadText color="blueGray" style={{ marginTop: "0" }}>
              @material-tailwind is an easy to use components library for
              Tailwind CSS and Material Design. It features multiple React
              components, all written with Tailwind CSS classes and Material
              Design guidelines. Coming soon components for VueJS, Angular and
              many more.
            </LeadText>
          </div>

          <div className="bg-white py-8 mt-8 w-full mx-auto border border-t border-b border-r-0 border-l-0 md:px-8 lg:px-36 md:w-9/12">
            <H5 color="gray">Subscribe to our Newsletter</H5>

            <Paragraph color="blueGray">
              Join our newsletter and get news in your inbox every week! We hate
              spam too, so no worries about this.
            </Paragraph>

            <form
              action="https://material-tailwind.us1.list-manage.com/subscribe/post?u=e97df4875fc1b2fb28f609b88&amp;id=628d9b1722"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
            >
              <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                <InputIcon
                  type="email"
                  placeholder="Enter Your Email Address"
                  color="lightBlue"
                  size="lg"
                  outline
                  iconName="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  required
                />
                <div className="w-full md:w-48">
                  <Button
                    color="lightBlue"
                    size="lg"
                    ripple="light"
                    style={{
                      justifyContent: "center",
                      width: "100%",
                    }}
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </form>
          </div>

          <div className="mt-12 flex flex-col justify-center gap-4 mb-24 md:flex-row">
            <a href="#how-to-use">
              <Button
                color="teal"
                size="lg"
                ripple="light"
                style={{ width: "100%", justifyContent: "center" }}
              >
                How to use
              </Button>
            </a>
            <Link href="/documentation/quick-start">
              <a>
                <Button
                  color="lightBlue"
                  size="lg"
                  ripple="light"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Get started
                </Button>
              </a>
            </Link>
            <a
              href="https://github.com/creativetimofficial/material-tailwind"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                color="blueGray"
                size="lg"
                ripple="light"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Github Star
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
