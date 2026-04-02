import React from 'react';
import { Zap, GraduationCap, Fuel, Truck, BatteryCharging, Wallet, Car, Users, Shield, Tag, Wrench, MapPin } from 'lucide-react';

const EV_IMG = '/__generating__/img_0c25767242bc.png';
const LEARNER_IMG = '/__generating__/img_5df379cd6c0d.png';
const HYBRID_IMG = '/__generating__/img_ae8970d4569a.png';

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

export default function HubsSection() {
  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
          Carzone Hubs
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Tips and advice for buying your next car.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {hubs.map((hub) => (
            <button
              key={hub.label}
              className="group relative bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 aspect-square flex flex-col items-center justify-center gap-2 p-4"
            >
              {hub.image ? (
                <>
                  <img src={hub.image} alt={hub.label} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <hub.icon className="w-7 h-7 text-primary" />
                    <span className="text-xs sm:text-sm font-semibold text-foreground text-center leading-tight">{hub.label}</span>
                  </div>
                </>
              ) : (
                <>
                  <hub.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-semibold text-foreground text-center leading-tight">{hub.label}</span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}