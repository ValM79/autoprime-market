import React from 'react';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Zap, Fuel } from 'lucide-react';

const EV_BG = 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/037720c40_generated_4b3518d1.png';

export default function ElectricSection() {
  const { lang } = useLang();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={EV_BG} alt="Electric car on road" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t(lang, 'electric_title')}
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-8 leading-relaxed">
            {t(lang, 'electric_desc')}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg px-6 h-11">
              <Zap className="w-4 h-4 mr-2" />
              {t(lang, 'btn_go_electric')}
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-foreground font-semibold rounded-lg px-6 h-11">
              <Fuel className="w-4 h-4 mr-2" />
              {t(lang, 'btn_go_hybrid')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}