import React, { useEffect, useState } from "react";

function useDeviceType() {
  const [deviceType, setDeviceType] = useState(""); // State to store the device type

  useEffect(() => {
    function getDeviceType() {
      const screenWidth = window.innerWidth;

      switch (true) {
        case screenWidth <= 767:
          return "Mobile";
        case screenWidth <= 1023:
          return "Tablet";
        default:
          return "Desktop";
      }
    }

    // Update the device type when the window is resized
    function handleResize() {
      const newDeviceType = getDeviceType();
      setDeviceType(newDeviceType);
    }

    // Initial device type check
    const initialDeviceType = getDeviceType();
    setDeviceType(initialDeviceType);

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return { deviceType };
}

export default useDeviceType;
