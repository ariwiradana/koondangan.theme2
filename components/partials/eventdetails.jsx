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
    <div
      className={`min-h-screen bg-[url('/images/cover.webp')] relative w-full bg-cover bg-center`}
    >
      <div className="w-full h-full absolute inset-0 bg-dark bg-opacity-80 z-10"></div>
      <div className="py-14 relative z-20">
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
          position="left"
          btnMapTitle="Google Maps"
          mapUrl="https://google.com"
          address="Jalan Intan Permai Gang Berlian No. 12"
          time="15.00 - Selesai"
          title="Pawiwahan"
          date={detailsDate}
          images={images}
        />
        <EventDetailCard
          position="right"
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
