import Image from "next/image";

export default function Banner({ title, subtitle, bgColor, img }) {
  return (
    <section className="my-12">
      <div
        className="p-10 px-16 flex justify-between gap-24 items-center"
        style={{
          background: bgColor,
          color: "white",
        }}>
        <span className="text-3xl font-bold">{title}</span>
        <span className="text-3xl">{subtitle}</span>
        <div className="w-[240px] relative -top-20 self-start">
          <Image
            src="/bannerImg.svg"
            className="absolute w-64 top-0"
            alt="banner"
            width={100}
            height={160}
          />
        </div>
      </div>
    </section>
  );
}
