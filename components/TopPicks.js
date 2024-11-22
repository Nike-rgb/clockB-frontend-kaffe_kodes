import Product from "@/ui/Product";

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
    imgUrl: "/product3.png",
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
];

export default function TopPicks() {
  return (
    <section className="my-6 bg-[#F3EEEA80] px-20 py-20">
      <h2 className="font-bold text-2xl">Top Picks</h2>
      <div className="flex mt-2 gap-6 justify-between">
        {productData.map((productInfo) => (
          <Product key={productInfo.title} {...productInfo} />
        ))}
      </div>
    </section>
  );
}
