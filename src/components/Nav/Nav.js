import NavItem from "../Nav/NavItem";
import Backdrop from "../Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="h-full flex">
      <div className=" flex items-center md:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className=" justify-self-center text-dark-grayish-blue text-2xl"
          onClick={() => setShowNav(true)}
        />
      </div>
      <div
        className={`transition-all fixed top-0 left-0 w-64 md:w-fit p-8 md:p-0 bg-white md:relative z-20 md:z-0 h-screen md:h-full flex flex-col gap-10 ${
          showNav ? " -translate-x-0" : "-translate-x-full"
        } md:-translate-x-0`}
      >
        {showNav && (
          <Backdrop className="fixed md:hidden" onClick={() => setShowNav(false)} />
        )}
        <FontAwesomeIcon
          icon={faTimes}
          className="text-xl text-dark-grayish-blue md:hidden"
          onClick={() => setShowNav(false)}
        />
        <ul className="flex flex-col md:flex-row items-start md:items-center md:h-full gap-5 md:gap-8 text-grayish-blue">
          <NavItem navKey={"nav-1"}>Collections</NavItem>
          <NavItem navKey={"nav-2"}>Men</NavItem>
          <NavItem navKey={"nav-3"}>Women</NavItem>
          <NavItem navKey={"nav-4"}>About</NavItem>
          <NavItem navKey={"nav-5"}>Contact</NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
