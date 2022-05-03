/* eslint-disable @next/next/no-img-element */
import TestimonialCard from "pagesComponents/Cards/TestimonialCard";
import { Typography } from "../../packages/material-tailwind-react/src";

export default function SectionTestimonials() {
  return (
    <section className="py-10 md:py-24">
      <div className="w-full md:w-1/2 mx-auto text-center">
        <Typography
          variant="h2"
          className="!font-sans font-black text-[#1A237E] tracking-normal mb-2"
        >
          Trusted by over <br />
          <Typography
            as="span"
            variant="h2"
            color="blue"
            className="inline-block !font-sans font-black tracking-normal"
            textGradient
          >
            1,855,822+ web developers
          </Typography>
        </Typography>
        <Typography className="text-lg text-[#1A237E]/60">
          Many Fortune 500 companies, startups, universities and governmental
          institutions love Creative Tim&apos;s products.
        </Typography>
      </div>
      <div className="items-center flex flex-wrap mt-10">
        <div className="w-full md:w-1/2 lg:w-1/3 md:px-4">
          <TestimonialCard name="Nick Willever" date="1 day ago">
            &quot;This is an excellent product, the documentation is excellent
            and helped me get things done more efficiently.&quot;
          </TestimonialCard>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 md:px-4">
          <TestimonialCard
            color="blue"
            name="Shailesh Kushwaha"
            date="1 week ago"
          >
            &quot;I found solution to all my design needs from Creative Tim. I
            use them as a freelancer in my hobby projects for fun! And its
            really affordable, very humble guys !!!&quot;
          </TestimonialCard>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 md:px-4">
          <TestimonialCard name="Samuel Kamuli" date="3 weeks ago">
            &quot;Great product. Helped me cut the time to set up a site. I used
            the components within instead of starting from scratch. I highly
            recommend for developers who want to spend more time on the
            backend!.&quot;
          </TestimonialCard>
        </div>
        <div className="items-center flex mt-16 lg:mx-auto">
          <div className="w-full md:w-1/5 px-12 md:px-4 mr-8">
            <img
              className="w-auto"
              src="/img/logos/logo-amazon.webp"
              alt="logo_amazon"
            />
          </div>
          <div className="w-full md:w-1/5 px-12 md:px-4 mr-8">
            <img
              className="w-auto"
              src="/img/logos/logo-ibm.webp"
              alt="logo_ibm"
            />
          </div>
          <div className="w-full md:w-1/5 px-12 md:px-4 mr-8">
            <img
              className="w-auto"
              src="/img/logos/logo-microsoft.webp"
              alt="logo_microsoft"
            />
          </div>
          <div className="w-full md:w-1/5 px-12 md:px-4 mr-8">
            <img
              className="w-auto"
              src="/img/logos/logo-cisco.webp"
              alt="logo_cisco"
            />
          </div>
          <div className="w-full md:w-1/5 px-12 md:px-4">
            <img
              className="w-auto"
              src="/img/logos/logo-vodafone.webp"
              alt="logo_vodafone"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
