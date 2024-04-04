import { Link } from "react-router-dom";

const Artist = () => {
  return (
    <>
      <div className="relative flex justify-center items-center mt-10 z-10 text-center h-[47rem] ">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-75 brightness-50 "
          style={{ backgroundImage: `url("/artist.jpg")` }}
        ></div>
        <div className="mt-10 flex flex-col gap-5 z-20 p-4 ">
          <h1 className="text-4xl md:text-6xl font-norma">About the Artist</h1>
          <h3 className="text-xl md:text-2xl font-normal">
            I can capture you everywhere
          </h3>
          <Link
            to={`/about`}
            className=" mx-auto text-center p-3 outline outline-black outline-4 hover:bg-black hover:text-white transition-all duration-700 font-semibold "
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Artist;
