import fetcher from "@/utils/fetcher";
import React, { useState } from "react";
import useSWR from "swr";

const useCover = (user) => {
  const { data: covers } = useSWR(`/api/image?user=${user}&type=cover`, fetcher);

  const [open, setOpen] = useState(false);

  const appData = {
    state: {
      open: { open, setOpen },
    },
    data: {
      covers,
    },
  };

  return appData;
};

export default useCover;
