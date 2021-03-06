import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ProductQuantity = (props) => {
  const { quantity, plus, minus } = props;

  return (
    <div className=" flex items-center justify-between lg:w-32 h-12 px-5 lg:px-2 bg-light-grayish-blue rounded-md font-bold">
      <FontAwesomeIcon
        icon={faMinus}
        className="text-orange cursor-pointer"
        onClick={minus}
      />
      <div>{quantity}</div>
      <FontAwesomeIcon
        icon={faPlus}
        className="text-orange cursor-pointer"
        onClick={plus}
      />
    </div>
  );
};

export default ProductQuantity;
