import { Layout } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";

export const Logo: FC = () => {
  return (
    <Link to="/" className="flex items-center ">
      <Layout className="w-8 h-8 mr-2 text-blue-600" />
      <span className="text-xl font-semibold">Jobpilot</span>
    </Link>
  );
};
