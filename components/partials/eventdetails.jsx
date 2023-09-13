import { images } from "@/constants/images";
import moment from "moment";
import React from "react";
import EventDetailCard from "../elements/eventdetails.card";
import useThumbnail from "@/hooks/useThumbnail";

const EventDetails = () => {
  const detailsDate = moment(process.env.NEXT_PUBLIC_DATE);

  const { data } = useThumbnail(process.env.NEXT_PUBLIC_USER);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="bg-[url('/images/cover.webp')] relative w-full bg-cover bg-center"
    >
      <div className="w-full h-full absolute inset-0 bg-dark bg-opacity-80 z-10"></div>
      <div className="py-14 relative z-20">
        <div
          className="flex items-center gap-x-8 mb-4 max-w-md mx-auto"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
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
          position="right"
          btnMapTitle="Google Maps"
          mapUrl="https://google.com"
          address="Jalan Intan Permai Gang Berlian No. 12"
          time="15.00 - Selesai"
          title="Resepsi"
          date={detailsDate}
          images={data?.thumbnails}
        />
      </div>
    </div>
  );
};

export default EventDetails;
