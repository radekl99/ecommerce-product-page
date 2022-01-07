const NavItem = ({ children, navKey }) => {
  return (
    <li
      className="md:transition relative md:h-full flex items-center cursor-pointer text-very-dark-blue font-bold md:font-normal md:text-grayish-blue text-lg md:text-base md:hover:text-very-dark-blue md:before:absolute md:before:bottom-0 md:before:bg-orange md:before:h-1 md:before:w-0 md:hover:before:w-full md:before:transition"
      key={navKey}
    >
      {children}
    </li>
  );
};

export default NavItem;
