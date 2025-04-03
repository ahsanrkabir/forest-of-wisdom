import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "@/components/shared/ThemeToggle";

const Navbar = () => {
  return (
    <header className="bg-background shadow-primary fixed z-50 flex h-20 w-full items-center justify-between px-3 sm:px-8">
      {/* LOGO */}
      <Link href="/" className="flex items-end gap-2">
        <Image
          src="/forest.png"
          height={30}
          width={30}
          alt="logo"
          className="rounded-full"
          priority
        />

        <h1 className="text-2xl leading-6 font-semibold max-sm:hidden">
          Forest of Wisdom
        </h1>
      </Link>

      {/* NAVIGATION */}
      <nav className="flex-between gap-5">
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
