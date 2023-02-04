import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link
      href={href}
      className=" px-3 text-red-400 hover:bg-cyan-700 "
    >
      {text}
    </Link>
  );
};

export default NavItem;
