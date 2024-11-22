"use client";
import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const Product = ({
  category,
  title,
  rating,
  reviewCount,
  price,
  imgUrl,
  imageClass,
  containerWidth,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleHeartClick = () => {
    setIsLiked((prev) => !prev);
  };

  const filledStars = Array(Math.floor(rating)).fill(true);
  const emptyStars = Array(5 - Math.floor(rating)).fill(false);

  return (
    <div
      className={`flex flex-col justify-between ${
        containerWidth ?? "w-[240px]"
      }`}>
      <div
        onClick={handleHeartClick}
        className="self-end mb-6 text-xl cursor-pointer">
        {isLiked ? (
          <FaHeart className="text-red-600" />
        ) : (
          <FiHeart className="text-textLight" />
        )}
      </div>

      <Image
        src={imgUrl}
        alt={title}
        width={300}
        height={300}
        className={
          "w-[133px] self-center aspect-auto object-cover rounded-lg mb-4 " +
          imageClass
        }
      />
      <span className="text-sm text-gray-500 uppercase">{category}</span>
      <h3 className="text-lg text-gray-800 mt-2">{title}</h3>
      <div className="flex items-center gap-1 mt-2">
        {filledStars.map((_, index) => (
          <FaStar key={`filled-${index}`} className="text-[#FF7A00] text-xs" />
        ))}

        {emptyStars.map((_, index) => (
          <FaStar key={`empty-${index}`} className="text-[#97979780] text-xs" />
        ))}
        <span className="text-xs text-textLight ml-2">({reviewCount})</span>
      </div>
      <div className="text-md text-textPrimary mt-4">
        NPR <span className="text-lg">{price}</span>
      </div>
    </div>
  );
};

export default Product;
