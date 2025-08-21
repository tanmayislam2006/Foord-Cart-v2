import Footer from "@/Components/Footer/Footer";
import "./globals.css";
import { Open_Sans } from 'next/font/google';
import Navbar from "@/Components/Navbar/Navbar";

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: "Food Cart",
  description: "A delicious food cart experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} bg-gray-50`}>
        <Navbar />
        <main className="w-full min-h-[calc(100vh-100px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}