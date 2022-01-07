import Backdrop from "../Backdrop/Backdrop";
import ProductPhoto from "../Photos/ProductPhoto";
import Thumbnails from "../Photos/Thumbnails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const Lightbox = (props) => {
  const { photos, thumbnails, initialPhoto } = props;

  const [activePhoto, setActivePhoto] = useState(initialPhoto);

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

  return (
    <div className="hidden md:flex fixed top-0 left-0 w-screen h-screen justify-center items-center z-20">
      <div className="w-96 flex flex-col gap-10 items-end">
        <FontAwesomeIcon
          icon={faTimes}
          className="transition text-xl text-white hover:text-orange cursor-pointer"
          onClick={props.closeLightbox}
        />
        <div className=" scale-110 relative">
          <div
            className=" absolute bottom-1/2 left-0 translate-y-1/2 -translate-x-1/2 w-10 h-10 flex justify-center items-center bg-white rounded-full cursor-pointer z-20 hover:text-orange"
            onClick={previousPhoto}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            className=" absolute bottom-1/2 right-0 translate-y-1/2 translate-x-1/2 w-10 h-10 flex justify-center items-center bg-white rounded-full cursor-pointer z-20 hover:text-orange"
            onClick={nextPhoto}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <ProductPhoto photos={photos} activePhoto={activePhoto} />
        </div>
        <Thumbnails
          thumbnails={thumbnails}
          setActivePhoto={setActivePhoto}
          activePhoto={activePhoto}
        />
      </div>
      <Backdrop onClick={props.closeLightbox} className="md:fixed" />
    </div>
  );
};

export default Lightbox;
