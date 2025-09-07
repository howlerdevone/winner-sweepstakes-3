"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  AlertCircle,
  Users,
  Calendar,
  Trophy,
  Gift,
} from "lucide-react";
import { PrizeData } from "@/app/types/prize";

interface OfficialRulesProps {
  prizeData: PrizeData;
}

export const OfficialRules: React.FC<OfficialRulesProps> = ({ prizeData }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const rulesSections = [
    {
      title: "Eligibility Requirements",
      icon: Users,
      content: prizeData.detailedRules.eligibility,
      important: true,
    },
    {
      title: "Entry Period",
      icon: Calendar,
      content: prizeData.detailedRules.entryPeriod,
      important: false,
    },
    {
      title: "Winner Selection Process",
      icon: Trophy,
      content: prizeData.detailedRules.winnerSelection,
      important: false,
    },
    {
      title: "Prize Information",
      icon: Gift,
      content: prizeData.detailedRules.prizeDetails,
      important: true,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <FileText className="w-6 h-6 text-gray-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">Official Rules</h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          <span className="mr-2 text-sm font-medium">
            {isExpanded ? "Show Less" : "Show All Rules"}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Important Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">
              Important Legal Information
            </h4>
            <p className="text-blue-700 text-sm">
              Please read these official rules carefully. By entering this
              sweepstakes, you agree to be bound by these terms and conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Rules Sections */}
      <div className="space-y-6">
        {rulesSections.map((section, index) => {
          const IconComponent = section.icon;
          const shouldShow = index < 2 || isExpanded;

          if (!shouldShow) return null;

          return (
            <div
              key={index}
              className={`border rounded-lg p-6 transition-all duration-200 ${
                section.important
                  ? "border-yellow-200 bg-yellow-50"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div className="flex items-start">
                <div
                  className={`mr-4 mt-1 ${
                    section.important ? "text-yellow-600" : "text-gray-600"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4
                    className={`font-semibold mb-3 ${
                      section.important ? "text-yellow-900" : "text-gray-900"
                    }`}
                  >
                    {section.title}
                  </h4>
                  <p
                    className={`leading-relaxed ${
                      section.important ? "text-yellow-800" : "text-gray-700"
                    }`}
                  >
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legal Footer */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-500 leading-relaxed">
          <strong>Disclaimer:</strong> This sweepstakes is in no way sponsored,
          endorsed, administered by, or associated with Facebook, Google, Apple,
          or any other third party. Void where prohibited. Winner is responsible
          for all applicable taxes. For complete official rules and regulations,
          please contact us directly.
        </p>
      </div>
    </div>
  );
};
