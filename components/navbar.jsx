import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar flex flex-col md:flex-row justify-between items-center bg-white p-4 mb-12">
      <div className="logo mb-4 md:mb-0">
        <img alt="Arjun homepage" src="./logo.png" className="h-12 md:h-auto" />
      </div>
      <nav className="nav flex gap-4 text-2xl">
        <Link href="/work">
          <span className="link" title="Projects">
            Projects
          </span>
        </Link>
        <Link href="/work">
          <span className="link" title="Projects">
            Projects
          </span>
        </Link>
        <Link href="/work">
          <span className="link" title="Projects">
            Projects
          </span>
        </Link>
        <Link href="/work">
          <span className="link" title="Projects">
            Projects
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
