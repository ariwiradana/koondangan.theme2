import Image from "next/image";
import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidMap, BiSolidTimeFive } from "react-icons/bi";
import { Button } from "./button";
import { BsMapFill } from "react-icons/bs";
import Link from "next/link";

const EventDetailCard = ({
  title,
  images,
  date,
  time,
  address,
  mapUrl,
  btnMapTitle,
  position,
}) => {
  const positions = {
    rounded: {
      left: "rounded-tr-[100px]",
      right: "rounded-tl-[100px]",
    },
    flex: {
      left: "flex-row",
      right: "flex-row-reverse",
    },
    title: {
      left: "-rotate-90",
      right: "rotate-90",
    },
  };
  const dataAos = {
    left: "fade-right",
    right: "fade-left",
  };

  return (
    <div
      className="p-8 max-w-md mx-auto relative"
    >
      <Swiper
        loop
        noSwiping={true}
        allowTouchMove={false}
        className={`w-full h-full overflow-hidden ${positions.rounded[position]}`}
        freeMode
        autoplay={{
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay, FreeMode]}
      >
        {images?.map((image) => (
          <SwiperSlide key={image?._id}>
            <div className="w-full h-[200px] relative">
              <Image
                alt={image?._id}
                width={300}
                height={300}
                className="object-cover w-full h-full grayscale-0"
                src={image?.url}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`flex ${positions.flex[position]}`}>
        <div className="bg-dark flex justify-center items-center max-w-[60px]">
          <h4
            className={`${positions.title[position]} text-white font-analogue text-3xl`}
          >
            {title}
          </h4>
        </div>
        <div className="w-full bg-background p-5">
          <div className="flex items-center gap-x-4 border-b border-b-dark pb-4 justify-center">
            <h4 className="font-analogue text-7xl text-dark">
              {date.format("D")}
            </h4>
            <div>
              <h4 className="font-poppins font-light text-dark text-base tracking-wider">
                {date.format("dddd")}
              </h4>
              <h4 className="font-poppins font-light text-dark text-base tracking-wider">
                {date.format("MMMM")}
              </h4>
              <h4 className="font-poppins font-light text-dark text-base tracking-wider">
                {date.format("YYYY")}
              </h4>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mt-6">
            <div className="flex gap-x-2 items-start">
              <BiSolidTimeFive className="text-dark min-w-[20px] mt-[2px]" />
              <p className="font-poppins text-sm font-light text-dark">
                {time}
              </p>
            </div>
            <div className="flex gap-x-2 items-start">
              <BiSolidMap className="text-dark min-w-[20px] mt-[2px]" />
              <p className="font-poppins text-sm font-light text-dark">
                {address}
              </p>
            </div>
            <div className="mt-4">
              <Link target="_blank" href={mapUrl || ""}>
                <Button
                  icon={<BiSolidMap className="text-white" />}
                  title={btnMapTitle}
                  size="small"
                  variant="primary"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailCard;
