'use client';
import Link from 'next/link';
import Button from './common/button';

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-white/70 border-b border-white/30 shadow-sm shadow-blue-100/50 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-3 cursor-pointer group">
            {/* Logo Icon */}
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
              Nicetech Inc
            </span>
          </div>
        </Link>
        
        {/* Navigation Links */}
        <ul className="flex space-x-10 text-sm font-medium">
          {["Services", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href="/"
                className="relative group py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white/50 hover:backdrop-blur-sm"
              >
                <span className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300 font-medium">
                  {item}
                </span>
                
                {/* Animated underline */}
                <span className="absolute left-4 -bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-[calc(100%-2rem)] transition-all duration-500 ease-out rounded-full"></span>
                
                {/* Hover glow effect */}
                <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 transition-opacity duration-300 -z-10"></span>
              </Link>
            </li>
          ))}
        </ul>
        
         <Button href="/get-started">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;