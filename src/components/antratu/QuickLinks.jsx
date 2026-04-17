import React from 'react';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import { Shield, Wallet, FileCheck } from 'lucide-react';

export default function QuickLinks() {
  const { lang } = useLang();
  const links = [
    { label: t(lang, 'quick_vehicle_check'), icon: FileCheck },
    { label: t(lang, 'quick_finance'), icon: Wallet },
    { label: t(lang, 'quick_insurance'), icon: Shield },
  ];

  return (
    <div className="bg-[hsl(var(--background))] mx-auto px-4 py-3 max-w-7xl flex justify-end">
      <div className="flex gap-2">
        {links.map((link) => (
          <button key={link.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors">
            <link.icon className="w-3.5 h-3.5" />
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
}