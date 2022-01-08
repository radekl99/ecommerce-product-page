import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ProductQuantity from "./ProductQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ProductThumbnail from "../../../images/image-product-1-thumbnail.jpg";

const ProductActions = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const plusHandler = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const minusHandler = () => {
    setQuantity((prevState) => (prevState === 0 ? prevState : prevState - 1));
  };

  const addToCartHandler = () => {
    if (quantity === 0) return;
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        src: ProductThumbnail,
        title: "Fall Limited Edition Sneakers",
        price: 125,
        quantity: quantity,
      },
    });
  };

  return (
    <div className=" flex flex-col lg:flex-row gap-3">
      <ProductQuantity
        quantity={quantity}
        plus={plusHandler}
        minus={minusHandler}
      />
      <div
        className=" cursor-pointer h-12 flex gap-3 justify-center items-center grow bg-orange text-white font-bold rounded-md shadow-add-to-cart shadow-orange hover:opacity-50"
        onClick={addToCartHandler}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        Add to cart
      </div>
    </div>
  );
};

export default ProductActions;
