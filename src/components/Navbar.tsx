import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`p-5 bg-zinc-800 text-white fixed top-0 w-full z-50 transition-transform duration-200 ease-in-out ${
        visible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className=" flex justify-between md:container text-xl flex-wrap">
        {/* <img src="" alt="logo" /> */}
        <h1
          className="font-bold cursor-pointer "
          onClick={() => navigate("/", { replace: true })}
        >
          FOGOTRAFER.
        </h1>
        <ul
          className={`${
            toggle
              ? "flex flex-col items-center justify-center h-[100dvh] md:hidden mr-24 text-2xl"
              : "hidden "
          }  md:flex md:flex-row gap-x-5 text-lg font-light`}
        >
          <li>
            <Link
              className="hover:opacity-65 hover:underline"
              onClick={() => setToggle(false)}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:opacity-65 hover:underline"
              onClick={() => setToggle(false)}
              to="/gallery"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className="hover:opacity-65 hover:underline"
              onClick={() => setToggle(false)}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:opacity-65 hover:underline"
              onClick={() => setToggle(false)}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          {toggle ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
