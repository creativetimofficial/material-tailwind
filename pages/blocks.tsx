/* eslint-disable @next/next/no-img-element */

// next.js components
import Head from "next/head";

// @material-tailwind/react components
import { Card } from "@material-tailwind/react";

import init from "public/material-tailwind-html";
import {useEffect} from "react";

// page components
import Navbar from "components/layout/navbar";
import Header from "components/layout/header";
import Footer from "components/layout/footer";

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
      <Navbar shadow />
      <main className="relative">
        <Header />
        <Card
          shadow={false}
          className="mx-6 -mt-20 bg-white md:mx-12 md:-mt-48"
        >
          <div className="container z-20 mx-auto px-4 my-32">
            <div className="carousel">
              <div className="slide">
                <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/products/product-1-min.jpg" alt="" />
              </div>

              <div className="slide">
                <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/products/product-2-min.jpg" alt="" />
              </div>

              <div className="slide">
                <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/products/product-3-min.jpg" alt="" />
              </div>

              <button className="button-next">
                <i className="material-icons text-white">chevron_right</i>
              </button>
              <button className="button-prev">
                <i className="material-icons text-white">chevron_left</i>
              </button>
            </div>
            <div className="flex">
              <div className="w-1/4 my-10">
                <div className="input-group input-group-outline">
                  <label className="form-label">Please select date</label>
                  <input className="form-control datepicker" type="text"/>
                </div>
              </div>
              <div className="w-1/4 my-10 ml-10">
                <div className="input-group input-group-outline">
                  <label className="form-label">Please select time</label>
                  <input className="form-control timepicker" type="text"/>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="nav-tabs w-7/12">
                <nav>
                  <ul role="tablist" className="tabs p-1" tab-panel="">
                    <li className="nav-item">
                      <a className="nav-link active mb-0 px-0 py-1" aria-selected="true" aria-controls="html" role="tab">
                        {`HTML`}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mb-0 px-0 py-1" aria-selected="false" aria-controls="react" role="tab">
                        {`React`}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mb-0 px-0 py-1" aria-selected="false" aria-controls="vue" role="tab">
                        {`Vue`}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mb-0 px-0 py-1" aria-selected="false" aria-controls="angular" role="tab">
                        {`Angular`}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mb-0 px-0 py-1" aria-selected="false" aria-controls="svelte" role="tab">
                        {`Svelte`}
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="tabs-content p-5">
                  <div className="active tab-panel" id="html" role="tabpanel">
                    Because it's about motivating the doers. Because I'm here to follow my
                    dreams and inspire people.
                  </div>
                  <div className="tab-panel" id="react" role="tabpanel">
                    The reading of all good books is like a conversation with the finest
                    minds of past centuries.
                  </div>
                  <div className="tab-panel" id="vue" role="tabpanel">
                    Comparing yourself to others is the thief of joy.
                  </div>
                  <div className="tab-panel" id="angular" role="tabpanel">
                    It's better to choose, commit, and get started instead of waiting for
                    the best possible option.
                  </div>
                  <div className="tab-panel" id="svelte" role="tabpanel">
                    If you think you can learn a lot from reading books, try writing one.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-4/12">
              <button className="button button-pink" data-toast="true" data-target="success-notification" type="button">notification</button>

              <div className="notification fade p-2 bg-white hidden" aria-hidden="true" role="alert" id="success-notification" aria-live="assertive" aria-atomic="true">
                <div className="notification-header border-0">
                  <i className="material-icons text-green-500 mr-2">check</i>
                  <span className="mr-auto font-semibold">Material Dashboard </span>
                  <small className="text-body">11 mins ago</small>
                  <i className="fas fa-times text-md ml-3 cursor-pointer" data-bs-dismiss="toast" aria-label="Close" aria-hidden="true"></i>
                </div>
                <hr className="horizontal dark m-0" />
                <div className="notification-body">
                  Hello, world! This is a notification message.
                </div>
              </div>
            </div>

            <div className="flex w-4/12 my-5">
              <div className="spinner-border text-pink-500 mr-3" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-border text-blue-500 mr-3" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-border text-green-500 mr-3" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-border text-orange-500 mr-3" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-border text-red-500 mr-3" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </Card>
      </main>
      <Footer />
    </>
  );
}
