"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Users,
  Trophy,
  Gift,
  Mail,
  User,
  Phone,
  Link,
} from "lucide-react";

interface PrizeDetailProps {
  prizeId: string;
}

interface PrizeData {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  benefits: string[];
  value: string;
  drawingDate: string;
  eligibility: string;
  entryFee: string;
  detailedRules: {
    eligibility: string;
    entryPeriod: string;
    winnerSelection: string;
    prizeDetails: string;
  };
}

// Server component version
export default function PrizeDetailPage({ prizeId }: PrizeDetailProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Prize entry submitted:", { prizeId, ...formData });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getPrizeData = (id: string): PrizeData => {
    console.log("Fetching data for prize ID:", id);
    switch (id) {
      case "grand-prize":
        return {
          title: "Win $1,125,000",
          subtitle: "Life-changing cash prize that could transform your future",
          heroImage:
            "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1200",
          description:
            "Enter now for your chance to win the ultimate cash prize of $1,125,000! This life-changing amount could completely transform your future and give you the financial freedom you've always dreamed of.",
          benefits: [
            "Pay off your mortgage and become debt-free",
            "Start your own business or invest in your future",
            "Travel the world and create unforgettable memories",
            "Secure your children's education",
            "Retire early and live comfortably",
            "Support causes you care about",
          ],
          value: "$1,125,000 Cash Prize",
          drawingDate: "December 31, 2025",
          eligibility: "18+ US Residents Only",
          entryFee: "FREE - No Purchase Required",
          detailedRules: {
            eligibility:
              "Must be 18 years or older and a legal resident of the United States. Employees of Winner Sweepstakes and their immediate family members are not eligible.",
            entryPeriod:
              "Sweepstakes begins January 1, 2025 and ends December 30, 2025 at 11:59 PM EST.",
            winnerSelection:
              "One winner will be selected at random from all eligible entries. Winner will be notified by email and phone within 5 business days.",
            prizeDetails:
              "Prize will be awarded as a lump sum payment of $1,125,000. Winner is responsible for all applicable taxes.",
          },
        };
      case "trip-paradise":
        return {
          title: "Trip To Paradise",
          subtitle:
            "A 4-day/3-night paradise getaway to your dream destination",
          heroImage:
            "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=1200",
          description:
            "Enter now for your chance to win a 4-day/3-night paradise getaway! Choose from any of these incredible tropical destinations and experience the vacation of a lifetime.",
          benefits: [
            "Choose from 5 stunning tropical destinations",
            "4 days and 3 nights of luxury accommodation",
            "Round-trip airfare for two people included",
            "Daily breakfast and one romantic dinner",
            "Access to resort amenities and activities",
            "Professional travel planning assistance",
            "Travel insurance coverage included",
          ],
          value: "$8,500 Paradise Vacation",
          drawingDate: "November 15, 2025",
          eligibility: "21+ US Residents Only",
          entryFee: "FREE - No Purchase Required",
          detailedRules: {
            eligibility:
              "Must be 21 years or older and a legal resident of the United States. Valid passport required for international destinations. Employees of Winner Sweepstakes and their immediate family members are not eligible.",
            entryPeriod:
              "Sweepstakes begins January 1, 2025 and ends November 10, 2025 at 11:59 PM EST.",
            winnerSelection:
              "One winner will be selected at random from all eligible entries. Winner will be notified by email and phone within 3 business days.",
            prizeDetails:
              "Trip must be taken within 12 months of notification. Blackout dates may apply during peak seasons. Winner and guest must travel together on same itinerary.",
          },
        };
      default:
        return {
          title: "Amazing Prize",
          subtitle: "Enter to win this incredible prize",
          heroImage:
            "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200",
          description: "Enter now for your chance to win this amazing prize!",
          benefits: ["Incredible value", "Life-changing opportunity"],
          value: "Priceless",
          drawingDate: "December 31, 2025",
          eligibility: "18+ US Residents Only",
          entryFee: "FREE - No Purchase Required",
          detailedRules: {
            eligibility:
              "Must be 18 years or older and a legal resident of the United States.",
            entryPeriod:
              "Sweepstakes begins January 1, 2025 and ends December 30, 2025 at 11:59 PM EST.",
            winnerSelection:
              "One winner will be selected at random from all eligible entries.",
            prizeDetails:
              "Prize details will be provided upon winner notification.",
          },
        };
    }
  };

  const prizeData = getPrizeData(prizeId);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Sweepstakes
          </Link>
        </div>
      </div>

      {/* Hero Section */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Prize Description */}
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
                  This sweepstakes is completely free to enter and no purchase
                  is necessary. Simply fill out the entry form and you could be
                  our next winner!
                </p>
              </div>
            </div>

            {/* Prize Details */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Prize Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Trophy className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Prize Value</h4>
                    <p className="text-gray-600">{prizeData.value}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Drawing Date
                    </h4>
                    <p className="text-gray-600">{prizeData.drawingDate}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Eligibility</h4>
                    <p className="text-gray-600">{prizeData.eligibility}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Gift className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Entry Fee</h4>
                    <p className="text-gray-600">{prizeData.entryFee}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Rules */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Official Rules
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Eligibility
                  </h4>
                  <p>{prizeData.detailedRules.eligibility}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Entry Period
                  </h4>
                  <p>{prizeData.detailedRules.entryPeriod}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Winner Selection
                  </h4>
                  <p>{prizeData.detailedRules.winnerSelection}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Prize Details
                  </h4>
                  <p>{prizeData.detailedRules.prizeDetails}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Entry Form Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-8">
              <div className="text-center mb-6">
                <Gift className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Enter to Win
                </h3>
                <p className="text-gray-600">
                  Fill out the form below for your chance to win!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                >
                  ENTER NOW
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By entering, you agree to our Terms & Conditions and Privacy
                  Policy. No purchase necessary. Must be 18+ to enter.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
