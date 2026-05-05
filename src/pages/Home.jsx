import React from 'react';
import Navbar from '../components/antratu/Navbar';
import QuickLinks from '../components/antratu/QuickLinks';
import HeroSearch from '../components/antratu/HeroSearch';
import BrowseByCategory from '../components/antratu/BrowseByCategory';
import HubsSection from '../components/antratu/HubsSection';
import ReviewsSection from '../components/antratu/ReviewsSection';
import ElectricSection from '../components/antratu/ElectricSection';
import PopularMakes from '../components/antratu/PopularMakes';
import Footer from '../components/antratu/Footer';
import CarListings from '../components/antratu/CarListings';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="hidden md:block">
        <QuickLinks />
      </div>
      <HeroSearch />
      <BrowseByCategory />
      <CarListings />
      <HubsSection />
      <ReviewsSection />
      <ElectricSection />
      <PopularMakes />
      <Footer />
    </div>
  );
}