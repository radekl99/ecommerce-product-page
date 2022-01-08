import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ProductPhoto = (props) => {
  const { photos, activePhoto, previousPhoto, nextPhoto } = props;

  return (
    <div className="relative">
      <div
        className=" absolute bottom-1/2 left-5 translate-y-1/2 w-10 h-10 flex justify-center items-center bg-white rounded-full cursor-pointer lg:hidden"
        onClick={previousPhoto}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div
        className=" absolute bottom-1/2 right-5 translate-y-1/2 w-10 h-10 flex justify-center items-center bg-white rounded-full cursor-pointer lg:hidden"
        onClick={nextPhoto}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div>
        <div
          className=" bg-transparent lg:absolute w-full h-full cursor-pointer"
          onClick={props.onClick}
        ></div>
        <img src={photos[activePhoto]} alt="" className="md:rounded-xl" />
      </div>
    </div>
  );
};

export default ProductPhoto;
