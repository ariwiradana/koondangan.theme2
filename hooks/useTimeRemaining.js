import moment from "moment";
import React, { useEffect, useState } from "react";

const useTimeRemaining = (dateString) => {
  const targetDate = moment(dateString, "YYYY-MM-DD");
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = moment();
    const duration = moment.duration(targetDate.diff(now));
    return {
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return { timeRemaining, targetDate };
};

export default useTimeRemaining;
