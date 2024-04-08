import * as React from "react";
import Styles from './homethree.module.css'

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Swiper() {

  const carouselData = [
    {
      Titimg: '/assets/sliderimg1.svg',
      description: '“ Lorem ipsum dolor sit amet consectetur. Eu pretium sed est mi consectetur ut. Arcu diam amet aliquet velit feugiat quis. Egestas nunc lacus id cras. Commodo neque vel tempor nec nisi. Morbi odio massa proin at nisi. Imperdiet ipsum donec placerat dolor quisque ullamcorper commodo amet. Elementum faucibus pharetra ac morbi ”',
      author: "Leslie Alexander",
      college: "University of Cambridge",
      image: 'https://example.com/image1.jpg',
    },
    {
        Titimg: '/assets/sliderimg1.svg',
        description: '“ Lorem ipsum dolor sit amet consectetur. Eu pretium sed est mi consectetur ut. Arcu diam amet aliquet velit feugiat quis. Egestas nunc lacus id cras. Commodo neque vel tempor nec nisi. Morbi odio massa proin at nisi. Imperdiet ipsum donec placerat dolor quisque ullamcorper commodo amet. Elementum faucibus pharetra ac morbi ”',
        author: "Leslie Alexander",
        college: "University of Cambridge"
      },
      {
        Titimg: '/assets/sliderimg1.svg',
        description: '“ Lorem ipsum dolor sit amet consectetur. Eu pretium sed est mi consectetur ut. Arcu diam amet aliquet velit feugiat quis. Egestas nunc lacus id cras. Commodo neque vel tempor nec nisi. Morbi odio massa proin at nisi. Imperdiet ipsum donec placerat dolor quisque ullamcorper commodo amet. Elementum faucibus pharetra ac morbi ”',
        author: "Leslie Alexander",
        college: "University of Cambridge"
      },
      {
        Titimg: '/assets/sliderimg1.svg',
        description: '“ Lorem ipsum dolor sit amet consectetur. Eu pretium sed est mi consectetur ut. Arcu diam amet aliquet velit feugiat quis. Egestas nunc lacus id cras. Commodo neque vel tempor nec nisi. Morbi odio massa proin at nisi. Imperdiet ipsum donec placerat dolor quisque ullamcorper commodo amet. Elementum faucibus pharetra ac morbi ”',
        author: "Leslie Alexander",
        college: "University of Cambridge"
      },
      {
        Titimg: '/assets/sliderimg1.svg',
        description: '“ Lorem ipsum dolor sit amet consectetur. Eu pretium sed est mi consectetur ut. Arcu diam amet aliquet velit feugiat quis. Egestas nunc lacus id cras. Commodo neque vel tempor nec nisi. Morbi odio massa proin at nisi. Imperdiet ipsum donec placerat dolor quisque ullamcorper commodo amet. Elementum faucibus pharetra ac morbi ”',
        author: "Leslie Alexander",
        college: "University of Cambridge",
      },
      {
        Titimg: '/assets/sliderimg1.svg',
        description: '“ Lorem ipsum dolor sit amet consectetur. Eu pretium sed est mi consectetur ut. Arcu diam amet aliquet velit feugiat quis. Egestas nunc lacus id cras. Commodo neque vel tempor nec nisi. Morbi odio massa proin at nisi. Imperdiet ipsum donec placerat dolor quisque ullamcorper commodo amet. Elementum faucibus pharetra ac morbi ”',
        author: "Leslie Alexander",
        college: "University of Cambridge",
      },
    
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <Carousel className={`w-full ${Styles.slider}`}>
        <CarouselContent className="-ml-1">
          {carouselData.map((data, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/1 lg:basis-1/1"
            >
              <div >
                <Card className={Styles.content}>
                  <CardContent className="flex flex-col items-center justify-center gap-10">
                    <div className="text-base py-10">{data.description}</div>
                    <div>
                      <div className="text-base">{data.author}</div>
                      <div className="text-sm">{data.college}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Swiper;
