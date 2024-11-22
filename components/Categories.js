const Categories = () => {
  const categoriesData = [
    {
      img: "/cat_1.png",
      title: "Beverages",
      subtitle: "Refreshing drinks for everyone",
      btnText: "Shop Now",
      width: "w-full",
      height: "h-72",
    },
    {
      img: "/cat2.png",
      title: "Snacks",
      subtitle: "Delicious snacks to munch on",
      btnText: "Shop Now",
      width: "w-full",
      height: "h-72",
    },
    {
      img: "/cat3.png",
      title: "Fruits",
      subtitle: "Fresh fruits for a healthy life",
      btnText: "Shop Now",
      width: "w-full",
      height: "h-72",
    },
    {
      img: "/cat4.png",
      title: "Vegetables",
      subtitle: "Organic vegetables for you",
      btnText: "Shop Now",
      width: "w-full",
      height: "h-72",
    },
    {
      img: "/cat5.png",
      title: "Desserts",
      subtitle: "Sweet treats to satisfy your cravings",
      btnText: "Shop Now",
      width: "w-full",
      height: "h-72",
    },
  ];

  return (
    <section className="px-20 my-8">
      <h2 className="font-bold text-textPrimary text-2xl text-center">
        Categories
      </h2>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="flex gap-4 col-span-3">
          {categoriesData.slice(0, 3).map((category, index) => (
            <div
              key={index}
              className={`w-full relative ${category.height}`}
              style={{
                backgroundImage: `url(${category.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/50 to-transparent w-full">
                <h2 className="text-white text-2xl font-bold mb-2">
                  {category.title}
                </h2>
                <p className="text-white text-lg mb-1">{category.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 col-span-3">
          {categoriesData.slice(3, 5).map((category, index) => (
            <div
              key={index}
              className={`w-full relative ${category.height}`}
              style={{
                backgroundImage: `url(${category.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/50 to-transparent w-full">
                <h2 className="text-white text-2xl font-bold mb-2">
                  {category.title}
                </h2>
                <p className="text-white text-lg mb-1">{category.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
