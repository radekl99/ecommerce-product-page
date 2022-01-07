import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleShowCart = () => {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  };

  return (
    <div className="relative">
      <FontAwesomeIcon
        icon={faShoppingCart}
        className=" transition cursor-pointer text-xl text-grayish-blue hover:text-very-dark-blue"
        onClick={toggleShowCart}
      />
      {showCart && (
        <div className="absolute top-12 -left-20 w-80 h-64 -translate-x-1/2 bg-white border-2 border-light-grayish-blue shadow-xl rounded-xl z-10 flex flex-col">
          <div className=" font-bold text-base p-5 border-b-2 border-light-grayish-blue">
            Cart
          </div>
          <div className="grow flex flex-col justify-center items-center text-dark-grayish-blue font-bold">
            Your cart is empty.
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
