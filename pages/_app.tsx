import Script from "next/script";
import "../styles/globals.css";

import { ThemeProvider } from "../packages/material-tailwind-react/src/context/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Script src="https://kit.fontawesome.com/42d5adcbca.js" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
