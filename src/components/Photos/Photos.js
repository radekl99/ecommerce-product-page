import ProductPhoto from "./ProductPhoto";
import Thumbnails from "./Thumbnails";
import { useState } from "react";
import Lightbox from "../Lightbox/Lightbox";

const Photos = (props) => {
  const { photos, thumbnails, initialPhoto } = props;

  const [activePhoto, setActivePhoto] = useState(initialPhoto);
  const [showLightbox, setShowLightbox] = useState(false);

  const nextPhoto = () => {
    if (activePhoto + 1 > photos.length - 1) {
      setActivePhoto(0);
    } else {
      setActivePhoto(activePhoto + 1);
    }
  };

  const previousPhoto = () => {
    if (activePhoto - 1 < 0) {
      setActivePhoto(photos.length - 1);
    } else {
      setActivePhoto(activePhoto - 1);
    }
  };

  const closeLightboxHandler = () => {
    setShowLightbox(false);
  };

  return (
    <div className="relative flex flex-col gap-5 w-screen md:w-96">
      <ProductPhoto
        photos={photos}
        activePhoto={activePhoto}
        nextPhoto={nextPhoto}
        previousPhoto={previousPhoto}
        onClick={() => setShowLightbox(true)}
      />
      <Thumbnails
        thumbnails={thumbnails}
        setActivePhoto={setActivePhoto}
        activePhoto={activePhoto}
      />
      {showLightbox && (
        <Lightbox
          photos={photos}
          thumbnails={thumbnails}
          initialPhoto={activePhoto}
          closeLightbox={closeLightboxHandler}
        />
      )}
    </div>
  );
};

export default Photos;
