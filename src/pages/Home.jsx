import React, { useState } from 'react';
import Navbar from '../components/antratu/Navbar';
import QuickLinks from '../components/antratu/QuickLinks';
import HeroSearch from '../components/antratu/HeroSearch';
import FeaturedDealer from '../components/antratu/FeaturedDealer';
import HubsSection from '../components/antratu/HubsSection';
import ReviewsSection from '../components/antratu/ReviewsSection';
import ElectricSection from '../components/antratu/ElectricSection';
import PopularMakes from '../components/antratu/PopularMakes';
import Footer from '../components/antratu/Footer';
import CarListings, { SAMPLE_CARS } from '../components/antratu/CarListings';
import CompareBar from '../components/antratu/CompareBar';
import CompareModal from '../components/antratu/CompareModal';

export default function Home() {
  const [selectedIds, setSelectedIds] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  const toggleCompare = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectedCars = SAMPLE_CARS.filter((c) => selectedIds.includes(c.id));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="hidden md:block">
        <QuickLinks />
      </div>
      <HeroSearch />
      <FeaturedDealer />
      <CarListings selectedIds={selectedIds} onToggleCompare={toggleCompare} />
      <HubsSection />
      <ReviewsSection />
      <ElectricSection />
      <PopularMakes />
      <Footer />
      <CompareBar
        cars={selectedCars}
        onRemove={toggleCompare}
        onCompare={() => setShowCompare(true)}
        onClear={() => setSelectedIds([])}
      />
      {showCompare && (
        <CompareModal cars={selectedCars} onClose={() => setShowCompare(false)} />
      )}
    </div>
  );
}