"use client";

import React from 'react';
import { useAvatar, Category } from '@/context/AvatarContext';
import { User, Eye, Scissors, Shirt } from 'lucide-react';

const CATEGORIES: { id: Category; label: string; icon: React.ElementType }[] = [
  { id: 'head', label: 'HEAD', icon: User },
  { id: 'eyes', label: 'EYES', icon: Eye },
  { id: 'hair', label: 'HAIR', icon: Scissors },
  { id: 'body', label: 'BODY', icon: Shirt },
];

export default function LeftSidebar({ mobile }: { mobile?: boolean }) {
  const { state, setActiveCategory } = useAvatar();
  const activeCategory = state.activeCategory;

  // ── MOBILE: horizontal scrollable tabs ──
  if (mobile) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 overflow-x-auto flex-shrink-0 border-t border-brand-border/50 bg-brand-gray/40 no-scrollbar">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold tracking-wider whitespace-nowrap transition-all duration-200 flex-shrink-0
                ${isActive
                  ? 'bg-brand-cyan/15 text-brand-cyan border border-brand-cyan shadow-[0_0_10px_rgba(0,217,255,0.3)]'
                  : 'bg-brand-gray-light text-brand-text-muted border border-transparent active:scale-95'}
              `}
            >
              <Icon className="w-4 h-4" />
              {cat.label}
            </button>
          );
        })}
      </div>
    );
  }

  // ── DESKTOP: vertical sidebar ──
  return (
    <aside className="w-20 md:w-28 border-r border-brand-border bg-brand-gray/30 p-3 flex flex-col gap-3 items-center">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;
        const Icon = cat.icon;
        return (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            aria-selected={isActive}
            role="tab"
            aria-label={`${cat.label} category`}
            className={`w-full py-3 px-1 rounded-xl text-[10px] md:text-xs font-bold tracking-wider transition-all duration-200 flex flex-col items-center gap-1.5
              ${isActive
                ? 'bg-brand-cyan/10 text-brand-cyan border-2 border-brand-cyan shadow-[0_0_12px_rgba(0,217,255,0.5),inset_0_0_8px_rgba(0,217,255,0.15)]'
                : 'bg-brand-gray-light text-brand-text-muted hover:text-white hover:bg-brand-gray-light/80 border-2 border-transparent hover:-translate-y-0.5 hover:shadow-[0_6px_14px_rgba(0,217,255,0.2)] active:scale-95'}
            `}
          >
            <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-brand-cyan' : ''}`} />
            {cat.label}
          </button>
        );
      })}
    </aside>
  );
}
