import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ProductQuantity = () => {
  return (
    <div className=" flex items-center justify-between md:w-32 h-12 px-5 md:px-2 bg-light-grayish-blue rounded-md font-bold">
      <FontAwesomeIcon icon={faMinus} className="text-orange cursor-pointer" />
      <div>{productQuantity}</div>
      <FontAwesomeIcon icon={faPlus} className="text-orange cursor-pointer" />
    </div>
  );
};

export default ProductQuantity;
