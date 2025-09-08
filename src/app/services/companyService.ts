import { CompanyData } from "../types/company";

const COMPANY_DATA: Record<string, CompanyData> = {
    "info":{
        name: "Winner Sweepstakes",
        description: "Your trusted destination for legitimate sweepstakes and contests. Join millions of participants and win amazing prizes.",
        contactInfo: {
            email: "info@winnersweepstakes.com",
            phone: "1-800-WINNERS",
            address: "New York, NY"
        },
        socialMedia: {
            twitter: "@samplecompany",
            facebook: "samplecompany",
            instagram: "samplecompany"
        }
    }       
};

export class CompanyService {
  static getCompanyById(id: string): CompanyData | null {
    return COMPANY_DATA[id] || null;
  }

  static getAllCompanies(): Record<string, CompanyData> {
    return COMPANY_DATA;
  }
}