import React from 'react';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';

export default function Footer() {
  const { lang } = useLang();

  const footerSections = [
    {
      titleKey: 'footer_buying',
      links: ['footer_used', 'footer_new', 'footer_electric', 'footer_hybrid', 'footer_body_types', 'footer_finance'],
    },
    {
      titleKey: 'footer_selling',
      links: ['footer_sell', 'footer_value', 'footer_tips'],
    },
    {
      titleKey: 'footer_resources',
      links: ['footer_car_reviews', 'footer_motoring', 'footer_insurance_res', 'footer_dealers', 'footer_cartell'],
    },
    {
      titleKey: 'footer_company',
      links: ['footer_about', 'footer_advertising', 'footer_careers', 'footer_contact', 'footer_terms', 'footer_privacy'],
    },
  ];

  return (
    <footer className="bg-foreground text-white/70">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {footerSections.map((section) => (
            <div key={section.titleKey}>
              <h3 className="text-white font-semibold text-sm mb-4">{t(lang, section.titleKey)}</h3>
              <ul className="space-y-2.5">
                {section.links.map((linkKey) => (
                  <li key={linkKey}>
                    <a href="#" className="text-sm hover:text-white transition-colors">
                      {t(lang, linkKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1">
              <span className="text-white text-xl font-extrabold tracking-tight">Antratu</span>
              <svg className="w-4 h-4 text-white mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
            <p className="text-xs text-white/40 text-center">{t(lang, 'footer_copyright')}</p>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                <a key={social} href="#" className="text-xs hover:text-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}