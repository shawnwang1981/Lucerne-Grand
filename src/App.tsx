/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Header from './components/Header';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#F7F5F2] text-[#1C1C1C] font-sans antialiased selection:bg-[#8C7355]/30 overflow-x-hidden">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
          <Footer />
          <FloatingCTA />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
