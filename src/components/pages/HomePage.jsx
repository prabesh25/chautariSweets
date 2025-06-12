import HeroSection from "../Home/HeroSection";
import VidSection from "../others/VidSection";
import ExploreSection from "../others/ExploreSection";
import BestsellerSection from "../others/BestSellerSelection";
import TraditionsSection from "../others/TraditionSection";
import HerosSection from "../Shared/HerosSection";
import BlogSection from "../others/Blogs";
import Product from "./Product";
import ProductAttributes from "../others/ProductAttributes";
import Journey from "./Journey";

function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <Product/> */}
      {/* <ProductAttributes/> */}
      <VidSection />
      <ExploreSection />
      <BestsellerSection />
      <TraditionsSection />
      <Journey />
      {/* <BlogSection /> */}
    </>
  );
}

export default HomePage;
