import React, { useState } from 'react';
import { Heart, User, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
  { label: 'Buy', hasDropdown: true },
  { label: 'Sell', hasDropdown: true },
  { label: 'Dealers', hasDropdown: true },
  { label: 'Car Rent', hasDropdown: true },
  { label: 'Car insurance', hasDropdown: false }];


  return (
    <nav className="bg-[hsl(var(--background))] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-[hsl(var(--foreground))] text-xl font-semibold tracking-tight">Ant</span>
            <span className="text-[hsl(var(--foreground))] text-xl font-extrabold tracking-tight">Ratu</span>
            <svg className="text-[hsl(var(--foreground))] mt-0.5 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
            <button
              key={link.label} className="text-[hsl(var(--foreground))] px-3 py-2 text-sm font-medium hover:text-white flex items-center gap-1 transition-colors">
              
              
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex flex-col items-center text-white/80 hover:text-white transition-colors">
              <Heart className="text-[hsl(var(--foreground))] lucide lucide-heart w-5 h-5" />
              <span className="text-black [10px] mt-0.5">Saved</span>
            </button>
            <button className="hidden sm:flex flex-col items-center text-white/80 hover:text-white transition-colors">
              <User className="text-[hsl(var(--foreground))] lucide lucide-user w-5 h-5" />
              <span className="text-[#0d0c0c] mt-0.5">Sign in</span>
            </button>
            <Button
              variant="outline" className="bg-transparent text-[hsl(var(--foreground))] px-5 py-2 text-sm font-semibold rounded-full inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm hover:bg-pich hover:text-primary h-9">
              
              
              Sign up or Login
            </Button>
            <button
              className="lg:hidden text-white"
              onClick={() => setMobileOpen(!mobileOpen)}>
              
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen &&
      <div className="lg:hidden bg-primary border-t border-white/10 pb-4">
          {navLinks.map((link) =>
        <button
          key={link.label}
          className="w-full text-left text-white/90 hover:text-white hover:bg-white/10 px-6 py-3 text-sm font-medium flex items-center justify-between transition-colors">
          
              {link.label}
              {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </button>
        )}
          <div className="flex gap-6 px-6 pt-3 border-t border-white/10 mt-2">
            <button className="flex items-center gap-2 text-white/80 text-sm">
              <Heart className="w-4 h-4" /> Saved
            </button>
            <button className="flex items-center gap-2 text-white/80 text-sm">
              <User className="w-4 h-4" /> Sign in
            </button>
          </div>
        </div>
      }
    </nav>);

}