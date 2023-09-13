import React from "react";

export const Button = ({ title, icon, variant, size, ...props }) => {
  const variants = {
    primary: "bg-dark text-white",
    white: "bg-white text-dark",
    outlined: "bg-transparent text-dark border border-dark"
  };
  const sizes = {
    small: "py-1 px-3 text-sm font-extralight",
    medium: "py-2 px-3 text-base font-normal",
  };
  return (
    <button
      {...props}
      className={`font-poppins hover:scale-90 ease-in-out duration-500 transition-transform flex justify-center gap-x-2 items-center ${variants[variant]} ${sizes[size]}`}
    >
      {icon || ""}
      <span>{title}</span>
    </button>
  );
};
