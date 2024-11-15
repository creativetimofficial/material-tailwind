import "./globals.css";
import "@docsearch/css";
import * as React from "react";
import { Docs } from "@components";
import Providers from "./providers";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <Script
        id="gtm-script"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, s, l, i) {
                  w[l] = w[l] || []
                  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
                  const f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : ""
                  j.async = true
                  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
                  f.parentNode.insertBefore(j, f)
                })(window,document,'script','dataLayer',"GTM-KB2WKJS")`,
        }}
      />
      <body className="h-screen w-screen bg-background">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KB2WKJS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Providers>
          <React.Suspense>
            <Docs>{children}</Docs>
          </React.Suspense>
        </Providers>
      </body>
    </html>
  );
}
