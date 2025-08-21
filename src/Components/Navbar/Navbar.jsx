'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-primary tracking-tight">
            Food Cart
          </span>
        </Link>
        
        {/* Navigation Links */}
        {/* We're simplifying the list to just the basic public-facing routes. */}
        <ul className="flex gap-8 items-center">
          <li>
            <Link
              href="/"
              // We check if the current pathname is '/' to style the 'Home' link.
              className={`font-semibold transition-colors hover:text-primary ${pathname === '/' ? 'text-primary' : 'text-gray-700'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              // We check if the current pathname is '/menu' to style the 'Menu' link.
              className={`font-semibold transition-colors hover:text-primary ${pathname === '/menu' ? 'text-primary' : 'text-gray-700'}`}
            >
              All Menu
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              // We check if the current pathname is '/about' to style the 'About' link.
              className={`font-semibold transition-colors hover:text-primary ${pathname === '/about' ? 'text-primary' : 'text-gray-700'}`}
            >
              About
            </Link>
          </li>
        </ul>

        {/* Login Button */}
        {/* This is a simple login button without any conditional rendering for a logged-in state. */}
        <Link 
          href="/login" 
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-bold transition-colors hover:bg-primary-dark"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
