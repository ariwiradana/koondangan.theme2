import { useEffect } from "react";
import AOS from "aos";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
