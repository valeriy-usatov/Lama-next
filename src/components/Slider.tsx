'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    title: 'Summer Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: '/3.jpg',
    url: '/',
    bg: 'bg-gradient-to-r from-yellow-50 to-pink-50',
  },
  {
    id: 2,
    title: 'Winter Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: '/4.jpg',
    url: '/',
    bg: 'bg-gradient-to-r from-pink-50 to-blue-50',
  },
  {
    id: 3,
    title: 'Spring Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: '/1.jpg',
    url: '/',
    bg: 'bg-gradient-to-r from-blue-50 to-yellow-50',
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
 
//   useEffect(()=>{
//     const interval = setInterval(()=>{
//         setCurrent((prev)=>(prev === slides.length-1 ? 0 : prev+1))
//         },4000)
//         return()=>clearInterval(interval)
// },[])
   
  return <div className="h-[calc(100vh-80px)] overflow-hidden">
    <div className='w-max h-full flex transition-all ease-in-out duration-1000' style={{ transform: `translateX(-${current * 100}vw)` }}>
        {slides.map(({id, title, img, description, bg, url})=>(
            <div key={id} className={`${bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}>
                {/* TEXT CONTAINER */}
                <div className='h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center'>
                    <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>{description}</h2>
                    <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{title}</h1>
                    <Link href={url}><button className='rounded-md bg-black text-white py-3 px-4'>SHOP NOW</button></Link>
                </div>
                {/* IMAGE CONTAINER */}
                <div className='xl:w-1/2 relative h-1/2 xl:h-screen'>
                    <Image src={img} alt="photo" fill sizes='100%'  className='object-cover object-top'/>
                </div>
            </div>
            ))}
    </div>
    <div className='absolute left-1/2 bottom-8 flex items-center justify-center gap-4' >
        {slides.map((slider, index)=>(
            <div onClick={()=>setCurrent(index)} key={slider.id} className={`w-3 h-3 ring-1 ring-gray-600 cursor-pointer rounded-full ${current===index ? 'bg-black' : ""}`}>
                {/* {index} */}
            </div>
            ))}
    </div>
  </div>;
};

export default Slider;
