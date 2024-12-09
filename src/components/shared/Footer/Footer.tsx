import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-secondary-10 py-10 text-sm font-sans px-16">
      <div className="py-5 md:flex gap-16">
      <div className="flex items-center flex-1 ">
          <div className="relative flex-grow">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2  focus:outline-none  focus:ring-green-400focus:ring-2"
            />
            <span className="absolute top-1/2 right-2 transform -translate-y-1/2 text-red-500 text-sm"></span>
          </div>
          <button className="bg-primary-10 hover:bg-primary-20 text-white font-medium py-2 px-4 ">
            Subscribe
          </button>
        </div>
        <div>
        <div className="flex items-center hidden sm:flex  gap-3 w-48">
          <Image
            src={IMAGES.logo}
            alt="Shopfinity Logo"
            className="w-10 sm:w-16 ml-4 sm:ml-0"
          />
          <div className="sm:flex-col">
            <h1 className="text-primary-10 font-Sora text-xl sm:text-2xl font-bold">
              Shopfinity
            </h1>
            <h2 className="text-neutral-20 font-Inter text-[8px] sm:text-xs">
              Find - Pick and Shop.
            </h2>
          </div>
        </div>
        </div>
      </div>
      <div className="max-w-full  sm:flex gap-4 justify-between md:space-x-1 border-t border-b border-neutral-30  py-10  lg:space-y-0">
        {/* Help Section */}
        <div className="max-w-[250px] mb-6 ">
          <h3 className="mb-3 text-lg font-bold">Do You Need Help?</h3>
          <p className="mb-4 text-gray-600">
            Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nyna.
            Pressa fåmoska.
          </p>
          <p className="mb-2">
            <span className="block font-bold">Monday-Friday: 08am-9pm</span>
            <span className="text-2xl">0 444 300-353</span>
          </p>
          <p>
            <strong>Need help with your order?</strong>
            <br />
            <a href="mailto:info@example.com" className="text-sm ">
              info@example.com
            </a>
          </p>
        </div>
        <div className="lg:flex gap-5">
          {/* Make Money Section */}
          <div className="flex-1 min-w-[180px] mb-4">
            <h3 className="mb-3 text-sm font-bold">Make Money with Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Sell on Grogin</li>
              <li>Sell Your Services on Grogin</li>
              <li>Sell on Grogin Business</li>
              <li>Sell Your Apps on Grogin</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Sell-Publish with Us</li>
              <li>Become an Blowwe Vendor</li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="flex-1 min-w-[180px] mb-4">
            <h3 className="mb-3 text-sm font-bold">Let Us Help You</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Accessibility Statement</li>
              <li>Your Orders</li>
              <li>Returns & Replacements</li>
              <li>Shipping Rates & Policies</li>
              <li>Refund and Returns Policy</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Cookie Settings</li>
              <li>Help Center</li>
            </ul>
          </div>

          {/* About Section */}
          <div className="flex-1 min-w-[140px] mb-4">
            <h3 className="mb-3 text-sm font-bold">Get to Know Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Careers for Grogin</li>
              <li>About Grogin</li>
              <li>Investor Relations</li>
              <li>Grogin Devices</li>
              <li>Customer Reviews</li>
              <li>Social Responsibility</li>
              <li>Store Locations</li>
            </ul>
          </div>
          {/* App Download and Social Links */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="mb-3 text-sm font-bold">Download our app</h3>
            <div className="flex items-center space-x-4 mb-4">
              <a href="#" className="flex items-center space-x-2">
                <Image
                  src={IMAGES.playStore}
                  alt="Google Play"
                  className="w-full h-8"
                />
                <span className="text-gray-600 text-xs">
                  Download App Get -10% Discount
                </span>
              </a>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <a href="#" className="flex items-center space-x-2">
                <Image
                  src={IMAGES.appStore}
                  alt="App Store"
                  className="w-full h-8"
                />
                <span className="text-gray-600 text-xs">
                  Download App Get -20% Discount
                </span>
              </a>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-2">
                Follow us on social media:
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-primary-10 h-9 w-9 rounded-full flex justify-center items-center"
                >
                  <Image src={ICONS.fb} alt="fb" />
                </a>
                <a
                  href="#"
                  className="bg-primary-10 h-9 w-9 rounded-full flex justify-center items-center"
                >
                  <Image src={ICONS.linkedin} alt="fb" />
                </a>
                <a
                  href="#"
                  className="bg-primary-10 h-9 w-9 rounded-full flex justify-center items-center"
                >
                  <Image src={ICONS.insta} alt="fb" />
                </a>
                <a
                  href="#"
                  className="bg-primary-10 h-9 w-9 rounded-full flex justify-center items-center"
                >
                  <Image src={ICONS.twittter} alt="fb" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="py-5 sm:flex justify-between">
        <div >
          <div className=" font-normal text-base pb-4">
            Copyright 2024 © Grogin WooCommerce WordPress Theme. All right
            reserved.
            
          </div>
          <div>
            <Image src={IMAGES.paymentOption} alt="" className="h-9 w-60"/>
          </div>
          </div>
          <div className="md:flex gap-4">
            <p className=" hover:underline font-semibold text-sm ">Terms and Conditions</p>
            <p className=" hover:underline font-semibold text-sm">Privacy Policy</p>
            <p className=" hover:underline font-semibold text-sm">Order Tracking</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
