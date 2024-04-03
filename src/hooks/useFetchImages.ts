// src/hooks/useFetchImages.js

import { useEffect, useState } from "react";

type Image = {
  id: number;
  width: number;
  alt: string;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
}


const useFetchImages = (query:string, perPage:number = 9, page:number = 3) => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading,setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}&page=${page}`,
          {
            headers: {
              Authorization: import.meta.env.VITE_PEXELS_API,
            },
          }
        );
        const data = await response.json();
        setImages(data.photos);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, perPage, page]);

  return {images, loading};
};

export default useFetchImages;