"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0C0C0C] p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl text-[#984AE7] font-bold">Blogger</div>
        <div className="md:hidden">
          <button
            type="button"
            className="text-[#984AE7] hover:text-purple-200 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`flex flex-col md:flex-row md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/" className="text-[#984AE7] hover:text-purple-200 py-2 md:py-0">Home</Link>
          <Link href="/about" className="text-[#984AE7] hover:text-purple-200 py-2 md:py-0">About Me</Link>
          <Link href="/stories" className="text-[#984AE7] hover:text-purple-200 py-2 md:py-0">Stories</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
