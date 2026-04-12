import React, { useState, useRef, useEffect } from 'react';
import { Heart, User, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLang } from '@/lib/LangContext';
import { t, LANGUAGES } from '@/lib/i18n';

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);};
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navLinks = [
  { label: t(lang, 'nav_buy_used'), hasDropdown: true },
  { label: t(lang, 'nav_new_cars'), hasDropdown: true },
  { label: t(lang, 'nav_dealers'), hasDropdown: true },
  { label: t(lang, 'nav_reviews'), hasDropdown: true },
  { label: t(lang, 'nav_insurance'), hasDropdown: false }];


  return (
    <nav className="bg-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-black flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-white text-2xl font-extrabold tracking-tight">AntRatu</span>
            <svg className="text-[hsl(var(--foreground))] text-2xl font-extrabold tracking-tight" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">AntRatu

            </svg>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
            <button
              key={link.label}
              className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors">
              
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex flex-col items-center text-white/80 hover:text-white transition-colors">
              <Heart className="w-5 h-5" />
              <span className="text-[10px] mt-0.5">{t(lang, 'nav_saved')}</span>
            </button>
            <button className="hidden sm:flex flex-col items-center text-white/80 hover:text-white transition-colors">
              <User className="w-5 h-5" />
              <span className="text-[10px] mt-0.5">{t(lang, 'nav_sign_in')}</span>
            </button>
            {/* Language switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-semibold px-2 py-1 rounded transition-colors">
                
                {LANGUAGES.find((l) => l.code === lang)?.label}
                <ChevronDown className="w-3 h-3" />
              </button>
              {langOpen &&
              <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-xl border border-border overflow-hidden z-50">
                  {LANGUAGES.map((l) =>
                <button
                  key={l.code}
                  onClick={() => {setLang(l.code);setLangOpen(false);}}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors flex items-center gap-2 ${
                  lang === l.code ? 'text-primary font-semibold' : 'text-foreground'}`
                  }>
                  
                      <span className="font-bold w-6">{l.label}</span>
                      <span className="text-muted-foreground">{l.name}</span>
                    </button>
                )}
                </div>
              }
            </div>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary text-sm font-semibold rounded-full px-5 h-9">
              
              {t(lang, 'nav_sell')}
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
              <Heart className="w-4 h-4" /> {t(lang, 'nav_saved')}
            </button>
            <button className="flex items-center gap-2 text-white/80 text-sm">
              <User className="w-4 h-4" /> {t(lang, 'nav_sign_in')}
            </button>
          </div>
        </div>
      }
    </nav>);

}