import { eventDate } from "@/constants/date";
import { images } from "@/constants/images";
import moment from "moment";
import React from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import EventDetailCard from "../elements/eventdetails.card";

const EventDetails = () => {
  const detailsDate = moment(eventDate);

  return (
    <div className="w-full h-full relative z-[2] bg-cover">
      <div className="w-full h-full absolute inset-0 bg-dark bg-opacity-50 z-10"></div>
      <Swiper
        loop
        className="w-full h-full"
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={8000}
        modules={[Autoplay, EffectFade]}
      >
        {images?.map((image) => (
          <SwiperSlide key={image?.alt}>
            <div
              style={{
                backgroundImage: `url('${image.src}')`,
              }}
              className={`h-screen w-full bg-cover grayscale bg-center flex items-end justify-center`}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 z-30 py-14">
        <div className="flex items-center gap-x-8 mb-4">
          <div className="pl-8">
            <h3 className="font-analogue text-white text-4xl italic font-light">
              Wedding
            </h3>
            <h3 className="font-creattion text-white text-5xl italic -mt-2">
              Event
            </h3>
          </div>
          <div className="w-full border-b border-b-background"></div>
        </div>
        <EventDetailCard
          btnMapTitle="Google Maps"
          mapUrl="https://google.com"
          address="Jalan Intan Permai Gang Berlian No. 12"
          time="15.00 - Selesai"
          title="Resepsi"
          date={detailsDate}
          images={images}
        />
      </div>
    </div>
  );
};

export default EventDetails;
