import useDeviceType from "@/hooks/useDeviceType";
import useGallery from "@/hooks/useGallery";
import { useState } from "react";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const Gallery = () => {
  const { data } = useGallery(process.env.NEXT_PUBLIC_USER);
  const { deviceType } = useDeviceType();
  const [index, setIndex] = useState(-1);

  if (!data?.gallery) {
    return <></>;
  }

  const photos = data?.gallery.map((photo) => ({
    src: photo?.url,
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: photo?.url,
        width: breakpoint,
        height,
      };
    }),
  }));

  return (
    <>
      <div className="max-w-screen-lg mx-auto lg:py-12 p-5">
        <PhotoAlbum
          onClick={({ index }) => setIndex(index)}
          spacing={10}
          columns={deviceType === "Mobile" ? 2 : 3}
          photos={photos}
          layout="columns"
        />
      </div>
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Zoom]}
      />
    </>
  );
};

export default Gallery;
