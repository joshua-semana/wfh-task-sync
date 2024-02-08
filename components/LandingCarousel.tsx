import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import image1 from "../public/1.jpg";
import image2 from "../public/2.jpg";
const LandingCarousel = () => {
  return (
    <div className='relative h-full w-full'>
      <p className='absolute top-8 left-8 z-50 font-bold'>ASD</p>
      <Carousel>
        <CarouselContent>
          <CarouselItem className='relative h-max'>
            <Image fill src={image1} className='object-cover' alt='asdf'></Image>

            <div className='absolute bottom-8 left-8 p-4'>
              <p className=' text-md text-white text-pretty drop-shadow-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor facere quas magnam debitis magni voluptate laudantium iure architecto consectetur cumque animi dolore at maiores, quasi officiis quae nam hic pariatur. Tempora
                minus quas quidem hic nulla voluptatibus quae omnis sint earum similique dolor quod velit assumenda sapiente impedit, voluptatem et! Iure, est tenetur repellat fugiat ullam placeat, illum praesentium asperiores omnis corrupti facere,
                nostrum exercitationem ratione ipsa reiciendis saepe dolore. Esse voluptatem ea pariatur illo nostrum quod laborum fugit cupiditate culpa, perspiciatis maiores. Dolorem aliquam enim placeat esse dolores iusto, veritatis vitae iste
                mollitia saepe laborum quidem eaque minus?
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className='relative h-max'>
            <Image fill src={image1} className='object-cover' alt='asdf'></Image>

            <div className='absolute bottom-8 left-8 p-4'>
              <p className=' text-md text-white text-pretty drop-shadow-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor facere quas magnam debitis magni voluptate laudantium iure architecto consectetur cumque animi dolore at maiores, quasi officiis quae nam hic pariatur. Tempora
                minus quas quidem hic nulla voluptatibus quae omnis sint earum similique dolor quod velit assumenda sapiente impedit, voluptatem et! Iure, est tenetur repellat fugiat ullam placeat, illum praesentium asperiores omnis corrupti facere,
                nostrum exercitationem ratione ipsa reiciendis saepe dolore. Esse voluptatem ea pariatur illo nostrum quod laborum fugit cupiditate culpa, perspiciatis maiores. Dolorem aliquam enim placeat esse dolores iusto, veritatis vitae iste
                mollitia saepe laborum quidem eaque minus?
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default LandingCarousel;
