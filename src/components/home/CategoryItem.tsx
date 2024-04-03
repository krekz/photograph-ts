import { memo } from "react";
import { Link } from "react-router-dom";

type CategoryItemProps = {
  id: number;
  name: string;
  image: string;
  link: string;
};

const CategoryItem = ({ id, name, image, link }: CategoryItemProps) => {
  return (
    <div className="flex flex-col gap-y-5 col-span-1 ">
      <Link to={link} key={id}>
        <img
          src={image}
          alt={name}
          className="object-cover w-full  h-72 md:h-96 shadow-lg rounded-sm hover:opacity-50 transition-all ease-linear duration-200"
        />
      </Link>
      <h3 className="text-lg font-normal">{name}</h3>
    </div>
  );
};

export default memo(CategoryItem);
