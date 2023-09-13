import fetcher from "@/utils/fetcher";
import useSWR from "swr";

const useThumbnail = (user) => {
  const { data: thumbnails } = useSWR(`/api/thumbnail?user=${user}`, fetcher);

  const appData = {
    data: {
      thumbnails,
    },
  };

  return appData;
};

export default useThumbnail;
