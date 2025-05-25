export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

export type RouteType = {
  path: string;
  element: React.ReactNode;
  children?: RouteType[];
};

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
