import Logo from "../../images/logo.svg";
import { ReactComponent as Cart } from "../../images/icon-cart.svg";
import Photo from "../../images/image-avatar.png";
import NavItem from "../Nav/NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className=" h-28 flex items-center justify-between font-kumbh w-9/12 border-b-2 border-light-grayish-blue">
      <div className=" h-full flex gap-14 justify-center items-center">
        <img src={Logo} alt="logo" className="cursor-pointer" />
        <nav className="h-full">
          <ul className=" h-full flex items-center gap-8 text-grayish-blue">
            <NavItem>Collections</NavItem>
            <NavItem>Men</NavItem>
            <NavItem>Women</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Contact</NavItem>
          </ul>
        </nav>
      </div>
      <div className=" flex gap-14 items-center">
        <FontAwesomeIcon
          icon={faShoppingCart}
          className=" transition cursor-pointer text-xl text-grayish-blue hover:text-very-dark-blue"
        />
        <img
          src={Photo}
          alt="Profile"
          className=" w-14 cursor-pointer rounded-full hover:outline hover:outline-3 hover:outline-orange"
        />
      </div>
    </header>
  );
};

export default Header;
