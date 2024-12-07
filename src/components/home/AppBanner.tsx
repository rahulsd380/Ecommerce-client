import React from 'react'
import Image from 'next/image'
import { IMAGES } from "@/assets";

const AppBanner = () => {
  return (
    <div className="flex p-10 justify-between bg-primary-20">
    <div className="flex flex-col justify-center gap-4 items-start p-10">
      <p className="text-neutral-10 font-quicksand text-[40px] md:text-[50px] max-w-[400px] font-semiBold leading-none tracking-[-0.55px]">
      Shop Faster With Shopfinity App
      </p>
      <p className="text-neutral-30 font-quicksand text-[20px] text-start font-medium leading-none tracking-[-0.2px]">Save up to 60% off on your first order</p>
      <div className='sm:flex gap-4'>
      <Image
                src={IMAGES.appStore}
                alt="App Store"
                className="w-full h-10 mb-5"
              />
               <Image
                src={IMAGES.appStore}
                alt="App Store"
                className="w-full h-10 mb-5"
              />
      </div>
    </div>
    <div className="hidden md:flex">
      <Image src={IMAGES.appimage} alt="hero" />
    </div>
  </div>
  )
}

export default AppBanner