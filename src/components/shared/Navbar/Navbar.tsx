import { ICONS, IMAGES } from "@/assets";
import { Span } from "next/dist/trace";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white ">
      {/* Top Section */}
      <div className="hidden lg:flex justify-between px-10 items-center  pt-3 pb-2 border-b">
        <div className="flex items-center gap-2">
          {/* Navigation Links */}
          <nav className="flex gap-4">
            <Link
              href="/"
              className="text-neutral-30 hover:text-black font-medium text-xs"
            >
              About us
            </Link>
            <Link
              href="/"
              className="text-neutral-30 hover:text-black font-medium text-xs"
            >
              My Account
            </Link>
            <Link
              href="/"
              className="text-neutral-30 hover:text-black font-medium text-xs"
            >
              Wishlist
            </Link>
          </nav>
          <div>
            <p className="text-neutral-30 hover:text-black font-normal text-xs border-l-2 px-3">
              Delivery available everday between{" "}
              <span className="">7:00 to 23:00</span>{" "}
            </p>
          </div>
        </div>
        <div>
          <nav className="flex gap-3">
            <Link
              href="/"
              className=" gap-1 flex text-neutral-30 hover:text-black font-medium text-xs"
            >
              English
              <Image
                src={ICONS.downArrow}
                alt="Dropdown Icon"
                className="w-4 h-4 "
              />
            </Link>
            <Link
              href="/"
              className="gap-1 flex text-neutral-30 hover:text-black font-medium text-xs"
            >
              USD
              <Image
                src={ICONS.downArrow}
                alt="Dropdown Icon"
                className="w-4 h-4 "
              />
            </Link>
            <Link
              href="/"
              className="text-neutral-30 hover:text-black font-medium text-xs"
            >
              Order Tracking
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" hidden lg:flex mt-2 flex gap-3 items-center justify-between  px-10">
        {/* Logo */}
        <Link href={"/"} className="flex  items-center gap-3">
          <Image src={IMAGES.logo} alt="Shopfinity Logo" className="w-16" />
          <div>
            <h1 className="text-primary-10 font-Sora text-2xl font-bold">
              Shopfinity
            </h1>
            <h2 className="text-neutral-20 font-Inter text-xs">
              Find - Pick and Shop.
            </h2>
          </div>
        </Link>
        <div>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-primary-20  h-10 w-10 rounded-full flex items-center justify-center">
              <Image
                src={ICONS.location} // Replace with the path to your search icon
                alt="Search Icon"
                className="w-6 h-6 "
              />
            </div>
            <div>
              <p className="text-neutral-30 font-medium text-xs">Deliver to</p>
              <p className="text-black font-semibold text-xs">All</p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
  <input
    type="search"
    name="s"
    placeholder="Search for products, categories or brands..."
    autoComplete="off"
    className="form-control bg-secondary-10 w-full min-w-[300px] h-[48px] px-4 pr-10 py-2 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
  />
  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
    <Image
      src={ICONS.search} // Replace with the path to your search icon
      alt="Search Icon"
      className="w-5 h-5 text-gray-400"
    />
  </div>
</div>
        <div className="flex justify-between gap-6">
          <span className="flex flex-col justify-center items-center">
            <Image
              src={ICONS.profile} // Replace with the path to your search icon
              alt="Search Icon"
              className="w-6 h-6 text-gray-400"
            />
            <p className="text-black font-medium text-xs">
              Account
            </p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <Image
              src={ICONS.wishlist} // Replace with the path to your search icon
              alt="Search Icon"
              className="w-6 h-6 text-gray-400"
            />
            <p className="text-black font-medium text-xs">
              Wishlist
            </p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <Image
              src={ICONS.cart} // Replace with the path to your search icon
              alt="Search Icon"
              className="w-6 h-6 text-gray-400"
            />
            <p className="text-black font-medium text-xs">
              Your Cart
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
