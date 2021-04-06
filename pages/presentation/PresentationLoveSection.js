import React from "react";
import Link from "next/link";
import Button from "components/Button/Button";
import H4 from "components/Typography/Heading4";
import LeadText from "components/Typography/LeadText";

export default function PresentationLoveSection() {
  return (
    <section className="pb-16 bg-gray-50 relative pt-32">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-xl -mt-64 py-24 px-12 relative z-10">
          <div className="w-full text-center lg:w-8/12">
            <p className="text-6xl text-center mb-5">
              <span role="img" aria-label="love">
                😍
              </span>
            </p>
            <H4 color="gray">Do you love Material Tailwind?</H4>
            <LeadText color="blueGray">
              Cause if you do, it can be yours now. Hit the button below to
              navigate you to the documentation. Build a new web app or give an
              old project a new look!
            </LeadText>
            <div className="flex justify-center gap-4 mt-10">
              <Link href="/documentation/quick-start">
                <a>
                  <Button color="lightBlue" size="lg" ripple="light">
                    Get started
                  </Button>
                </a>
              </Link>
              <a
                href="https://github.com/creativetimofficial/material-tailwind?ref=material-tailwind"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="blueGray" size="lg" ripple="light">
                  Help With a Star
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
