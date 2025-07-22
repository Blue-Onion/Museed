import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="mx-auto container">
      <nav className="w-full px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl">
          <div className="text-white font-bold text-xl">Museed</div>
        </Link>
        <div className="text-white">Login</div>
      </nav>
    </header>
  );
};

export default Navbar;
