import React, { useState } from "react";
import { IoMdMailOpen } from "react-icons/io";
import { Button } from "../elements/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { images } from "@/constants/images";
import useCover from "@/hooks/useCover";

const CoverComponent = ({ togglePlayPause }) => {
  const { data, state } = useCover(process.env.NEXT_PUBLIC_USER);
  const { open, setOpen } = state.open;

  return (
    <div
      className="fixed h-screen w-full transform transition-all ease-in-out duration-1000 z-50 bg-dark"
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
        {data?.covers?.map((image) => (
          <SwiperSlide key={image._id}>
            <div
              style={{
                backgroundImage: `url(${image?.url})`,
              }}
              className={`h-screen w-full bg-cover bg-center flex items-end justify-center`}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-black z-10"></div>
      <div className="absolute bottom-24 mx-auto w-full z-20 flex flex-col justify-center items-center">
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
          {process.env.NEXT_PUBLIC_NAME}
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
            variant="white"
            size="medium"
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
