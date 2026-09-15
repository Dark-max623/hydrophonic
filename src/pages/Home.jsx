import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import HowItWorks from '../components/sections/HowItWorks';
import Products from '../components/sections/Products';
import Stats from '../components/sections/Stats';
import Sustainability from '../components/sections/Sustainability';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Products />
      <Stats />
      <Sustainability />
      <Testimonials />
      <CTA />
    </>
  );
}