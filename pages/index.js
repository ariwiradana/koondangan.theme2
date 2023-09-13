import ButtonMusic from "@/components/elements/button.music";
import CoverComponent from "@/components/partials/cover";
import ThumbnailComponent from "@/components/partials/thumbnail";
import usePlayMusic from "@/hooks/usePlayMusic";
import React from "react";

const Home = () => {
  const { audioRef, isPlaying, togglePlayPause } = usePlayMusic();
  return (
    <>
      <ButtonMusic
        audioRef={audioRef}
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
      />
      <CoverComponent togglePlayPause={togglePlayPause} />
      <ThumbnailComponent />
    </>
  );
};

export default Home;
