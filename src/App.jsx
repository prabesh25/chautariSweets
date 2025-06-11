import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/others/Footer";
import HomePage from "./components/pages/HomePage";
import Gifting from "./components/pages/Gifting";
import OurStory from "./components/pages/OurStory";
import MyAccount from "./components/pages/MyAccount";
import Shop from "./components/pages/Shop";
import ContactUs from "./components/pages/ContactUs";
import SugarFreeSweets from "./components/pages/shopping/SugarFreeSweets";
import Product from "./components/pages/Product";
import BulkOrderForm from "./components/pages/Form";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gifting" element={<Gifting />} />
        <Route path="/my account" element={<MyAccount />} />
        <Route path="/product" element={<Product />} />
                <Route path="/form" element={<BulkOrderForm />} />

        <Route path="/our story" element={<OurStory />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/sugarfreesweets" element={<SugarFreeSweets />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
