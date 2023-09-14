import React from "react";
import PersonCard from "../elements/person.card";
import { images } from "@/constants/images";
import useThumbnail from "@/hooks/useThumbnail";
import useCover from "@/hooks/useCover";

const Persons = () => {
  const { data: thumbnailImages } = useThumbnail(process.env.NEXT_PUBLIC_USER);
  const { data: coverImages } = useCover(process.env.NEXT_PUBLIC_USER);

  return (
    <div className="py-32 flex flex-col gap-y-24 max-w-md mx-auto w-full">
      <PersonCard
        username="ariwiradana"
        name="I Made Ari Wiradana"
        parentTitle="Anak pertama dari :"
        parent="I Wayan Darmayasa"
        images={thumbnailImages.thumbnails}
        position="left"
      />
      <PersonCard
        username="juliastuti"
        name="Ni Putu Juli Astuti"
        parentTitle="Anak pertama dari :"
        parent="I Wayan Darmayasa"
        images={coverImages.covers}
        position="right"
      />
    </div>
  );
};

export default Persons;
