import moment from "moment";
import React, { useEffect, useState } from "react";

const useTimeRemaining = (dateString) => {
  const [targetDate] = useState(moment(dateString));
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      const timeDiff = targetDate.diff(now);

      if (timeDiff <= 0) {
        clearInterval(intervalId);
        return;
      }

      const duration = moment.duration(timeDiff);
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetDate]);

  return { timeRemaining, targetDate };
};

export default useTimeRemaining;
