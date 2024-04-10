import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import { ErrorToast } from "@/lib/utils";

const Contact = () => {
  return (
    <>
      <ToastContainer pauseOnHover={false} stacked />
      <Navbar />
      <div
        onClick={() => ErrorToast("Please go away !")}
        className="text-center h-screen p-5 flex items-center justify-center"
      >
        <h1 className="text-5xl">Please don't contact me </h1>
      </div>
    </>
  );
};

export default Contact;
