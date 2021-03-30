import React from "react";
import Head from "next/head";

export default function Header({ title }) {
  return (
    <Head>
      {/* Canonical SEO */}
      <link
        rel="canonical"
        href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/quick-start"
      />
      {/* Open Graph data */}
      <meta
        property="og:url"
        content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/quick-start"
      />
      <title>{title} | Tailwind Starter Kit by Creative Tim</title>
    </Head>
  );
}
