import { Link, useLocation } from "react-router-dom";
import Loading from "../Loading.js";
import useFetchImages from "../../hooks/useFetchImages.ts";
import Back from "../Back.tsx";

const GalleryCard = () => {
  const location = useLocation();
  const firstURI = location.pathname.split("/")[2];

  const { images, loading } = useFetchImages(firstURI, 12, 7);

  return (
    <div className="container mt-20 flex flex-col gap-5 py-10 ">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Back urlPath="gallery" />
          <h1 className="text-4xl font-bold text-center">
            {firstURI.charAt(0).toUpperCase() + firstURI.slice(1).toLowerCase()}
          </h1>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 text-center ">
            {images.map((image) => (
              <Link key={image.id} to={`#`}>
                <div className="flex flex-col gap-y-3  ">
                  <img
                    src={image.src.landscape}
                    alt={image.alt}
                    className="w-full h-72 object-cover rounded-sm  transition-all duration-700 hover:opacity-50 hover:shadow-xl"
                    onClick={() =>
                      alert(`No photos for "${image.photographer}" yet!`)
                    }
                  />
                  <h3 className="text-lg font-extralight">
                    {image.photographer}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GalleryCard;
