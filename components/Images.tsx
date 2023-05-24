"use client";
import { FC } from 'react'
import useSWR from 'swr'
import Image from 'next/image';
import fetchImages from '@/lib/fetchImages';

type ImagesProps = {
    name: string;
    url: string;
}


const Images: FC = ({}) => {
    const {
        data: images,
        isLoading,
        mutate: refreshImages,
        isValidating,

    } = useSWR("api/getImages", fetchImages, {
        revalidateOnFocus: false,
    })

  return <div>
    <div>
        {images?.imageURLs.map((image: ImagesProps) => (
            <div>
                <Image src={image.url} alt={image.name} width={500} height={500} 
                className = "w-full rounded-sm drop-shadow-lg shadow-2xl -z-10"/>     
            </div>
        ))}
    </div>
  </div>
}

export default Images