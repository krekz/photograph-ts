import React, { memo } from "react";
import CategoryItem from "./CategoryItem";
import Loading from "../Loading";

type Category = {
  id: number;
  name: string;
  image: string;
  link: string;
};

const categories: Category[] = [
  {
    id: 1,
    name: "Wedding",
    image: "/categories/wedding.jpg",
    link: "wedding",
  },
  {
    id: 2,
    name: "Graduation",
    image: "/categories/graduation.jpg",
    link: "graduation",
  },
  {
    id: 3,
    name: "Videography",
    image: "/categories/videography.jpg",
    link: "videography",
  },
  {
    id: 4,
    name: "Street",
    image: "/categories/street.jpg",
    link: "street",
  },
  {
    id: 5,
    name: "All",
    image: "/categories/all.jpg",
    link: "all",
  },
];

const Categories = () => {
  return (
    <div className="container mt-20 py-10 flex flex-col gap-5">
      <h1 className="text-4xl font-extralight italic text-center">Galleries</h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[50rem] mx-auto  gap-10 text-center font-semibold italic">
        {categories.map((category: Category) => (
          <React.Suspense key={category.id} fallback={<Loading />}>
            <CategoryItem {...category} />
          </React.Suspense>
        ))}
      </div>
    </div>
  );
};

export default memo(Categories);
