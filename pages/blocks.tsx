/* eslint-disable @next/next/no-img-element */

// next.js components
import Head from "next/head";

// @material-tailwind/react components
import { Card } from "@material-tailwind/react";

import init from "public/material-tailwind-html";
import setBlocks from "public/material-tailwind-html-blocks";
import { useEffect } from "react";

// page components
import Navbar from "components/layout/navbar";
import Footer from "components/layout/footer";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

export default function Presentation() {
  useEffect(() => {
    init();
    setBlocks();
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
      <Navbar shadow />
      <main className="relative">
        <div className="h-screen min-h-screen">
          <div className="relative z-50 h-fit py-20 lg:py-32">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center justify-between">
                <div className="mt-48 w-full px-4 md:w-8/12 lg:mt-4 lg:w-5/12">
                  <h1 className="mb-2 !font-sans tracking-normal text-[#1A237E]">
                    People who care about your growth
                  </h1>
                  <p className="mb-6 text-lg !font-light text-[#1A237E] lg:pr-12">
                    Powerful, self-serve product and growth <br />
                    analytics to help you convert, engage, and retain more
                  </p>
                  <div className="flex flex-col-reverse gap-2 lg:flex-row">
                    <div className="w-6/12">
                      <div className="input-group-outline input-group">
                        <label className="form-label">Outline</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="w-3/12">
                      <button
                        className="button button-pink"
                        data-ripple-light="true"
                      >
                        Get started
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm">
                    We care about your data in our privacy policy
                  </p>
                  <div className="mt-5 flex">
                    <div className="avatar-group flex items-center">
                      <a href="#" className="avatar avatar-circular avatar-sm">
                        <img alt="Image placeholder" src="/img/face-1.jpg" />
                      </a>
                      <a href="#" className="avatar avatar-circular avatar-sm">
                        <img alt="Image placeholder" src="/img/face-2.jpg" />
                      </a>
                      <a href="#" className="avatar avatar-circular avatar-sm">
                        <img alt="Image placeholder" src="/img/face-3.jpg" />
                      </a>
                      <a href="#" className="avatar avatar-circular avatar-sm">
                        <img alt="Image placeholder" src="/img/face-4.jpg" />
                      </a>
                    </div>
                    <div className="ml-3 flex items-center">
                      <i className="material-icons text-yellow-700">star</i>
                      <i className="material-icons text-yellow-700">star</i>
                      <i className="material-icons text-yellow-700">star</i>
                      <i className="material-icons text-yellow-700">star</i>
                      <i className="material-icons text-yellow-700">star</i>
                      <p className="ml-2 font-semibold">5.0</p>
                    </div>
                  </div>
                </div>
                <div className="hidden w-full max-w-full px-4 pt-24 md:w-6/12 md:pt-0 lg:block">
                  <Image
                    src="/img/team.jpg"
                    alt="components"
                    width={1000}
                    height={700}
                    quality={100}
                    className="aspect-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card
          shadow={false}
          className="mx-6 -mt-20 bg-white md:mx-12 md:-mt-48"
        >
          <div className="container z-20 mx-auto my-32 px-4">
            <div className="carousel">
              <div className="slide">
                <img
                  src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/products/product-1-min.jpg"
                  alt=""
                />
              </div>

              <div className="slide">
                <img
                  src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/products/product-2-min.jpg"
                  alt=""
                />
              </div>

              <div className="slide">
                <img
                  src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/products/product-3-min.jpg"
                  alt=""
                />
              </div>

              <button className="button-next">
                <i className="material-icons text-white">chevron_right</i>
              </button>
              <button className="button-prev">
                <i className="material-icons text-white">chevron_left</i>
              </button>
            </div>
            <div className="flex">
              <div className="my-10 w-1/4">
                <div className="input-group-outline input-group">
                  <label className="form-label">Please select date</label>
                  <input className="datepicker form-control" type="text" />
                </div>
              </div>
              <div className="my-10 ml-10 w-1/4">
                <div className="input-group-outline input-group">
                  <label className="form-label">Please select time</label>
                  <input className="timepicker form-control" type="text" />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="nav-tabs w-7/12">
                <nav>
                  <ul role="tablist" className="tabs p-1" tab-panel="">
                    <li className="nav-item">
                      <a
                        className="nav-link active mb-0 px-0 py-1"
                        aria-selected="true"
                        aria-controls="html"
                        role="tab"
                      >
                        {`HTML`}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link mb-0 px-0 py-1"
                        aria-selected="false"
                        aria-controls="react"
                        role="tab"
                      >
                        {`React`}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link mb-0 px-0 py-1"
                        aria-selected="false"
                        aria-controls="vue"
                        role="tab"
                      >
                        {`Vue`}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link mb-0 px-0 py-1"
                        aria-selected="false"
                        aria-controls="angular"
                        role="tab"
                      >
                        {`Angular`}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link mb-0 px-0 py-1"
                        aria-selected="false"
                        aria-controls="svelte"
                        role="tab"
                      >
                        {`Svelte`}
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="tabs-content p-5">
                  <div className="active tab-panel" id="html" role="tabpanel">
                    Because it&apos;s about motivating the doers. Because
                    I&apos;m here to follow my dreams and inspire people.
                  </div>
                  <div className="tab-panel" id="react" role="tabpanel">
                    The reading of all good books is like a conversation with
                    the finest minds of past centuries.
                  </div>
                  <div className="tab-panel" id="vue" role="tabpanel">
                    Comparing yourself to others is the thief of joy.
                  </div>
                  <div className="tab-panel" id="angular" role="tabpanel">
                    It&apos;s better to choose, commit, and get started instead
                    of waiting for the best possible option.
                  </div>
                  <div className="tab-panel" id="svelte" role="tabpanel">
                    If you think you can learn a lot from reading books, try
                    writing one.
                  </div>
                </div>
              </div>
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

            <div className="my-5">
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
                <form id="form" className="form">
                  <h2>Validation Form</h2>
                  <div className="input-group-outline input-group mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" />
                    <small>Error Message</small>
                  </div>
                  <div className="input-group-outline input-group mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                    <small>Error Message</small>
                  </div>
                  <div className="input-group-outline input-group mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                    <small>Error Message</small>
                  </div>
                  <div className="input-group-outline input-group mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirm_password"
                    />
                    <small>Error Message</small>
                  </div>
                  <button className="button button-pink">Submit</button>
                </form>
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
