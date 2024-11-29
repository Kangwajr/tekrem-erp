import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header className="relative h-[540px] flex items-center justify-center bg-gradient-to-br from-primary/90 via-primary/50 to-primary/90">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Hero background"
          className="w-full h-full object-cover opacity-20 animate-kenburns"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900"></div>
      <div className="z-10 text-center px-4 max-w-4xl mx-auto animate-slideUp">
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
            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;