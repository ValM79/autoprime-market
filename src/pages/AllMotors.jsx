import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, Camera, ChevronDown, Star, LayoutList, LayoutGrid, ArrowLeft } from 'lucide-react';
import Navbar from '../components/automarket/Navbar';
import Footer from '../components/automarket/Footer';
import FiltersSidebar from '../components/automarket/FiltersSidebar';

const allMotorListings = [
  {
    id: 1,
    category: 'Car',
    spotlight: true,
    sellerType: 'Private Seller',
    sellerRating: 5,
    title: 'Hyundai IX20',
    year: 2015,
    fuel: '1.4 Diesel',
    mileage: '157,789 km',
    location: 'Wexford',
    price: 5150,
    monthly: 106,
    photos: 14,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80',
    trusted: false,
  },
  {
    id: 2,
    category: 'Motorbike',
    spotlight: true,
    sellerType: 'Trusted Independent Dealership',
    sellerRating: 4.4,
    dealerName: 'Castle Motors Swords',
    dealerLogo: 'https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?w=80&q=80',
    title: 'Honda CB500F',
    year: 2020,
    fuel: '500cc',
    mileage: '12,000 km',
    location: 'Dublin',
    price: 5800,
    monthly: 98,
    photos: 16,
    image: 'https://images.unsplash.com/photo-1606611013016-969c19d4a42f?w=600&q=80',
    trusted: true,
  },
  {
    id: 3,
    category: 'Truck',
    spotlight: false,
    sellerType: 'Dealership',
    sellerRating: 4.7,
    dealerName: 'Premier Motors Cork',
    dealerLogo: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=80&q=80',
    title: 'Volvo FM Truck',
    year: 2019,
    fuel: 'Diesel',
    mileage: '285,000 km',
    location: 'Cork',
    price: 35000,
    monthly: 590,
    photos: 18,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&q=80',
    trusted: true,
  },
  {
    id: 4,
    category: 'Car',
    spotlight: false,
    sellerType: 'Private Seller',
    sellerRating: 4,
    title: 'Volkswagen Golf',
    year: 2018,
    fuel: '1.6 TDI',
    mileage: '88,500 km',
    location: 'Cork',
    price: 14900,
    monthly: 250,
    photos: 9,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80',
    trusted: false,
  },
  {
    id: 5,
    category: 'Boat',
    spotlight: false,
    sellerType: 'Private Seller',
    sellerRating: 4.2,
    title: 'Sunseeker Speedboat',
    year: 2017,
    fuel: 'Petrol',
    mileage: '450 hours',
    location: 'Galway',
    price: 45000,
    monthly: 760,
    photos: 12,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
    trusted: false,
  },
  {
    id: 6,
    category: 'Scooter',
    spotlight: false,
    sellerType: 'Private Seller',
    sellerRating: 4.5,
    title: 'Vespa Primavera 150',
    year: 2021,
    fuel: 'Petrol',
    mileage: '8,500 km',
    location: 'Waterford',
    price: 3200,
    monthly: 54,
    photos: 10,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    trusted: false,
  },
  {
    id: 7,
    category: 'Trailer',
    spotlight: false,
    sellerType: 'Dealership',
    sellerRating: 4.3,
    dealerName: 'AutoVision Limerick',
    dealerLogo: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=80&q=80',
    title: 'Agricultural Trailer',
    year: 2018,
    fuel: 'N/A',
    mileage: 'Not applicable',
    location: 'Limerick',
    price: 8500,
    monthly: 144,
    photos: 8,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
    trusted: true,
  },
  {
    id: 8,
    category: 'Car',
    spotlight: false,
    sellerType: 'Dealership',
    sellerRating: 4.5,
    dealerName: 'Elite Motors Dublin',
    dealerLogo: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=80&q=80',
    title: 'BMW 3 Series',
    year: 2021,
    fuel: '2.0 Petrol',
    mileage: '31,200 km',
    location: 'Dublin',
    price: 34500,
    monthly: 590,
    photos: 20,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80',
    trusted: true,
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(s => (
        <Star key={s} className={`w-3 h-3 ${s <= Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
      ))}
    </div>
  );
}

export default function AllMotors() {
  const [search, setSearch] = useState('');
  const [savedIds, setSavedIds] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Car', 'Motorbike', 'Truck', 'Boat', 'Scooter', 'Trailer'];

  const toggleSave = (id) => setSavedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);

  const filtered = allMotorListings.filter(m => {
    const matchSearch = !search || m.title.toLowerCase().includes(search.toLowerCase()) || m.location.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory === 'All' || m.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-[#f4f5f6]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <button onClick={() => window.history.back()} className="flex items-center gap-1 hover:text-primary transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </button>
          <span>›</span>
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-medium">All Motors</span>
        </div>

        {/* Title + Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">All Motors For Sale</h1>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search Motors"
              className="w-full border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-white border border-border text-foreground hover:bg-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Banner */}
        <div className="mb-6 rounded-xl overflow-hidden h-32 bg-indigo-600 flex items-center justify-between px-8">
          <div className="text-white">
            <p className="text-xs font-semibold uppercase tracking-wider mb-1">Everything</p>
            <p className="text-3xl font-extrabold leading-tight">ALL MOTORS<br />IN IRELAND</p>
          </div>
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80" alt="Banner" className="h-full object-cover rounded-lg opacity-80" />
        </div>

        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0 self-start sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
            <FiltersSidebar />
          </aside>

          {/* Listings */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-foreground font-medium"><span className="font-bold">{filtered.length}</span> motors in Ireland</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <LayoutList className="w-5 h-5 text-primary" />
                  <LayoutGrid className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="relative">
                  <select className="appearance-none border border-border rounded-lg px-3 py-1.5 text-sm bg-white pr-8 focus:outline-none">
                    <option>Sort by: Best match</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                    <option>Lowest Mileage</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {filtered.map(motor => (
                <div key={motor.id} className="bg-white rounded-xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  {motor.dealerName ? (
                    /* Dealer card header */
                    <div className="flex items-center gap-3 px-4 py-2 border-b border-border bg-secondary/30">
                      <img src={motor.dealerLogo} alt={motor.dealerName} className="w-8 h-8 rounded object-cover" />
                      <span className="text-sm font-semibold text-foreground">{motor.dealerName}</span>
                      {motor.trusted && <span className="ml-auto text-xs text-green-700 font-medium flex items-center gap-1"><span className="text-green-600">✓</span> Trusted <StarRating rating={motor.sellerRating} /></span>}
                    </div>
                  ) : null}

                  <div className="flex flex-col sm:flex-row">
                    {/* Image */}
                    <div className="relative sm:w-64 h-48 sm:h-auto flex-shrink-0">
                      {motor.spotlight && (
                        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-semibold px-2 py-0.5 rounded z-10">Spotlight</span>
                      )}
                      <span className="absolute top-2 right-2 bg-primary/90 text-white text-xs font-semibold px-2 py-0.5 rounded z-10">{motor.category}</span>
                      <img src={motor.image} alt={motor.title} className="w-full h-full object-cover" />
                      <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
                        <Camera className="w-3 h-3" /> {motor.photos}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-muted-foreground">{motor.sellerType}</span>
                          <StarRating rating={motor.sellerRating} />
                          {motor.sellerRating}
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-1">{motor.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {motor.year} · {motor.fuel} · {motor.mileage} · {motor.location}
                        </p>
                      </div>
                      <div className="flex items-end justify-between mt-4">
                        <div>
                          <p className="text-2xl font-bold text-foreground">€{motor.price.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">From €{motor.monthly}/mo</p>
                        </div>
                        <button
                          onClick={() => toggleSave(motor.id)}
                          className={`p-2 rounded-full border transition-colors ${savedIds.includes(motor.id) ? 'border-destructive text-destructive' : 'border-border text-muted-foreground hover:text-destructive hover:border-destructive'}`}>
                          <Heart className={`w-5 h-5 ${savedIds.includes(motor.id) ? 'fill-destructive' : ''}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}