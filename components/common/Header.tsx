import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="fixed t-0 w-full z-10">
      <header className="flex justify-between items-center bg-black text-white h-16 px-side">
        <Link href="/" className="flex items-center logo">
          <img className="w-52" src="/assets/svg/logo.svg" alt="" />
        </Link>
        <ul className="links hidden xl:flex justify-between items-center font-semibold plus-jarkata text-sm tracking-wider">
          <Link href="/blog">
            <li className="uppercase ml-8">Blog</li>
          </Link>
          <Link href="/about">
            <li className="uppercase ml-8">About COC</li>
          </Link>
          <Link href="/contact">
            <li className="uppercase ml-8">Reach Us</li>
          </Link>
          {/* <li className="uppercase ml-8">Visit Us</li> */}
          <Link href="/gallery">
            <li className="uppercase ml-8">Gallery</li>
          </Link>
        </ul>
        <i
          onClick={() => setOpenNav(!openNav)}
          className={`fas xl:hidden ${openNav ? "fa-times" : "fa-bars"}`}
        ></i>
      </header>
      {openNav && (
        <div className="mobile-nav">
          <ul className="bg-black text-white">
            <Link href="/blog">
              <li className="uppercase px-side py-3 border-t border-gray-100">
                Blog
              </li>
            </Link>
            <Link href="/about">
              <li className="uppercase px-side py-3 border-t border-gray-100">
                About COC
              </li>
            </Link>
            <Link href="/contact">
              <li className="uppercase px-side py-3 border-t border-gray-100">
                Reach Us
              </li>
            </Link>
            {/* <li className="uppercase px-side py-3 border-t border-gray-100">
              Visit Us
            </li> */}
            <Link href="/gallery">
              <li className="uppercase px-side py-3 border-t border-gray-100">
                Gallery
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
