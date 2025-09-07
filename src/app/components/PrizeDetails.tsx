import React from "react";
import { Trophy, Calendar, Users, Gift } from "lucide-react";
import { PrizeData } from "@/app/types/prize";

interface PrizeDetailsProps {
  prizeData: PrizeData;
}

export const PrizeDetails: React.FC<PrizeDetailsProps> = ({ prizeData }) => {
  const detailItems = [
    {
      icon: Trophy,
      label: "Prize Value",
      value: prizeData.value,
      color: "text-yellow-600",
    },
    {
      icon: Calendar,
      label: "Drawing Date",
      value: prizeData.drawingDate,
      color: "text-blue-600",
    },
    {
      icon: Users,
      label: "Eligibility",
      value: prizeData.eligibility,
      color: "text-green-600",
    },
    {
      icon: Gift,
      label: "Entry Fee",
      value: prizeData.entryFee,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Prize Details</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {detailItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex items-start group hover:bg-gray-50 p-4 rounded-lg transition-colors"
            >
              <div
                className={`${item.color} mr-3 mt-1 group-hover:scale-110 transition-transform`}
              >
                <IconComponent className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">
                  {item.label}
                </h4>
                <p className="text-gray-600 leading-relaxed">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Info Section */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <Gift className="w-5 h-5 text-yellow-600 mr-2" />
            <span className="font-semibold text-yellow-800">
              FREE to Enter - No Purchase Necessary!
            </span>
          </div>
          <p className="text-yellow-700 text-sm mt-1">
            This sweepstakes is completely free. You never need to pay anything
            to enter or win.
          </p>
        </div>
      </div>
    </div>
  );
};
