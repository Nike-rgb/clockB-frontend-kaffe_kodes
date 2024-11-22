import Link from "next/link";
import { FiHeart, FiShoppingBag, FiSearch } from "react-icons/fi";
import { FaCoffee } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-2 bg-white shadow-md">
      <div className="flex gap-16 items-center w-1/2">
        <div className="mr-8">
          <Image
            src="/kafee_logo.svg"
            alt="Kafee Kodes Logo"
            className="w-[116px] aspect-auto"
            width={116}
            height={100}
          />
        </div>

        <ul className="flex gap-6 space-x-8">
          {["Brand", "Offers", "Buying Guide", "Gifts"].map((item) => (
            <li key={item} className="text-textPrimary text-lg cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center pl-32 justify-between w-1/2 space-x-6">
        <div className="relative w-3/5">
          <input
            type="text"
            placeholder="Search on Kafee Kodes"
            className="w-full pl-10 pr-4 py-2 rounded-full border bg-[#28353D0A] text-[#28353D80] text-base border-gray-300 focus:outline-none focus:border-gray-500"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        <FiHeart className="text-textPrimary text-2xl cursor-pointer hover:text-gray-900" />

        <FiShoppingBag className="text-textPrimary text-2xl cursor-pointer hover:text-gray-900" />

        <button className="bg-brand text-white px-4 py-2 rounded-full cursor-pointer">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
