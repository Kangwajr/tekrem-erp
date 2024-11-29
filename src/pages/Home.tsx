import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import TeamSection from '../components/home/TeamSection';
import ProductsSection from '../components/home/ProductsSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="animate-fadeIn">
      <Hero />
      <ServicesSection />
      <TeamSection />
      <ProductsSection />
      <CTASection />
    </div>
  );
};

export default Home;