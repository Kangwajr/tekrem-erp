import { ArrowRight, Cloud, Database, Lock, Code, Brain, Smartphone, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Cloud className="h-12 w-12" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize your business operations.',
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions to automate processes and gain valuable insights from your data.',
    },
    {
      icon: <Lock className="h-12 w-12" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: 'Custom Development',
      description: 'Tailored software solutions designed to meet your specific business requirements.',
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications that deliver exceptional user experiences.',
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights for informed decision-making.',
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
    },
    {
      icon: <Cpu className="h-12 w-12" />,
      title: 'IoT Solutions',
      description: 'Connected device solutions for smart automation and monitoring.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprehensive technology solutions for your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to discuss how we can help transform your business
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;