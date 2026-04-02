import React, { useState, useEffect, useRef } from 'react';
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

// Clone items at start and end for infinite effect
const CLONES = 3;
const items = [
  ...hubs.slice(-CLONES),
  ...hubs,
  ...hubs.slice(0, CLONES),
];

export default function HubsSection() {
  const [index, setIndex] = useState(CLONES);
  const [transitioning, setTransitioning] = useState(true);
  const timerRef = useRef(null);

  const goTo = (newIndex, animate = true) => {
    setTransitioning(animate);
    setIndex(newIndex);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Auto-play
  useEffect(() => {
    timerRef.current = setInterval(() => goTo(prev => prev + 1), 3000);
    return () => clearInterval(timerRef.current);
  }, [index]);

  // Handle infinite loop jump (no animation)
  const handleTransitionEnd = () => {
    if (index >= hubs.length + CLONES) {
      goTo(CLONES, false);
    } else if (index < CLONES) {
      goTo(hubs.length + CLONES - 1, false);
    }
  };

  const offset = -(index * (100 / 3)) + '%';

  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
          Carzone Hubs
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Tips and advice for buying your next car.
        </p>

        <div className="relative flex items-center gap-3">
          <button
            onClick={prev}
            className="flex-shrink-0 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-card transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <div className="flex-1 overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(calc(${offset} + 0%))`,
                transition: transitioning ? 'transform 0.45s ease-in-out' : 'none',
                width: `${(items.length / 3) * 100}%`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {items.map((hub, i) => (
                <div
                  key={i}
                  style={{ width: `${100 / items.length}%` }}
                  className="px-2"
                >
                  <button
                    className="group relative w-full bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-6 aspect-square"
                  >
                    {hub.image && (
                      <img
                        src={hub.image}
                        alt={hub.label}
                        className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-opacity"
                      />
                    )}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <hub.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-semibold text-foreground text-center leading-tight">{hub.label}</span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="flex-shrink-0 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-card transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {hubs.map((_, i) => {
            const activeIndex = ((index - CLONES) % hubs.length + hubs.length) % hubs.length;
            return (
              <button
                key={i}
                onClick={() => goTo(i + CLONES)}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-primary w-5' : 'bg-border w-2'}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}