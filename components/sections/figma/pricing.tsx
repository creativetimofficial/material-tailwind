import React from "react";
import { Button, Typography, Chip, Tooltip } from "@material-tailwind/react";
import { CheckCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
// import { PaddleLoader } from "@/widgets";

function Check() {
  return (
    <i className="fa fa-check mx-auto mt-1.5 text-lg text-green-500"></i>
  );
}

function Minus() {
  return (
    <i className="fa fa-remove mx-auto mt-1.5 text-lg"></i>
  );
}

function Info() {
  return (
    <InformationCircleIcon
      strokeWidth={2}
      className="h-5 w-5 text-primary"
    />
  );
}

export function PricingSection() {
  const plans = [
    {
      tag: null,
      title: null,
      price: null,
      link: null,
      marked: false,
      desc: null,
    },
    {
      id: 788483,
      tag: "Developer",
      title: "React + HTML",
      price: 89,
      off: null,
      link: null,
      marked: false,
      desc: "Get access to the React & Tailwind CSS code and use our components library to create faster your stunning web projects.",
    },
    {
      id: 836752,
      tag: "Designer",
      title: "Figma File",
      price: 89,
      link: "https://www.figma.com/file/sxmmOsBWYcLVrriE76zUlW/Material-Tailwind-v1.0.0?type=design&node-id=916-5781&t=VOXvKsy7o1tLw5jG-0",
      off: null,
      marked: false,
      desc: (
        <>
          Get access to the Figma Files and use our components library to create
          faster your stunning web projects.
          <span className="!pointer-events-none !select-none !text-transparent">
            dummy text for alignment
          </span>
        </>
      ),
    },
    {
      id: 836756,
      tag: "Bundle",
      title: "Developer + Designer",
      price: 129,
      link: null,
      off: null,
      marked: true,
      desc: "Get access to both HTML + React code versions and Figma File use our components library to create faster your stunning web projects.",
    },
  ];

  return (
    <React.Fragment>
      {/* <PaddleLoader /> */}
      <div className="mx-auto text-center w-12/12">
        <Typography
          variant="h3"
          className="mb-5 mt-10 relative text-center text-2xl leading-tight tracking-normal text-slate-950"
        >
          Pricing
        </Typography>
        <Typography
          variant="h1"
          className="mt-5 relative text-center text-4xl font-semibold leading-tight tracking-normal text-blue-gray-900"
        >
          Choose your favorite plan
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 mt-1 relative text-center text-xl font-normal leading-relaxed tracking-normal text-blue-gray-400"
        >
          Buy one and get lifetime access for each plan mentioned below.
        </Typography>
      </div>
      <section className="pb-0 pt-10 px-4" id="pricing">
        <div className="container mx-auto bg-white border rounded-2xl p-6">
          <div className="grid grid-cols-1 gap-12 p-4 lg:grid-cols-4">
            {plans.map(
              ({ id, tag, title, marked, price, link, off, desc }, key) => (
                <div
                  key={key}
                  className={`${!title ? "hidden lg:block" : ""}`}
                >
                  <Typography
                    variant="h5"
                    className="mb-2 flex items-center gap-3 uppercase text-blue-gray-900 text-md mb-0"
                  >
                    {tag || <>&nbsp;</>}
                    {marked && (
                      <Chip
                        value="popular"
                        className="rounded-full py-1.5 px-2.5 capitalize bg-slate-950"
                      />
                    )}
                  </Typography>
                  <Typography
                    variant="h4"
                    className="flex items-center gap-4 pt-2 pb-4 text-blue-gray-900"
                  >
                    {title || <>&nbsp;</>}
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="border-b border-blue-gray-300 text-sm font-normal leading-none text-blue-gray-500 transition-all hover:border-blue-500 hover:text-blue-500"
                      >
                        Preview
                      </a>
                    )}
                  </Typography>
                  {title && (
                    <div className="grid">
                      <div className="mb-4 flex items-end gap-4">
                        <Typography
                          variant="h1"
                          className={`text-primary ${
                            off ? "line-through" : ""
                          }`}
                        >
                          ${price}
                        </Typography>
                        {off && (
                          <Typography variant="h1" color="red">
                            ${off}
                          </Typography>
                        )}
                      </div>
                      <Typography className="mb-8 font-normal text-blue-gray-400">
                        {desc}
                      </Typography>
                      <Button
                        size="lg"
                        fullWidth
                        className={`mb-4 ${
                          !marked
                            ? " bg-transparent border shadow-none border-blue-gray-100 text-blue-gray-900 hover:shadow-blue-gray-500/20 shadow-blue-gray-500/20"
                            : "bg-slate-950 hover:shadow-slate-950-500/20 shadow-slate-950/20"
                        }`}
                      >
                        Buy Now
                      </Button>
                      {marked && <Typography className="uppercase text-md font-semibold underline text-center py-3">Team Pricing $449 <i className="fa fa-chevron-right ml-1" aria-hidden="true"></i></Typography>}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
          <div className="overflow-x-scroll">
            <div className="grid min-w-[64rem] grid-cols-4 border-b border-blue-gray-100 gap-x-16 p-4">
              <Tooltip
                content="It consists of the product technical manuals like getting started, build tools and also is described every component with code examples"
                className="max-w-[12rem] text-center"
              >
                <div className="inline-flex w-max cursor-pointer items-center gap-1.5">
                  <Typography className="font-medium text-md">
                    Documentation
                  </Typography>
                  <Info />
                </div>
              </Tooltip>
              <Check />
              <Check />
              <Check />
            </div>
            <div className="grid min-w-[64rem] grid-cols-4 border-b border-blue-gray-100 gap-x-16 p-4 text-center">
              <Tooltip
                content="You receive access to entire code for HTML / React files depends on the different package of each Product"
                className="max-w-[12rem] text-center"
              >
                <div className="inline-flex w-max cursor-pointer items-center gap-1.5">
                  <Typography className="font-medium text-md">
                    Full Code
                  </Typography>
                  <Info />
                </div>
              </Tooltip>
              <Check />
              <Check />
              <Check />
            </div>
            <div className="grid min-w-[64rem] grid-cols-4 gap-x-16 border-b border-blue-gray-100 p-4 text-center">
              <Tooltip
                content="Your will receive lifetime free updates."
                className="max-w-[12rem] text-center"
              >
                <div className="inline-flex w-max cursor-pointer items-center gap-1.5">
                  <Typography className="font-medium text-md">
                    Free Updates
                  </Typography>
                  <Info />
                </div>
              </Tooltip>
              <Check />
              <Check />
              <Check />
            </div>
            <div className="grid min-w-[64rem] grid-cols-4 gap-x-16 border-b border-blue-gray-100 p-4">
              <Tooltip
                content="Your receive bug fixes and responses directly from the creators of the product in 24 hours during business days."
                className="max-w-[16rem] text-center"
              >
                <div className="inline-flex w-max cursor-pointer items-center gap-1.5">
                  <Typography className="font-medium text-md">
                    Support
                  </Typography>
                  <Info />
                </div>
              </Tooltip>
              <Check />
              <Check />
              <Check />
            </div>
            <div className="grid min-w-[64rem] border-b border-blue-gray-100 grid-cols-4 gap-x-16 p-4">
              <div className="flex items-center gap-1.5">
                <Typography className="font-medium text-md">
                  HTML Technology
                </Typography>
              </div>
              <Check />
              <Minus />
              <Check />
            </div>
            <div className="grid min-w-[64rem] grid-cols-4 gap-x-16 border-b border-blue-gray-100 p-4">
              <div className="flex items-center gap-1.5">
                <Typography className="font-medium text-md">
                  React Technology
                </Typography>
              </div>
              <Check />
              <Minus />
              <Check />
            </div>
            <div className="grid min-w-[64rem] grid-cols-4 gap-x-16 p-4">
              <div className="flex items-center gap-1.5">
                <Typography className="font-medium text-md">
                  Figma
                </Typography>
              </div>
              <Minus />
              <Check />
              <Check />
            </div>
          </div>
        </div>

        <div className="flex bg-white border rounded-2xl mt-8 px-10 p-8">
          <div className="w-7/12">
            <Typography className="text-2xl font-semibold">
              Material Tailwind Pro | Team Pricing
            </Typography>
            <Typography className="text-blue-gray-500 mt-2 font-normal">
              Get access to both HTML + React code versions and Figma File use our components library to create faster your stunning web projects.
            </Typography>
            <Typography className="mt-2 font-semibold text-md text-blue-gray-800 mt-7">
              What&apos;s Included
            </Typography>
            <div className="flex mt-5">
              <div className="flex-auto">
                <div className="font-semibold text-blue-gray-900"><i className="fa fa-check mr-2"></i> 10+ Team Members</div>
                <div className="font-semibold text-blue-gray-900 mt-2"><i className="fa fa-check mr-2"></i> Full Code</div>
              </div>
              <div className="flex-auto">
                <div className="font-semibold text-blue-gray-900"><i className="fa fa-check mr-2"></i> Free Updates</div>
                <div className="font-semibold text-blue-gray-900 mt-2"><i className="fa fa-check mr-2"></i> Priority Support</div>
              </div>
              <div className="flex-auto">
                <div className="font-semibold text-blue-gray-900"><i className="fa fa-check mr-2"></i> Figma File PRO</div>
                <div className="font-semibold text-blue-gray-900 mt-2"><i className="fa fa-check mr-2"></i> Documentation</div>
              </div>
            </div>
          </div>
          <div className="w-4/12 ml-auto">
            <div className="bg-slate-950 rounded-2xl text-center p-6">
              <Typography className="text-md font-semibold text-white">
                Pay once, <br></br> Own it forever
              </Typography>
              <Typography className="text-3xl mt-5 font-semibold text-white">
                $449
              </Typography>
              <Button className="bg-white text-slate-950 mt-8 mb-0 text-md hover:shadow-none" fullWidth>Buy Now</Button>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center text-blue-gray-400">
          <Typography className="text-md font-medium text-blue-gray-400">
            <i className="fa fa-lock"></i> Secured Payment by Paddle with:
          </Typography>
          <Typography className="text-md font-medium mt-2">
            <i className="fa fa-cc-paypal text-3xl text-slate-950"></i>
            <i className="fa fa-cc-visa text-3xl text-slate-950 ml-2"></i>
            <i className="fa fa-cc-mastercard text-3xl text-slate-950 ml-2"></i>
            <i className="fa fa-cc-amex text-3xl text-slate-950 ml-2"></i>
          </Typography>
          <div className="mt-6">
            <Typography className="text-md font-medium mt-2 text-blue-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="inline-block -mt-1 mr-1" height="1em" viewBox="0 0 512 512"><path className="fill-blue-gray-500" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
              Info: If you are a Registered Company inside the European Union you will be able to add your <br></br> VAT ID after your Press “Buy Now” 
            </Typography>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default PricingSection;
