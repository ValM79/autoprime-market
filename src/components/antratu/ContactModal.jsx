import React, { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import { X, CheckCircle2, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactModal({ car, onClose }) {
  const { lang } = useLang();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-background rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div>
            <h2 className="text-lg font-bold text-foreground">{t(lang, 'contact_title')}</h2>
            <p className="text-sm text-muted-foreground mt-0.5">{car.year} {car.name}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-secondary transition-colors">
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="px-6 pt-4 pb-2 bg-secondary/40 border-b border-border">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">{t(lang, 'contact_dealer')}</p>
          <p className="font-semibold text-foreground text-sm">{car.dealer?.name || 'AntRatu Dealer'}</p>
          <div className="flex gap-4 mt-1.5">
            {car.dealer?.phone && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><Phone className="w-3 h-3" />{car.dealer.phone}</span>
            )}
            {car.dealer?.email && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><Mail className="w-3 h-3" />{car.dealer.email}</span>
            )}
          </div>
        </div>

        <div className="px-6 py-5">
          {sent ? (
            <div className="flex flex-col items-center gap-3 py-6 text-center">
              <CheckCircle2 className="w-12 h-12 text-accent" />
              <h3 className="font-bold text-foreground text-lg">{t(lang, 'contact_success_title')}</h3>
              <p className="text-sm text-muted-foreground">{t(lang, 'contact_success_desc')}</p>
              <Button onClick={onClose} className="mt-2 bg-primary text-white rounded-lg px-6">{t(lang, 'contact_close')}</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">{t(lang, 'contact_name')} *</label>
                  <input required value={form.name} onChange={e => set('name', e.target.value)} className="w-full h-10 px-3 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">{t(lang, 'contact_phone')}</label>
                  <input value={form.phone} onChange={e => set('phone', e.target.value)} className="w-full h-10 px-3 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="+370 600 00000" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">{t(lang, 'contact_email')} *</label>
                <input required type="email" value={form.email} onChange={e => set('email', e.target.value)} className="w-full h-10 px-3 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">{t(lang, 'contact_message')} *</label>
                <textarea required value={form.message} onChange={e => set('message', e.target.value)} rows={4} className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder={t(lang, 'contact_message_placeholder')} />
              </div>
              <Button type="submit" disabled={loading} className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg">
                {loading ? '...' : t(lang, 'contact_send')}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}