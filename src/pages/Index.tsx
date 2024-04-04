import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Index/Hero";
import Artist from "../components/Index/Artist";
import Faq from "../components/Index/Faq";
import Testimonials from "../components/Index/Testimonials";
import Featured from "../components/Index/Featured";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Artist />
      <Faq />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Index;
