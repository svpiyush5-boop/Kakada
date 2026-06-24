/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Heritage from './components/Heritage';
import Craftsmanship from './components/Craftsmanship';
import Specialties from './components/Specialties';
import SweetGallery from './components/SweetGallery';
import Signature from './components/Signature';
import Experience from './components/Experience';
import Locations from './components/Locations';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Loader />
      <CursorGlow />
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        <Heritage />
        <Craftsmanship />
        <SweetGallery />
        <Specialties />
        <Signature />
        <Experience />
        <Locations />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
