import fetcher from "@/utils/fetcher";
import useSWR from "swr";

const usePersons = (user) => {
  const { data: person } = useSWR(
    `/api/image?user=${user}&type=person`,
    fetcher
  );

  const appData = {
    data: {
      person,
    },
  };

  return appData;
};

export default usePersons;
