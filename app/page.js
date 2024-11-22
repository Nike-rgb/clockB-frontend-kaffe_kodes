import BestPurchases from "@/components/BestPurchases";
import Categories from "@/components/Categories";
import CategoryDisplay from "@/components/CategoryDisplay";
import CoffeeSelections from "@/components/CofeeSelections";
import FeaturedProduct from "@/components/FeaturedProduct";
import HandPickedBrands from "@/components/HandPickedBrands";
import HeroText from "@/components/HeroText";
import HotCakes from "@/components/HotCakes";
import LandingDisplay from "@/components/LandingDisplay";
import Navbar from "@/components/Navbar";
import TopPicks from "@/components/TopPicks";
import Banner from "@/ui/Banner";

export default function Home() {
  return (
    <>
      <div className="px-2">
        <Navbar />
        <CategoryDisplay />
        <LandingDisplay />
        <HeroText />
        <TopPicks />
        <Categories />
        <HandPickedBrands />
        <FeaturedProduct />
        <HotCakes />
        <Banner
          title="Friday Special Offer at Kaffe Codes !!!"
          subtitle="GET 50% OFF"
          bgColor={"#553B36"}
        />
        <BestPurchases />
        <CoffeeSelections />
      </div>
    </>
  );
}
