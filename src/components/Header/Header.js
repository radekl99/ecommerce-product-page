import Logo from "../../images/logo.svg";
import Photo from "../../images/image-avatar.png";
import Nav from "../Nav/Nav";
import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <header className=" h-20 md:h-28 px-6 md:px-0 flex items-center justify-between font-kumbh w-screen md:w-9/12 md:border-b-2 md:border-light-grayish-blue">
      <div className=" h-full flex flex-row-reverse md:flex-row gap-4 md:gap-14 justify-center items-center">
        <img src={Logo} alt="logo" className="cursor-pointer" />
        <Nav />
      </div>
      <div className=" flex gap-6 md:gap-14 items-center">
        <Cart />
        <img
          src={Photo}
          alt="Profile"
          className=" w-8 md:w-14 rounded-full md:cursor-pointer md:hover:outline md:hover:outline-3 md:hover:outline-orange"
        />
      </div>
    </header>
  );
};

export default Header;
