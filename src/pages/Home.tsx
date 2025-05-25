import { FC, useEffect } from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Button } from '../components/common/Button';
import { Card, CardBody, CardHeader } from '../components/common/Card';
import { ArrowRight } from 'lucide-react';

const Home: FC = () => {
  useScrollToTop();

  useEffect(() => {
    document.title = 'Home | React App';
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 -mx-4 sm:-mx-6 lg:-mx-8 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Welcome to Our React Application
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            A beautifully designed, fully responsive React application with TypeScript and Tailwind CSS.
          </p>
          <div className="space-x-4">
            <Button 
              size="lg" 
              variant="primary" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.location.href = '/about'}
            >
              Learn More
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've built a powerful React application with TypeScript, React Router, and Tailwind CSS, 
            providing you with a solid foundation for your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'TypeScript Support',
              description: 'Full TypeScript support for type safety and better developer experience.',
            },
            {
              title: 'React Router',
              description: 'Comprehensive routing solution with lazy loading and protected routes.',
            },
            {
              title: 'Tailwind CSS',
              description: 'Utility-first CSS framework for rapid UI development.',
            },
            {
              title: 'Modular Architecture',
              description: 'Well-organized project structure that scales with your application.',
            },
            {
              title: 'Reusable Components',
              description: 'Library of reusable components to accelerate development.',
            },
            {
              title: 'Custom Hooks',
              description: 'Useful custom hooks for common functionalities like localStorage.',
            },
          ].map((feature, index) => (
            <Card key={index} className="h-full transition-transform hover:scale-105">
              <CardBody>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 -mx-4 sm:-mx-6 lg:-mx-8 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our well-structured React application and start building your next project.
          </p>
          <Button 
            size="lg" 
            variant="primary"
            className="group"
            onClick={() => window.location.href = '/contact'}
          >
            Get in Touch <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;