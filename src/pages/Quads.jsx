import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ArrowLeft } from 'lucide-react';
import ListingCard from '../components/automarket/ListingCard';
import Navbar from '../components/automarket/Navbar';
import Footer from '../components/automarket/Footer';
import SimpleFiltersSidebar from '../components/automarket/SimpleFiltersSidebar';

const listings = [
{
  id: 1,
  sellerType: 'Private Seller',
  sellerRating: 4.8,
  spotlight: true,
  title: 'Yamaha YFZ450R 2023 – Off-road',
  year: '2023',
  fuel: 'Petrol',
  mileage: '1,200 km',
  timeAgo: '1 day',
  location: 'Dublin, Dublin',
  price: '€4,900',
  photos: 13,
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'
},
{
  id: 2,
  sellerType: 'Dealership',
  sellerRating: 4.9,
  spotlight: true,
  title: 'Honda TRX420 2022 – Sport',
  year: '2022',
  fuel: 'Petrol',
  mileage: '3,500 km',
  timeAgo: '3 days',
  location: 'Cork, Cork',
  price: '€4,200',
  photos: 15,
  image: 'https://images.unsplash.com/photo-1537350994076-726c6e5e0e7d?w=600&q=80'
},
{
  id: 3,
  sellerType: 'Private Seller',
  sellerRating: 4.5,
  spotlight: false,
  title: 'Polaris Sportsman 2021',
  year: '2021',
  fuel: 'Petrol',
  mileage: '7,200 km',
  timeAgo: '1 week',
  location: 'Galway, Galway',
  price: '€3,600',
  photos: 11,
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'
},
{
  id: 4,
  sellerType: 'Trader',
  sellerRating: 4.7,
  spotlight: false,
  title: 'Kawasaki Brute Force 2020',
  year: '2020',
  fuel: 'Petrol',
  mileage: '9,100 km',
  timeAgo: '4 days',
  location: 'Limerick, Limerick',
  price: '€3,200',
  photos: 10,
  image: 'https://images.unsplash.com/photo-1572618156157-0bed8192c74d?w=600&q=80'
}];


export default function Quads() {
  const [search, setSearch] = useState('');
  const [savedIds, setSavedIds] = useState([]);

  const toggleSave = (id) => setSavedIds((prev) =>
  prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
  );

  const filtered = listings.filter((item) =>
  !search || item.title.toLowerCase().includes(search.toLowerCase()) || item.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <button onClick={() => window.history.back()} className="flex items-center gap-1 hover:text-primary transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </button>
          <span>›</span>
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-medium">Quads</span>
        </div>
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-foreground mb-3">Quads</h1>
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Quads" className="w-full bg-secondary/60 rounded-lg pl-9 pr-4 py-3 text-sm focus:outline-none border-0 outline-none" />
          </div>
        </div>
        <div className="mb-6 rounded-xl overflow-hidden border border-border h-36 sm:h-44">
          <img src="https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/72d1a5340_generated_image.png" alt="Quads Banner" className="w-full h-full object-cover" />
        </div>
        <div className="flex gap-6">
          <aside className="hidden lg:block w-80 flex-shrink-0 self-start sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
            <SimpleFiltersSidebar />
          </aside>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">{filtered.length.toLocaleString()}</span> ads for Quads in Ireland</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                Sort by: <span className="font-semibold text-foreground">Best match</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {filtered.map((item) =>
              <ListingCard key={item.id} item={item} saved={savedIds.includes(item.id)} onToggleSave={toggleSave} viewMode="list" />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>);

}