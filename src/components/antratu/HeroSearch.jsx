import React, { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import AdvancedFilters from './AdvancedFilters';
import { CAR_MODELS } from '@/lib/carModels';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const HERO_IMAGE = 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/caf9b03bd_generated_577d304f.png';

const makes = Object.keys(CAR_MODELS);
const bodyTypes = ['Convertible', 'Coupe', 'Estate', 'Hatchback', 'MPV', 'Pickup', 'Saloon', 'SUV', 'Van'];
const years = Array.from({ length: 28 }, (_, i) => String(2027 - i));
const prices = ['€5,000', '€10,000', '€15,000', '€20,000', '€25,000', '€30,000', '€40,000', '€50,000', '€60,000', '€75,000', '€100,000'];

export default function HeroSearch() {
  const { lang } = useLang();
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [advFilters, setAdvFilters] = useState({});
  const [selectedMake, setSelectedMake] = useState('');

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="Family with blue car" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md">
            <h1 className="text-xl md:text-2xl font-bold text-foreground mb-5">{t(lang, 'hero_title')}</h1>
            <div className="grid grid-cols-2 gap-3">
              <Select value={selectedMake} onValueChange={(v) => setSelectedMake(v)}>
                <SelectTrigger className="col-span-1 h-11 bg-secondary border-0 text-sm">
                  <SelectValue placeholder={t(lang, 'hero_make')} />
                </SelectTrigger>
                <SelectContent>
                  {makes.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                </SelectContent>
              </Select>

              <Select disabled={!selectedMake}>
                <SelectTrigger className={`col-span-1 h-11 bg-secondary border-0 text-sm ${!selectedMake ? 'opacity-50' : ''}`}>
                  <SelectValue placeholder={t(lang, 'hero_model')} />
                </SelectTrigger>
                <SelectContent>
                  {(CAR_MODELS[selectedMake] || []).map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
                  <SelectValue placeholder={t(lang, 'hero_min_year')} />
                </SelectTrigger>
                <SelectContent>
                  {years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
                  <SelectValue placeholder={t(lang, 'hero_max_year')} />
                </SelectTrigger>
                <SelectContent>
                  {years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
                  <SelectValue placeholder={t(lang, 'hero_min_price')} />
                </SelectTrigger>
                <SelectContent>
                  {prices.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
                  <SelectValue placeholder={t(lang, 'hero_max_price')} />
                </SelectTrigger>
                <SelectContent>
                  {prices.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
                  <SelectValue placeholder={t(lang, 'hero_body_type')} />
                </SelectTrigger>
                <SelectContent>
                  {bodyTypes.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                </SelectContent>
              </Select>

              <Button className="h-11 bg-primary hover:bg-primary/90 text-white font-semibold text-sm rounded-lg">
                <Search className="w-4 h-4 mr-2" />
                {t(lang, 'hero_search')}
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setShowAdvanced(p => !p)}
              className="text-xs text-primary font-semibold hover:underline mt-1 text-left"
            >
              {showAdvanced ? t(lang, 'filter_hide_advanced') : t(lang, 'filter_show_advanced')}
            </button>
            {showAdvanced && <AdvancedFilters filters={advFilters} onChange={setAdvFilters} />}
          </div>

          <div className="hidden lg:flex flex-col items-end gap-6 text-white pt-8">
            <div className="text-right">
              <h2 className="text-3xl xl:text-4xl font-bold leading-tight drop-shadow-lg">{t(lang, 'hero_tagline')}</h2>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg px-8 h-12 text-base shadow-lg">
              {t(lang, 'hero_value_car')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}