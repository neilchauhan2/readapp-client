import "../styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthProvider } from "../context/auth";
import { SWRConfig } from "swr";

import Navbar from "../components/Navbar";

import "../styles/icon.css";

const fetcher = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

axios.defaults.baseURL = "http://localhost:2000/api";
axios.defaults.withCredentials = true;
function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const authRoutes = ["/login", "/register"];
  const hideNavbar = authRoutes.includes(pathname);
  return (
    <SWRConfig
      value={{
        fetcher,
        dedupingInterval: 10000,
      }}
    >
      <AuthProvider>
        {!hideNavbar && <Navbar />}
        <div className={hideNavbar ? "" : "pt-12"}>
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </SWRConfig>
  );
}

export default MyApp;
