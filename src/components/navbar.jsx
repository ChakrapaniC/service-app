'use client';

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            {/* <Image src="/logo.png" alt="Logo" width={32} height={32} /> */}
            <span className="text-lg font-bold tracking-tight text-gray-900">Supersourcing</span>
          </div>
        </Link>

        <ul className="flex space-x-8 text-sm font-medium text-gray-700">
          {["Services", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href="/"
                className="relative group transition-all duration-200"
              >
                <span>{item}</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* <Link href="/get-started">
          <button className="bg-black hover:bg-gray-900 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-300">
            Get Started
          </button>
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
