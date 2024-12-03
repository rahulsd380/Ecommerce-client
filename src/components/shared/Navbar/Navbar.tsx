import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white">
      {/* Top Section */}
      <div className="hidden lg:flex justify-between px-10 items-center pt-3 pb-2 border-b">
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

      {/* Optional Bottom Section */}
      <div className=" mt-2">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-3">
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
      </div>
    </div>
  );
};

export default Navbar;
