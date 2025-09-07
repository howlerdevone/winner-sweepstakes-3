import React from "react";
import { PrizeData } from "@/app/types/prize";

interface PrizeHeroProps {
  prizeData: PrizeData;
}

export const PrizeHero: React.FC<PrizeHeroProps> = ({ prizeData }) => {
  return (
    <div className="relative h-96 bg-gradient-to-r from-yellow-600 to-yellow-800">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${prizeData.heroImage})`,
          backgroundBlendMode: "overlay",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <div className="text-sm font-medium text-yellow-300 mb-2 tracking-wide uppercase">
            WINNERSWEEPSTAKES
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {prizeData.title}
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100">
            {prizeData.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
