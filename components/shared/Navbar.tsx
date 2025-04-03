import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/" className="flex items-end gap-1">
        <Image src="/forest.png" alt="logo" width={45} height={45} />
        <p className="text-3xl">Forest of Wisdom</p>
      </Link>
    </nav>
  );
};

export default Navbar;
