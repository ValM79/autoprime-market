import React, { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import { Zap, GraduationCap, Fuel, Truck, BatteryCharging, Wallet, Car, Users, Shield, Tag, Wrench, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const EV_IMG = 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/f7a5792ea_generated_b6c35f55.png';
const LEARNER_IMG = 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/7b713a3a4_generated_9e1d0947.png';
const HYBRID_IMG = 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/557dd077c_generated_09d0bdcb.png';



export default function HubsSection() {
  const { lang } = useLang();
  const [startIndex, setStartIndex] = useState(0);

  const hubs = [
    { labelKey: 'hub_ev', icon: Zap, image: EV_IMG },
    { labelKey: 'hub_learner', icon: GraduationCap, image: LEARNER_IMG },
    { labelKey: 'hub_hybrid', icon: Fuel, image: HYBRID_IMG },
    { labelKey: 'hub_commercial', icon: Truck, image: null },
    { labelKey: 'hub_electric', icon: BatteryCharging, image: null },
    { labelKey: 'hub_finance', icon: Wallet, image: null },
    { labelKey: 'hub_classic', icon: Car, image: null },
    { labelKey: 'hub_family', icon: Users, image: null },
    { labelKey: 'hub_insurance_hub', icon: Shield, image: null },
    { labelKey: 'hub_selling', icon: Tag, image: null },
    { labelKey: 'hub_servicing', icon: Wrench, image: null },
    { labelKey: 'hub_road_trips', icon: MapPin, image: null },
  ];

  const total = hubs.length;

  const getItem = (offset) => hubs[(startIndex + offset + total) % total];

  const prev = () => setStartIndex((i) => (i - 1 + total) % total);
  const next = () => setStartIndex((i) => (i + 1) % total);

  const visible = [getItem(0), getItem(1), getItem(2)];

  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
          {t(lang, 'hubs_title')}
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          {t(lang, 'hubs_subtitle')}
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            className="flex-shrink-0 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-card transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <div className="flex-1 grid grid-cols-3 gap-4">
            {visible.map((hub, idx) => (
              <button
                key={`${hub.label}-${idx}`}
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
                  <span className="text-sm font-semibold text-foreground text-center leading-tight">{t(lang, hub.labelKey)}</span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={next}
            className="flex-shrink-0 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-card transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}