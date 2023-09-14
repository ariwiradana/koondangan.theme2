import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import moment from "moment";
import useTimeRemaining from "@/hooks/useTimeRemaining";
import { images } from "@/constants/images";
import useThumbnail from "@/hooks/useThumbnail";

const ThumbnailComponent = () => {
  const { timeRemaining, targetDate } = useTimeRemaining(
    process.env.NEXT_PUBLIC_DATE
  );
  const { data } = useThumbnail(process.env.NEXT_PUBLIC_USER);

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
        {data?.thumbnails?.map((image) => (
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
      <div className="absolute bottom-[20vh] mx-auto w-full z-20 flex flex-col justify-center items-center px-5">
        <h6
          data-aos="fade-up"
          data-aos-duration="2000"
          className="uppercase font-poppins text-white text-base tracking-[2px] font-extralight"
        >
          The Wedding Of
        </h6>
        <h3 className="font-analogue text-4xl text-white mt-4">
          {process.env.NEXT_PUBLIC_NAME}
        </h3>
        <div className="flex justify-center gap-x-8 my-8">
          <h6 className="font-poppins uppercase text-white text-sm tracking-[2px] font-extralight">
            Save The Date
          </h6>
          <h6 className="font-poppins uppercase text-white text-sm tracking-[2px] font-normal">
            {moment(targetDate).format("DD.MM.YYYY")}
          </h6>
        </div>
        <div className="grid grid-cols-4 gap-x-3 mt-2 border-y py-4 border-y-gray-400">
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
