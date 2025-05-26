/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../../utils/api";

export const submitAccountSetup = async (formData: any) => {
  try {
    const payload = new FormData();

    if (formData.companyInfo.logo) {
      payload.append("logo", formData.companyInfo.logo);
    }
    if (formData.companyInfo.banner) {
      payload.append("banner", formData.companyInfo.banner);
    }

    payload.append("name", formData.companyInfo.name);
    payload.append("about", formData.companyInfo.about);

    payload.append("organizationType", formData.foundingInfo.organizationType);
    payload.append("industryType", formData.foundingInfo.industryType);
    payload.append("teamSize", formData.foundingInfo.teamSize);
    payload.append("establishedYear", formData.foundingInfo.establishedYear);
    payload.append("website", formData.foundingInfo.website);
    payload.append("vision", formData.foundingInfo.vision);

    payload.append("socialMediaInfo", JSON.stringify(formData.socialMediaInfo));

    payload.append("mapLocation", formData.contactInfo.mapLocation);
    payload.append("phoneCode", formData.contactInfo.phoneCode);
    payload.append("phoneNumber", formData.contactInfo.phoneNumber);
    payload.append("email", formData.contactInfo.email);

    const response = await api.post("/employeeAccountSetup", payload, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (error: any) {
    console.error(
      "Account Setup API Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};
