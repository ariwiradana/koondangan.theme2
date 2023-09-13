import React, { useRef, useState } from "react";

const usePlayMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  return { isPlaying, audioRef, togglePlayPause };
};

export default usePlayMusic;
