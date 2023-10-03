import { Fragment, useEffect } from "react";

// next.js components
import Script from "next/script";

// @material-tailwind components
import { ThemeProvider } from "@material-tailwind/react";

import { useRouter } from 'next/router'

// styles
import "/styles/globals.css";
import "@docsearch/css";

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('111649226022273') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])
  
  return (
    <Fragment>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KB2WKJS');
        `}
      </Script>
      <Script
        strategy="afterInteractive"
        src="https://unpkg.com/@popperjs/core@2.9.1/dist/umd/popper.min.js"
      />
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js"
      />
      <Script
        crossOrigin="anonymous"
        strategy="afterInteractive"
        src="https://kit.fontawesome.com/42d5adcbca.js"
      />
    </Fragment>
  );
}

export default MyApp;
