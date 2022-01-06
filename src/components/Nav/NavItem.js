const NavItem = ({ children }) => {
  return (
    <li className="transition relative h-full flex items-center cursor-pointer hover:text-very-dark-blue before:absolute before:bottom-0 before:bg-orange before:h-1 before:w-0 hover:before:w-full before:transition">
      {children}
    </li>
  );
};

export default NavItem;
