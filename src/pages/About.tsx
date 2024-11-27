import React from 'react';
import { ArrowRight, Target, Users, Award, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Team Members' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge solutions',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'Working together to achieve excellence',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality',
      description: 'Delivering exceptional results every time',
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Growth',
      description: 'Continuously evolving and improving',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Tekrem</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Driving digital transformation through innovation
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-8">
              Founded in 2014, Tekrem has been at the forefront of digital innovation,
              helping businesses transform and thrive in the digital age. Our team of
              experts combines deep technical knowledge with industry expertise to
              deliver solutions that drive real business value.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl mb-8">
            Let's create innovative solutions together
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;