import { Link } from "react-router-dom";
import React from "react";
import Loading from "../Loading";
import useFetchImages from "../../hooks/useFetchImages";
import FeaturedItem from "./FeaturedItem";

const Featured = () => {
  const { images, loading } = useFetchImages("wedding and graduation", 4, 21);
  return (
    <div className="container mt-10 flex flex-col gap-5">
      <h1 className="text-4xl font-extralight italic text-center">
        Featured
      </h1>
      {loading && <Loading />}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 max-w-[50rem] mx-auto  gap-10 text-center font-semibold italic">
        {images.map((image) => (
          <React.Suspense key={image.id} fallback={<Loading />}>
            <FeaturedItem
              id={image.id}
              imgSrc={image.src.landscape}
              name={image.photographer}
            />
          </React.Suspense>
        ))}
      </div>

      <Link
        to={`/gallery`}
        className="mt-10 w-24 mx-auto text-center p-3 outline outline-black outline-4 hover:bg-black hover:text-white transition-all duration-700 font-semibold "
      >
        View all
      </Link>
    </div>
  );
};

export default Featured;
