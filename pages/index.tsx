/* eslint-disable @next/next/no-img-element */

// next.js components
import Head from "next/head";

// @material-tailwind/react components
import { Card } from "@material-tailwind/react";

// page components
import Navbar from "components/layout/navbar";
import Header from "components/layout/header";
import Footer from "components/layout/footer";

// sections
import SectionFeatures from "components/sections/features";
import SectionButton from "components/sections/button";
import SectionColorsPalette from "components/sections/colors-palette";
import SectionShadow from "components/sections/shadow";
import SectionComponents from "components/sections/components";
import SectionFramework from "components/sections/framework";
import SectionTestimonials from "components/sections/testimonials";
import SectionCommunity from "components/sections/community";

export default function Presentation() {
  return (
    <>
      <Head>
        <title>
          Material Tailwind - Easy-to-use Tailwind CSS components library with
          Material Design
        </title>
        <link rel="canonical" href="https://www.material-tailwind.com" />
        <meta
          name="description"
          content="Material Tailwind is a components library that features multiple React & HTML components, all written with Tailwind CSS classes and Material Design guidelines."
        />
        <meta
          name="keywords"
          content="tailwind css, material design, react, next, react.js, next.js, tailwind template, tailwind css theme, tailwindcss components"
        />
      </Head>
      <Navbar shadow />
      <main className="relative">
        <Header />
        <Card
          shadow={false}
          className="mx-6 -mt-20 bg-white md:mx-12 md:-mt-48"
        >
          <div className="container z-20 mt-96 mx-auto px-4">
          <a href="#" className="avatar">
            <img alt="Image placeholder" src="/img/face-2.jpg" />
          </a>
          <a href="#" className="avatar avatar-circular">
            <img alt="Image placeholder" src="/img/face-2.jpg" />
          </a>


          <div className="avatar-group flex items-center">
            <a href="#" className="avatar avatar-circular">
              <img alt="Image placeholder" src="/img/face-1.jpg" />
            </a>
            <a href="#" className="avatar avatar-circular">
              <img alt="Image placeholder" src="/img/face-2.jpg" />
            </a>
            <a href="#" className="avatar avatar-circular">
              <img alt="Image placeholder" src="/img/face-3.jpg" />
            </a>
            <a href="#" className="avatar avatar-circular">
              <img alt="Image placeholder" src="/img/face-4.jpg" />
            </a>
            <a href="#" className="avatar avatar-circular">
              <img alt="Image placeholder" src="/img/face-5.jpg" />
            </a>
          </div>

          
          <div className="alert alert-pink w-full">Alert primary</div>



          <div className="accordion">
  <div className="accordion-item relative mb-3">
    <h6 className="mb-0">
      <button
        className="accordion-button text-left font-semibold"
        type="button"
        aria-expanded="false"
      >
        <span>How do I order?</span>
        <i className="fa fa-plus collapse-close absolute right-0 pt-1 text-xs"></i>
        <i className="fa fa-minus collapse-open absolute right-0 pt-1 text-xs"></i>
      </button>
    </h6>
    <div className="collapse open">
      <div className="py-4 text-sm opacity-60">
        We're not always in the position that we want to be at. We're constantly
        growing. We're constantly making mistakes. We're constantly trying to
        express ourselves and actualize our dreams. If you have the opportunity
        to play this game of life you need to appreciate every moment. A lot of
        people don't appreciate the moment until it's passed.
      </div>
    </div>
  </div>
  <div className="accordion-item relative mb-3">
    <h6 className="accordion-header">
      <button
        className="accordion-button collapsed text-left font-semibold"
        type="button"
        aria-expanded="false"
      >
        <span>How can i make the payment?</span>
        <i className="fa fa-plus collapse-close absolute right-0 pt-1 text-xs"></i>
        <i className="fa fa-minus collapse-open absolute right-0 pt-1 text-xs"></i>
      </button>
    </h6>
    <div className="collapse">
      <div className="py-4 text-sm opacity-60">
        It really matters and then like it really doesn't matter. What matters
        is the people who are sparked by it. And the people who are like
        offended by it, it doesn't matter. Because it's about motivating the
        doers. Because I'm here to follow my dreams and inspire other people to
        follow their dreams, too.
      </div>
    </div>
  </div>
  <div className="accordion-item relative mb-3">
    <h6 className="accordion-header">
      <button
        className="accordion-button collapsed text-left font-semibold"
        type="button"
        aria-expanded="false"
      >
        <span>How much time does it take to receive the order?</span>
        <i className="fa fa-plus collapse-close absolute right-0 pt-1 text-xs"></i>
        <i className="fa fa-minus collapse-open absolute right-0 pt-1 text-xs"></i>
      </button>
    </h6>
    <div className="collapse">
      <div className="py-4 text-sm opacity-60">
        The time is now for it to be okay to be great. People in this world shun
        people for being great. For being a bright color. For standing out. But
        the time is now to be okay to be the greatest you. Would you believe in
        what you believe in, if you were the only one who believed it? If
        everything I did failed - which it doesn't, it actually succeeds - just
        the fact that I'm willing to fail is an inspiration. People are so
        scared to lose that they don't even try. Like, one thing people can't
        say is that I'm not trying, and I'm not trying my hardest, and I'm not
        trying to do the best way I know how.
      </div>
    </div>
  </div>
  <div className="accordion-item relative mb-3">
    <h6 className="accordion-header">
      <button
        className="accordion-button collapsed text-left font-semibold"
        type="button"
        aria-expanded="false"
      >
        <span>Can I resell the products?</span>
        <i className="fa fa-plus collapse-close absolute right-0 pt-1 text-xs"></i>
        <i className="fa fa-minus collapse-open absolute right-0 pt-1 text-xs"></i>
      </button>
    </h6>
    <div className="collapse">
      <div className="py-4 text-sm opacity-60">
        I always felt like I could do anything. That's the main thing people are
        controlled by! Thoughts- their perception of themselves! They're slowed
        down by their perception of themselves. If you're taught you can't do
        anything, you won't do anything. I was taught I could do everything.
      </div>
    </div>
  </div>
  <div className="accordion-item relative mb-3">
    <h6 className="accordion-header">
      <button
        className="accordion-button collapsed text-left font-semibold"
        type="button"
        aria-expanded="false"
      >
        <span>Where do I find the shipping details?</span>
        <i className="fa fa-plus collapse-close absolute right-0 pt-1 text-xs"></i>
        <i className="fa fa-minus collapse-open absolute right-0 pt-1 text-xs"></i>
      </button>
    </h6>
    <div className="collapse">
      <div className="py-4 text-sm opacity-60">
        I always felt like I could do anything. That's the main thing people are
        controlled by! Thoughts- their perception of themselves! They're slowed
        down by their perception of themselves. If you're taught you can't do
        anything, you won't do anything. I was taught I could do everything.
      </div>
    </div>
  </div>
</div>

            <SectionFeatures />
            <SectionButton />
            <SectionColorsPalette />
            <SectionShadow />
            <SectionComponents />
            <SectionFramework />
            <SectionTestimonials />
            <SectionCommunity />
          </div>
          <img
            className="absolute bottom-0 w-full md:-bottom-40"
            src="/img/pre-footer.jpg"
            alt="bubbles"
          />
        </Card>
      </main>
      <Footer />
    </>
  );
}
