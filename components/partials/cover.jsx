import React, { useState } from "react";
import { IoMdMailOpen } from "react-icons/io";
import { Button } from "../elements/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

const CoverComponent = ({ togglePlayPause, name }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="fixed h-screen w-full transform transition-all ease-in-out duration-1000 z-50"
      style={{
        bottom: open ? "100%" : 0,
        opacity: open ? 0 : 1,
      }}
    >
      <Swiper
        onSlideChange={(slide) => console.log(slide)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="fade"
        speed={5000}
        modules={[Autoplay, EffectFade]}
      >
        <SwiperSlide>
          <div className="h-screen w-full bg-[url('/images/cover.webp')] bg-cover bg-center flex items-end justify-center"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen w-full bg-[url('/images/cover2.webp')] bg-cover bg-center flex items-end justify-center"></div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black z-10"></div>
      <div className="absolute bottom-32 mx-auto w-full z-20 flex flex-col justify-center items-center">
        <h6
          data-aos="fade-up"
          data-aos-duration="2000"
          className="uppercase font-poppins text-white text-base tracking-[2px] font-extralight"
        >
          The Wedding Of
        </h6>
        <h3
          data-aos-delay="800"
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="font-analogue text-4xl text-white mt-4"
        >
          Putra & Putri
        </h3>
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1600"
        >
          <h6 className="font-poppins text-white text-base tracking-[2px] mt-8 font-extralight">
            Dear
          </h6>
          <h4 className="font-poppins text-white text-lg tracking-[1px] mb-8 font-light">
            Made Wira
          </h4>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          data-aos-delay="2200"
        >
          <Button
            onClick={() => {
              setOpen(true);
              togglePlayPause();
            }}
            icon={<IoMdMailOpen size={20} />}
            title="Open Invitation"
          />
        </div>
      </div>
    </div>
  );
};

export default CoverComponent;
