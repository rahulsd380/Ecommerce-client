import { IMAGES } from '@/assets';
import Image, { StaticImageData } from 'next/image';

interface ReusableBannerProps {
  badgeText?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  overlayColor?: string | null;
  backgroundImage?: string | StaticImageData;
}

const ReusableBanner: React.FC<ReusableBannerProps> = ({
  badgeText = "Free delivery",
  title = "Free delivery over $50",
  description = "Shop $50 product and get free delivery anywhere.",
  buttonText = "Shop Now",
  buttonUrl = "/shop",
  imageSrc = "/default-image.png",
  imageAlt = "Banner Image",
  overlayColor = null,
  backgroundImage = IMAGES.home_bg,
}) => {
  const backgroundImageUrl =
    typeof backgroundImage === 'string' ? backgroundImage : backgroundImage?.src;

  return (
    <div
      className="relative w-full md:order-2 shadow-lg mb-5 flex flex-col md:flex-row"
      style={{
        backgroundColor: overlayColor || "transparent", // Set background color dynamically
      }}
    >
      {/* Image */}
      <div className="relative w-full md:order-1 h-[300px] md:h-[400px] lg:h-full md:w-1/2 flex-shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-sm"
        />
      </div>

      {/* Content */}
      <div className="relative justify-start z-10 flex-1 p-6 md:p-10 md:text-left">
        <span className="bg-yellow-200 text-yellow-800 text-sm font-semibold px-2 py-1 rounded-sm inline-block mb-2">
          {badgeText}
        </span>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-neutral-500 mb-4">{description}</p>
        <a
          href={buttonUrl}
          className="inline-block bg-primary-10 text-white font-semibold px-4 py-2 rounded-sm hover:bg-green-600 transition"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default ReusableBanner;
