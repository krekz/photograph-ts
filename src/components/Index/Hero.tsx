import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-zinc-100 relative z-10 text-white">
      <div className="container min-h-[95vh] flex flex-col justify-center items-center text-center gap-5">
        <h1 className="text-6xl md:text-6xl font-normal">
          Pixel Master Fogotrafer
        </h1>
        <h3 className="text-2xl md:text-2xl font-normal">
          Photography & Videography
        </h3>

        <div className="flex gap-2">
          <FaInstagram size={20} color="red" />
          <FaFacebook size={20} color="blue" />
          <FaWhatsapp size={20} color="green" />
        </div>

        <h5 className="italic font-light">fogotrafer@gmail.com</h5>

        <div className="flex flex-row gap-3">
          <Link
            className="p-3 italic w-40 bg-transparent outline-zinc-50 outline outline-2 transition-all  hover:bg-black  duration-1000  "
            to="/contact"
          >
            HIRE ME
          </Link>
        </div>
      </div>
      <div className="hero-image"></div>
    </div>
  );
};

export default Hero;
