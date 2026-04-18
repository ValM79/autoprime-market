import React from 'react';
import { ChevronRight } from 'lucide-react';

// SVG vehicle illustrations matching the category icons
const icons = {
  car: (
    <svg viewBox="0 0 60 30" width="48" height="24" fill="none">
      <rect x="8" y="12" width="44" height="12" rx="3" fill="#ccc"/>
      <rect x="14" y="6" width="26" height="10" rx="3" fill="#bbb"/>
      <circle cx="17" cy="25" r="4" fill="#555"/>
      <circle cx="43" cy="25" r="4" fill="#555"/>
      <rect x="10" y="14" width="8" height="6" rx="1" fill="#ddd"/>
      <rect x="22" y="14" width="10" height="6" rx="1" fill="#ddd"/>
      <rect x="36" y="14" width="8" height="6" rx="1" fill="#ddd"/>
    </svg>
  ),
  commercial: (
    <svg viewBox="0 0 60 30" width="48" height="24" fill="none">
      <rect x="2" y="8" width="50" height="16" rx="2" fill="#ccc"/>
      <rect x="2" y="8" width="14" height="16" rx="2" fill="#bbb"/>
      <rect x="4" y="10" width="10" height="8" rx="1" fill="#ddd"/>
      <circle cx="12" cy="26" r="4" fill="#555"/>
      <circle cx="42" cy="26" r="4" fill="#555"/>
    </svg>
  ),
  scooter: (
    <svg viewBox="0 0 50 30" width="40" height="24" fill="none">
      <ellipse cx="38" cy="22" rx="7" ry="7" fill="#555"/>
      <ellipse cx="12" cy="22" rx="7" ry="7" fill="#555"/>
      <ellipse cx="38" cy="22" rx="4" ry="4" fill="#888"/>
      <ellipse cx="12" cy="22" rx="4" ry="4" fill="#888"/>
      <path d="M12 22 Q20 6 38 22" stroke="#e55" strokeWidth="3" fill="none"/>
      <circle cx="25" cy="8" r="3" fill="#e55"/>
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 70 30" width="56" height="24" fill="none">
      <rect x="2" y="10" width="58" height="14" rx="2" fill="#bbb"/>
      <rect x="2" y="10" width="18" height="14" rx="2" fill="#aaa"/>
      <rect x="4" y="12" width="14" height="8" rx="1" fill="#ddd"/>
      <circle cx="14" cy="26" r="4" fill="#444"/>
      <circle cx="50" cy="26" r="4" fill="#444"/>
    </svg>
  ),
  trailer: (
    <svg viewBox="0 0 70 30" width="56" height="24" fill="none">
      <rect x="8" y="8" width="54" height="16" rx="2" fill="#ccc"/>
      <rect x="2" y="18" width="8" height="4" rx="1" fill="#aaa"/>
      <circle cx="20" cy="26" r="4" fill="#555"/>
      <circle cx="52" cy="26" r="4" fill="#555"/>
    </svg>
  ),
  quad: (
    <svg viewBox="0 0 50 30" width="40" height="24" fill="none">
      <rect x="10" y="10" width="30" height="14" rx="4" fill="#555"/>
      <ellipse cx="12" cy="24" rx="6" ry="5" fill="#333"/>
      <ellipse cx="38" cy="24" rx="6" ry="5" fill="#333"/>
      <rect x="18" y="6" width="14" height="8" rx="2" fill="#777"/>
    </svg>
  ),
  modifiedCar: (
    <svg viewBox="0 0 60 30" width="48" height="24" fill="none">
      <rect x="6" y="12" width="48" height="12" rx="3" fill="#4a4"/>
      <rect x="14" y="5" width="24" height="11" rx="3" fill="#3a3"/>
      <circle cx="16" cy="25" r="4" fill="#222"/>
      <circle cx="44" cy="25" r="4" fill="#222"/>
      <rect x="9" y="14" width="8" height="6" rx="1" fill="#afa"/>
      <rect x="35" y="14" width="8" height="6" rx="1" fill="#afa"/>
    </svg>
  ),
  carParts: (
    <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
      <circle cx="20" cy="20" r="14" stroke="#999" strokeWidth="3" fill="#eee"/>
      <circle cx="20" cy="20" r="7" stroke="#777" strokeWidth="2" fill="#ccc"/>
      <rect x="18" y="4" width="4" height="8" rx="1" fill="#888"/>
      <rect x="18" y="28" width="4" height="8" rx="1" fill="#888"/>
      <rect x="4" y="18" width="8" height="4" rx="1" fill="#888"/>
      <rect x="28" y="18" width="8" height="4" rx="1" fill="#888"/>
    </svg>
  ),
  allCarsMotor: (
    <svg viewBox="0 0 30 30" width="28" height="28" fill="none">
      <circle cx="15" cy="15" r="13" fill="#e33"/>
      <text x="15" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">D</text>
    </svg>
  ),
  dealerCars: (
    <svg viewBox="0 0 70 30" width="56" height="24" fill="none">
      <rect x="2" y="12" width="44" height="12" rx="3" fill="#89c"/>
      <rect x="10" y="6" width="26" height="10" rx="3" fill="#78b"/>
      <circle cx="15" cy="25" r="4" fill="#445"/>
      <circle cx="40" cy="25" r="4" fill="#445"/>
      <rect x="48" y="12" width="18" height="12" rx="2" fill="#aaa"/>
      <rect x="50" y="14" width="6" height="6" rx="1" fill="#ddd"/>
    </svg>
  ),
  vintageCar: (
    <svg viewBox="0 0 60 30" width="48" height="24" fill="none">
      <rect x="4" y="13" width="50" height="11" rx="2" fill="#c8a060"/>
      <path d="M10 13 Q18 4 35 4 L48 13Z" fill="#b8904f"/>
      <circle cx="14" cy="25" r="4.5" fill="#333"/>
      <circle cx="44" cy="25" r="4.5" fill="#333"/>
      <rect x="8" y="14" width="8" height="6" rx="1" fill="#ffd"/>
      <rect x="30" y="14" width="10" height="6" rx="1" fill="#ffd"/>
      <circle cx="52" cy="17" r="3" fill="#daa"/>
    </svg>
  ),
  vintageBike: (
    <svg viewBox="0 0 50 30" width="40" height="24" fill="none">
      <ellipse cx="38" cy="20" rx="9" ry="9" fill="#555"/>
      <ellipse cx="12" cy="20" rx="9" ry="9" fill="#555"/>
      <ellipse cx="38" cy="20" rx="5" ry="5" fill="#888"/>
      <ellipse cx="12" cy="20" rx="5" ry="5" fill="#888"/>
      <path d="M12 20 L25 8 L38 20" stroke="#c8a060" strokeWidth="3" fill="none"/>
      <path d="M25 8 L28 4" stroke="#999" strokeWidth="2"/>
    </svg>
  ),
  coachBus: (
    <svg viewBox="0 0 70 30" width="56" height="24" fill="none">
      <rect x="2" y="6" width="62" height="18" rx="3" fill="#6af"/>
      <rect x="4" y="8" width="8" height="8" rx="1" fill="#ddf"/>
      <rect x="14" y="8" width="8" height="8" rx="1" fill="#ddf"/>
      <rect x="24" y="8" width="8" height="8" rx="1" fill="#ddf"/>
      <rect x="34" y="8" width="8" height="8" rx="1" fill="#ddf"/>
      <rect x="44" y="8" width="8" height="8" rx="1" fill="#ddf"/>
      <circle cx="15" cy="26" r="4" fill="#333"/>
      <circle cx="55" cy="26" r="4" fill="#333"/>
    </svg>
  ),
  carExtras: (
    <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
      <circle cx="20" cy="20" r="14" fill="#eee" stroke="#bbb" strokeWidth="2"/>
      <path d="M14 20 Q20 10 26 20 Q20 30 14 20Z" fill="#aaa"/>
      <circle cx="20" cy="20" r="4" fill="#888"/>
    </svg>
  ),
  boat: (
    <svg viewBox="0 0 60 30" width="48" height="24" fill="none">
      <path d="M4 18 Q30 8 56 18 L50 26 Q30 30 10 26Z" fill="#6af"/>
      <path d="M28 4 L28 18" stroke="#999" strokeWidth="2"/>
      <path d="M28 4 L44 14 L28 16Z" fill="#eee"/>
    </svg>
  ),
  breaking: (
    <svg viewBox="0 0 60 30" width="48" height="24" fill="none">
      <rect x="6" y="12" width="48" height="12" rx="3" fill="#c44"/>
      <rect x="14" y="5" width="24" height="11" rx="3" fill="#a33"/>
      <circle cx="16" cy="25" r="4" fill="#222"/>
      <circle cx="44" cy="25" r="4" fill="#222"/>
      <line x1="10" y1="8" x2="50" y2="22" stroke="#ff8" strokeWidth="2"/>
    </svg>
  ),
  motorbikeExtras: (
    <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
      <ellipse cx="20" cy="24" rx="14" ry="10" fill="#e44"/>
      <ellipse cx="20" cy="22" rx="10" ry="7" fill="#c33"/>
      <rect x="16" y="10" width="8" height="6" rx="2" fill="#aaa"/>
    </svg>
  ),
  newCar: (
    <svg viewBox="0 0 60 30" width="48" height="24" fill="none">
      <rect x="6" y="12" width="48" height="12" rx="3" fill="#e44"/>
      <rect x="14" y="5" width="26" height="11" rx="3" fill="#c33"/>
      <circle cx="17" cy="25" r="4" fill="#222"/>
      <circle cx="43" cy="25" r="4" fill="#222"/>
      <rect x="10" y="14" width="8" height="6" rx="1" fill="#faa"/>
      <rect x="36" y="14" width="8" height="6" rx="1" fill="#faa"/>
    </svg>
  ),
  motorbike: (
    <svg viewBox="0 0 50 30" width="40" height="24" fill="none">
      <ellipse cx="38" cy="21" rx="8" ry="8" fill="#c44"/>
      <ellipse cx="12" cy="21" rx="8" ry="8" fill="#c44"/>
      <ellipse cx="38" cy="21" rx="4.5" ry="4.5" fill="#e66"/>
      <ellipse cx="12" cy="21" rx="4.5" ry="4.5" fill="#e66"/>
      <path d="M12 21 L22 9 L38 21" stroke="#444" strokeWidth="2.5" fill="none"/>
      <path d="M22 9 L26 5" stroke="#888" strokeWidth="2"/>
    </svg>
  ),
  camper: (
    <svg viewBox="0 0 70 30" width="56" height="24" fill="none">
      <rect x="2" y="8" width="58" height="16" rx="3" fill="#adc"/>
      <rect x="2" y="8" width="18" height="16" rx="2" fill="#8ba"/>
      <rect x="4" y="10" width="14" height="10" rx="1" fill="#dfd"/>
      <circle cx="14" cy="26" r="4" fill="#444"/>
      <circle cx="50" cy="26" r="4" fill="#444"/>
      <rect x="24" y="10" width="8" height="6" rx="1" fill="#cec"/>
    </svg>
  ),
  caravan: (
    <svg viewBox="0 0 70 30" width="56" height="24" fill="none">
      <rect x="8" y="6" width="54" height="18" rx="3" fill="#dde"/>
      <rect x="10" y="8" width="8" height="8" rx="1" fill="#bbf"/>
      <rect x="22" y="8" width="8" height="8" rx="1" fill="#bbf"/>
      <rect x="34" y="8" width="8" height="8" rx="1" fill="#bbf"/>
      <rect x="2" y="18" width="8" height="4" rx="1" fill="#aab"/>
      <circle cx="22" cy="26" r="4" fill="#556"/>
      <circle cx="54" cy="26" r="4" fill="#556"/>
    </svg>
  ),
  plant: (
    <svg viewBox="0 0 60 35" width="48" height="28" fill="none">
      <rect x="2" y="18" width="40" height="12" rx="3" fill="#e90"/>
      <rect x="28" y="8" width="14" height="14" rx="2" fill="#c80"/>
      <rect x="8" y="6" width="22" height="16" rx="2" fill="#da0"/>
      <circle cx="12" cy="32" r="5" fill="#444"/>
      <circle cx="34" cy="32" r="5" fill="#444"/>
    </svg>
  ),
  rallyCar: (
    <svg viewBox="0 0 60 30" width="48" height="24" fill="none">
      <rect x="4" y="13" width="52" height="11" rx="2" fill="#88c"/>
      <path d="M10 13 Q20 3 40 3 L54 13Z" fill="#66a"/>
      <circle cx="14" cy="25" r="4" fill="#222"/>
      <circle cx="46" cy="25" r="4" fill="#222"/>
      <rect x="22" y="13" width="16" height="7" rx="1" fill="#aaf"/>
      <rect x="0" y="17" width="6" height="4" rx="1" fill="#f80"/>
      <rect x="54" y="17" width="6" height="4" rx="1" fill="#f80"/>
    </svg>
  ),
  boatExtras: (
    <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
      <path d="M8 28 Q20 18 32 28 L28 34 Q20 36 12 34Z" fill="#6af"/>
      <circle cx="20" cy="16" r="6" fill="#8bc"/>
      <path d="M20 10 L20 4" stroke="#888" strokeWidth="2"/>
    </svg>
  ),
  otherMotor: (
    <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
      <circle cx="20" cy="20" r="16" fill="#eee" stroke="#ccc" strokeWidth="2"/>
      <text x="20" y="26" textAnchor="middle" fill="#aaa" fontSize="18" fontWeight="bold">?</text>
    </svg>
  ),
};

const categories = [
  [
    { label: 'Cars', icon: icons.car },
    { label: 'Commercials', icon: icons.commercial, highlight: true },
    { label: 'Scooters', icon: icons.scooter },
    { label: 'Trucks', icon: icons.truck },
    { label: 'Trailers', icon: icons.trailer },
    { label: 'Quads', icon: icons.quad, highlight: true },
    { label: 'Modified Cars', icon: icons.modifiedCar },
    { label: 'Car Parts', icon: icons.carParts },
    { label: 'All Cars & Motor', icon: icons.allCarsMotor, highlight: true },
  ],
  [
    { label: 'Cars from Dealerships', icon: icons.dealerCars },
    { label: 'Vintage Cars', icon: icons.vintageCar },
    { label: 'Vintage Bikes', icon: icons.vintageBike },
    { label: 'Coaches & Buses', icon: icons.coachBus },
    { label: 'Car Extras', icon: icons.carExtras },
    { label: 'Boats & Jet Skis', icon: icons.boat },
    { label: 'Breaking & Repairables', icon: icons.breaking },
    { label: 'Motorbike Extras', icon: icons.motorbikeExtras },
  ],
  [
    { label: 'New Cars', icon: icons.newCar },
    { label: 'Motorbikes', icon: icons.motorbike, highlight: true },
    { label: 'Campers', icon: icons.camper },
    { label: 'Caravans', icon: icons.caravan },
    { label: 'Plant Machinery', icon: icons.plant, highlight: true },
    { label: 'Rally Cars', icon: icons.rallyCar },
    { label: 'Boat Extras', icon: icons.boatExtras },
    { label: 'Other Motor', icon: icons.otherMotor },
  ],
];

function CategoryRow({ label, icon, highlight }) {
  return (
    <button className="flex items-center justify-between w-full py-2.5 border-b border-border last:border-0 hover:bg-secondary/40 px-2 rounded transition-colors group">
      <div className="flex items-center gap-3">
        <div className="w-12 flex items-center justify-center">{icon}</div>
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