export interface PrizeData {
  title: string;
  link: string;
  category: string,
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

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface FormSubmission extends FormData {
  prizeId: string;
  timestamp: Date;
}