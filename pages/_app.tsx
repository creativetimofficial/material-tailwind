import Link from "next/link";
import { Fragment, useEffect } from "react";

// next.js components
import Script from "next/script";

// @material-tailwind components
import {
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  ThemeProvider,
  Card,
  Button,
} from "@material-tailwind/react";

// styles
import "/styles/globals.css";
import "@docsearch/css";

import * as fbq from "../utils/fpixel";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Fragment>
      <ThemeProvider>
        <Component {...pageProps} />
        <div className="fixed right-4 top-2/4 hidden -translate-y-2/4 lg:block">
          <Card
            shadow={true}
            className="group flex flex-col gap-1 border border-blue-gray-50 p-1.5"
          >
            <Link href="/docs/react/installation">
              <Button
                size="lg"
                color="white"
                variant="outlined"
                className="flex w-full items-center gap-2 px-2 py-2 text-gray-600 hover:border hover:border-blue-gray-50 hover:text-primary"
              >
                <img
                  src="https://docs.material-tailwind.com/img/logos/icon-react.svg"
                  alt="react-icon"
                  className="h-6 w-6"
                />
                <span className="mr-2 hidden font-bold group-hover:block">
                  React
                </span>
              </Button>
            </Link>
            <Link href="/docs/html/installation">
              <Button
                size="lg"
                color="white"
                variant="outlined"
                className="flex w-full items-center gap-2 px-2 py-2 text-gray-600 hover:border hover:border-blue-gray-50 hover:text-primary"
              >
                <img
                  src="https://docs.material-tailwind.com/svg/tailwind.svg"
                  alt="react-icon"
                  className="h-6 w-6"
                />
                <span className="mr-2 hidden font-bold group-hover:block">
                  Tailwind CSS
                </span>
              </Button>
            </Link>
            <Link href="/figma">
              <Button
                size="lg"
                color="white"
                variant="outlined"
                className="flex w-full items-center gap-2 px-2 py-2 text-gray-600 hover:border hover:border-blue-gray-50 hover:text-primary"
              >
                <img
                  src="https://docs.material-tailwind.com/img/icon-figma.svg"
                  alt="react-icon"
                  className="h-6 w-6"
                />
                <span className="mr-2 hidden font-bold group-hover:block">
                  Figma
                </span>
              </Button>
            </Link>
          </Card>
        </div>
      </ThemeProvider>

      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
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
      />

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
      <script
        defer
        chat-hash="j2rbsnzetxp03odoe7qxbwl"
        src="https://widget.galichat.com/gali-embeded.min.js"
      />
    </Fragment>
  );
}

export default MyApp;
