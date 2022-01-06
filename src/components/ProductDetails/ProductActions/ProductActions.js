import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ProductQuantity from "./ProductQuantity";

const ProductActions = () => {
  return (
    <div className=" flex gap-3">
      <ProductQuantity />
      <div className=" cursor-pointer flex gap-3 justify-center items-center grow bg-orange text-white font-bold rounded-md shadow-add-to-cart shadow-orange hover:opacity-50">
        <FontAwesomeIcon icon={faShoppingCart} />
        Add to cart
      </div>
    </div>
  );
};

export default ProductActions;
