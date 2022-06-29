/* eslint-disable @next/next/no-img-element */

// next.js components
import Head from "next/head";

// @material-tailwind/react components
import { Card } from "@material-tailwind/react";

// page components
import Navbar from "components/layout/navbar";
import Header from "components/layout/header";
import Footer from "components/layout/footer";

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

            
          </div>
        </Card>
      </main>
      <Footer />
    </>
  );
}
