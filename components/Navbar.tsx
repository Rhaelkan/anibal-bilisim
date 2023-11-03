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
        <div className="space-x-8 flex items-center max-lg:hidden">
          <Link
            href="/"
            className="text-gray-500 hover:text-white duration-150"
          >
            Features
          </Link>
          <Link href="/" className="text-purple-500 flex items-start">
            AI
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
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
