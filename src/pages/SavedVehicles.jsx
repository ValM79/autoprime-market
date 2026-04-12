import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import Navbar from '../components/carzone/Navbar';
import Footer from '../components/carzone/Footer';
import ContactModal from '../components/carzone/ContactModal';
import { Heart, Trash2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function SavedVehicles() {
  const { lang } = useLang();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contactCar, setContactCar] = useState(null);

  useEffect(() => {
    base44.entities.Favorite.list('-created_date', 50).then(data => {
      setFavorites(data);
      setLoading(false);
    });
  }, []);

  const removeFavorite = async (id) => {
    await base44.entities.Favorite.delete(id);
    setFavorites(prev => prev.filter(f => f.id !== id));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-10 w-full">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-7 h-7 text-primary fill-primary" />
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{t(lang, 'saved_title')}</h1>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-slate-200 border-t-primary rounded-full animate-spin" />
          </div>
        ) : favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <Heart className="w-16 h-16 text-border" />
            <h2 className="text-xl font-semibold text-foreground">{t(lang, 'saved_empty_title')}</h2>
            <p className="text-muted-foreground max-w-sm">{t(lang, 'saved_empty_desc')}</p>
            <Link to="/">
              <Button className="bg-primary text-white rounded-full px-8 mt-2">{t(lang, 'saved_browse')}</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {favorites.map((fav) => (
              <div key={fav.id} className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={fav.car_image} alt={fav.car_name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded">{fav.car_year}</div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">{fav.car_year} {fav.car_name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{fav.car_km} | {fav.car_fuel}</p>
                  <p className="text-lg font-bold text-foreground mb-4">{fav.car_price}</p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs gap-1.5 border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => setContactCar({ id: fav.car_id, name: fav.car_name, year: fav.car_year, dealer: { name: 'AntRatu Dealer', phone: '+370 600 12345', email: 'info@antratu.lt' } })}
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      {t(lang, 'contact_title')}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1.5 text-xs border-destructive text-destructive hover:bg-destructive hover:text-white"
                      onClick={() => removeFavorite(fav.id)}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      {t(lang, 'saved_remove')}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
      {contactCar && <ContactModal car={contactCar} onClose={() => setContactCar(null)} />}
    </div>
  );
}