import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Navbar from "./components/Layout/Navbar";
import HeroSection from "./components/Home/HeroSection";
import VidSection from "./components/others/VidSection";
import ExploreSection from "./components/others/ExploreSection";
import BestsellerSection from "./components/others/BestSellerSelection";
import TraditionsSection from "./components/others/TraditionSection";
import HerosSection from "./components/Shared/HerosSection";
import BlogSection from "./components/others/Blogs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection/>
      <VidSection/>
      <ExploreSection/>
      <BestsellerSection/>
      <TraditionsSection/>
      <HerosSection/>
      <BlogSection/>
    </>
  );
}

export default App;
