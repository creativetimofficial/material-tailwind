import React from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Heading from "components/Documentation/Heading";
import SmallHeading from "components/Documentation/SmallHeading";

export default function WhatIsTailwindCSS() {
  return (
    <>
      <Header title="What is Tailwind CSS" />
      <Navbar />
      <Container>
        <Heading
          title="What is Tailwind CSS"
          description="A utility-first CSS framework for rapidly building custom designs."
        />
        <SmallHeading
          title="Tailwind"
          description="Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override."
        />

        <div className="h-10">&nbsp;</div>

        <SmallHeading
          title="Responsive to the core"
          description={
            <>
              Every Tailwind utility also comes with responsive variants, making
              it extremely easy to build responsive interfaces without resorting
              to custom CSS.
              <br />
              <br />
              Tailwind uses an intuitive screen: prefix that makes it easy to
              notice responsive classes in your markup while keeping the
              original class name recognizable and intact.
            </>
          }
        />

        <div className="h-10">&nbsp;</div>

        <SmallHeading
          title="Component-friendly"
          description={
            <>
              While you can do a lot with just utility classes, as a project
              grows it can be useful to codify common patterns into higher level
              abstractions.
              <br />
              <br />
              Tailwind provides tools for extracting component classes from
              repeated utility patterns, making it easy to update multiple
              instances of a component from one place.
            </>
          }
        />

        <div className="h-10">&nbsp;</div>

        <SmallHeading
          title="Designed to be customized"
          description={
            <>
              If it makes sense to be customizable, Tailwind lets you customize
              it. This includes colors, border sizes, font weights, spacing
              utilities, breakpoints, shadows, and tons more.
              <br />
              <br />
              Tailwind is written in PostCSS and configured in JavaScript, which
              means you have the full power of a real programming language at
              your fingertips.
              <br />
              <br />
              Tailwind is more than a CSS framework, it’s an engine for creating
              design systems.
            </>
          }
        />

        <div className="h-10">&nbsp;</div>

        <SmallHeading
          title="A simple Tailwind CSS Component"
          description="Here is a small stats card sample code:"
        />

        <SyntaxHighlighter language="html" style={a11yDark}>
          {`<figure class="bg-gray-100 rounded-xl p-8">
    <img class="w-32 h-32 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
    <div class="pt-6 text-center space-y-4">
        <blockquote>
            <p class="text-lg font-semibold">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
            </p>
        </blockquote>
        <figcaption class="font-medium">
            <div class="text-cyan-600">Sarah Dayan</div>
            <div class="text-gray-500">Staff Engineer, Algolia</div>
        </figcaption>
    </div>
</figure>`}
        </SyntaxHighlighter>

        <div className="h-10">&nbsp;</div>

        <SmallHeading
          title="Tutorials"
          description={
            <>
              Check out more on the official{" "}
              <a
                className="text-light-blue-500"
                href="https://tailwindcss.com/?ref=material-tailwind"
                target="_blank"
              >
                Tailwind CSS website.
              </a>
              <div className="my-4" />
              Also, you can check out the official{" "}
              <a
                className="text-light-blue-500"
                href="https://tailwindcss.com/docs/installation?ref=material-tailwind"
                target="_blank"
              >
                Tailwind CSS Tutorials.
              </a>
            </>
          }
        />
      </Container>
    </>
  );
}
