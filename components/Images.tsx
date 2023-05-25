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
          className={`relative cursor-help ${i === 0 && "md:col-span-2 md:row-span-2"}`}
          >
            {/* create div that shows only when user hovers over image */}
            <div className="p-3 absolute flex z-10 justify-center items-center w-full h-full bg-dark-col-700 opacity-0 hover:opacity-80 transition-opacity duration-200">
                <p className="text-center text-md text-gray-300">
                    {/* remove timestamp and file extension from image name */}
                    {image.name.split("_").shift()?.toString().split(".").shift()}
                </p>
            </div>
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
