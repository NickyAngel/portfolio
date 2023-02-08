import Link from "next/link";

const NavItem = ({ text, href }) => {
  return (
    <Link href={href} className="px-3 dark:text-sky-700 text-sky-800">
      {text}
    </Link>
  );
};

export default NavItem;
