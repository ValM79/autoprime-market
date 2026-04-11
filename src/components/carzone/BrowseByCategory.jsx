import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';

const categories = [
  // Column 1
  { key: 'cat_cars', emoji: '🚗' },
  { key: 'cat_commercials', emoji: '🚐' },
  { key: 'cat_scooters', emoji: '🛵' },
  { key: 'cat_trucks', emoji: '🚛' },
  { key: 'cat_trailers', emoji: '🚚' },
  { key: 'cat_quads', emoji: '🏎️' },
  { key: 'cat_modified', emoji: '🔧' },
  { key: 'cat_car_parts', emoji: '⚙️' },
  { key: 'cat_all', emoji: '🚘' },
  // Column 2
  { key: 'cat_dealerships', emoji: '🏪' },
  { key: 'cat_vintage_cars', emoji: '🚖' },
  { key: 'cat_vintage_bikes', emoji: '🏍️' },
  { key: 'cat_coaches', emoji: '🚌' },
  { key: 'cat_car_extras', emoji: '💡' },
  { key: 'cat_boats', emoji: '🚤' },
  { key: 'cat_motorbike_extras', emoji: '🪖' },
  { key: 'cat_breaking', emoji: '🔨' },
  // Column 3
  { key: 'cat_new_cars', emoji: '🆕' },
  { key: 'cat_motorbikes', emoji: '🏍️' },
  { key: 'cat_campers', emoji: '🚐' },
  { key: 'cat_caravans', emoji: '🏕️' },
  { key: 'cat_plant', emoji: '🚜' },
  { key: 'cat_rally', emoji: '🏁' },
  { key: 'cat_boat_extras', emoji: '⚓' },
  { key: 'cat_other', emoji: '❓' },
];

const col1 = categories.slice(0, 9);
const col2 = categories.slice(9, 17);
const col3 = categories.slice(17, 25);

function CategoryItem({ item, lang }) {
  return (
    <button className="flex items-center gap-3 w-full py-2.5 px-3 hover:bg-secondary rounded-lg transition-colors group border-b border-border last:border-0">
      <span className="text-xl w-8 text-center">{item.emoji}</span>
      <span className="flex-1 text-left text-sm font-medium text-foreground group-hover:text-primary transition-colors">
        {t(lang, item.key)}
      </span>
      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
    </button>
  );
}

export default function BrowseByCategory() {
  const { lang } = useLang();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-xl font-bold text-foreground mb-6">{t(lang, 'browse_title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          {col1.map((item) => <CategoryItem key={item.key} item={item} lang={lang} />)}
        </div>
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          {col2.map((item) => <CategoryItem key={item.key} item={item} lang={lang} />)}
        </div>
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          {col3.map((item) => <CategoryItem key={item.key} item={item} lang={lang} />)}
        </div>
      </div>
    </section>
  );
}