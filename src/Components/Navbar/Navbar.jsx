'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

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
        <ul className="flex gap-8 items-center">
          <li>
            <Link
              href="/"
              className={`font-semibold transition-colors hover:text-primary ${pathname === '/' ? 'text-primary' : 'text-gray-700'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className={`font-semibold transition-colors hover:text-primary ${pathname === '/menu' ? 'text-primary' : 'text-gray-700'}`}
            >
              All Menu
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`font-semibold transition-colors hover:text-primary ${pathname === '/about' ? 'text-primary' : 'text-gray-700'}`}
            >
              About
            </Link>
          </li>
          {session && (
            <li>
              <Link
                href="/dashboard"
                className={`font-semibold transition-colors hover:text-primary ${pathname === '/dashboard' ? 'text-primary' : 'text-gray-700'}`}
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>

        {/* Login/Logout Button */}
        <div className="flex items-center gap-4">
          {session ? (
            <>
              <span className="font-semibold">{session.user.name}</span>
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full font-bold transition-colors hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-bold transition-colors hover:bg-primary-dark"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-bold transition-colors hover:bg-gray-300"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
