import React from 'react';
import Navbar from '../components/carzone/Navbar';
import QuickLinks from '../components/carzone/QuickLinks';
import HeroSearch from '../components/carzone/HeroSearch';
import FeaturedDealer from '../components/carzone/FeaturedDealer';
import HubsSection from '../components/carzone/HubsSection';
import ReviewsSection from '../components/carzone/ReviewsSection';
import ElectricSection from '../components/carzone/ElectricSection';
import PopularMakes from '../components/carzone/PopularMakes';
import Footer from '../components/carzone/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="hidden md:block">
        <QuickLinks />
      </div>
      <HeroSearch />
      <FeaturedDealer />
      <HubsSection />
      <ReviewsSection />
      <ElectricSection />
      <PopularMakes />
      <Footer />
    </div>
  );
}