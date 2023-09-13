import React from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";

const ButtonMusic = ({ isPlaying, audioRef, togglePlayPause }) => {
  return (
    <>
      <audio ref={audioRef} src="/music/music.mp3" />
      <div className="bottom-5 right-5 z-50 fixed">
        <button onClick={togglePlayPause}>
          {isPlaying ? (
            <BsPauseFill className="text-dark bg-white h-9 w-9 rounded-full border-4 hover:border-white hover:text-white hover:bg-dark border-gray-300 flex justify-center items-center p-1 transition-colors ease-in-out duration-500" />
          ) : (
            <BsPlayFill className="text-dark bg-white h-9 w-9 rounded-full border-4 hover:border-white hover:text-white hover:bg-dark border-gray-300 flex justify-center items-center p-1 transition-colors ease-in-out duration-500" />
          )}
        </button>
      </div>
    </>
  );
};

export default ButtonMusic;
