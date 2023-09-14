import { useEffect } from "react";
import AOS from "aos";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>The Wedding of {process.env.NEXT_PUBLIC_NAME}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
