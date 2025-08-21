import React from 'react';
import Link from 'next/link'; // Import the Link component
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary/5">
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Brand & Copyright */}
                <div className="text-center md:text-left">
                    <span className="text-2xl font-extrabold text-primary tracking-tight">FOODCART</span>
                    <p className="text-gray-500 text-sm mt-1">
                        &copy; {new Date().getFullYear()} Foodcart. All rights reserved.
                    </p>
                </div>
                {/* Links */}
                <div className="flex gap-6">
                    {/* Use the <Link> component for internal navigation */}
                    <Link href="/" className="text-gray-600 text-sm hover:text-primary transition">Home</Link>
                    <Link href="/menu" className="text-gray-600 text-sm hover:text-primary transition">Menu</Link>
                    <Link href="/about" className="text-gray-600 text-sm hover:text-primary transition">About</Link>
                    <Link href="/contact" className="text-gray-600 text-sm hover:text-primary transition">Contact</Link>
                </div>
                {/* Socials */}
                <div className="flex gap-4">
                    {/* External links do not need the Link component */}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl">
                        <FaFacebookF />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;