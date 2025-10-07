import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import WhyUs from "../components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
       <WhyUs />
      <Features />
      <Pricing />
      <Contact />
    </>
  );
}
