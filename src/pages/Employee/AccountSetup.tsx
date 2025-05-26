/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Button from "../../components/common/Button";
import { CompanyInfo } from "../../components/Employees/AccountSetupTabs/CompanyInfo";
import { ContactInfo } from "../../components/Employees/AccountSetupTabs/ContactInfo";
import { FoundingInfo } from "../../components/Employees/AccountSetupTabs/FoundingInfo";
import { SocialMediaInfo } from "../../components/Employees/AccountSetupTabs/SocialMediaInfo";
import { TabsHeader } from "../../components/Employees/AccountSetupTabs/TabsHeader";
import { useProgress } from "../../contexts/ProgressContext";
import { submitAccountSetup } from "../../services/EmployeeServices/AccountSetupService";
import {
  CompanyInfoType,
  ContactInfoType,
  FoundingInfoType,
  SocialMediaType,
} from "../../types";
import { useNavigate } from "react-router-dom";

interface FormDataType {
  companyInfo: CompanyInfoType;
  foundingInfo: FoundingInfoType;
  socialMediaInfo: SocialMediaType;
  contactInfo: ContactInfoType;
}

const AccountSetup = () => {
  const navigate = useNavigate();
  // const [currentStep, setCurrentStep] = useState(0);
  const { currentStep, setCurrentStep, stepValidation, setStepValidation } =
    useProgress();

  const [formData, setFormData] = useState<FormDataType>({
    companyInfo: {
      logo: null,
      banner: null,
      name: "",
      about: "",
    },
    foundingInfo: {
      organizationType: "",
      industryType: "",
      teamSize: "",
      establishedYear: "",
      website: "",
      vision: "",
    },
    socialMediaInfo: { links: [] },
    contactInfo: {
      mapLocation: "",
      phoneCode: "+91",
      phoneNumber: "",
      email: "",
    },
  });

  // const [stepValidation, setStepValidation] = useState<boolean[]>([
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);

  const handleCompanyInfoChange = (data: CompanyInfoType, isValid: boolean) => {
    setFormData((prev) => ({ ...prev, companyInfo: data }));
    const updatedValidation = [...stepValidation];
    updatedValidation[0] = isValid;
    setStepValidation(updatedValidation);
  };

  const handleFoundingInfoChange = (
    data: FoundingInfoType,
    isValid: boolean
  ) => {
    setFormData((prev) => ({ ...prev, foundingInfo: data }));
    const updatedValidation = [...stepValidation];
    updatedValidation[1] = isValid;
    setStepValidation(updatedValidation);
  };

  const handleSocialMediaChange = (data: SocialMediaType, isValid: boolean) => {
    setFormData((prev) => ({ ...prev, socialMediaInfo: data }));
    const updatedValidation = [...stepValidation];
    updatedValidation[2] =
      formData.socialMediaInfo.links.length > 0 ? isValid : false;
    setStepValidation(updatedValidation);
  };
  const handleContactInfoChange = (data: ContactInfoType, isValid: boolean) => {
    setFormData((prev) => ({ ...prev, contactInfo: data }));
    const updatedValidation = [...stepValidation];
    updatedValidation[3] = isValid;
    setStepValidation(updatedValidation);
  };

  const handleSaveAndNextClickButton = () => {
    console.log("Form Data:", formData);
    console.log("Step Validation:", stepValidation);

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleFinalSubmit = async () => {
    console.log(formData);

    try {
      const response = await submitAccountSetup(formData);
      console.log("Success:", response.data);
      alert(
        response.data.message ||
          "Employee account setup submitted successfully!"
      );
      if (response) {
        navigate(`/employee-details/${response.data._id}`);
      }
    } catch (error: any) {
      console.error("Error submitting Employee account setup:", error);
      alert("Failed to submit emplloyee account setup.");
    }
  };

  return (
    <div className="max-w-3xl p-4 mx-auto ">
      <TabsHeader
        currentStep={currentStep}
        setStep={setCurrentStep}
        stepsValidation={stepValidation}
      />

      <div>
        {currentStep === 0 && (
          <CompanyInfo
            data={formData.companyInfo}
            onChange={handleCompanyInfoChange}
          />
        )}
        {currentStep === 1 && (
          <FoundingInfo
            data={formData.foundingInfo}
            onChange={handleFoundingInfoChange}
          />
        )}
        {currentStep === 2 && (
          <SocialMediaInfo
            data={formData.socialMediaInfo}
            onChange={handleSocialMediaChange}
          />
        )}
        {currentStep === 3 && (
          <ContactInfo
            data={formData.contactInfo}
            onChange={handleContactInfoChange}
          />
        )}
      </div>
      <div className="flex justify-start mt-6 space-x-4">
        {currentStep > 0 && currentStep < 4 && (
          <Button
            className="text-black bg-gray-200"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Previous
          </Button>
        )}

        {currentStep < 3 && (
          <Button
            className="text-white bg-blue-700"
            onClick={handleSaveAndNextClickButton}
            disabled={!stepValidation[currentStep]}
          >
            Save & Next
          </Button>
        )}

        {currentStep === 3 && (
          <Button
            className="text-white bg-blue-700"
            onClick={handleFinalSubmit}
            disabled={!stepValidation[currentStep]}
          >
            Finish Editing
          </Button>
        )}
      </div>
    </div>
  );
};

export default AccountSetup;
