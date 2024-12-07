import React from 'react'
import Image from 'next/image';
import { StaticImageData } from "next/image";
// Define the types for Card props
type CardProps = {
    imageSrc: string| StaticImageData;
    title: string;
    description: string;
  };

    const  homeCard: React.FC<CardProps> =({ imageSrc, title, description }) => (
        <div className="flex gap-3 pt-6 w-[270px] ">
          <div className=" ">
            <Image src={imageSrc} alt={title} className='h-12 w-14' />
          </div>
          <div className="">
            <h1 className='text-base font-bold'>{title}</h1>
            <p className='text-sm'>{description}</p>
          </div>
        </div>
      );

export default homeCard