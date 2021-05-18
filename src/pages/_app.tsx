import "../styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:2000/api";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
