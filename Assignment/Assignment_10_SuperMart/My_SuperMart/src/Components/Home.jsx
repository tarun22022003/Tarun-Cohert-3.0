import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Stats from "../Components/Stats";
import Categories from "../Components/Categories";
import ProductSection from "../Components/ProductSection";
import PromoBanner from "../Components/PromoBanner";
import Features from "../Components/Features";
import Testimonials from "../Components/Testimonials";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import NewArrival from "./NewArrival";

function Home() {
  return (
    <div className="bg-black">

      <Navbar />

      <Hero />

      <Stats />

      <Categories />

      <ProductSection title="Trending Products" />

      <PromoBanner />

      <NewArrival title="New Arrivals" />

      <Features />

      <Testimonials />

      <Newsletter />

      <Footer />

    </div>
  );
}

export default Home;