import Hero from '../components/Hero';
import KeySellingPoints from '../components/KeySellingPoints';
import Galleria from '../components/Galleria';
import Lifestyle from '../components/Lifestyle';
import Location from '../components/Location';
import FloorPlans from '../components/FloorPlans';
import Developer from '../components/Developer';
import FactSheet from '../components/FactSheet';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <KeySellingPoints />
      <Lifestyle />
      <Galleria />
      <Location />
      <FloorPlans />
      <Developer />
      <FactSheet />
      <Pricing />
      <Contact />
    </>
  );
}
