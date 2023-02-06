import Link from "next/link";

const NavItem = ({ text, href }) => {
  return (
    <Link href={href} className="px-3 text-red-400 ">
      {text}
    </Link>
  );
};

export default NavItem;
