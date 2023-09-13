import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import moment from "moment";
import useTimeRemaining from "@/hooks/useTimeRemaining";
import { images } from "@/constants/images";
import { eventDate } from "@/constants/date";

const ThumbnailComponent = () => {
  const { timeRemaining, targetDate } = useTimeRemaining(eventDate);
  return (
    <div className="h-screen w-full relative">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="fade"
        speed={5000}
        modules={[Autoplay, EffectFade]}
      >
        {images?.map((image) => (
          <SwiperSlide key={image.alt}>
            <div
              style={{
                backgroundImage: `url('${image.src}')`,
              }}
              className={`h-screen w-full bg-cover bg-center flex items-end justify-center`}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[#000000cc] z-10"></div>
      <div className="absolute bottom-[20vh] mx-auto w-full z-20 flex flex-col justify-center items-center px-5">
        <h6
          data-aos="fade-up"
          data-aos-duration="2000"
          className="uppercase font-poppins text-white text-base tracking-[2px] font-extralight"
        >
          The Wedding Of
        </h6>
        <h3 className="font-analogue text-4xl text-white mt-4">
          Putra & Putri
        </h3>
        <div className="flex justify-center gap-x-8 my-8">
          <h6 className="font-poppins uppercase text-white text-sm tracking-[2px] font-extralight">
            Save The Date
          </h6>
          <h6 className="font-poppins uppercase text-white text-sm tracking-[2px] font-normal">
            {moment(targetDate).format("DD.MM.YYYY")}
          </h6>
        </div>
        <div className="grid grid-cols-4 gap-x-3 mt-2 border-y py-4 border-y-white">
          <div className="text-center">
            <h6 className="font-poppins uppercase text-white text-sm tracking-[2px] font-normal">
              {timeRemaining.days}
            </h6>
            <h6 className="font-poppins text-white text-xs tracking-[2px] font-extralight">
              Days
            </h6>
          </div>
          <div className="text-center">
            <h6 className="font-poppins uppercase text-white text-sm tracking-[2px] font-normal">
              {timeRemaining.hours}
            </h6>
            <h6 className="font-poppins text-white text-xs tracking-[2px] font-extralight">
              Hours
            </h6>
          </div>
          <div className="text-center">
            <h6 className="font-poppins uppercase text-white text-sm tracking-[2px] font-normal">
              {timeRemaining.minutes}
            </h6>
            <h6 className="font-poppins text-white text-xs tracking-[2px] font-extralight">
              Minutes
            </h6>
          </div>
          <div className="text-center">
            <h6 className="font-poppins uppercase text-white text-sm tracking-[2px] font-normal">
              {timeRemaining.seconds}
            </h6>
            <h6 className="font-poppins text-white text-xs tracking-[2px] font-extralight">
              Seconds
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailComponent;
