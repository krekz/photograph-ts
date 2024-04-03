import Navbar from "../components/Navbar";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div
        onClick={() => alert("I said no !")}
        className="text-center h-screen p-5 flex items-center justify-center"
      >
        <h1 className="text-5xl">Please don't contact me </h1>
      </div>
    </>
  );
};

export default Contact;
