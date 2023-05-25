"use client";
import { FC } from "react";
import useSWR from "swr";
import Image from "next/image";
import fetchImages from "@/lib/fetchImages";

type ImagesType = {
  name: string;
  url: string;
};

const Images: FC = ({}) => {
  const {
    data: images,
    isLoading,
    mutate: refreshImages,
    isValidating,
  } = useSWR("api/getImages", fetchImages, {
    revalidateOnFocus: false,
  });

  return (
    <>
      <div className="mt-10 mx-auto w-5/6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {images?.imageURLs.map((image: ImagesType, i: number) => (
          <div key={image.name}
          className={`cursor-help ${i === 0 && "md:col-span-2 md:row-span-2"}`}
          >
            <Image
              src={image.url}
              alt={image.name}
              width={500}
              height={500}
              className="w-full rounded-sm drop-shadow-lg shadow-2xl -z-10"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Images;
