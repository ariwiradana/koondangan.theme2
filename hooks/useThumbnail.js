import fetcher from "@/utils/fetcher";
import useSWR from "swr";

const useThumbnail = (user) => {
  const { data: thumbnails } = useSWR(`/api/image?user=${user}&type=thumbnail`, fetcher);

  const appData = {
    data: {
      thumbnails,
    },
  };

  return appData;
};

export default useThumbnail;
