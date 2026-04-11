import React, { useState } from 'react';
import Navbar from '../components/carzone/Navbar';
import QuickLinks from '../components/carzone/QuickLinks';
import HeroSearch from '../components/carzone/HeroSearch';
import BrowseByCategory from '../components/carzone/BrowseByCategory';
import HubsSection from '../components/carzone/HubsSection';
import ReviewsSection from '../components/carzone/ReviewsSection';
import ElectricSection from '../components/carzone/ElectricSection';
import PopularMakes from '../components/carzone/PopularMakes';
import Footer from '../components/carzone/Footer';
import CarListings from '../components/carzone/CarListings';
import CompareBar from '../components/carzone/CompareBar';
import CompareModal from '../components/carzone/CompareModal';
import { SAMPLE_CARS } from '../components/carzone/CarListings';

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