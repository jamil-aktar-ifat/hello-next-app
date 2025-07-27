import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Jamil.web
        </Link>
        <div className="space-x-6">
          <Link href="/about" className="hover:text-gray-200">
            About me
          </Link>
          <Link href="/contact" className="hover:text-gray-200">
            Contact me
          </Link>
          <Link href="/login" className="hover:text-gray-200">
            Login
          </Link>
          <Link href="/register" className="hover:text-gray-200">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
