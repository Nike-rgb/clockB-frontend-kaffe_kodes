const ItemsCarousel = ({ categories = [] }) => {
  return (
    <div className="flex justify-center gap-2 space-x-6">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className=" p-4 rounded-full"
            style={{
              backgroundColor: category.active ? "#87512F" : "#F6F6F6",
            }}>
            {category.icon}
          </div>
          <span className="mt-2 text-[#001700B2] text-[12px]">
            {category.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ItemsCarousel;
