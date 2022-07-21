import { ThemeProvider } from "styled-components";

import { Theme } from "../styles/Theme";
import { Global } from "styles/Global";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      <div>
        <ul>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </ul>
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
