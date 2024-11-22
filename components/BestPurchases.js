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
    name: "Machinery",
    icon: <FiCpu className="text-[#fff] text-3xl" />,
    active: true,
  },
  { name: "Cakes", icon: <FiGift className="text-[#87512F] text-3xl" /> },
];

const productData = [
  {
    category: "Electronics",
    title: "High Voltage Bones Cups - 12 Count",
    rating: 4.5,
    reviewCount: 120,
    price: 35000,
    imgUrl: "/mixi.png",
  },
  {
    category: "Electronics",
    title: "Smartphone XYZ",
    rating: 4.5,
    reviewCount: 120,
    price: 35000,
    imgUrl: "/product2.png",
  },
  {
    category: "NinjaTech",
    title: "Ninja CFP307 Specialty Coffee System",
    rating: 4.5,
    reviewCount: 120,
    price: 35000,
    imgUrl: "/filter.png",
  },
  {
    category: "Electronics",
    title: "High Voltage Bones Cups - 13 Count",
    rating: 4.5,
    reviewCount: 120,
    price: 35000,
    imgUrl: "/mixi.png",
  },
];

export default function BestPurchases() {
  return (
    <>
      <section className="my-8 bg-[#F3EEEA80] p-16">
        <h2 className="text-textPrimary font-bold text-2xl text-center">
          Best Purchases on Machinery
        </h2>
        <div className="my-6">
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
