import { FC } from "react";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
        <div className="py-4 mt-8 font-normal text-center text-gray-500 border-t border-gray-300">
          <p>&copy; {currentYear} Jobpilot - JobBoard. All rights reserved.</p>
        </div>
    </footer>
  );
};
