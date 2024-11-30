import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import TeamSection from '../components/home/TeamSection';
import ProductsSection from '../components/home/ProductsSection';
import BlogSection from '../components/home/BlogSection';
import CTASection from '../components/home/CTASection';
import { posts } from '../lib/store';

const Home = () => {
  return (
    <div className="animate-fadeIn">
      <Hero />
      <ServicesSection />
      <TeamSection />
      <ProductsSection />
      <BlogSection posts={posts} />
      <CTASection />
    </div>
  );
};

export default Home;