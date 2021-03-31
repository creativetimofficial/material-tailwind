import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Header({ title }) {
  const router = useRouter();
  return (
    <Head>
      {/* Canonical SEO */}
      <link
        rel="canonical"
        href={"https://material-tailwind.com" + router.pathname}
      />
      {/* Open Graph data */}
      <meta
        property="og:url"
        content={"https://material-tailwind.com" + router.pathname}
      />
      <title>{title} | Material Tailwind by Creative Tim</title>
    </Head>
  );
}
