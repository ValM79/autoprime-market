import React, { useState, useEffect } from 'react';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import { base44 } from '@/api/base44Client';
import { GitCompare, Heart, MessageSquare } from 'lucide-react';
import ContactModal from './ContactModal';

const CAR_IMAGES = [
  'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/c66d362f5_generated_9b845e77.png',
  'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/5c1b2099a_generated_c25137b3.png',
  'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/c5bb20e30_generated_9da92ea0.png',
];

export const SAMPLE_CARS = [
  {
    id: 1,
    year: '2022',
    name: 'Volkswagen Golf',
    km: '34,200km',
    fuel: '1.5 Petrol',
    transmission: 'Automatic',
    bodyType: 'Hatchback',
    engine: '1.5L',
    color: 'White',
    owners: '1',
    nct: 'Jan 2026',
    price: '€24,900',
    image: CAR_IMAGES[0],
  },
  {
    id: 2,
    year: '2021',
    name: 'Toyota Corolla',
    km: '51,000km',
    fuel: '1.8 Hybrid',
    transmission: 'Automatic',
    bodyType: 'Saloon',
    engine: '1.8L',
    color: 'Silver',
    owners: '2',
    nct: 'Mar 2025',
    price: '€21,500',
    image: CAR_IMAGES[1],
  },
  {
    id: 3,
    year: '2023',
    name: 'BMW 3 Series',
    km: '18,400km',
    fuel: '2.0 Diesel',
    transmission: 'Automatic',
    bodyType: 'Saloon',
    engine: '2.0L',
    color: 'Black',
    owners: '1',
    nct: 'Jun 2027',
    price: '€42,000',
    image: CAR_IMAGES[2],
  },
  {
    id: 4,
    year: '2020',
    name: 'Ford Focus',
    km: '72,100km',
    fuel: '1.0 Petrol',
    transmission: 'Manual',
    bodyType: 'Hatchback',
    engine: '1.0L',
    color: 'Blue',
    owners: '2',
    nct: 'Sep 2025',
    price: '€14,750',
    image: CAR_IMAGES[0],
  },
  {
    id: 5,
    year: '2022',
    name: 'Hyundai Tucson',
    km: '29,800km',
    fuel: '1.6 Hybrid',
    transmission: 'Automatic',
    bodyType: 'SUV',
    engine: '1.6L',
    color: 'Grey',
    owners: '1',
    nct: 'Nov 2026',
    price: '€32,500',
    image: CAR_IMAGES[1],
  },
  {
    id: 6,
    year: '2021',
    name: 'Skoda Octavia',
    km: '44,600km',
    fuel: '1.5 Petrol',
    transmission: 'Manual',
    bodyType: 'Estate',
    engine: '1.5L',
    color: 'Red',
    owners: '1',
    nct: 'May 2026',
    price: '€19,900',
    image: CAR_IMAGES[2],
  },
];

export default function CarListings({ selectedIds, onToggleCompare }) {
  const { lang } = useLang();
  const [favoriteIds, setFavoriteIds] = useState(new Set());
  const [contactCar, setContactCar] = useState(null);

  useEffect(() => {
    base44.entities.Favorite.list('-created_date', 100).then(favs => {
      setFavoriteIds(new Set(favs.map(f => f.car_id)));
    }).catch(() => {});
  }, []);

  const toggleFavorite = async (car) => {
    const isFav = favoriteIds.has(car.id);
    if (isFav) {
      const favs = await base44.entities.Favorite.filter({ car_id: car.id });
      for (const f of favs) await base44.entities.Favorite.delete(f.id);
      setFavoriteIds(prev => { const s = new Set(prev); s.delete(car.id); return s; });
    } else {
      await base44.entities.Favorite.create({ car_id: car.id, car_name: car.name, car_year: car.year, car_price: car.price, car_km: car.km, car_fuel: car.fuel, car_image: car.image });
      setFavoriteIds(prev => new Set([...prev, car.id]));
    }
  };

  return (
    <>
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{t(lang, 'listings_title')}</h2>
      <p className="text-muted-foreground mb-8">{t(lang, 'listings_subtitle')}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SAMPLE_CARS.map((car) => {
          const isSelected = selectedIds.includes(car.id);
          const isDisabled = !isSelected && selectedIds.length >= 4;

          return (
            <div
              key={car.id}
              className={`group bg-card rounded-xl overflow-hidden border shadow-sm transition-all duration-300 ${
                isSelected ? 'border-primary ring-2 ring-primary/30 shadow-md' : 'border-border hover:shadow-lg'
              }`}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                  {car.year}
                </div>
                <div className="absolute bottom-3 right-3 flex gap-1.5">
                  <button
                    onClick={() => setContactCar(car)}
                    className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    title={t(lang, 'contact_title')}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => toggleFavorite(car)}
                    className={`w-8 h-8 rounded-full shadow flex items-center justify-center transition-colors ${
                      favoriteIds.has(car.id) ? 'bg-rose-500 text-white' : 'bg-white text-foreground hover:bg-rose-500 hover:text-white'
                    }`}
                    title={t(lang, 'save_favorite')}
                  >
                    <Heart className={`w-3.5 h-3.5 ${favoriteIds.has(car.id) ? 'fill-white' : ''}`} />
                  </button>
                </div>
                <button
                  onClick={() => !isDisabled && onToggleCompare(car.id)}
                  disabled={isDisabled}
                  className={`absolute top-3 right-3 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full shadow transition-all ${
                    isSelected
                      ? 'bg-primary text-white'
                      : isDisabled
                      ? 'bg-white/70 text-muted-foreground cursor-not-allowed'
                      : 'bg-white text-foreground hover:bg-primary hover:text-white'
                  }`}
                >
                  <GitCompare className="w-3.5 h-3.5" />
                  {isSelected ? t(lang, 'compare_added') : isDisabled ? t(lang, 'compare_limit') : t(lang, 'compare_add')}
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">{car.year} {car.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{car.km} | {car.fuel}</p>
                <p className="text-lg font-bold text-foreground">{car.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    {contactCar && <ContactModal car={{ ...contactCar, dealer: { name: 'AntRatu Dealer', phone: '+370 600 12345', email: 'info@antratu.lt' } }} onClose={() => setContactCar(null)} />}
    </>
  );
}