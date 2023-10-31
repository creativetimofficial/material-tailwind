import { Html, Head, Main, NextScript } from "next/document";
import { FB_PIXEL_ID } from "../utils/fpixel";

export default function MyDocument() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="https://docs.material-tailwind.com/favicon.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://docs.material-tailwind.com/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://docs.material-tailwind.com/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://docs.material-tailwind.com/favicon.png"
        />
        <link
          rel="manifest"
          href="https://docs.material-tailwind.com/img/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="https://docs.material-tailwind.com/img/safari-pinned-tab.svg"
          color="#020617"
        />
        <meta name="msapplication-TileColor" content="#020617" />
        <meta name="theme-color" content="#ffffff" />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
        />
        <script
          defer
          data-domain="material-tailwind.com"
          src="https://plausible.io/js/script.js"
        />
        <script
          defer
          data-site="material-tailwind.com"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        />
      </Head>
      <body>
        <noscript>
          <iframe
            title="google-tag-manage"
            src="https://www.googletagmanager.com/ns.html?id=GTM-KB2WKJS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
