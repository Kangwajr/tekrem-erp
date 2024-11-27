import { ArrowRight, Shield, Cloud, Brain, Code, Smartphone, Globe, Cpu, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div >
      {/* Hero Section */}
      <header className="relative h-[540px] flex items-center justify-center bg-gradient-to-br from-primary/90 via-primary/50 to-primary/90">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900"></div>
      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/100 to-accent/90">
          Innovate. Transform. Succeed.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
        Empowering businesses with cutting-edge technology solutions
        </p>
        <div className="flex gap-6 justify-center">
        <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
        </div>
      </div>
    </header>

      {/* Features Section */}
      <section className="py-[18px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Tekrem?
            </h2>
            <p className="text-xl text-gray-600">
              We deliver innovative solutions that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Cloud className="h-8 w-8" />,
                title: 'Cloud Solutions',
                description: 'Scalable and secure cloud infrastructure for your business needs',
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: 'AI & ML',
                description: 'Advanced artificial intelligence and machine learning solutions',
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Cybersecurity',
                description: 'Comprehensive security solutions to protect your assets',
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: 'Custom Development',
                description: 'Tailored software solutions for your unique requirements',
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: 'Mobile Development',
                description: 'Scalable and secure cloud infrastructure for your business needs',
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: 'Data Analytics',
                description: 'Advanced artificial intelligence and machine learning solutions',
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: 'Web Development',
                description: 'Comprehensive security solutions to protect your assets',
              },
              {
                icon: <Cpu className="h-8 w-8" />,
                title: 'IoT Solutions',
                description: 'Tailored software solutions for your unique requirements',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help you achieve your goals
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-accent hover:text-white transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;