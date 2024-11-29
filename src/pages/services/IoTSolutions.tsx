import React from 'react';
import { Cpu, Wifi, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const IoTSolutions = () => {
  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'IoT Devices',
      description: 'Smart device development and integration.',
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: 'Connectivity',
      description: 'Secure and reliable device communication.',
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'IoT Platform',
      description: 'Comprehensive IoT management platform.',
    },
  ];

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=2070"
            alt="IoT Solutions"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">IoT Solutions</h1>
            <p className="text-xl md:text-2xl mb-8">
              Connect and control your devices intelligently
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoTSolutions;