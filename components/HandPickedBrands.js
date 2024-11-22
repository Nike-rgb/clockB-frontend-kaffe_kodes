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
  { name: "Coffee", icon: <FiCoffee className="text-[#87512F] text-3xl" /> },
  {
    name: "Bakery",
    icon: <FiShoppingBag className="text-[#87512F] text-3xl" />,
  },
  { name: "Tea", icon: <FiDroplet className="text-[#87512F] text-3xl" /> },
  { name: "Utensils", icon: <FiTool className="text-[#87512F] text-3xl" /> },
  { name: "Machinery", icon: <FiCpu className="text-[#87512F] text-3xl" /> },
  { name: "Cakes", icon: <FiGift className="text-[#87512F] text-3xl" /> },
];

const productData = [
  {
    category: "Electronics",
    title: "High Voltage Bones Cups - 12 Count",
    rating: 4.5,
    reviewCount: 120,
    price: 35000,
    imgUrl: "/product_1.png",
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
    imgUrl: "/product4.png",
  },
  {
    category: "Electronics",
    title: "High Voltage Bones Cups - 13 Count",
    rating: 4.5,
    reviewCount: 120,
    price: 35000,
    imgUrl: "/product_1.png",
  },
  {
    category: "Electronics",
    title: "Smartphone XYZ high",
    rating: 4.5,
    reviewCount: 120,
    price: 35000,
    imgUrl: "/product2.png",
  },
  {
    category: "NinjaTech",
    title: "Ninja CFP307 Specialty Coffee Sistem",
    rating: 4.5,
    reviewCount: 120,
    price: 35000,
    imgUrl: "/product3.png",
  },
];

export default function HandPickedBrands() {
  return (
    <>
      <section className="my-8">
        <h2 className="text-textPrimary font-bold text-2xl text-center">
          Hand-Picked Brands
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
