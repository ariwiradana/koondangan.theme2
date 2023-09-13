import ButtonMusic from "@/components/elements/button.music";
import CoverComponent from "@/components/partials/cover";
import EventDetails from "@/components/partials/eventdetails";
import Person from "@/components/partials/person";
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
      <Person />
      <EventDetails />
    </>
  );
};

export default Home;
