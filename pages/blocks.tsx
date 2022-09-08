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

import SectionNavbar1 from "components/pro/navbar/navbar-1";
import SectionNavbar2 from "components/pro/navbar/navbar-2";
import SectionNavbar3 from "components/pro/navbar/navbar-3";
import SectionNavbar4 from "components/pro/navbar/navbar-4";

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

import SectionTeam1 from "components/pro/team/team-1";
import SectionTeam2 from "components/pro/team/team-2";
import SectionTeam3 from "components/pro/team/team-3";

import SectionTestimonials1 from "components/pro/testimonials/testimonials-1";
import SectionTestimonials2 from "components/pro/testimonials/testimonials-2";
import SectionTestimonials3 from "components/pro/testimonials/testimonials-3";

import SectionStats1 from "components/pro/stats/stats-1";
import SectionStats2 from "components/pro/stats/stats-2";
import SectionStats3 from "components/pro/stats/stats-3";

import SectionLogoArea1 from "components/pro/logo-area/logo-area-1";
import SectionLogoArea2 from "components/pro/logo-area/logo-area-2";

import SectionFAQ from "components/pro/faq/faq";

import SectionCard1 from "components/pro/cards/card-1";
import SectionCard2 from "components/pro/cards/card-2";
import SectionCard3 from "components/pro/cards/card-3";

import SectionFooter1 from "components/pro/footers/footer-1";
import SectionFooter2 from "components/pro/footers/footer-2";
import SectionFooter3 from "components/pro/footers/footer-3";

import SectionContact1 from "components/pro/contact/contact-1";
import SectionContact2 from "components/pro/contact/contact-2";

import SectionAuth1 from "components/pro/authentication/auth-1";
import SectionAuth2 from "components/pro/authentication/auth-2";

import SectionReset from "components/pro/authentication/reset";

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

      <SectionNavbar1/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <SectionNavbar2/>
      <br/>
      <SectionNavbar3/>
      <br/>
      <SectionNavbar4/>

      <main className="relative">

        <div className="container mx-auto">
          <div className="w-3/12 mt-12">
            <h5 className="mb-4">Search Block Sections</h5>
            <div className="input-group input-group-outline">
              <label className="form-label">Search</label>
              <input type="text" className="form-control" id="searchbox" />
            </div>
          </div>
        </div>
        



        {/* BLOCKS PRESENTATION */}

        <div className="container mx-auto my-20">
          <div className="lg:flex">
            <div className="w-full lg:w-3/12">
              <h3 className="font-semibold leading-7 text-blue-gray-700">Design Blocks</h3>
              <p className="mt-4 tracking-tight text-gray-700">A selection of many page sections that fit perfectly in any combination</p>
              </div>
            <div className="w-full lg:w-9/12 mt-5 lg:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="box">
                  <img className="w-auto rounded-lg shadow-lg cursor-pointer" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/sections/page-sections/page-headers/header-7.jpg"></img>
                  <a href="#">
                    <h6 className="ml-2 mt-2 mb-0 capitalize">headers</h6>
                  </a>
                  <p className="ml-2 text-xs text-gray-700">3 sections</p>
                </div>
                <div className="box">
                  <img className="w-auto rounded-lg shadow-lg cursor-pointer" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/sections/page-sections/features/features-3.jpg"></img>
                  <a href="#">
                    <h6 className="ml-2 mt-2 mb-0 capitalize">Features</h6>
                  </a>  
                  <p className="ml-2 text-xs text-gray-700">3 sections</p>
                </div>
                <div className="box">
                  <img className="w-auto rounded-lg shadow-lg cursor-pointer" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/sections/page-sections/testimonials/testimonials-2.jpg"></img>
                  <a href="#">
                    <h6 className="ml-2 mt-2 mb-0 capitalize">Testimonials</h6>
                  </a>
                  <p className="ml-2 text-xs text-gray-700">3 sections</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* BLOCK PREVIEW */}

        <div className="container mx-auto my-20">
          <div className="rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white p-4 rounded-tl-xl rounded-tr-xl">
              <div className="flex items-center">
                <h5 className="mb-0">Header 1</h5>
              </div>
              <div className="mx-auto my-4 md:my-0">
                <a className="button button-pink button-outlined button-icon mr-3 w-12">
                <i className="fas fa-tv"></i>
                </a>
                <a className="button button-pink button-outlined button-icon mr-3 w-12">
                  <i className="fas fa-tablet-alt"></i>
                </a>
                <a className="button button-pink button-outlined button-icon mr-3 w-12">
                  <i className="fas fa-mobile-alt"></i>
                </a>
                <a className="button button-pink button-outlined button-icon">
                  <i className="fas fa-expand-alt mr-2"></i>
                  Full Screen
                </a>
              </div>
              <div className="w-6/12 ml-auto">
                <nav>
                  <ul role="tablist" className="tabs p-1" tab-panel="">
                    <li className="nav-item">
                      <a
                        className="nav-link active mb-0 px-0 py-1"
                        aria-selected="true"
                        aria-controls="preview"
                        role="tab"
                      >
                        {`Preview`}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link mb-0 px-0 py-1"
                        aria-selected="false"
                        aria-controls="code"
                        role="tab"
                      >
                        {`Code`}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="tabs-content h-[500px]">
              <div className="active tab-panel" id="preview" role="tabpanel">
                <SectionCard1/>
              </div>
              <div className="tab-panel" id="code" role="tabpanel">
                <SectionCard2/>
              </div>
            </div>
          </div>
        </div>

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

        {/* TEAM SECTIONS */}

        <SectionTeam1/>

        <SectionTeam2/>

        <SectionTeam3/>

        {/* TESTIMONIALS SECTIONS */}

        <SectionTestimonials1/>
        
        <SectionTestimonials2/>

        <SectionTestimonials3/>

        {/* STATS SECTIONS */}

        <SectionStats1/>

        <SectionStats2/>

        <SectionStats3/>

        {/* LOGO AREAS SECTION */}

        <SectionLogoArea1/>
        
        <SectionLogoArea2/>
        
        {/* FAQ SECTION */}

        <SectionFAQ/>

        {/* CARDS SECTION */}

        <SectionCard1/>

        <SectionCard2/>

        <SectionCard3/>

        {/* FOOTERS SECTIONS */}

        <SectionFooter1/>
        
        <SectionFooter2/>

        <SectionFooter3/>

        {/* CONTACT SECTIONS */}

        <SectionContact1/>
        
        <SectionContact2/>

        {/* AUTHENTICATION SECTIONS */}

        <SectionAuth1/>
        
        <SectionAuth2/>

        {/* RESET SECTION */}

        <SectionReset/>


        <Card
          shadow={false}
          className="mx-6 bg-white md:mx-12 "
        >
          <div className="container z-20 mx-auto my-32 px-4">
            
            <ComponentCarousel/>

            <div className="lg:flex">
              <div className="my-10 lg:w-1/4">
               <ComponentDatepicker />
              </div>
              <div className="my-10 lg:ml-10 lg:w-1/4">
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
              {/* <select
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
              </select> */}
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
