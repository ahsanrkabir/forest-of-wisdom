import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/" className="flex items-end gap-1">
        <Image src="/forest.png" alt="logo" width={40} height={40} />
        <p className="h2-bold">Forest of Wisdom</p>
      </Link>
    </nav>
  );
};

export default Navbar;
