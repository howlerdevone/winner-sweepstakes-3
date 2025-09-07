import { PrizeData } from '@/app/types/prize';

const PRIZE_DATA: Record<string, PrizeData> = {
  "grand-prize": {
    title: "Win $1,125,000",
    subtitle: "Life-changing cash prize that could transform your future",
    heroImage: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Enter now for your chance to win the ultimate cash prize of $1,125,000! This life-changing amount could completely transform your future and give you the financial freedom you've always dreamed of.",
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
      eligibility: "Must be 18 years or older and a legal resident of the United States. Employees of Winner Sweepstakes and their immediate family members are not eligible.",
      entryPeriod: "Sweepstakes begins January 1, 2025 and ends December 30, 2025 at 11:59 PM EST.",
      winnerSelection: "One winner will be selected at random from all eligible entries. Winner will be notified by email and phone within 5 business days.",
      prizeDetails: "Prize will be awarded as a lump sum payment of $1,125,000. Winner is responsible for all applicable taxes.",
    },
  },
  "trip-paradise": {
  title: "Trip To Paradise",
  subtitle: "A 4-day/3-night paradise getaway to your dream destination",
  heroImage: "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=1200",
  description: "Enter now for your chance to win a 4-day/3-night paradise getaway! Choose from any of these incredible tropical destinations and experience the vacation of a lifetime with luxury accommodations, pristine beaches, and unforgettable experiences.",
  benefits: [
    "Choose from 5 stunning tropical destinations",
    "4 days and 3 nights of luxury accommodation",
    "Round-trip airfare for two people included",
    "Daily breakfast and one romantic dinner",
    "Access to resort amenities and activities",
    "Professional travel planning assistance",
    "Travel insurance coverage included",
    "Private beach access and water sports"
  ],
  value: "$8,500 Paradise Vacation",
  drawingDate: "November 15, 2025",
  eligibility: "21+ US Residents Only",
  entryFee: "FREE - No Purchase Required",
  detailedRules: {
    eligibility: "Must be 21 years or older and a legal resident of the United States. Valid passport required for international destinations. Employees of Winner Sweepstakes and their immediate family members are not eligible.",
    entryPeriod: "Sweepstakes begins January 1, 2025 and ends November 10, 2025 at 11:59 PM EST.",
    winnerSelection: "One winner will be selected at random from all eligible entries. Winner will be notified by email and phone within 3 business days.",
    prizeDetails: "Trip must be taken within 12 months of notification. Blackout dates may apply during peak seasons. Winner and guest must travel together on same itinerary. Additional expenses not included."
  }
},

"ultimate-home-theater": {
  title: "Ultimate Home Theater System",
  subtitle: "Transform your home into a cinematic paradise",
  heroImage: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=1200",
  description: "Enter now for your chance to win the ultimate home theater system worth $35,000! Experience movies, sports, and gaming like never before with professional-grade equipment and installation that will make your home the entertainment destination of choice.",
  benefits: [
    "85-inch 8K OLED display with HDR technology",
    "Professional 7.2.4 Dolby Atmos sound system",
    "Premium leather reclining theater seating for 6",
    "Smart home integration and lighting control",
    "Professional calibration and installation",
    "Universal remote control system",
    "5-year extended warranty on all equipment",
    "Streaming device and gaming console setup"
  ],
  value: "$35,000 Home Theater System",
  drawingDate: "September 30, 2025",
  eligibility: "18+ US Residents Only",
  entryFee: "FREE - No Purchase Required",
  detailedRules: {
    eligibility: "Must be 18 years or older and a legal resident of the United States. Winner must have suitable space for installation. Employees of Winner Sweepstakes and their immediate family members are not eligible.",
    entryPeriod: "Sweepstakes begins January 1, 2025 and ends September 25, 2025 at 11:59 PM EST.",
    winnerSelection: "One winner will be selected at random from all eligible entries. Winner will be notified by email and phone within 5 business days.",
    prizeDetails: "Installation must be completed within 90 days of notification. Home inspection required for installation feasibility. Winner responsible for any electrical or structural modifications needed."
  }
},

"european-extravaganza": {
  title: "European Extravaganza Vacation",
  subtitle: "14-day luxury tour across 5 European countries",
  heroImage: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1200",
  description: "Enter now for your chance to win an incredible 14-day European vacation for two! Visit 5 amazing countries with luxury accommodations, guided tours, and unforgettable experiences worth $18,000. Discover the magic of Europe in style and comfort.",
  benefits: [
    "14 days and 13 nights luxury accommodations",
    "Visit Paris, Rome, Barcelona, Amsterdam, and Prague",
    "Round-trip business class flights for two",
    "Professional guided tours in each city",
    "All breakfasts and 8 gourmet dinners included",
    "High-speed train travel between cities",
    "Travel insurance and concierge services",
    "€1,000 spending money included",
    "Private museum tours and skip-the-line access"
  ],
  value: "$18,000 European Vacation",
  drawingDate: "August 15, 2025",
  eligibility: "21+ US Residents Only",
  entryFee: "FREE - No Purchase Required",
  detailedRules: {
    eligibility: "Must be 21 years or older and a legal resident of the United States. Valid passports required for both travelers. Employees of Winner Sweepstakes and their immediate family members are not eligible.",
    entryPeriod: "Sweepstakes begins January 1, 2025 and ends August 10, 2025 at 11:59 PM EST.",
    winnerSelection: "One winner will be selected at random from all eligible entries. Winner will be notified by email and phone within 3 business days.",
    prizeDetails: "Trip must be taken within 18 months of notification. Blackout dates apply during peak seasons. Both travelers must travel together. Additional meals, drinks, and personal expenses not included."
  }
  }
};

export class PrizeService {
  static getPrizeById(id: string): PrizeData | null {
    return PRIZE_DATA[id] || null;
  }

  static getAllPrizes(): Record<string, PrizeData> {
    return PRIZE_DATA;
  }
}