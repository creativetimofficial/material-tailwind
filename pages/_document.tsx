/* eslint-disable @next/next/no-script-in-document */
/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
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
          <link rel="shortcut icon" href="/img/favicon.png" type="image/png" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
            crossOrigin="anonymous"
          />
        </Head>
        <body className="bg-grey-100 antialiased">
          <Main />
          <NextScript />
          <script
            src="https://unpkg.com/material-ripple-effects/ripple.js"
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: process.env.rawJsFromFile }}
          />
          {/* <Script src="/material-tailwind-html.js" /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
