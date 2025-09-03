"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionPage from "./components/Section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-50">
      <Header />
      <SectionPage />
      <Footer />
    </div>
  );
}
