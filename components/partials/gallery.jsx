import useDeviceType from "@/hooks/useDeviceType";
import useGallery from "@/hooks/useGallery";
import { PhotoAlbum } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const Gallery = () => {
  const { data } = useGallery(process.env.NEXT_PUBLIC_USER);
  const { deviceType } = useDeviceType();

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
    <div className="max-w-screen-lg mx-auto lg:py-12 p-5">
      <PhotoAlbum
        spacing={10}
        columns={deviceType === "Mobile" ? 2 : 3}
        photos={photos}
        layout="columns"
      />
    </div>
  );
};

export default Gallery;
