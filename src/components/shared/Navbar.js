"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Jamil.web
        </Link>
        <div className="space-x-6">
          <Link
            href="/products"
            className={
              pathname == "/products"
                ? "text-yellow-400 underline"
                : "text-white cursor-pointer hover:underline"
            }
          >
            Products
          </Link>
          <Link
            href="/login"
            className={
              pathname == "/login"
                ? "text-yellow-400 underline"
                : "text-white cursor-pointer hover:underline"
            }
          >
            Login
          </Link>
          <Link
            href="/gallery"
            className={
              pathname == "/gallery"
                ? "text-yellow-400 underline"
                : "text-white cursor-pointer hover:underline"
            }
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
