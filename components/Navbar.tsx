"use client";

import navbarLogo from "@/public/annibal-navbar-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-3 z-50 w-full px-3 lg:top-6">
      <div
        className={`w-full lg:max-w-5xl mx-auto py-2 px-4 rounded-full flex items-center justify-between ${
          scrolling && "bg-zinc-800 bg-opacity-80 backdrop-blur-lg"
        }`}
      >
        <Image
          src={navbarLogo}
          alt="navbar logo"
          width={32}
          className={`${!scrolling && "animate-bounce"}`}
        />
        <div className="space-x-6 max-lg:hidden">
          <Link
            href="/"
            className="text-gray-500 hover:text-white duration-150"
          >
            Features
          </Link>
          <Link
            href="/"
            className="text-gray-500 hover:text-white duration-150"
          >
            AI
          </Link>
          <Link
            href="/"
            className="text-gray-500 hover:text-white duration-150"
          >
            Resources
          </Link>
          <Link
            href="/"
            className="text-gray-500 hover:text-white duration-150"
          >
            Community
          </Link>
          <Link
            href="/"
            className="text-gray-500 hover:text-white duration-150"
          >
            Customers
          </Link>
          <Link
            href="/"
            className="text-gray-500 hover:text-white duration-150"
          >
            Examples
          </Link>
          <Link
            href="/"
            className="text-gray-500 hover:text-white duration-150"
          >
            Pricing
          </Link>
        </div>
        <div className="space-x-2 max-lg:hidden">
          <button className="bg-zinc-800 bg-opacity-10 border border-zinc-700 text-gray-400 rounded-full px-5 py-2 hover:text-white duration-150">
            Log In
          </button>
          <button className="bg-zinc-600 text-white rounded-full px-5 py-2.5 font-semibold">
            Get Started
          </button>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-zinc-800 bg-opacity-50 p-2 rounded-full group lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-400 group-hover:text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="p-6 bg-zinc-800 bg-opacity-80 backdrop-blur-lg absolute right-7 top-16 rounded-xl w-[208px] flex flex-col space-y-4 text-sm lg:hidden">
          <Link
            href="/"
            className="text-gray-400 hover:text-white duration-150"
          >
            Features
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-white duration-150"
          >
            All Prompt
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-white duration-150"
          >
            AI Style Transfer
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-white duration-150"
          >
            Examples
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-white duration-150"
          >
            Pricing
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-white duration-150"
          >
            Customers
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-white duration-150"
          >
            Download
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-white duration-150"
          >
            Spline Community
          </Link>
          <button className="py-2 px-6 bg-blue-500 bg rounded-full text-white font-semibold hover:bg-blue-600 duration-150">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
