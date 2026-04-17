import React from 'react';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const mileageOptions = ['10,000km', '20,000km', '30,000km', '50,000km', '75,000km', '100,000km', '150,000km', '200,000km'];
const fuelConsumptionOptions = ['3 l/100km', '5 l/100km', '7 l/100km', '9 l/100km', '12 l/100km', '15 l/100km'];
const doorOptions = ['2', '3', '4', '5'];
const transmissionOptions = ['Manual', 'Automatic', 'Semi-Automatic'];
const locationOptions = [
  'Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys',
  'Alytus', 'Marijampolė', 'Mažeikiai', 'Jonava', 'Utena',
];

export default function AdvancedFilters({ filters, onChange }) {
  const { lang } = useLang();

  const set = (key, val) => onChange({ ...filters, [key]: val });

  return (
    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border mt-1">
      <Select value={filters.minMileage} onValueChange={(v) => set('minMileage', v)}>
        <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
          <SelectValue placeholder={t(lang, 'filter_min_mileage')} />
        </SelectTrigger>
        <SelectContent>
          {mileageOptions.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
        </SelectContent>
      </Select>

      <Select value={filters.maxMileage} onValueChange={(v) => set('maxMileage', v)}>
        <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
          <SelectValue placeholder={t(lang, 'filter_max_mileage')} />
        </SelectTrigger>
        <SelectContent>
          {mileageOptions.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
        </SelectContent>
      </Select>

      <Select value={filters.maxFuelConsumption} onValueChange={(v) => set('maxFuelConsumption', v)}>
        <SelectTrigger className="h-11 bg-secondary border-0 text-sm col-span-2">
          <SelectValue placeholder={t(lang, 'filter_fuel_consumption')} />
        </SelectTrigger>
        <SelectContent>
          {fuelConsumptionOptions.map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}
        </SelectContent>
      </Select>

      <Select value={filters.doors} onValueChange={(v) => set('doors', v)}>
        <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
          <SelectValue placeholder={t(lang, 'filter_doors')} />
        </SelectTrigger>
        <SelectContent>
          {doorOptions.map(d => <SelectItem key={d} value={d}>{d} {t(lang, 'filter_doors_label')}</SelectItem>)}
        </SelectContent>
      </Select>

      <Select value={filters.transmission} onValueChange={(v) => set('transmission', v)}>
        <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
          <SelectValue placeholder={t(lang, 'filter_transmission')} />
        </SelectTrigger>
        <SelectContent>
          {transmissionOptions.map(tr => <SelectItem key={tr} value={tr}>{tr}</SelectItem>)}
        </SelectContent>
      </Select>

      <Select value={filters.location} onValueChange={(v) => set('location', v)}>
        <SelectTrigger className="h-11 bg-secondary border-0 text-sm col-span-2">
          <SelectValue placeholder={t(lang, 'filter_location')} />
        </SelectTrigger>
        <SelectContent>
          {locationOptions.map(loc => <SelectItem key={loc} value={loc}>{loc}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  );
}