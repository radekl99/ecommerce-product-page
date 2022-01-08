import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((state) => state.cart);

  const { quantity, price, src, title } = cart;

  const toggleShowCart = () => {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <FontAwesomeIcon
          icon={faShoppingCart}
          className=" transition cursor-pointer text-xl text-grayish-blue hover:text-very-dark-blue"
          onClick={toggleShowCart}
        />
        {quantity !== 0 && (
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-orange text-xs text-white font-bold w-5 flex justify-center items-center rounded-lg">
            {quantity}
          </div>
        )}
      </div>
      {showCart && (
        <div className="absolute top-12 -left-20 w-80 h-56 -translate-x-1/2 bg-white border-2 border-light-grayish-blue shadow-xl rounded-xl z-10 flex flex-col">
          <div className=" font-bold text-base p-5 border-b-2 border-light-grayish-blue">
            Cart
          </div>
          <div className="grow flex flex-col justify-center items-center text-dark-grayish-blue font-bold">
            {!quantity && "Your cart is empty."}
            {quantity && (
              <div className=" grow p-5 flex flex-col justify-between w-full">
                <CartItem
                  title={title}
                  src={src}
                  price={price}
                  quantity={quantity}
                />
                <div className="h-12 bg-orange text-white flex justify-center items-center rounded-md cursor-pointer hover:opacity-50">
                  Checkout
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
