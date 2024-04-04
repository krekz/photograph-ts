// import { Link } from "react-router-dom";

type FeaturedItemProps = {
  id: number;
  name: string;
  imgSrc: string;
};

const FeaturedItem = ({ id, name, imgSrc }: FeaturedItemProps) => {
  return (
    <div className="flex flex-col gap-y-5 col-span-1 ">
      {/* <Link to="/gallery" key={id}> */}
      <img
        onClick={() => alert(`No photos for ${name} yet!`)}
        src={imgSrc}
        alt={name}
        className="object-cover w-full  h-72 md:h-96 shadow-lg rounded-sm hover:opacity-50 transition-all ease-linear duration-200"
      />
      {/* </Link> */}
      <h3 className="text-lg font-normal">{name}</h3>
    </div>
  );
};

export default FeaturedItem;
