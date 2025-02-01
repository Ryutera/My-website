
import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  interface skillProps{
    name:string,
     src: string,
}


const CarouselItems: React.FC<{ skill: skillProps }> = ({ skill }) =>{
  return (
    <>
      
    <CarouselItem className="basis-1/3" key={skill.name}>
    <img src="skill.src" alt="skill.name" /></CarouselItem>
   
 
  </>
  )
}

export default CarouselItems