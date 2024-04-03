import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import Artist from "../components/home/Artist";
import Faq from "../components/home/Faq";
import Testimonials from "../components/home/Testimonials";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Artist />
      <Faq />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Index;
