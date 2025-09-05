"use client";

import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/app/components/ui/carousel";
import ExternalImage from "./ExternalImage";
import Autoplay from "embla-carousel-autoplay";

interface Prize {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

export default function PrizeCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const prizes: Prize[] = [
    {
      id: 1,
      title: "WINNER",
      subtitle: "THIRD PRIZE",
      image:
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Luxury Kitchen Makeover",
    },
    {
      id: 2,
      title: "WINNER",
      subtitle: "FOURTH PRIZE",
      image:
        "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Pearl Jewelry Collection",
    },
    {
      id: 3,
      title: "WINNER",
      subtitle: "CASH PRIZE",
      image:
        "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Million Dollar Winner",
    },
  ];

  // Auto-play plugin
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {prizes.map((prize, index) => (
            <CarouselItem key={prize.id}>
              <div>
                <ExternalImage
                  src={prize.image}
                  alt={prize.description}
                  priority={index === 0}
                />
                {/* Content */}
                <div>
                  <div className="text-center text-white">
                    <h2
                      className="text-6xl md:text-8xl font-bold mb-4 drop-shadow-2xl"
                      style={{
                        background:
                          "linear-gradient(45deg, #D4AF37, #FFD700, #B8860B)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "3px 3px 6px rgba(0,0,0,0.8)",
                      }}
                    >
                      {prize.title}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-white drop-shadow-lg">
                      {prize.subtitle}
                    </h3>
                    <p className="text-xl md:text-2xl text-white drop-shadow-lg">
                      {prize.description}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows - Custom styled */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white border-none hover:text-white transition-all duration-200 hover:scale-110" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white border-none hover:text-white transition-all duration-200 hover:scale-110" />

        {/* Custom Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {prizes.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === current - 1
                  ? "bg-yellow-500 scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
