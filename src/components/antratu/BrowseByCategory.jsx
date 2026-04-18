import React from 'react';
import { ChevronRight, Car, Truck, Bike, Bus, Anchor, HelpCircle } from 'lucide-react';

const categories = [
  [
    { label: 'Cars', icon: '🚗' },
    { label: 'Commercials', icon: '🚐', highlight: true },
    { label: 'Scooters', icon: '🛵' },
    { label: 'Trucks', icon: '🚚' },
    { label: 'Trailers', icon: '🚛' },
    { label: 'Quads', icon: '🏍️', highlight: true },
    { label: 'Modified Cars', icon: '🚙' },
    { label: 'Car Parts', icon: '⚙️' },
    { label: 'All Cars & Motor', icon: '🅳', highlight: true },
  ],
  [
    { label: 'Cars from Dealerships', icon: '🚘' },
    { label: 'Vintage Cars', icon: '🚖' },
    { label: 'Vintage Bikes', icon: '🏍️' },
    { label: 'Coaches & Buses', icon: '🚌' },
    { label: 'Car Extras', icon: '🔧' },
    { label: 'Boats & Jet Skis', icon: '⛵' },
    { label: 'Breaking & Repairables', icon: '🚗' },
    { label: 'Motorbike Extras', icon: '🪖' },
  ],
  [
    { label: 'New Cars', icon: '🚗' },
    { label: 'Motorbikes', icon: '🏍️', highlight: true },
    { label: 'Campers', icon: '🚐' },
    { label: 'Caravans', icon: '🚌' },
    { label: 'Plant Machinery', icon: '🚜', highlight: true },
    { label: 'Rally Cars', icon: '🏎️' },
    { label: 'Boat Extras', icon: '⚓' },
    { label: 'Other Motor', icon: '❓' },
  ],
];

function CategoryRow({ label, icon, highlight }) {
  return (
    <button className="flex items-center justify-between w-full py-2.5 border-b border-border last:border-0 hover:bg-secondary/40 px-2 rounded transition-colors group">
      <div className="flex items-center gap-3">
        <span className="text-xl w-7 text-center">{icon}</span>
        <span className={`text-sm font-medium ${highlight ? 'text-primary' : 'text-foreground'} group-hover:text-primary transition-colors`}>
          {label}
        </span>
      </div>
      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
    </button>
  );
}

export default function BrowseByCategory() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Browse by category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((col, i) => (
          <div key={i} className="flex flex-col">
            {col.map((cat) => (
              <CategoryRow key={cat.label} {...cat} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}