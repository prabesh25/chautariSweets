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
import DryFruits from "./components/pages/shopping/DryFruits";
// import Traditional from "./components/pages/shopping/Traditional";
// import GultenFree from "./components/pages/shopping/GlutenFree";
import NewArrival from "./components/pages/shopping/NewArrival";
import SpecialItems from "./components/pages/shopping/SpecialItems";
// import GultenFree from "./components/pages/shopping/GlutenFree";
import Traditional from "./components/pages/shopping/Traditional";
import Festive from "./components/pages/shopping/Festive";
import BadamKatli from "./components/pages/shopping/BadamKatli";
import GultenFree from "./components/pages/shopping/GlutenFree";
// import GultenFree from "./components/pages/shopping/GlutenFree";

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
        <Route path="/shop/dryfruits" element={<DryFruits />} />
        <Route path="/shop/traditional" element={<Traditional />} />
        <Route path="/shop/festive" element={<Festive />} />
        {/* <Route path="/shop/gultenfree" element={< GultenFree/>} /> */}
        <Route path="/shop/badamkatli" element={<BadamKatli />} />
                <Route path="/shop/gultenfree" element={<GultenFree />} />

        {/* <Route path="/shop/gultenfree" element={<GultenFree />} /> */}
        <Route path="/shop/newarrival" element={<NewArrival />} />
        <Route path="/shop/traditional" element={<Traditional />} />
        <Route path="/shop/specialitems" element={<SpecialItems />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
