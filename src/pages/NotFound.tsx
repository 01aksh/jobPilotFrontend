import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: FC = () => {
  useScrollToTop();

  useEffect(() => {
    document.title = 'Page Not Found | React App';
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-blue-600">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="space-x-4">
        <Button 
          as={Link} 
          to="/"
          variant="primary"
          className="inline-flex items-center"
        >
          <Home className="mr-2" size={18} /> Go Home
        </Button>
        <Button 
          onClick={() => window.history.back()}
          variant="outline"
          className="inline-flex items-center"
        >
          <ArrowLeft className="mr-2" size={18} /> Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;