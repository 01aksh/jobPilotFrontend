/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EmployeeDetailType } from "../../types";
import api from "../../utils/api";
import { LoadingSpinner } from "../common/LoadingSpinner";

const EmployeesDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState<EmployeeDetailType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataById();
  }, []);

  const fetchDataById = async () => {
    try {
      const res = await api.get(`/employeeDetailsById/${id}`);
      setData(res.data);
    } catch (err) {
      console.error("Fetch Error", err);
    } finally {
      setLoading(false);
    }
  };

  console.log(data);

  if (loading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  if (!data)
    return <p className="text-center text-gray-500">No employee data found.</p>;

  return (
    <div className="max-w-3xl p-4 mx-auto rounded-lg shadow-md bg-gray-50">
      <h1 className="mb-4 text-2xl font-semibold text-center">
        Employee Details
      </h1>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-700">
          Company Info
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <p>
            <strong>Name:</strong> {data.companyInfo.name}
          </p>
          <p>
            <strong>About:</strong> {data.companyInfo.about}
          </p>
          <div>
            <strong>Logo:</strong>
            <br />
            {data.companyInfo.logo && (
              <img
                src={
                  typeof data.companyInfo.logo === "string"
                    ? data.companyInfo.logo
                    : URL.createObjectURL(data.companyInfo.logo)
                }
                alt={
                  typeof data.companyInfo.logo === "string"
                    ? data.companyInfo.logo
                    : "Company Logo"
                }
                className="h-16 rounded"
              />
            )}
          </div>
          <div>
            <strong>Banner:</strong>
            <br />
            {data.companyInfo.banner && (
              <img
                src={
                  typeof data.companyInfo.banner === "string"
                    ? data.companyInfo.banner
                    : URL.createObjectURL(data.companyInfo.banner)
                }
                alt={
                  typeof data.companyInfo.banner === "string"
                    ? data.companyInfo.banner
                    : "Company Banner"
                }
                className="h-24 rounded"
              />
            )}
          </div>
        </div>
      </section>

      {/* Founding Info */}
      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-700">
          Founding Info
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <p>
            <strong>Organization Type:</strong>{" "}
            {data.foundingInfo.organizationType}
          </p>
          <p>
            <strong>Industry Type:</strong> {data.foundingInfo.industryType}
          </p>
          <p>
            <strong>Team Size:</strong> {data.foundingInfo.teamSize}
          </p>
          <p>
            <strong>Established Year:</strong>{" "}
            {data.foundingInfo.establishedYear}
          </p>
          <p>
            <strong>Website:</strong> {data.foundingInfo.website}
          </p>
          <p>
            <strong>Vision:</strong> {data.foundingInfo.vision}
          </p>
        </div>
      </section>

      {/* Social Media */}
      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-700">
          Social Media
        </h2>
        {data.socialMediaInfo.links.length > 0 ? (
          <ul className="pl-5 text-blue-600 list-disc">
            {data.socialMediaInfo.links.map((link, i) => (
              <li key={i}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.platform}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No links provided</p>
        )}
      </section>

      {/* Contact Info */}
      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-700">
          Contact Info
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <p>
            <strong>Email:</strong> {data.contactInfo.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.contactInfo.phoneCode}{" "}
            {data.contactInfo.phoneNumber}
          </p>
          <p>
            <strong>Map Location:</strong> {data.contactInfo.mapLocation}
          </p>
        </div>
      </section>
    </div>
  );
};

export default EmployeesDetails;
