export interface CompanyInfoType {
  logo: File | null;
  banner: File | null;
  name: string;
  about: string;
}

export interface FoundingInfoType {
  organizationType: string;
  industryType: string;
  teamSize: string;
  establishedYear: string;
  website: string;
  vision: string;
}

export interface SocialMediaLink {
  platform: string;
  url: string;
}

export interface SocialMediaType {
  links: SocialMediaLink[];
}

export interface ContactInfoType {
  mapLocation: string;
  phoneCode: string;
  phoneNumber: string;
  email: string;
}

export interface EmployeeDetailType {
  companyInfo: CompanyInfoType;
  foundingInfo: FoundingInfoType;
  socialMediaInfo: SocialMediaType;
  contactInfo: ContactInfoType;
}
