import PictureWithText from "@/ui/PictureWithText";

export default function LandingDisplay() {
  return (
    <>
      <section className="py-6 flex gap-3">
        <PictureWithText
          img="/cake.png"
          title="Explore Nature"
          subtitle="Upto 10% OFF"
          btnText="Learn More"
          width="w-[470px]"
          height="h-[544px]"
        />
        <PictureWithText
          img="/boba.png"
          title="Tea"
          subtitle="Up to 10% OFF"
          btnText="Learn More"
          width="w-[470px]"
          height="h-[544px]"
        />
        <PictureWithText
          img="/sewing.png"
          title="Utensils Equipments and Machinery"
          subtitle="Up to 10% OFF"
          btnText="Learn More"
          width="w-[470px]"
          height="h-[544px]"
        />
      </section>
    </>
  );
}
