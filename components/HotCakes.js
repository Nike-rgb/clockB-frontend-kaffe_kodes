import ItemsCarousel from "@/ui/ItemsCarousel";
import Product from "@/ui/Product";
import {
  FiCoffee,
  FiCpu,
  FiDroplet,
  FiGift,
  FiShoppingBag,
  FiTool,
} from "react-icons/fi";

const categoriesData = [
  {
    name: "Utensils",
    icon: <FiTool className="text-[#fff] text-3xl" />,
    active: true,
  },
  { name: "Machinery", icon: <FiCpu className="text-[#87512F] text-3xl" /> },
  { name: "Cakes", icon: <FiGift className="text-[#87512F] text-3xl" /> },
];

const productData = [
  {
    category: "Kaffe Kodes",
    title: "Bento Cake: A Small Bite Packed with Big...",
    rating: 4.5,
    reviewCount: 120,
    price: 35000,
    imgUrl: "/brownie.png",
  },
  {
    category: "Kaffe Kodes",
    title: "Bento Brownie: A Small Bite Packed with Big.",
    rating: 4.5,
    reviewCount: 120,
    price: 35000,
    imgUrl: "/product2.png",
  },
  {
    category: "Kaffe Kodes",
    title: "White Forest cake: A Small Bite Packed with..",
    rating: 4.5,
    reviewCount: 120,
    price: 35000,
    imgUrl: "/brownie.png",
  },
  {
    category: "Electronics",
    title: "Bento Brownie: A Small Bite Packed with Big white",
    rating: 4.5,
    reviewCount: 120,
    price: 35000,
    imgUrl: "/product3.png",
  },
  {
    category: "Electronics",
    title: "Smartphone XYZ high",
    rating: 4.5,
    reviewCount: 120,
    price: 35000,
    imgUrl: "/brownie.png",
  },
];

export default function HotCakes() {
  return (
    <>
      <section className="my-8">
        <h2 className="text-textPrimary font-bold text-2xl text-center">
          Hot Cakes
        </h2>
        <div className="my-8">
          <ItemsCarousel categories={categoriesData} />
        </div>

        <div className="flex gap-6 justify-between px-20">
          {productData.map((productInfo) => (
            <Product key={productInfo.title} {...productInfo} />
          ))}
        </div>
      </section>
    </>
  );
}
