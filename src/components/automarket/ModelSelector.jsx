import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import { modelsByMake, popularModelsByMake } from './modelsData';

function formatCount(n) {
  return n.toLocaleString();
}

export default function ModelSelector({ make, value, onChange }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef(null);

  const models = (make && modelsByMake[make]) || [];
  const popular = (make && popularModelsByMake[make]) || [];
  const disabled = !make;

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Reset model when make changes
  useEffect(() => {
    onChange('');
  }, [make]);

  const filtered = search.trim()
    ? models.filter(m => m.name.toLowerCase().includes(search.toLowerCase()))
    : null;

  const displayLabel = value || 'All models';

  if (disabled) {
    return (
      <div className="w-full flex items-center justify-between border border-border rounded-lg px-4 py-3 text-base bg-secondary text-muted-foreground cursor-not-allowed">
        <span>All models</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between border border-border rounded-lg px-4 py-3 text-base bg-white focus:outline-none focus:ring-1 focus:ring-primary/40 text-foreground hover:bg-secondary transition-colors"
      >
        <span className={value ? 'text-foreground' : 'text-muted-foreground'}>{displayLabel}</span>
        {value ? (
          <X className="w-4 h-4 text-muted-foreground hover:text-foreground" onClick={(e) => { e.stopPropagation(); onChange(''); }} />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        )}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-border rounded-lg shadow-xl z-50 overflow-hidden">
          {/* Search bar */}
          <div className="p-2 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                autoFocus
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={`Search ${make} models`}
                className="w-full pl-9 pr-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary/40"
              />
            </div>
          </div>

          <div className="max-h-72 overflow-y-auto">
            {filtered ? (
              filtered.length === 0 ? (
                <div className="px-4 py-3 text-sm text-muted-foreground">No models found</div>
              ) : (
                filtered.map(m => (
                  <button key={m.name} type="button"
                    onClick={() => { onChange(m.name); setOpen(false); setSearch(''); }}
                    className={`w-full text-left px-4 py-2 text-sm flex justify-between hover:bg-secondary transition-colors ${value === m.name ? 'bg-primary/5 text-primary font-medium' : 'text-foreground'}`}>
                    <span>{m.name}</span>
                    <span className="text-muted-foreground">({formatCount(m.count)})</span>
                  </button>
                ))
              )
            ) : (
              <>
                {/* All models option */}
                <button type="button"
                  onClick={() => { onChange(''); setOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors ${!value ? 'bg-primary/5 text-primary' : 'text-foreground'}`}>
                  All models
                </button>

                {/* Popular section */}
                {popular.length > 0 && (
                  <>
                    <div className="px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-secondary/50">Popular</div>
                    {popular.map(m => (
                      <button key={m.name} type="button"
                        onClick={() => { onChange(m.name); setOpen(false); setSearch(''); }}
                        className={`w-full text-left px-4 py-2 text-sm flex justify-between hover:bg-secondary transition-colors ${value === m.name ? 'bg-primary/5 text-primary font-medium' : 'text-foreground'}`}>
                        <span>{m.name}</span>
                        <span className="text-muted-foreground">({formatCount(m.count)})</span>
                      </button>
                    ))}
                  </>
                )}

                {/* All models section */}
                <div className="px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-secondary/50">All models</div>
                {models.map(m => (
                  <button key={m.name} type="button"
                    onClick={() => { onChange(m.name); setOpen(false); setSearch(''); }}
                    className={`w-full text-left px-4 py-2 text-sm flex justify-between hover:bg-secondary transition-colors ${value === m.name ? 'bg-primary/5 text-primary font-medium' : 'text-foreground'}`}>
                    <span>{m.name}</span>
                    <span className="text-muted-foreground">({formatCount(m.count)})</span>
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}