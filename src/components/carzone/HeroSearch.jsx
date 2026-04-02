import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const HERO_IMAGE = '/__generating__/img_510a53821dd8.png';

const makes = ['Audi', 'BMW', 'Citroen', 'Dacia', 'Fiat', 'Ford', 'Honda', 'Hyundai', 'Kia', 'Land Rover', 'Mazda', 'Mercedes-Benz', 'Nissan', 'Opel', 'Peugeot', 'Renault', 'Skoda', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'];
const bodyTypes = ['Convertible', 'Coupe', 'Estate', 'Hatchback', 'MPV', 'Pickup', 'Saloon', 'SUV', 'Van'];
const years = Array.from({ length: 28 }, (_, i) => String(2027 - i));
const prices = ['€5,000', '€10,000', '€15,000', '€20,000', '€25,000', '€30,000', '€40,000', '€50,000', '€60,000', '€75,000', '€100,000'];

export default function HeroSearch() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="Family with blue car" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Search form */}
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md">
            <h1 className="text-xl md:text-2xl font-bold text-foreground mb-5">
              Search for cars in Ireland
            </h1>
            <div className="grid grid-cols-2 gap-3">
              <Select>
                <SelectTrigger className="col-span-1 h-11 bg-secondary border-0 text-sm">
                  <SelectValue placeholder="Make" />
                </SelectTrigger>
                <SelectContent>
                  {makes.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                </SelectContent>
              </Select>

              <Select disabled>
                <SelectTrigger className="col-span-1 h-11 bg-secondary border-0 text-sm opacity-50">
                  <SelectValue placeholder="Model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
                  <SelectValue placeholder="Min Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
                  <SelectValue placeholder="Max Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
                  <SelectValue placeholder="Min Price" />
                </SelectTrigger>
                <SelectContent>
                  {prices.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
                  <SelectValue placeholder="Max Price" />
                </SelectTrigger>
                <SelectContent>
                  {prices.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
                  <SelectValue placeholder="Body Type" />
                </SelectTrigger>
                <SelectContent>
                  {bodyTypes.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                </SelectContent>
              </Select>

              <Button className="h-11 bg-primary hover:bg-primary/90 text-white font-semibold text-sm rounded-lg">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Right side CTA */}
          <div className="hidden lg:flex flex-col items-end gap-6 text-white pt-8">
            <div className="text-right">
              <h2 className="text-3xl xl:text-4xl font-bold leading-tight drop-shadow-lg">
                Know what your car<br />is really worth.
              </h2>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg px-8 h-12 text-base shadow-lg">
              Value My Car
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}