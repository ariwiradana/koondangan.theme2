import fetcher from "@/utils/fetcher";
import { useState } from "react";
import useSWR from "swr";

const useGallery = (user) => {
  const { data: gallery } = useSWR(
    `/api/image?user=${user}&type=gallery`,
    fetcher
  );

  const appData = {
    state: {},
    data: {
      gallery,
    },
  };

  return appData;
};

export default useGallery;
