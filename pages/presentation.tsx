/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import JsxParser from "react-jsx-parser";
import Navbar from "pagesComponents/Navbar";
import Header from "pagesComponents/Header";
import Footer from "pagesComponents/Footer";
import FeatureCard from "pagesComponents/Cards/FeatureCard";
import CodePreviewCard from "pagesComponents/Cards/CodePreviewCard";
import TestimonialCard from "pagesComponents/Cards/TestimonialCard";
import ReactLogo from "pagesComponents/Icons/React";
import HtmlLogo from "pagesComponents/Icons/Html";
import AngularLogo from "pagesComponents/Icons/Angular";
import VueLogo from "pagesComponents/Icons/Vue";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Chip,
  Input
} from "../packages/material-tailwind-react/src";

export default function Presentation() {
  const [buttonType, setButtonType] = useState("icon");
  const [buttonCode, setButtonCode] = useState(null);
  const [framework, setFramework] = useState("react");
  const [frameworkCode, setFrameworkCode] = useState(null);

  useEffect(() => {
    switch (buttonType) {
      case "default":
        setButtonCode(`
        
        
        
<Button>Button</Button>`);
        break;
      case "gradient":
        setButtonCode(`
        
        
<Button variant="gradient">
  Button
</Button>`);
        break;
      case "link":
        setButtonCode(`
        

<Button variant="text">
  Button
</Button>`);
        break;
      case "icon":
        setButtonCode(`<Button className="flex items-center">
  <i className="
    material-icons mr-1
    text-base leading-none
  ">
    favorite
  </i>
  Button
</Button>`);
        break;
    }
  }, [buttonType]);

  useEffect(() => {
    switch (framework) {
      case "react":
        setFrameworkCode(`

<Button className="flex items-center">
  <i className="
    material-icons mr-1
    text-base leading-none
  ">
    favorite
  </i>
  Button
</Button>
        `);
        break;
      case "html":
        setFrameworkCode(`<button
  class="button button-info"
  data-ripple-light="true"
>
  <i className="
    material-icons mr-1
    text-base leading-none
  ">
    favorite
  </i>
  Button
</button>`);
    }
  }, [framework]);

  const buttonOptionClasses = (type) => `
    cursor-pointer select-none transition-all duration-300 ${
      buttonType === type ? "opacity-100" : "opacity-60"
    }
  `;

  return (
    <>
      <Head>
        <title>Presentation | Material Tailwind</title>
      </Head>
      <Navbar />
      <main className="relative">
        <Header />
        <Card
          shadow={false}
          className="bg-white/80 backdrop-saturate-200 backdrop-blur-2xl border border-white/80 -mt-48 mx-6 md:mx-12 overflow-hidden"
        >
          <div className="container mx-auto px-4 z-20">
            {/* start features section */}
            <section className="py-10 lg:py-20">
              <div className="w-full md:w-3/4 lg:w-1/2 mx-auto text-center mb-24">
                <Typography
                  variant="h2"
                  className="!font-sans text-[#1A237E] font-semibold mb-2 tracking-normal"
                >
                  Meet Your New Framework
                </Typography>
                <Typography className="text-[#1A237E]/60 text-lg font-light mb-2">
                  Material Tailwind features multiple React components, all
                  written with Tailwind CSS classes and Material Design
                  guidelines.
                </Typography>
              </div>
              <div className="flex flex-row flex-wrap content-center">
                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                  <FeatureCard icon="dashboard" title="CSS Components">
                    Material Tailwind comes with a huge number of Fully Coded
                    CSS components.
                  </FeatureCard>
                </div>
                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                  <FeatureCard icon="terminal" title="JavaScript Components">
                    Material Tailwind only features React components, but in the
                    near future it will future more.
                  </FeatureCard>
                </div>
                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                  <FeatureCard icon="description" title="Documentation">
                    This extension comes a lot of fully coded examples that help
                    you get started faster.
                  </FeatureCard>
                </div>
                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                  <FeatureCard icon="view_carousel" title="Templates (soon)">
                    Material Tailwind will come with fully coded sample pages so
                    you could start working instantly.
                  </FeatureCard>
                </div>
              </div>
            </section>
            {/* end features section */}

            {/* start button section */}
            <section className="py-24">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-5/12 px-4">
                  <Typography
                    variant="h2"
                    className="!font-sans font-black text-[#1A237E] tracking-normal mb-2"
                  >
                    Change your <br />
                    <Typography
                      as="span"
                      variant="h2"
                      color="blue"
                      className="inline-block !font-sans font-black tracking-normal"
                      textGradient
                    >
                      Button&apos;s
                    </Typography>{" "}
                    design.
                  </Typography>
                  <Typography className="text-lg mb-5 md:pr-10 text-[#1A237E]/60">
                    Putting together a page has never been easier than matching
                    together pre-made components. You can easily customize and
                    built your pages.
                  </Typography>
                  <Button>Get Started</Button>
                  <div className="flex flex-wrap mt-7 text-[#1A237E]">
                    <div className="w-auto mr-6 md:mr-8 text-center">
                      <a
                        className={buttonOptionClasses("default")}
                        onClick={() => setButtonType("default")}
                      >
                        <i className="material-icons text-xl">
                          radio_button_checked
                        </i>
                        <Typography>Default</Typography>
                      </a>
                    </div>
                    <div className="w-auto mr-6 md:mr-8 text-center">
                      <a
                        className={buttonOptionClasses("gradient")}
                        onClick={() => setButtonType("gradient")}
                      >
                        <i className="material-icons text-xl">gradient</i>
                        <Typography>Gradient</Typography>
                      </a>
                    </div>
                    <div className="w-auto mr-6 md:mr-8 text-center">
                      <a
                        className={buttonOptionClasses("link")}
                        onClick={() => setButtonType("link")}
                      >
                        <i className="material-icons text-xl">
                          format_color_text
                        </i>
                        <Typography>Link</Typography>
                      </a>
                    </div>
                    <div className="w-auto mr-6 md:mr-8 text-center">
                      <a
                        className={buttonOptionClasses("icon")}
                        onClick={() => setButtonType("icon")}
                      >
                        <i className="material-icons text-xl">favorite</i>
                        <Typography>Icon</Typography>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 md:w-8/12 px-4 relative mt-10 lg:mt-0">
                  <CodePreviewCard
                    code={`import { Button } from "@material-tailwind/react";
                  
${buttonCode}
`}
                  />
                  <img
                    className="absolute w-full -bottom-16 md:bottom-auto md:top-24 md:-right-40"
                    src="/img/blue.png"
                    alt="blob_blue"
                  />
                  <div className="w-[13rem] md:w-80 h-40 md:h-56 absolute top-44 md:top-14 lg:top-24 right-11 md:-right-24 rounded-lg bg-dark bg-white/80 backdrop-saturate-200 backdrop-blur-2xl shadow-2xl shadow-blue-grey-500/20 flex z-30">
                    <div className="m-auto">
                      <JsxParser components={{ Button }} jsx={buttonCode} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end button section */}

            {/* start color palette section */}
            <section className="py-24">
              <div className="items-center flex flex-wrap">
                <div className="w-full md:w-6/12 px-4 relative">
                  <CodePreviewCard
                    code={`
<span class="w-8 h-8 bg-blue-50">
<span class="w-8 h-8 bg-blue-100">
<span class="w-8 h-8 bg-blue-200">
<span class="w-8 h-8 bg-blue-300">
<span class="w-8 h-8 bg-blue-400">
<span class="w-8 h-8 bg-blue-500">
<span class="w-8 h-8 bg-blue-600">
<span class="w-8 h-8 bg-blue-700">
<span class="w-8 h-8 bg-blue-800">
<span class="w-8 h-8 bg-blue-900">`}
                  />
                  <img
                    className="absolute w-full md:top-36 lg:top-24 lg:-left-52 md:-right-24 -bottom-28 md:bottom-auto"
                    src="/img/purple.png"
                    alt="blob_purple"
                  />
                  <img
                    className="absolute w-1/2 top-10 md:-top-10 right-6 md:-right-10 z-30"
                    src="/img/color-palette.png"
                    alt="colors_example"
                  />
                </div>
                <div className="w-full md:w-6/12 px-4 relative order-first md:order-last">
                  <div className="lg:w-2/3 md:ml-7 lg:ml-24">
                    <Typography
                      variant="h2"
                      className="!font-sans font-black text-[#1A237E] tracking-normal mb-2"
                    >
                      Awesome <br />
                      <Typography
                        as="span"
                        variant="h2"
                        color="blue"
                        className="inline-block !font-sans font-black tracking-normal"
                        textGradient
                      >
                        Color
                      </Typography>{" "}
                      palette.
                    </Typography>
                    <Typography className="text-lg lg:pr-2 text-[#1A237E]/60">
                      Material Tailwind provides a simple way to customize your
                      button, you can change the colors, fonts, breakpoints and
                      everything you need.
                    </Typography>
                  </div>
                </div>
              </div>
            </section>
            {/* end color palette section */}

            {/* start shadow section */}
            <section className="py-12">
              <div className="items-center flex flex-wrap">
                <div className="w-full md:w-5/12 px-4 relative">
                  <Typography
                    variant="h2"
                    className="!font-sans font-black text-[#1A237E] tracking-normal mb-2"
                  >
                    Realistic <br />
                    <Typography
                      as="span"
                      variant="h2"
                      color="blue"
                      className="inline-block !font-sans font-black tracking-normal"
                      textGradient
                    >
                      Shadows
                    </Typography>{" "}
                    included.
                  </Typography>
                  <Typography className="text-lg mb-5 md:pr-10 text-[#1A237E]/60">
                    Material Tailwind provides a simple way to customize your
                    button, you can change the colors, fonts, breakpoints and
                    everything you need.
                  </Typography>
                </div>
                <div className="w-full md:w-6/12 px-4 pt-10 md:pt-0 relative">
                  <CodePreviewCard
                    code={`

<span class="w-32 h-34 shadow">
<span class="w-32 h-34 shadow-inner">
<span class="w-32 h-34 shadow-sm">
<span class="w-32 h-34 shadow-md">
<span class="w-32 h-34 shadow-lg">
<span class="w-32 h-34 shadow-xl">
<span class="w-32 h-34 shadow-2xl">
<span class="w-32 h-34 shadow-none">`}
                  />
                  <img
                    className="absolute w-full -bottom-16 md:bottom-auto md:top-24 lg:top-10 md:-right-5 lg:-right-40"
                    src="/img/blue.png"
                    alt="blob_blue"
                  />
                  <img
                    className="absolute shadow-2xl shadow-blue-grey-500/20 rounded-lg w-1/2 top-36 md:top-10 right-0 lg:-right-24 z-30"
                    src="/img/shadows.png"
                    alt="shadows_example"
                  />
                </div>
              </div>
            </section>
            {/* end shadow section */}

            {/* start components section */}
            <section className="py-24">
              <div className="flex items-start flex-wrap lg:py-12">
                <div className="w-full lg:w-6/12 px-4 relative md:mt-10">
                  <CodePreviewCard
                    code={`import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

<Card className="shadow-lg">
  <CardHeader
    variant="gradient"
    color="grey"
    className="h-48"
  >
    <img
      src="/img/blog-2.jpg"
      alt="img-blur-shadow"
      className="w-full h-full"
    />
  </CardHeader>
  <CardBody className="text-center">
    <Typography
      as="a"
      variant="h5"
      className="text-[#1A237E] font-normal mb-2"
    >
      Great for your awesome project
    </Typography>
    <Typography>
      Putting together a page has never been easier than
      matching together pre-made components. From landing
      pages presentation to login areas, you can easily
      customise and built your pages.
    </Typography>
  </CardBody>
</Card>`}
                  />
                  <img
                    className="absolute w-full top-[35rem] -left-40"
                    src="/img/purple.png"
                    alt="blob_purple"
                  />
                  <Card className="hidden lg:grid absolute w-5/6 lg:w-[54%] top-0 lg:-top-[60rem] -right-5 md:-right-44 lg:right-auto md:left-60 lg:left-[22rem] z-30 card mt-36 shadow-lg md:mt-0">
                    <CardHeader
                      variant="gradient"
                      color="grey"
                      className="h-48"
                    >
                      <Image
                        src="/img/blog-2.jpg"
                        alt="img-blur-shadow"
                        layout="fill"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography
                        as="a"
                        variant="h5"
                        className="text-[#1A237E] font-normal text-center cursor-pointer mb-2"
                      >
                        Great for your awesome project
                      </Typography>
                      <Typography className="mb-0 ml-2 hidden md:block opacity-60">
                        Putting together a page has never been easier than
                        matching together pre-made components. From landing
                        pages presentation to login areas, you can easily
                        customise and built your pages.
                      </Typography>
                      <Typography className="mb-0 ml-2 block md:hidden opacity-60">
                        Putting together a page has never been easier than
                        matching together pre-made components.
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
                <div className="w-full lg:w-6/12 px-4 lg:pt-36 md:pt-0 relative order-first lg:order-last">
                  <div className="w-11/12 lg:ml-24">
                    <Chip
                      variant="gradient"
                      value="react only"
                      className="rounded-full mb-8 from-[#191919] to-[#42424a]"
                    />
                    <Typography
                      variant="h2"
                      className="!font-sans font-black text-[#1A237E] tracking-normal mb-2"
                    >
                      Various styles of <br />
                      <Typography
                        as="span"
                        variant="h2"
                        color="blue"
                        className="inline-block !font-sans font-black tracking-normal"
                        textGradient
                      >
                        Components.
                      </Typography>
                    </Typography>
                    <Typography className="text-[#1A237E]/60 text-lg mb-8 md:pr-10 opacity-60">
                      Material Tailwind provides a simple way to customize your
                      button, you can change the colors, fonts, breakpoints and
                      everything you need.
                    </Typography>
                    <div className="flex flex-wrap gap-x-1 gap-y-3">
                      <Chip
                        variant="gradient"
                        value="Accordion"
                        className="rounded-full py-1.5 px-3"
                      />
                      <Chip
                        variant="gradient"
                        value="Breadcrumbs"
                        className="rounded-full py-1.5 px-3"
                      />
                      <Chip
                        variant="gradient"
                        value="Card"
                        className="rounded-full py-1.5 px-3"
                      />
                      <Chip
                        variant="gradient"
                        value="Dropdown"
                        className="rounded-full py-1.5 px-3"
                      />
                      <Chip
                        variant="gradient"
                        value="Navbar"
                        className="rounded-full py-1.5 px-3"
                      />
                      <Chip
                        variant="gradient"
                        value="Popover"
                        className="rounded-full py-1.5 px-3"
                      />
                      <Chip
                        variant="gradient"
                        value="Select"
                        className="rounded-full py-1.5 px-3"
                      />
                      <Chip
                        variant="gradient"
                        value="Tabs"
                        className="rounded-full py-1.5 px-3"
                      />
                      <Chip
                        variant="gradient"
                        value="Tooltip"
                        className="rounded-full py-1.5 px-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end components section */}

            {/* start framework section */}
            <section className="py-24 lg:-mt-[30rem]">
              <div className="items-center flex flex-wrap mt-5 md:mt-10">
                <div className="w-full md:w-5/12 md:px-4 relative">
                  <Typography
                    variant="h2"
                    className="!font-sans font-black text-[#1A237E] tracking-normal mb-2"
                  >
                    With your favorite <br />
                    <Typography
                      as="span"
                      variant="h2"
                      color="blue"
                      className="inline-block !font-sans font-black tracking-normal"
                      textGradient
                    >
                      Framework.
                    </Typography>
                  </Typography>
                  <Typography className="text-lg mb-12 lg:pr-24 text-[#1A237E]/60">
                    Material Tailwind provides a simple way to customize your
                    button, you can change the colors, fonts, breakpoints and
                    everything you need.
                  </Typography>
                  <div className="flex flex-wrap mt-7 text-[#344767]">
                    <div
                      className="w-16 mr-6 text-center cursor-pointer"
                      onClick={() => setFramework("react")}
                    >
                      <ReactLogo />
                      <Typography className="text-[#1A237E] font-bold mt-2">
                        React
                      </Typography>
                    </div>
                    <div
                      className="w-16 mr-6 text-center cursor-pointer"
                      onClick={() => setFramework("html")}
                    >
                      <HtmlLogo />
                      <Typography className="text-[#1A237E] font-bold mt-2">
                        HTML
                      </Typography>
                    </div>
                    <div className="w-16 mr-6 text-center cursor-not-allowed relative">
                      <div className="opacity-50">
                        <AngularLogo />
                      </div>
                      <Chip
                        value="soon"
                        variant="gradient"
                        className="py-1 px-2 !absolute -top-3 from-[#191919] to-[#42424a] rounded-full"
                      />
                      <Typography className="text-[#1A237E] font-bold mt-2">
                        Angular
                      </Typography>
                    </div>
                    <div className="w-16 text-center cursor-not-allowed relative mt-3 md:mt-0">
                      <div className="opacity-50">
                        <VueLogo />
                      </div>
                      <Chip
                        value="soon"
                        variant="gradient"
                        className="py-1 px-2 !absolute -top-3 from-[#191919] to-[#42424a] rounded-full"
                      />
                      <Typography className="text-[#1A237E] font-bold mt-2">
                        Vue.js
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4 pt-24 md:pt-0 relative">
                  <CodePreviewCard code={frameworkCode} />
                  <img
                    className="absolute w-full top-48 md:top-24 lg:top-10 md:-right-20 lg:-right-40"
                    src="/img/blue.png"
                    alt="blob_blue"
                  />
                </div>
              </div>
            </section>
            {/* end framework section */}

            {/* start testimonials section */}
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
                  Many Fortune 500 companies, startups, universities and
                  governmental institutions love Creative Tim&apos;s products.
                </Typography>
              </div>
              <div className="items-center flex flex-wrap mt-10">
                <div className="w-full md:w-1/2 lg:w-1/3 md:px-4">
                  <TestimonialCard name="Nick Willever" date="1 day ago">
                    &quot;This is an excellent product, the documentation is
                    excellent and helped me get things done more
                    efficiently.&quot;
                  </TestimonialCard>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 md:px-4">
                  <TestimonialCard
                    color="blue"
                    name="Shailesh Kushwaha"
                    date="1 week ago"
                  >
                    &quot;I found solution to all my design needs from Creative
                    Tim. I use them as a freelancer in my hobby projects for
                    fun! And its really affordable, very humble guys !!!&quot;
                  </TestimonialCard>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 md:px-4">
                  <TestimonialCard name="Samuel Kamuli" date="3 weeks ago">
                    &quot;Great product. Helped me cut the time to set up a
                    site. I used the components within instead of starting from
                    scratch. I highly recommend for developers who want to spend
                    more time on the backend!.&quot;
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
            {/* end testimonials section */}

            {/* start community section */}
            <section className="md:pt-12 pb-64">
              <div className="w-full md:w-3/4 mx-auto text-[#1A237E] text-center">
                <Typography
                  variant="h2"
                  color="inherit"
                  className="!font-sans font-black mb-4"
                >
                  Join our comumunity
                </Typography>
                <Typography color="inherit" className="text-lg opacity-60">
                  Since Tailwind CSS is an open source project, we want to
                  continue this movement too.
                </Typography>
              </div>
              <div className="items-center flex flex-wrap mt-14">
                <div className="w-full md:w-1/3 px-4">
                  <FeatureCard
                    title="Github"
                    icon=""
                    iconClass="fab fa-github"
                    className="shadow-2xl shadow-blue-grey-500/[0.12]"
                  >
                    Material Tailwind comes with a huge number of Fully Coded
                    CSS components.
                  </FeatureCard>
                </div>
                <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
                  <FeatureCard
                    title="Discord"
                    icon=""
                    iconClass="fab fa-discord"
                    className="shadow-2xl shadow-blue-grey-500/[0.12]"
                  >
                    Material Tailwind comes with a huge number of Fully Coded
                    CSS components.
                  </FeatureCard>
                </div>
                <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
                  <FeatureCard
                    title="Twitter"
                    icon=""
                    iconClass="fab fa-twitter"
                    className="shadow-2xl shadow-blue-grey-500/[0.12]"
                  >
                    Material Tailwind comes with a huge number of Fully Coded
                    CSS components.
                  </FeatureCard>
                </div>
              </div>
            </section>
            {/* end community section */}
          </div>
          <img
            className="absolute w-full bottom-0 md:-bottom-52"
            src="/img/pre-footer.png"
            alt="bubbles"
          />
        </Card>
      </main>
      {/* start subscribe section */}
      <div
        className="w-4/5 md:w-3/5 rounded-xl -mt-28 mx-auto z-90 relative"
        style={{ backgroundImage: "url('/img/subscribe.jpg')" }}
      >
        <div className="items-center flex flex-wrap p-5 md:p-10">
          <div className="w-full lg:w-6/12 px-4">
            <Typography
              variant="h2"
              color="white"
              className="!font-sans font-black tracking-normal mb-2"
            >
              Sign up for our newsletter
            </Typography>
            <Typography color="white" className="opacity-80">
              Join our newsletter and get news in your inbox every week! We hate
              spam too, so no worries about this.
            </Typography>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="block md:flex mt-4 lg:mt-0">
              <div className="w-full md:w-8/12">
                <Input
                  type="email"
                  label="Enter your email"
                  size="lg"
                  className="text-white/80"
                  labelProps={{
                    className:
                      "peer-placeholder-shown:text-white/80 text-white/80"
                  }}
                />
              </div>
              <Button
                variant="gradient"
                className="mt-3 md:mt-0 md:ml-3 w-full md:w-auto"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* end subscribe section */}

      {/* start footer */}
      <Footer />
      {/* end footer */}
    </>
  );
}
