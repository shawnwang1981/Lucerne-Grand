/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import KeySellingPoints from './components/KeySellingPoints';
import Galleria from './components/Galleria';
import Lifestyle from './components/Lifestyle';
import Location from './components/Location';
import FloorPlans from './components/FloorPlans';
import Developer from './components/Developer';
import FactSheet from './components/FactSheet';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Header from './components/Header';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F7F5F2] text-[#1C1C1C] font-sans antialiased selection:bg-[#8C7355]/30 overflow-x-hidden">
        <Header />
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
        <Footer />
        <FloatingCTA />
      </div>
    </LanguageProvider>
  );
}
