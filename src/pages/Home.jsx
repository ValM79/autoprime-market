import React, { useState } from 'react';
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
import CompareBar from '../components/antratu/CompareBar';
import CompareModal from '../components/antratu/CompareModal';
import { SAMPLE_CARS } from '../components/antratu/CarListings';

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
      <BrowseByCategory />
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