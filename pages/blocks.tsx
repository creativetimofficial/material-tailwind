/* eslint-disable @next/next/no-img-element */

// next.js components
import Head from "next/head";

// @material-tailwind/react components
import { Card } from "@material-tailwind/react";

import init from "public/material-tailwind-html";

import { useEffect } from "react";

// page components
import Navbar from "components/layout/navbar";
import Footer from "components/layout/footer";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import ComponentCarousel from "components/pro/components/carousel";
import ComponentDatepicker from "components/pro/components/datepicker";
import ComponentTimepicker from "components/pro/components/timepicker";
import ComponentNavTabs from "components/pro/components/navtabs";
import ComponentValidation from "components/pro/components/validation";

import SectionHeader1 from "components/pro/header/header-1";
import SectionHeader2 from "components/pro/header/header-2";
import SectionHeader3 from "components/pro/header/header-3";
import SectionHeader4 from "components/pro/header/header-4";

import SectionFeatures1 from "components/pro/features/features-1";
import SectionFeatures2 from "components/pro/features/features-2";
import SectionFeatures3 from "components/pro/features/features-3";

import SectionBlog1 from "components/pro/blog/blog-1";
import SectionBlog2 from "components/pro/blog/blog-2";
import SectionBlog3 from "components/pro/blog/blog-3";

import SectionContent1 from "components/pro/content/content-1";
import SectionContent2 from "components/pro/content/content-2";
import SectionContent3 from "components/pro/content/content-3";

import SectionPricing1 from "components/pro/pricing/pricing-1";
import SectionPricing2 from "components/pro/pricing/pricing-2";
import SectionPricing3 from "components/pro/pricing/pricing-3";
import Datepicker from "components/pro/components/datepicker";


export default function Presentation() {
  useEffect(() => {
    init();

  }, []);

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
      <nav className="block py-4 shadow-md w-full max-w-full rounded-none px-4 bg-blue-500 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="antialiased text-sm leading-normal text-white mr-4 cursor-pointer py-1.5 font-bold">Material Tailwind</a>
          <div className="hidden lg:block">
            <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
              <a href="#">
                <li className="antialiased text-sm leading-normal text-white flex items-center gap-1.5 p-1 font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path><path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path></svg>
                  Pages
                </li>
              </a>
              <a href="#">
                <li className="antialiased text-sm leading-normal text-white flex items-center gap-1.5 p-1 font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                  Account
                </li>
              </a>
              <a href="#">
                <li className="antialiased text-sm leading-normal text-white flex items-center gap-1.5 p-1 font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg>
                  Blocks
                </li>
              </a>
              <a href="#">
                <li className="antialiased text-sm leading-normal text-white flex items-center gap-1.5 p-1 font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
                  Docs
                </li>
              </a>
            </ul>
          </div>
          <button className="button button-light text-dark-500 button-sm hidden lg:inline-block" type="button">Buy Now</button>
          <button className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 ml-auto inline-block lg:hidden" type="button">
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </span>
          </button>
        </div>
        <div className="block w-full basis-full overflow-hidden h-0 opacity-0">
          <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
            <a href="#">
              <li className="antialiased text-sm leading-normal text-white flex items-center gap-1.5 p-1 font-normal">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path><path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path></svg>
                Pages
              </li>
            </a>
            <a href="#">
              <li className="antialiased text-sm leading-normal text-white flex items-center gap-1.5 p-1 font-normal">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                Account
              </li>
            </a>
            <a href="#">
              <li className="antialiased text-sm leading-normal text-white flex items-center gap-1.5 p-1 font-normal">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg>
                Blocks
              </li>
            </a>
            <a href="#">
              <li className="antialiased text-sm leading-normal text-white flex items-center gap-1.5 p-1 font-normal">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
                Docs
              </li>
            </a>
          </ul>
          <button className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mb-2" type="button">Buy Now</button>
        </div>
      </nav>
      <main className="relative">

        <SectionHeader1 />

        <SectionHeader2 />

        <SectionHeader3 />

        <SectionHeader4 />

        {/* FEATURES */}

        <SectionFeatures1 />

        <SectionFeatures2 />

        <SectionFeatures3 />

        {/* BLOG POSTS */}

        <SectionBlog1 />

        <SectionBlog2 />

        <SectionBlog3 />
          

        {/* CONTENT SECTIONS */}

        <SectionContent1 />

        <SectionContent2 />

        <SectionContent3 />

        {/* PRICING SECTIONS */}
      
        <SectionPricing1 />

        <SectionPricing2 />

        <SectionPricing3 />




        <Card
          shadow={false}
          className="mx-6 bg-white md:mx-12 "
        >
          <div className="container z-20 mx-auto my-32 px-4">
            
            <ComponentCarousel/>

            <div className="flex">
              <div className="my-10 w-1/4">
               <ComponentDatepicker />
              </div>
              <div className="my-10 ml-10 w-1/4">
               <ComponentTimepicker />
              </div>
            </div>
            <div className="flex">
              <ComponentNavTabs />
              
            </div>
            <div className="w-4/12">
              <button
                className="button button-pink"
                aria-hidden="true"
                data-notification="true"
                data-target="success-notification"
                type="button"
              >
                notification
              </button>

              <button
                className="button button-blue ml-3"
                aria-hidden="true"
                data-notification="true"
                data-target="info-notification"
                type="button"
              >
                notification
              </button>
            </div>

            <div className="my-5 flex w-4/12">
              <div className="spinner-border mr-3 text-pink-500" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-border mr-3 text-blue-500" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-border mr-3 text-green-500" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div
                className="spinner-border mr-3 text-orange-500"
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-border mr-3 text-red-500" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>

            <div className="my-10 w-6/12">
              <div id="sliderRegular"></div>
            </div>

            <div className="my-5 w-4/12">
              <select
                className="form-control"
                name="multi-select"
                id="multi-select"
                placeholder="Location"
                data-type="select-multiple"
              >
                <option defaultValue="Choice 1" selected>
                  Brazil
                </option>
                <option defaultValue="Choice 2">Bucharest</option>
                <option defaultValue="Choice 3">London</option>
                <option defaultValue="Choice 4">Washington</option>
              </select>
            </div>

            <div className="my-5 w-4/12">
              <div className="container">
                <ComponentValidation />
              </div>
            </div>

            <div className="my-5"></div>
          </div>
        </Card>
      </main>
      <div className="fixed bottom-0 right-4 z-50">
        <div
          className="notification fade bg-white p-2"
          role="alert"
          id="success-notification"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="notification-header border-0">
            <i className="material-icons mr-2 text-green-500">check</i>
            <span className="mr-auto font-semibold">Material Dashboard </span>
            <small className="text-body">11 mins ago</small>
            <i
              className="fas fa-times text-md ml-3 cursor-pointer"
              aria-label="Close"
            ></i>
          </div>
          <hr className="horizontal dark m-0" />
          <div className="notification-body">
            Hello, world! This is a notification message.
          </div>
        </div>
        <div
          className="notification fade bg-blue-500 p-2"
          role="alert"
          id="info-notification"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="notification-header border-0">
            <i className="material-icons mr-2 text-white">check</i>
            <span className="mr-auto font-semibold text-white">
              Material Dashboard{" "}
            </span>
            <small className="text-white">11 mins ago</small>
            <i
              className="fas fa-times text-md cursor-pointe ml-3 text-white"
              aria-label="Close"
            ></i>
          </div>
          <hr className="horizontal light m-0" />
          <div className="notification-body text-white">
            Hello, world! This is a notification message.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
