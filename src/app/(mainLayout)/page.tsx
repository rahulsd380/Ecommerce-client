"use client";
import { ICONS, IMAGES } from "@/assets";
import AppBanner from "@/components/home/AppBanner";
import Hero from "@/components/home/Hero";
import Card from "@/components/home/homeCard";
import ReusableBanner from "@/components/home/ReusableBanner";
import FeatureProductCard from "@/components/shared/FeatureProducts/FeatureProducts";
import ProductCard from "@/components/shared/FeatureProducts/FeatureProducts";
import FreatureProductComponent from "@/components/shared/FeatureProducts/FreatureProductCoponent";
import { StaticImageData } from "next/image";

// Define the types for card data
type CardData = {
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
};

export default function Home() {
  const cardData: CardData[] = [
    { imageSrc: ICONS.icon1, title: "Best Prices & Deals", description: "Don’t miss our daily amazing deals and prices" },
    { imageSrc: ICONS.icon2, title: "Refundable ", description: "If your items have damage we agree to refund it" },
    { imageSrc: ICONS.icon3, title: "Free delivery", description: "Do purchase over $50 and get free delivery anywhere" },
  ];

  return (
    <div className="">
      <Hero />
      <div className="sm:flex justify-between sm:space-x-4 p-10 lg:px-40  py-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      
      <div className="lg:flex gap-4 p-10 justify-center">
        <ReusableBanner
          badgeText="Limited Time Offer"
          title="20% Off on Fresh Produce"
          description="Get fresh groceries delivered to your door."
          buttonText="Order Now"
          buttonUrl="/shop"
          imageSrc={IMAGES.banner1}
          imageAlt="Person holding groceries"
          overlayColor="#FFF5E1D9" 
          backgroundImage="/path-to-background.jpg"
        />
        <ReusableBanner
          badgeText="Limited Time Offer"
          title="Organic Food"
          description="Save up to 60% off on your first order"
          buttonText="Order Now"
          buttonUrl="/shop"
          imageSrc={IMAGES.banner2}
          imageAlt="Person holding groceries"
          overlayColor="#D2EFE1D9"
          backgroundImage="/path-to-background.jpg"
        />
      </div>
      <FreatureProductComponent />
      <AppBanner/>
    </div>
  );
}
