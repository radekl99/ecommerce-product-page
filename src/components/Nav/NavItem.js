const NavItem = ({ children, navKey }) => {
  return (
    <li
      className="lg:transition relative lg:h-full flex items-center cursor-pointer text-very-dark-blue font-bold lg:font-normal lg:text-grayish-blue text-lg lg:text-base lg:hover:text-very-dark-blue lg:before:absolute lg:before:bottom-0 lg:before:bg-orange lg:before:h-1 lg:before:w-0 lg:hover:before:w-full lg:before:transition"
      key={navKey}
    >
      {children}
    </li>
  );
};

export default NavItem;
