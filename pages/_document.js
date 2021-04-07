import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
// ---------------------------------------------
export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en-US" style={{ scrollBehavior: 'smooth !important' }}>
        <Head>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KB2WKJS');`,
            }}
          ></script>
          {/* End Google Tag Manager */}
        </Head>
        <body className="text-gray-700 antialiased">
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              title="google-tag-manage"
              src="https://www.googletagmanager.com/ns.html?id=GTM-KB2WKJS"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
