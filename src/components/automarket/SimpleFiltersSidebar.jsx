import React, { useState } from 'react';
import { Star, Search, ChevronDown, ChevronUp } from 'lucide-react';

function Section({ title, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border py-4">
      <button onClick={() => setOpen(v => !v)} className="flex items-center justify-between w-full text-base font-semibold text-foreground">
        {title}
        {open ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  );
}

export default function SimpleFiltersSidebar({ onReset }) {
  const [county, setCounty] = useState('All Ireland');
  const [radius, setRadius] = useState('+5km');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [sellerTypes, setSellerTypes] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [adType, setAdType] = useState('All');

  const handleReset = () => {
    setCounty('All Ireland');
    setRadius('+5km');
    setPriceFrom('');
    setPriceTo('');
    setSellerTypes([]);
    setRatings([]);
    setAdType('All');
    if (onReset) onReset();
  };

  const toggleArr = (setter, val) => setter(prev =>
    prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val]
  );

  return (
    <div className="text-base ml-1">
      {/* Save Search */}
      <button className="flex items-center justify-center gap-2 w-full bg-primary text-white rounded-lg px-4 py-3 hover:bg-primary/90 transition-colors mb-5 font-semibold text-base">
        ★ Save Search
      </button>

      {/* Filters header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-bold text-lg text-foreground">Filters</span>
        <button onClick={handleReset} className="text-sm text-primary hover:underline mx-3">Reset All</button>
      </div>

      {/* Previous searches */}
      <button className="flex items-center gap-2 w-full border border-border rounded-lg px-4 py-3 hover:bg-secondary transition-colors mb-4 text-muted-foreground text-base">
        <Search className="w-5 h-5" /> View your previous searches
      </button>

      {/* Location */}
      <Section title="Location">
        <div className="flex flex-col gap-2">
          <select value={county} onChange={e => setCounty(e.target.value)}
            className="w-full appearance-none border border-border rounded-lg px-4 py-3 text-base bg-white focus:outline-none focus:ring-1 focus:ring-primary/40 pr-8 text-foreground">
            {['All Ireland', 'Dublin', 'Cork', 'Galway', 'Limerick', 'Waterford', 'Donegal', 'Kerry', 'Wexford'].map(c =>
              <option key={c} value={c}>{c}</option>
            )}
          </select>
          <select value={radius} onChange={e => setRadius(e.target.value)}
            className="w-full appearance-none border border-border rounded-lg px-4 py-3 text-base bg-white focus:outline-none focus:ring-1 focus:ring-primary/40 pr-8 text-foreground">
            {['+5km', '+10km', '+20km', '+50km', '+100km', 'Nationwide'].map(r =>
              <option key={r} value={r}>{r}</option>
            )}
          </select>
        </div>
      </Section>

      {/* Price */}
      <Section title="Price">
        <div>
          <p className="text-sm text-muted-foreground mb-2">€ EUR</p>
          <div className="grid grid-cols-2 gap-2">
            <input type="number" value={priceFrom} onChange={e => setPriceFrom(e.target.value)} placeholder="From" className="border border-border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-primary/40 w-full" />
            <input type="number" value={priceTo} onChange={e => setPriceTo(e.target.value)} placeholder="To" className="border border-border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-primary/40 w-full" />
          </div>
        </div>
      </Section>

      {/* Seller type */}
      <Section title="Seller type">
        <div className="flex flex-col gap-3">
          {[['Dealership'], ['Private Seller']].map(([label]) => (
            <label key={label} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={sellerTypes.includes(label)} onChange={() => toggleArr(setSellerTypes, label)} className="w-5 h-5 accent-primary" />
              <span className="text-base text-foreground">{label}</span>
            </label>
          ))}
        </div>
      </Section>

      {/* Rating */}
      <Section title="Rating">
        <div className="flex flex-col gap-3">
          {[5,4,3,2,1].map(s => (
            <label key={s} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={ratings.includes(s)} onChange={() => toggleArr(setRatings, s)} className="w-5 h-5 accent-primary" />
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className={`w-4 h-4 ${i <= s ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 fill-gray-200'}`} />)}
              </div>
              <span className="text-base text-muted-foreground">{s}+</span>
            </label>
          ))}
        </div>
      </Section>

      {/* Ad type */}
      <Section title="Ad type">
        <div className="flex flex-col gap-3">
          {['All', 'For Sale', 'Wanted'].map(t => (
            <label key={t} className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="adType" checked={adType === t} onChange={() => setAdType(t)} className="w-5 h-5 accent-primary" />
              <span className="text-base text-foreground">{t}</span>
            </label>
          ))}
        </div>
      </Section>
    </div>
  );
}