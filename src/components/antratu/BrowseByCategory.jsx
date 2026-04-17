import React from 'react';
import { ChevronRight } from 'lucide-react';

const CATEGORIES = [
  { label: 'Cars', col: 1 },
  { label: 'Commercials', col: 1 },
  { label: 'Scooters', col: 1 },
  { label: 'Trucks', col: 1 },
  { label: 'Trailers', col: 1, highlight: true },
  { label: 'Quads', col: 1 },
  { label: 'Modified Cars', col: 1 },
  { label: 'Car Parts', col: 1 },
  { label: 'All Cars & Motor', col: 1, highlight: true },
  { label: 'Cars from Dealerships', col: 2 },
  { label: 'Vintage Cars', col: 2 },
  { label: 'Vintage Bikes', col: 2 },
  { label: 'Coaches & Buses', col: 2 },
  { label: 'Car Extras', col: 2 },
  { label: 'Boats & Jet Skis', col: 2 },
  { label: 'Motorbike Extras', col: 2 },
  { label: 'Breaking & Repairables', col: 2 },
  { label: 'New Cars', col: 3 },
  { label: 'Motorbikes', col: 3 },
  { label: 'Campers', col: 3 },
  { label: 'Caravans', col: 3 },
  { label: 'Plant Machinery', col: 3 },
  { label: 'Rally Cars', col: 3 },
  { label: 'Boat Extras', col: 3 },
  { label: 'Other Motor', col: 3 },
];

const col1 = CATEGORIES.filter(c => c.col === 1);
const col2 = CATEGORIES.filter(c => c.col === 2);
const col3 = CATEGORIES.filter(c => c.col === 3);

const SPRITE = 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/ece5f876f_B30D51D8-CEFA-41DF-86FA-1C44355226CA.png';

const ICON_MAP = {
  'Cars':                  { x: 0,   y: 0   },
  'Commercials':           { x: 0,   y: 40  },
  'Scooters':              { x: 0,   y: 80  },
  'Trucks':                { x: 0,   y: 120 },
  'Trailers':              { x: 0,   y: 160 },
  'Quads':                 { x: 0,   y: 200 },
  'Modified Cars':         { x: 0,   y: 240 },
  'Car Parts':             { x: 0,   y: 280 },
  'All Cars & Motor':      { x: 0,   y: 320 },
  'Cars from Dealerships': { x: 320, y: 0   },
  'Vintage Cars':          { x: 320, y: 40  },
  'Vintage Bikes':         { x: 320, y: 80  },
  'Coaches & Buses':       { x: 320, y: 120 },
  'Car Extras':            { x: 320, y: 160 },
  'Boats & Jet Skis':      { x: 320, y: 200 },
  'Motorbike Extras':      { x: 320, y: 240 },
  'Breaking & Repairables':{ x: 320, y: 280 },
  'New Cars':              { x: 680, y: 0   },
  'Motorbikes':            { x: 680, y: 40  },
  'Campers':               { x: 680, y: 80  },
  'Caravans':              { x: 680, y: 120 },
  'Plant Machinery':       { x: 680, y: 160 },
  'Rally Cars':            { x: 680, y: 200 },
  'Boat Extras':           { x: 680, y: 240 },
  'Other Motor':           { x: 680, y: 280 },
};

function CategoryRow({ label, highlight }) {
  const icon = ICON_MAP[label];
  return (
    <a
      href="#"
      className="flex items-center gap-3 py-2.5 border-b border-border last:border-0 hover:bg-secondary/50 px-2 rounded transition-colors group"
    >
      <div
        className="w-10 h-10 shrink-0 rounded overflow-hidden"
        style={{
          backgroundImage: `url(${SPRITE})`,
          backgroundPosition: icon ? `-${icon.x}px -${icon.y}px` : '0 0',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1024px auto',
        }}
      />
      <span className={`text-sm flex-1 ${highlight ? 'text-primary font-semibold' : 'text-foreground'} group-hover:text-primary transition-colors`}>
        {label}
      </span>
      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
    </a>
  );
}

export default function BrowseByCategory() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-14">
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Browse by category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 divide-y md:divide-y-0 md:divide-x divide-border">
        <div className="divide-y divide-border">
          {col1.map(c => <CategoryRow key={c.label} label={c.label} highlight={c.highlight} />)}
        </div>
        <div className="divide-y divide-border md:px-8">
          {col2.map(c => <CategoryRow key={c.label} label={c.label} highlight={c.highlight} />)}
        </div>
        <div className="divide-y divide-border md:pl-8">
          {col3.map(c => <CategoryRow key={c.label} label={c.label} highlight={c.highlight} />)}
        </div>
      </div>
    </section>
  );
}