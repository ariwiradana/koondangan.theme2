import React from "react";

export const Button = ({ title, icon, ...props }) => {
  return (
    <button
      {...props}
      className="font-poppins bg-white hover:scale-90 ease-in-out duration-500 transition-transform py-2 px-3 text-base font-normal flex justify-center gap-x-2 items-center"
    >
      {icon || ""}
      <span>{title}</span>
    </button>
  );
};
