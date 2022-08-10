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
          <a href="#" className="block antialiased font-sans text-sm leading-normal text-white mr-4 cursor-pointer py-1.5 font-bold">Material Tailwind</a>
          <div className="hidden lg:block">
            <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
              <a href="#">
                <li className="antialiased font-sans text-sm leading-normal text-white flex items-center gap-1.5 p-1 font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path><path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path></svg>
                  Pages
                </li>
              </a>
              <a href="#">
                <li className="antialiased font-sans text-sm leading-normal text-white flex items-center gap-1.5 p-1 font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                  Account
                </li>
              </a>
              <a href="#">
                <li className="antialiased font-sans text-sm leading-normal text-white flex items-center gap-1.5 p-1 font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg>
                  Blocks
                </li>
              </a>
              <a href="#">
                <li className="antialiased font-sans text-sm leading-normal text-white flex items-center gap-1.5 p-1 font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                  Docs
                </li>
              </a>
            </ul>
          </div>
          <button className="button button-light button-sm hidden lg:inline-block" type="button">Buy Now</button>
          <button className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 ml-auto inline-block lg:hidden" type="button">
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </span>
          </button>
        </div>
        <div className="block w-full basis-full overflow-hidden h-0 opacity-0">
          <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
            <a href="#">
              <li className="antialiased font-sans text-sm leading-normal text-white flex items-center gap-1.5 p-1 font-normal">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path><path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path></svg>
                Pages
              </li>
            </a>
            <a href="#">
              <li className="antialiased font-sans text-sm leading-normal text-white flex items-center gap-1.5 p-1 font-normal">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                Account
              </li>
            </a>
            <a href="#">
              <li className="antialiased font-sans text-sm leading-normal text-white flex items-center gap-1.5 p-1 font-normal">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg>
                Blocks
              </li>
            </a>
            <a href="#">
              <li className="antialiased font-sans text-sm leading-normal text-white flex items-center gap-1.5 p-1 font-normal">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                Docs
              </li>
            </a>
          </ul>
          <button className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mb-2" type="button">Buy Now</button>
        </div>
      </nav>
      <main className="relative">
        <header className="h-screen min-h-screen">
          <div className="relative z-50 h-fit py-20 lg:py-32">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center justify-between">
                <div className="mt-48 w-full px-4 md:w-8/12 lg:mt-4 lg:w-5/12">
                <h1 className="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 mb-8 text-4xl leading-tight md:text-5xl">People who care <br/>about your growth</h1>
                  <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-gray-700 mb-16 md:pr-16 xl:pr-28">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.</p>
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
                  <p className="mt-3 antialiased font-sans text-sm font-light leading-normal text-gray-700 flex items-center">
                    We care about your data in our <a href="#" className="block antialiased font-sans text-sm font-light leading-normal text-inherit underline decoration-gray-500 underline-offset-2">privacy policy</a>
                  </p>
                  <div className="mt-5 flex flex-start">
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
                    </div>
                    <div className="mb-6 sm:mb-0 sm:ml-4">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-700" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-700" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-700" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-700" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-700" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 ml-2 font-semibold">5.0</p>  
                      </div>
                      <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 mt-1 ml-0.5 font-normal">from 200+ reviews</p>
                    </div>
                  </div>
                </div>
                <div className="hidden w-full max-w-full px-4 pt-24 md:w-6/12 md:pt-0 lg:block">
                  <Image
                    src="/img/team.jpg"
                    alt="components"
                    width={700}
                    height={700}
                    quality={100}
                    className="aspect-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>


        <header className="h-full min-h-screen w-screen place-items-center bg-white px-8 pt-56 lg:pt-40">
          <div className="container mx-auto grid h-full items-center lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <div className="mb-8 inline-flex items-center rounded-full bg-pink-50 py-1 pl-1 pr-3">
                <p className="block antialiased font-sans text-sm leading-normal mr-3 rounded-full bg-white py-0.5 px-3 font-semibold text-pink-500">New</p>
                <p className="antialiased font-sans text-sm leading-normal text-pink-500 flex items-center font-semibold">Personalized coaching in-app
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </p>
              </div>
              <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold text-blue-gray-900 mb-8 leading-tight lg:text-6xl">Portfolio perfromance tracking made easy</h1>
              <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-gray-700 lg:pr-20">Designed by marketers, for marketers. Untitled gives you the guidance, data and innovation you need to become a better marketer.</p>
              <div className="mt-12 flex justify-center gap-3 lg:justify-start">
                <button className="button button-pink" type="button">Download IOS</button>
                <button className="button button-pink" type="button">Download Andriod</button>
              </div>
            </div>
            <div className="hidden justify-center lg:flex">
              <div className="h-[40rem] w-96 rounded-xl bg-pink-500"></div>
            </div>
          </div>
        </header>

        <header className="h-full min-h-screen w-screen bg-white pt-28 md:pt-32 lg:px-8 lg:pt-40">
          <div className="container mx-auto grid h-full items-center text-center">
            <div className="mx-auto mb-8 inline-flex w-max items-center rounded-full bg-pink-50 py-1 pl-1 pr-3">
              <p className="block antialiased font-sans text-sm leading-normal mr-3 rounded-full bg-white px-2.5 py-0.5 font-semibold text-pink-500">What's new?</p>
              <p className="antialiased font-sans text-sm leading-normal text-pink-500 flex items-center font-semibold">
                Instantly issue virtual cards
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </p>
            </div>
            <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold text-blue-gray-900 mb-8 leading-tight lg:text-6xl">No more banking headaches</h1>
            <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-gray-700 mx-auto mb-12 w-full px-8 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20">Mo money, no problems. Untitled is a next-generation financial technology company in the process of reinventing banking. 30-day free trial.</p>
            <div className="mb-20 flex justify-center gap-3">
              <button className="button button-pink button-lg button-outlined flex" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 -mt-0.5 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                demo
              </button>
              <button className="button button-pink button-lg" type="button">sign up</button>
            </div>
          </div>
          <div className="mx-0 lg:container lg:mx-auto">
            <img src="https://images.unsplash.com/photo-1571715268998-d6e79bed5fc9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2344&amp;q=80" alt="credit cards" className="h-96 w-full object-cover md:h-[34rem] lg:h-[44rem]" />  
          </div>
        </header>


        <header className="h-full min-h-screen w-screen bg-white px-4 pt-20 lg:px-8 lg:pt-24">
          <div className="container mx-auto grid h-full place-items-center rounded-3xl bg-gradient-to-tr from-blue-700 to-blue-500 px-12 pt-24 pb-48 text-center">
            <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-white mb-8 leading-tight lg:text-7xl">Grow your users.<br/> 
              <span className="opacity-75">Smarter.</span>
            </h1>
            <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-16 w-full opacity-75 md:w-10/12 lg:w-7/12">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            <div className="w-full md:w-8/12 lg:w-5/12">
              <div className="mb-6 flex flex-col gap-2 md:mb-2 md:flex-row">
                <div className="relative w-full min-w-[200px] h-11">
                  <input placeholder="Enter your email" className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-blue-500 !border-0 bg-white" />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500 hidden"></label>
                </div>
                <button className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full px-4 md:w-40" type="button">get started</button>
              </div>
              <p className="antialiased font-sans text-sm font-light leading-normal text-white flex items-center justify-self-start">We care about your data in our&nbsp;
                <a href="#" className="block antialiased font-sans text-sm font-light leading-normal text-inherit underline decoration-white underline-offset-2">privacy policy</a>
              </p>
            </div>
          </div>
        
              
        </header>


        <section className="bg-white py-28 px-4">
  <div className="container mx-auto mb-20 text-center">
    <p className="block antialiased font-sans text-base leading-relaxed text-blue-500 mb-2 font-bold">
      Features
    </p>
    <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
      Beautiful analytics to grow smarter
    </h2>
    <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-gray-700 mx-auto w-full px-4 md:w-10/12 lg:w-7/12 lg:px-8">
      Powerful, self-serve product and growth analytics to help you convert,
      engage, and retain more users. Trusted by over 4,000 startups.
    </p>
  </div>
  <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
    <div className="grid justify-center text-center">
      <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-blue-100/80 p-2.5 text-blue-500 ring-8 ring-blue-100/40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </div>
      <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-blue-gray-900 font-semibold">
        Share team inboxes
      </h5>
      <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 px-8 font-normal">
        Whether you have a team of 2 or 200. our shared team inboxes keep
        everyone on the same page and in the loop.
      </p>
    </div>
    <div className="grid justify-center text-center">
      <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-blue-100/80 p-2.5 text-blue-500 ring-8 ring-blue-100/40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </div>
      <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-blue-gray-900 font-semibold">
        Deliver instant answers
      </h5>
      <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 px-8 font-normal">
        An all-in-one customer service platform that helos you balance
        everything your customers need to be happy.
      </p>
    </div>
    <div className="grid justify-center text-center">
      <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-blue-100/80 p-2.5 text-blue-500 ring-8 ring-blue-100/40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
      <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-blue-gray-900 font-semibold">
        Manage your team with reports
      </h5>
      <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 px-8 font-normal">
        Measure what matters with Untitled's easy-to-use reports. You can
        filter, export, and drill down on the data in a couple clicks.
      </p>
    </div>
   
  </div>
</section>



        <Card
          shadow={false}
          className="mx-6 bg-white md:mx-12 "
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
