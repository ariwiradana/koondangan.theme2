import React from "react";
import PersonCard from "../elements/person.card";
import { images } from "@/constants/images";

const Person = () => {
  return (
    <div className="py-24 flex flex-col gap-y-24 max-w-md mx-auto">
      <PersonCard
        username="ariwiradana"
        name="I Made Ari Wiradana"
        parentTitle="Anak pertama dari :"
        parent="I Wayan Darmayasa"
        images={images}
        position="left"
      />
      <PersonCard
        username="juliastuti"
        name="Ni Putu Juli Astuti"
        parentTitle="Anak pertama dari :"
        parent="I Wayan Darmayasa"
        images={images}
        position="right"
      />
    </div>
  );
};

export default Person;
