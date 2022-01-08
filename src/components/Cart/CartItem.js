import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { src, title, price, quantity } = props;

  const dispatch = useDispatch();

  const total = quantity * price;

  return (
    <div className=" flex h-12 justify-between items-center font-normal">
      <img src={src} alt="" className=" rounded-md w-12" />
      <div className="flex flex-col justify-between">
        <div className=" text-sm">{title}</div>
        <div>
          ${price} x {quantity}{" "}
          <span className=" text-very-dark-blue font-bold">${total}</span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <FontAwesomeIcon
          icon={faTrashAlt}
          className=" cursor-pointer hover:text-orange"
          onClick={() => {
            dispatch({ type: "REMOVE_FROM_CART" });
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
