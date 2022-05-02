import Head from "next/head";
import Navbar from "pagesComponents/Navbar";
import Header from "pagesComponents/Header";
import FeatureCard from "../pagesComponents/Cards/FeatureCard";
import { Card, Typography } from "../packages/material-tailwind-react/src";

export default function Presentation() {
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
          <div className="container mx-auto z-20">
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
          </div>
        </Card>
      </main>
    </>
  );
}
