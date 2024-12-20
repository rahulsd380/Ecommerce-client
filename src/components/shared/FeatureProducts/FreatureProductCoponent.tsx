import React from "react";
import ProductCard from "./FeatureProducts";

const FreatureProductComponent = () => {
  const products = [
    {
      imageUrl: "https://via.placeholder.com/150?text=Redish",
      category: "Vegetables",
      name: "Redish 500g",
      rating: 3,
      reviews: 3,
      author: "Mr.food",
      price: "2",
      originalPrice: "3.99",
    },
    {
      imageUrl: "https://via.placeholder.com/150?text=Tomato",
      category: "Vegetables",
      name: "Tomato 1kg",
      rating: 4,
      reviews: 4,
      author: "VeggieShop",
      price: "4",
      originalPrice: "5.99",
    },
  ];

  const handleAddToCart = () => {
    console.log("Product added to cart!");
  };

  return (
    <div className="p-10">
      <div className="flex justify-between">
        <p className="text-black font-quicksand text-[28px] sm:text-[32px] font-semibold leading-normal">
          Featured Products
        </p>
        <div className="hidden lg:flex flex-col  pt-3 px-10">
          <nav className="flex gap-4 justify-end">
            <span>All</span>
            <span>Fruits</span>
            <span>Vegetables </span>
            <span>Beverages </span>
          </nav>
        </div>
      </div>

      <div className="py-6 flex gap-3 overflow-x-scroll">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default FreatureProductComponent;
