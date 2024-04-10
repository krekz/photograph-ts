// import Dashboard from "../components/Admin/Dashboard";
import { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error404 from "../../components/Error404";
// import AboutArtist from "../components/About/AboutArtist";
import Login from "@/components/Admin/Login";
import Dashboard from "@/components/Admin/Dashboard";

const Admin = () => {
  const [showLoginPanel, setShowLoginPanel] = useState(true);
  const secretKey = import.meta.env.VITE_SECRET_KEY;
  const pressedKeys = useRef("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showLoginPanel) {
        return;
      }

      pressedKeys.current += e.key;

      if (pressedKeys.current.endsWith(secretKey)) {
        toast.success("Redirecting ...", {
          position: "top-center",
          autoClose: 1300,
          onClose: () => setShowLoginPanel(true),
        });
      }

      if (pressedKeys.current.length > secretKey.length) {
        pressedKeys.current = pressedKeys.current.slice(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [secretKey, showLoginPanel]);

  return (
    <>
      <ToastContainer pauseOnHover={false} />
      {showLoginPanel ? <Dashboard /> : <Error404 />}
    </>
  );
};

export default Admin;
