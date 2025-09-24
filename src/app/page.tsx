"use client";

import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionPage from "./components/Section";
import SectionOffer from "./components/SectionOffer";
import SectionSpecialties from "./components/SectionSpecialties";
import SectionTestimonials from "./components/SectionTestimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-50">
      <Header />
      <SectionPage />
      <FeaturesSection />
      <SectionSpecialties />
      <SectionTestimonials />
      <SectionOffer />
      <Footer />
    </div>
  );
}
