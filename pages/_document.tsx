/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KB2WKJS');`
            }}
          />
          {/* End Google Tag Manager */}
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/img/favicon.png" type="image/png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/img/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/img/favicon-16x16.png"
          />
          <link rel="manifest" href="/img/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color="#2d89ef"
          />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
            crossOrigin="anonymous"
          />
          <script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous"></script>
          <link href="/css/choices.css" rel="stylesheet"/>
        </Head>
        <body className="bg-grey-100 antialiased">
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              title="google-tag-manage"
              src="https://www.googletagmanager.com/ns.html?id=GTM-KB2WKJS"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
          <script
            src="https://unpkg.com/material-ripple-effects/ripple.js"
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: process.env.rawJsFromFile }}
          />
           <script src="https://unpkg.com/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
           
           {/* Choices JavaScript (latest)  */}
          <script src="https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js"></script>
          <script src="/material-tailwind-html.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
