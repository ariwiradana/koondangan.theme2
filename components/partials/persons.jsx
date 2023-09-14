import React from "react";
import PersonCard from "../elements/person.card";
import usePersons from "@/hooks/usePersons";

const Persons = () => {
  const { data } = usePersons(process.env.NEXT_PUBLIC_USER);

  console.log({ data });
  return (
    <div className="py-32 flex md:grid md:grid-cols-2 flex-col max-w-screen-md mx-auto gap-y-24 w-full">
      <PersonCard
        username="ariwiradana"
        name="I Made Ari Wiradana"
        parentTitle="Anak pertama dari :"
        parent="I Wayan Darmayasa"
        images={data.firstPerson}
        position="left"
      />
      <PersonCard
        username="juliastuti"
        name="Ni Putu Juli Astuti"
        parentTitle="Anak pertama dari :"
        parent="I Wayan Darmayasa"
        images={data.secondPerson}
        position="right"
      />
    </div>
  );
};

export default Persons;
