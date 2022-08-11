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
          <div className="container mx-auto grid h-full place-items-center rounded-3xl bg-gradient-to-tr from-pink-700 to-pink-500 px-12 pt-24 pb-48 text-center">
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
          <div className="container mx-auto -mt-28 px-4 pb-16">
            <div className="relative mx-auto max-w-screen-lg rounded-2xl bg-white pt-8 pr-2.5 shadow-2xl shadow-gray-500/40">
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-inherit pl-6">
                Users over time
              </h6>
              <div style={{ minHeight: 415 }}>
        
              </div>
              <div className="absolute -right-[5%] -bottom-[7%] hidden h-[280px] w-[280px] rounded-full bg-white shadow-xl shadow-gray-500/20 lg:block xl:-right-[10%]">
                <div className="-mt-2" style={{ minHeight: "298.7px" }}>
                  <div
                    id="apexchartsm5twt6d7"
                    className="apexcharts-canvas apexchartsm5twt6d7 apexcharts-theme-light"
                    style={{ width: 280, height: "298.7px" }}
                  >
                    
                    <div className="apexcharts-legend" />
                  </div>
                </div>
              </div>
            </div>  
          </div>    
        </header>


        
        {/* FEATURES */}

        <section className="bg-white py-28 px-4">
          <div className="container mx-auto mb-20 text-center">
            <p className="block antialiased font-sans text-base leading-relaxed text-pink-500 mb-2 font-bold">
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
              <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
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
              <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
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
              <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
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
            <div className="grid justify-center text-center">
              <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
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
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-blue-gray-900 font-semibold">
                Connect with customers
              </h5>
              <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 px-8 font-normal">
                Solve a problem or close a sale in real-time with chat. If no one is
                available, customers are seamlessly routed to email without confusion
              </p>
            </div>
            <div className="grid justify-center text-center">
              <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
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
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-blue-gray-900 font-semibold">
                Connect the tools you already use
              </h5>
              <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 px-8 font-normal">
                Explore 100+ integrations that make your day-to-day workflow more
                efficient and familiar. Plus, our extensive developer tools.
              </p>
            </div>
            <div className="grid justify-center text-center">
              <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-blue-gray-900 font-semibold">
                Our people make the difference
              </h5>
              <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 px-8 font-normal">
                We're an extension of your customer service team, and all of our
                resources are free. Chat to our friendly team 24/7 when you need help.
              </p>
            </div>
          </div>
        </section>


        <section className="bg-white">
          <div className="mb-20 grid lg:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbSUyMHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="delive instant answers"
              className="h-full w-full object-cover"
            />
            <div className="grid w-full items-center p-10 md:p-20 xl:w-10/12">
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
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
              <h3 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 mb-2">
                Deliver instant answers
              </h3>
              <p className="block antialiased font-sans text-xl leading-relaxed text-gray-700 mb-10 font-normal">
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
              <ul className="flex flex-col gap-4 pl-2">
                <div className="flex items-center gap-3">
                  <div className="inline-block rounded-full bg-pink-50 p-1 text-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                    Keep your customers in the loop with live chat
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="inline-block rounded-full bg-pink-50 p-1 text-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                    Embed help articles right on your website
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="inline-block rounded-full bg-pink-50 p-1 text-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                    Customers never have to leave the page to find an answer
                  </p>
                </div>
              </ul>
            </div>
          </div>
          <div className="grid lg:grid-cols-2">
            <div className="row-start-2 grid w-full items-center p-10 md:p-20 lg:row-auto xl:w-10/12">
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
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
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </div>
              <h3 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 mb-2">
                Manage your team with reports
              </h3>
              <p className="block antialiased font-sans text-xl leading-relaxed text-gray-700 mb-10 font-normal">
                Measure what matters with Untitled's easy-to-use reports. You can
                filter, export, and drilldown on the data in a couple clicks.
              </p>
              <ul className="flex flex-col gap-4 pl-2">
                <div className="flex items-center gap-3">
                  <div className="inline-block rounded-full bg-pink-50 p-1 text-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                    Filter, export, and drilldown on the data quickly
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="inline-block rounded-full bg-pink-50 p-1 text-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                    Save, schedule, and automate reports to your inbox
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="inline-block rounded-full bg-pink-50 p-1 text-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                    Connect the tools you already use with 100+ integrations
                  </p>
                </div>
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlYW0lMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="manage your team with reports"
              className="h-full w-full object-cover"
            />
          </div>
        </section>



        <section className="bg-white px-4 py-12">
          <div className="container mx-auto">
            <div className="mb-20 grid lg:grid-cols-2">
              <div className="lg:pr-10">
                <div className="h-full min-h-[20rem] w-full rounded-3xl bg-gradient-to-tr from-pink-500 to-pink-700" />
              </div>
              <div className="grid items-center py-12 px-2 lg:ml-8 lg:py-20">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
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
                <h3 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 mb-2">
                  Deliver instant answers
                </h3>
                <p className="block antialiased font-sans text-xl leading-relaxed text-gray-700 mb-10 font-normal">
                  Keep your customers in the flow by embedding help articles right on
                  your website. With Beacon, they never have to leave the page to find
                  an answer.
                </p>
                <div className="flex gap-2">
                  <button
                    className="button button-pink button-outlined button-lg flex"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1.5 -mt-0.5 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    demo
                  </button>
                  <button className="button button-pink button-lg" type="button">learn more</button>
                </div>
              </div>
            </div>
            <div className="mb-20 grid lg:grid-cols-2">
              <div className="grid items-center py-12 px-2 lg:mr-16 lg:py-20">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
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
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </div>
                <h3 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 mb-2">
                  Manage your team with reports
                </h3>
                <p className="block antialiased font-sans text-xl leading-relaxed text-gray-700 mb-10 font-normal">
                  Measure what matters with Untitled's easy-to-use reports. You can
                  filter, export, and drilldown on the data in a couple clicks
                </p>
                <div className="flex gap-2">
                  <button className="button button-pink button-outlined button-lg flex" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1.5 -mt-0.5 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    demo
                  </button>
                  <button className="button button-pink button-lg" type="button">learn more</button>
                </div>
              </div>
              <div className="row-start-1 lg:row-auto lg:pl-10">
                <div className="h-full min-h-[20rem] w-full rounded-3xl bg-gradient-to-tr from-pink-500 to-pink-700" />
              </div>
            </div>
          </div>
        </section>

        {/* BLOG POSTS */}

        <div className="bg-white">
          <div className="container mx-auto grid grid-cols-1 items-start gap-y-12 gap-x-8 px-8 pt-20 pb-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <div className="card-header mx-4 -mt-6">
                <a href="#" blur-shadow-image="true">
                  <img
                    className="w-auto rounded-lg"
                    src="https://images.unsplash.com/photo-1486728297118-82a07bc48a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2429&q=80"
                    alt="card image"
                  />
                </a>
              </div>
              <div className="card-body">
                <p className="block antialiased font-sans text-sm leading-normal text-pink-500 mb-1 font-semibold">
                  Management
                </p>
                <a
                  href="#"
                  className="mb-1 grid grid-cols-6 items-start gap-2 text-blue-gray-900 transition-colors hover:text-pink-500"
                >
                  <div className="col-span-5">
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit normal-case">
                      Bill Walsh leadership lessons
                    </h5>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto -mt-0.5 h-7 w-7 rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </a>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 mb-8 font-normal">
                  Like to know the secrets of transforming a 2-14 team into a 3x Super
                  Bowl winning Dynasty?
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="Alec Whitten"
                    className="inline-block relative object-cover object-center rounded-full w-9 h-9 rounded-md"
                  />
                  <div>
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                      Alec Whitten
                    </p>
                    <p className="block antialiased font-sans text-gray-700 text-xs font-normal">
                      17 Jan 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header mx-4 -mt-6">
                <a href="#" blur-shadow-image="true">
                  <img
                    className="w-auto rounded-lg"
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlYW0lMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="PM mental models"
                  />
                </a>
              </div>
              <div className="card-body">
                <p className="block antialiased font-sans text-sm leading-normal text-pink-500 mb-1 font-semibold">
                  Product
                </p>
                <a
                  href="#"
                  className="mb-1 grid grid-cols-6 items-start gap-2 text-blue-gray-900 transition-colors hover:text-pink-500"
                >
                  <div className="col-span-5">
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit normal-case">
                      PM mental models
                    </h5>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto -mt-0.5 h-7 w-7 rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </a>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 mb-8 font-normal">
                  Mental models are simple expressions of complex processes or
                  relationships.
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="Demi Wilkinson"
                    className="inline-block relative object-cover object-center rounded-full w-9 h-9 rounded-md"
                  />
                  <div>
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                      Demi Wilkinson
                    </p>
                    <p className="block antialiased font-sans text-gray-700 text-xs font-normal">
                      16 Jan 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header mx-4 -mt-6">
                <a href="#" blur-shadow-image="true">
                  <img
                    className="w-auto rounded-lg"
                    src="https://images.unsplash.com/photo-1548611716-3000815a5803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRlc2slMjBzZXR1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="What is Wireframing?"
                  />
                </a>
              </div>
              <div className="card-body">
                <p className="block antialiased font-sans text-sm leading-normal text-pink-500 mb-1 font-semibold">
                  Design
                </p>
                <a
                  href="#"
                  className="mb-1 grid grid-cols-6 items-start gap-2 text-blue-gray-900 transition-colors hover:text-pink-500"
                >
                  <div className="col-span-5">
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit normal-case">
                      What is Wireframing?
                    </h5>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto -mt-0.5 h-7 w-7 rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </a>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 mb-8 font-normal">
                  Introduction to Wireframing and its Princioles. Learn from the best in
                  the industrv.
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="Candice Wu"
                    className="inline-block relative object-cover object-center rounded-full w-9 h-9 rounded-md"
                  />
                  <div>
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                      Candice Wu
                    </p>
                    <p className="block antialiased font-sans text-gray-700 text-xs font-normal">
                      15 Jan 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header mx-4 -mt-6">
                <a href="#" blur-shadow-image="true">
                  <img
                    className="w-auto rounded-lg"
                    src="https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="How collaboration makes us better designers"
                  />
                </a>
              </div>
              <div className="card-body">
                <p className="block antialiased font-sans text-sm leading-normal text-pink-500 mb-1 font-semibold">
                  Design
                </p>
                <a
                  href="#"
                  className="mb-1 grid grid-cols-6 items-start gap-2 text-blue-gray-900 transition-colors hover:text-pink-500"
                >
                  <div className="col-span-5">
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit normal-case">
                      How collaboration makes us better designers
                    </h5>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto -mt-0.5 h-7 w-7 rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </a>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 mb-8 font-normal">
                  Collaboration can make our teams stronger, and our individual designs
                  better.
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                    alt="Natali Craig"
                    className="inline-block relative object-cover object-center rounded-full w-9 h-9 rounded-md"
                  />
                  <div>
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                      Natali Craig
                    </p>
                    <p className="block antialiased font-sans text-gray-700 text-xs font-normal">
                      14 Jan 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header mx-4 -mt-6">
                <a href="#" blur-shadow-image="true">
                  <img
                    className="w-auto rounded-lg"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Our top 10 Javascript frameworks to use"
                  />
                </a>
              </div>
              <div className="card-body">
                <p className="block antialiased font-sans text-sm leading-normal text-pink-500 mb-1 font-semibold">
                  Product
                </p>
                <a
                  href="#"
                  className="mb-1 grid grid-cols-6 items-start gap-2 text-blue-gray-900 transition-colors hover:text-pink-500"
                >
                  <div className="col-span-5">
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit normal-case">
                      Our top 10 Javascript frameworks to use
                    </h5>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto -mt-0.5 h-7 w-7 rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </a>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 mb-8 font-normal">
                  JavaScript frameworks make development easy with extensive features
                  and functionalities.
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="Alec Whitten"
                    className="inline-block relative object-cover object-center rounded-full w-9 h-9 rounded-md"
                  />
                  <div>
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                      Alec Whitten
                    </p>
                    <p className="block antialiased font-sans text-gray-700 text-xs font-normal">
                      13 Jan 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header mx-4 -mt-6">
                <a href="#" blur-shadow-image="true">
                  <img
                    className="w-auto rounded-lg"
                    src="https://images.unsplash.com/photo-1630090896228-88e5ea707294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Podcast: Creating a better CX Community"
                  />
                </a>
              </div>
              <div className="card-body">
                <p className="block antialiased font-sans text-sm leading-normal text-pink-500 mb-1 font-semibold">
                  Customer Success
                </p>
                <a
                  href="#"
                  className="mb-1 grid grid-cols-6 items-start gap-2 text-blue-gray-900 transition-colors hover:text-pink-500"
                >
                  <div className="col-span-5">
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit normal-case">
                      Podcast: Creating a better CX Community
                    </h5>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto -mt-0.5 h-7 w-7 rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </a>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 mb-8 font-normal">
                  Starting a community doesn't need to be complicated, but how do you
                  get started?
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    alt="Orlando Diggs"
                    className="inline-block relative object-cover object-center rounded-full w-9 h-9 rounded-md"
                  />
                  <div>
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                      Orlando Diggs
                    </p>
                    <p className="block antialiased font-sans text-gray-700 text-xs font-normal">
                      12 Jan 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-12 pb-20 text-center">
            <button
              className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-blue-500 hover:bg-blue-500/10 active:bg-blue-500/30 inline-flex items-center pl-4"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
              load more
            </button>
          </div>
        </div>


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
