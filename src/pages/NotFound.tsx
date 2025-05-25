import { ArrowLeft, Home } from "lucide-react";
import { FC, useEffect } from "react";

const NotFound: FC = () => {
  useEffect(() => {
    document.title = "Page Not Found | JobPilot App";
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-bold text-blue-600 text-9xl">404</h1>
      <h2 className="mt-4 mb-2 text-3xl font-bold text-gray-900">
        Page Not Found
      </h2>
      <p className="max-w-md mb-8 text-lg text-gray-600">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <div className="space-x-4">
        <button className="inline-flex items-center">
          <Home className="mr-2" size={18} /> Go Home
        </button>
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center"
        >
          <ArrowLeft className="mr-2" size={18} /> Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
