import { Fragment, useEffect } from "react";

// next.js components
import Script from "next/script";

// @material-tailwind components
import { ThemeProvider } from "@material-tailwind/react";

// styles
import "/styles/globals.css";
import "@docsearch/css";

// import * as fbq from '../utils/fpixel'
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {  
  const router = useRouter()

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Fragment>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>

      {/* Global Site Code Pixel - Facebook Pixel */}
{/*       <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      /> */}

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
