import Image from "next/image";
import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./button";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const PersonCard = ({
  position,
  images,
  name,
  parent,
  username,
  url,
  parentTitle,
}) => {
  const pos = {
    left: "justify-start items-start",
    right: "justify-end items-end",
  };
  const bgPosition = {
    left: "-bottom-8 -right-8",
    right: "-bottom-8 -left-8",
  };

  const dataAos = {
    left: "fade-right",
    right: "fade-left",
  };

  return (
    <div className={`flex flex-col w-full ${pos[position]}`}>
      <div
        className="relative w-[300px] h-[400px] flex justify-end"
        data-aos={dataAos[position]}
        data-aos-duration="3000"
      >
        <div className="w-full h-full relative z-[2] bg-cover">
          <div className="w-full h-full absolute inset-0 bg-transparent z-10"></div>
          <Swiper
            loop
            className="w-full h-full"
            freeMode
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: position == "right",
            }}
            speed={3000}
            modules={[Autoplay, FreeMode]}
          >
            {images?.map((image) => (
              <SwiperSlide key={image?._id}>
                <div className="w-[300px] h-[400px]">
                  <Image
                    alt={image?._id}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                    src={image?.url}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className={`w-full h-full bg-background absolute ${bgPosition[position]}`}
        ></div>
      </div>
      <div className={`mt-16 px-8 flex flex-col w-full ${pos[position]}`}>
        <h4
          className="font-light font-analogue text-3xl text-gray-600"
          data-aos={dataAos[position]}
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {name}
        </h4>
        <h6
          className="font-poppins font-light text-dark text-sm leading-7 mt-4"
          data-aos={dataAos[position]}
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          {parentTitle}
        </h6>
        <h6
          className="font-poppins font-normal text-dark text-sm mb-6"
          data-aos={dataAos[position]}
          data-aos-duration="1000"
          data-aos-delay="900"
        >
          {parent}
        </h6>
        <div
          className={`flex items-center gap-x-4 w-full ${pos[position]}`}
          data-aos={dataAos[position]}
          data-aos-duration="1000"
          data-aos-delay="1200"
        >
          <Link href={url || ""}>
            <Button
              icon={<FaInstagram />}
              size="small"
              variant="primary"
              title={username}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
