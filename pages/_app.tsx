import Script from "next/script";
import "../styles/globals.css";

import { ThemeProvider } from "../packages/material-tailwind-react/src/context/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
