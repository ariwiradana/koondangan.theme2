import fetcher from "@/utils/fetcher";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const useCover = (user) => {
  const { data: covers } = useSWR(
    `/api/image?user=${user}&type=cover`,
    fetcher
  );

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.remove("no-scroll");
    } else {
      window.scrollTo(0, 0);
      document.body.classList.add("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

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
