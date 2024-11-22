import {
  FiCoffee,
  FiShoppingBag,
  FiDroplet,
  FiTool,
  FiCpu,
  FiGift,
} from "react-icons/fi";
import ItemsCarousel from "../ui/ItemsCarousel";

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
  { name: "Electic", icon: <FiTool className="text-[#87512F] text-3xl" /> },
];

export default function CategoryDisplay() {
  return (
    <>
      <section className="my-4">
        <ItemsCarousel categories={categoriesData} />
      </section>
    </>
  );
}
