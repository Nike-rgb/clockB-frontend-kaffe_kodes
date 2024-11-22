"use client";
"use client";
import { useState } from "react";
import Product from "@/ui/Product";

const FeaturedProduct = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const products = [
    {
      category: "Chocolate",
      title: "Brownie with Mint Leaves",
      rating: 4.5,
      reviewCount: 250,
      price: "150",
      imgUrl: "/brownie.png",
    },
    {
      category: "Chocolate",
      title: "Brownie with Mint Leaves",
      rating: 4.5,
      reviewCount: 250,
      price: "150",
      imgUrl: "/brownie.png",
    },
    {
      category: "Chocolate",
      title: "Brownie with Mint Leaves",
      rating: 4.5,
      reviewCount: 250,
      price: "150",
      imgUrl: "/brownie.png",
    },
    {
      category: "Chocolate",
      title: "Brownie with Mint Leaves",
      rating: 4.5,
      reviewCount: 250,
      price: "150",
      imgUrl: "/brownie.png",
    },
  ];

  const handleArrowClick = (direction) => {
    if (direction === "prev") {
      setCurrentPage((prev) => (prev === 0 ? 2 : prev - 1));
    } else {
      setCurrentPage((prev) => (prev === 2 ? 0 : prev + 1));
    }
  };

  return (
    <section className="flex items-center h-[860px] justify-between py-16">
      <div className="w-1/3 h-full relative bg-[url('/almonds.png')]"></div>

      <div className="w-2/3 bg-[#F0F7F0] px-16 flex flex-col gap-8">
        <h2 className="text-3xl text-center mt-10 font-bold text-gray-800 mb-6">
          Exclusive Brownie
        </h2>

        <div className="flex gap-8 py-8">
          {products
            .slice(currentPage * 2, currentPage * 2 + 2)
            .map((product, index) => (
              <Product
                containerWidth={"w-auto"}
                key={index}
                {...product}
                imageClass={"w-[382px]"}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
