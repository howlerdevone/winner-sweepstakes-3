import React from "react";
import { PrizeData } from "@/app/types/prize";

interface PrizeDescriptionProps {
  prizeData: PrizeData;
  prizeId: string;
}

export const PrizeDescription: React.FC<PrizeDescriptionProps> = ({
  prizeData,
  prizeId,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        About This Prize
      </h2>
      <div className="prose prose-lg text-gray-700">
        <p className="mb-4">{prizeData.description}</p>
        <p className="mb-4">
          {prizeId === "grand-prize"
            ? "Imagine what you could do with over a million dollars:"
            : "This incredible prize includes:"}
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {prizeData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <p>
          This sweepstakes is completely free to enter and no purchase is
          necessary. Simply fill out the entry form and you could be our next
          winner!
        </p>
      </div>
    </div>
  );
};
