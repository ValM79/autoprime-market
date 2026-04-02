import React, { useState } from 'react';
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

const ITEMS_PER_SLIDE = 3;
const totalSlides = Math.ceil(hubs.length / ITEMS_PER_SLIDE);

export default function HubsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(totalSlides - 1, c + 1));

  const visible = hubs.slice(current * ITEMS_PER_SLIDE, current * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE);

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
          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="flex-shrink-0 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-card transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          {/* Cards */}
          <div className="flex-1 grid grid-cols-3 gap-4">
            {visible.map((hub) => (
              <button
                key={hub.label}
                className="group relative bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-6 aspect-square"
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
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={current === totalSlides - 1}
            className="flex-shrink-0 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-card transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-5' : 'bg-border'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}