import React, { useRef, useState } from 'react';
import { Zap, GraduationCap, Fuel, Truck, BatteryCharging, Wallet, Car, Users, Shield, Tag, Wrench, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const EV_IMG = 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/f7a5792ea_generated_b6c35f55.png';
const LEARNER_IMG = 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/7b713a3a4_generated_9e1d0947.png';
const HYBRID_IMG = 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/557dd077c_generated_09d0bdcb.png';

const hubs = [
  { label: 'EV Charging', icon: Zap, image: EV_IMG },
  { label: 'Learner Drivers', icon: GraduationCap, image: LEARNER_IMG },
  { label: 'Hybrid Cars', icon: Fuel, image: HYBRID_IMG },
  { label: 'Commercial', icon: Truck, image: null },
  { label: 'Electric Cars', icon: BatteryCharging, image: null },
  { label: 'Finance', icon: Wallet, image: null },
  { label: 'Classic Cars', icon: Car, image: null },
  { label: 'Family Cars', icon: Users, image: null },
  { label: 'Car Insurance', icon: Shield, image: null },
  { label: 'Selling Tips', icon: Tag, image: null },
  { label: 'Car Servicing', icon: Wrench, image: null },
  { label: 'Road Trips', icon: MapPin, image: null },
];

const CARD_WIDTH = 160;
const GAP = 12;

export default function HubsSection() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (CARD_WIDTH + GAP) * 3, behavior: 'smooth' });
    setTimeout(updateArrows, 350);
  };

  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
          Carzone Hubs
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Tips and advice for buying your next car.
        </p>

        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-card transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          {/* Scrollable track */}
          <div
            ref={trackRef}
            onScroll={updateArrows}
            className="flex gap-3 overflow-x-auto scroll-smooth pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {hubs.map((hub) => (
              <button
                key={hub.label}
                className="group relative bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex-shrink-0 flex flex-col items-center justify-center gap-2 p-4"
                style={{ width: CARD_WIDTH, height: CARD_WIDTH }}
              >
                {hub.image ? (
                  <>
                    <img src={hub.image} alt={hub.label} className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-opacity" />
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <hub.icon className="w-7 h-7 text-primary" />
                      <span className="text-xs font-semibold text-foreground text-center leading-tight">{hub.label}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <hub.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-foreground text-center leading-tight">{hub.label}</span>
                  </>
                )}
              </button>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-card transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}