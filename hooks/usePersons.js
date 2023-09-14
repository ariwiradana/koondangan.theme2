import fetcher from "@/utils/fetcher";
import useSWR from "swr";

const usePersons = (user) => {
  const { data: person } = useSWR(
    `/api/image?user=${user}&type=person`,
    fetcher
  );

  let firstPerson;
  let secondPerson;

  if (person) {
    if (person.length > 1) {
      const splitIndex = Math.floor(person.length / 2);
      firstPerson = person.slice(0, splitIndex);
      secondPerson = person.slice(splitIndex);
    } else {
      firstPerson = secondPerson = person;
    } 
  }

  const appData = {
    data: {
      person,
      firstPerson,
      secondPerson,
    },
  };

  return appData;
};

export default usePersons;
