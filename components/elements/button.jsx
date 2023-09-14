import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const Button = ({ title, icon, variant, size, loading, ...props }) => {
  const variants = {
    primary: "bg-dark text-white",
    white: "bg-white text-dark",
    outlined: "bg-transparent text-dark border border-dark",
  };
  const sizes = {
    small: "h-7 px-3 text-sm font-extralight",
    medium: "h-10 px-3 text-base font-normal",
  };
  const loadingClass =
    "cursor-not-allowed pointer-events-none bg-opacity-50 hover:scale-100";

  return (
    <button
      {...props}
      className={`font-poppins hover:scale-90 ease-in-out min-w-[80px] duration-500 transition-transform flex justify-center gap-x-2 items-center ${
        variants[variant]
      } ${sizes[size]} ${loading && loadingClass}`}
    >
      {loading ? (
        <>
          <CircularProgress
            size={16}
            sx={{
              color: "#fff",
            }}
          />
        </>
      ) : (
        <>
          {icon || ""}
          <span>{title}</span>
        </>
      )}
    </button>
  );
};
