import Image from "next/image";

const PictureWithText = ({
  img,
  title,
  subtitle,
  btnText,
  width,
  height,
  actionOff,
}) => {
  return (
    <div className={`relative ${width} ${height}`}>
      <Image
        src={img}
        alt={title}
        width={500}
        height={500}
        className="w-full h-full"
      />
      <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/10 to-transparent w-full">
        <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
        <p className="text-white text-lg mb-8">{subtitle}</p>
        {!actionOff && (
          <button className="bg-white text-black px-4 py-2 ">{btnText}</button>
        )}
      </div>
    </div>
  );
};

export default PictureWithText;
