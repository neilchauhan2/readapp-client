import "../styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import { useRouter } from "next/router";

import Navbar from "../components/Navbar";

import "../styles/icon.css";

axios.defaults.baseURL = "http://localhost:2000/api";
axios.defaults.withCredentials = true;
function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const authRoutes = ["/login", "/register"];
  const hideNavbar = authRoutes.includes(pathname);
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
