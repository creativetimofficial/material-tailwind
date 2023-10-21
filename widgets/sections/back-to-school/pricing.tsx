import Script from "next/script";
import React from "react";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import {
  CheckIcon,
  InformationCircleIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const INCLUDES = [
  "10 Website Templates",
  "Priority Support",
  "Free Updates",
  "Figma File",
  "Full Code",
  "Support",
  "Documentation",
];

const TEAM = {
  id: 850061,
  price: 39,
};

function PaddleLoader() {
  return (
    <Script
      src="https://cdn.paddle.com/paddle/paddle.js"
      onLoad={() => {
        Paddle.Setup({
          vendor: Number(process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID),
        });
      }}
    />
  );
}

export function BTSPricing() {
  return (
    <section className="p-8">
      <div className="container mx-auto">
        <div className="mx-auto mb-20 mt-32 text-center lg:w-10/12 xl:w-8/12">
          <Typography variant="h3" className="mb-5 text-center text-primary">
            Back to School Exclusive
          </Typography>
          <Typography
            variant="h1"
            className="my-5 text-center text-4xl font-semibold text-primary md:text-5xl"
          >
            Affordable Pricing Designed for You
          </Typography>
          <Typography
            variant="paragraph"
            className="my-5 text-center text-lg font-normal !text-gray-600 md:text-xl"
          >
            We understand the importance of budget-friendly solutions,
            that&apos;s why we&apos;re offering this incredible bundle at an
            unbeatable price.
          </Typography>
        </div>
        <Card
          id="pricing"
          color="white"
          shadow={false}
          className="mt-6 border-[1.5px] border-blue-gray-50"
        >
          <CardBody className="grid grid-cols-1 items-center gap-y-6 lg:grid-cols-5 lg:gap-x-6">
            <div className="col-span-3">
              <Typography
                variant="h4"
                className="mb-2 !font-semibold !text-primary"
              >
                Material Tailwind Pro | Back To School Bundle
              </Typography>
              <Typography className="font-normal text-gray-600">
                Get access to 10 exclusive starter website templates built with
                Tailwind CSS, React, and Material Design. Perfect for developers
                and designers!
              </Typography>
              <div className="mt-8">
                <Typography className="mb-6 font-medium text-primary">
                  What&apos;s included
                </Typography>
                <div className="grid grid-cols-3 justify-between gap-2">
                  {INCLUDES.map((item, key) => (
                    <div
                      key={key}
                      className="flex items-center gap-2 text-primary"
                    >
                      <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
                      <Typography
                        className="!font-medium"
                        variant="small"
                        color="inherit"
                      >
                        {item}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <PaddleLoader />
            <Card
              shadow={false}
              className="col-span-2 h-full w-full bg-primary text-center"
            >
              <CardBody className="flex h-full flex-col justify-between p-4">
                <div>
                  <Typography className="my-3 font-medium" color="white">
                    Pay once, <br /> Own it forever
                  </Typography>
                  <Typography variant="h2" color="white" className="mb-4">
                    $39
                  </Typography>
                </div>
                <Button
                  fullWidth
                  color="white"
                  className="!text-base font-medium capitalize"
                  onClick={() => {
                    Paddle.Checkout.open({ product: TEAM.id });
                  }}
                >
                  buy now
                </Button>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
        <div className="mx-auto my-20 grid place-items-center !text-center lg:w-10/12 xl:w-8/12">
          <div className="flex items-center justify-center gap-2">
            <LockClosedIcon
              strokeWidth={2.5}
              className="h-4 w-4 text-primary"
            />
            <Typography variant="h6" className="!font-medium !text-primary">
              Secured Payment by Paddle with:
            </Typography>
          </div>
          <div className="my-4 flex items-center justify-center gap-2">
            <img
              src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/logos/paypal.png"
              className="h-10 w-10"
              alt="paypal"
            />
            <img
              src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/logos/visa.svg"
              className="h-10 w-10"
              alt="paypal"
            />
            <img
              src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/logos/master-card.png"
              className="h-8 w-8"
              alt="paypal"
            />
            <img
              src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/logos/american-express-logo.svg"
              className="h-10 w-10"
              alt="paypal"
            />
          </div>
          <div className="flex items-start gap-2">
            <InformationCircleIcon
              strokeWidth={2}
              className="mt-1 h-5 w-5 !text-gray-600"
            />
            <Typography className="font-medium !text-gray-600">
              Info: If you are a Registered Company inside the European Union
              you will be able to add your <br /> VAT ID after your Press “Buy
              Now”
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BTSPricing;
