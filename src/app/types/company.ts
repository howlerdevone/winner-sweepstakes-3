export interface CompanyData {
    name: string;
    description: string;
    contactInfo: {
        email: string;
        phone: string;
        address: string;
    }
    socialMedia: {
        twitter?: string;
        facebook?: string;
        instagram?: string;
  };
}
