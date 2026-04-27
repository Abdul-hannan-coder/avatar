"use client";

import React from 'react';
import { useAvatar, OPTIONS_DATA, COLOR_PRESETS } from '@/context/AvatarContext';
import { OptionThumbnail } from '@/components/ui/OptionThumbnails';

export default function RightPanel({ mobile }: { mobile?: boolean }) {
  const { state, setOption, setColor } = useAvatar();
  const category = state.activeCategory;
  const options = OPTIONS_DATA[category];
  const selectedConfig = state[category];
  const colors = COLOR_PRESETS[category];

  // ── MOBILE: full-width bottom panel ──
  if (mobile) {
    return (
      <div className="flex-1 flex flex-col overflow-hidden bg-brand-gray/30">
        {/* Header */}
        <div className="px-3 py-2 flex items-center justify-between border-t border-brand-border/50 flex-shrink-0">
          <h2 className="text-xs font-bold tracking-widest text-brand-cyan uppercase">{category}</h2>
          <span className="text-[10px] text-brand-text-muted">{options.length} options</span>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-3 pb-2">
          {/* Options Grid */}
          <div className="grid grid-cols-4 gap-2 mb-3">
            {options.map((opt) => {
              const isSelected = selectedConfig.selected === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setOption(category, opt.id)}
                  className={`aspect-square rounded-lg relative cursor-pointer outline-none transition-all duration-150 overflow-hidden
                    ${isSelected
                      ? 'bg-brand-gray border-2 border-brand-cyan shadow-[0_0_10px_rgba(0,217,255,0.3)] scale-[1.02]'
                      : 'bg-brand-gray-light border border-transparent active:scale-95'
                    }`}
                >
                  {isSelected && (
                    <span className="absolute top-0 right-0 bg-brand-cyan text-brand-bg-dark text-[6px] font-extrabold px-1 py-0.5 rounded-bl z-10">
                      ✓
                    </span>
                  )}
                  <div className="w-full h-full p-1 flex items-center justify-center">
                    <OptionThumbnail category={category} id={opt.id} color={selectedConfig.color} />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent py-0.5">
                    <span className="text-[8px] font-semibold text-white/70 block text-center">{opt.label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Color Swatches - compact */}
          <div className="pb-2">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[10px] font-bold tracking-widest uppercase text-brand-text-muted">COLOR</h3>
              <div className="w-5 h-5 rounded border border-white/30 shadow-inner" style={{ backgroundColor: selectedConfig.color }} />
            </div>
            <div className="flex flex-wrap gap-2 bg-brand-bg-dark/50 p-2 rounded-lg border border-brand-border/50">
              {colors.map((color) => {
                const isSelectedColor = selectedConfig.color.toUpperCase() === color.toUpperCase();
                return (
                  <button
                    key={color}
                    onClick={() => setColor(category, color)}
                    className={`w-6 h-6 rounded-full transition-all duration-150
                      ${isSelectedColor
                        ? 'scale-125 ring-2 ring-brand-cyan ring-offset-1 ring-offset-brand-bg-dark'
                        : 'border border-white/10 active:scale-90'}
                    `}
                    style={{ backgroundColor: color }}
                  />
                );
              })}
              {/* Custom color */}
              <input
                type="color"
                value={selectedConfig.color}
                onChange={(e) => setColor(category, e.target.value)}
                className="w-6 h-6 rounded-full cursor-pointer bg-transparent border border-dashed border-white/20 p-0"
                title="Custom color"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── DESKTOP: side panel ──
  return (
    <aside className="w-72 md:w-[340px] flex-shrink-0 border-l border-brand-border bg-brand-gray/30 flex flex-col">
      <div className="p-4 border-b border-brand-border flex items-center justify-between">
        <h2 className="text-base font-bold tracking-widest text-brand-cyan uppercase">{category}</h2>
        <span className="text-xs text-brand-text-muted">{options.length} options</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-3 gap-3">
          {options.map((opt) => {
            const isSelected = selectedConfig.selected === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setOption(category, opt.id)}
                className={`group aspect-square rounded-xl relative cursor-pointer outline-none transition-all duration-200 overflow-hidden
                  ${isSelected
                    ? 'bg-brand-gray border-2 border-brand-cyan shadow-[0_0_14px_rgba(0,217,255,0.4)] scale-[1.02]'
                    : 'bg-brand-gray-light border-2 border-transparent hover:border-brand-cyan/40 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,217,255,0.15)] active:scale-95'
                  }`}
              >
                {isSelected && (
                  <span className="absolute -top-0.5 -right-0.5 bg-brand-cyan text-brand-bg-dark text-[8px] font-extrabold px-1.5 py-0.5 rounded-bl-lg rounded-tr-lg z-10 shadow">
                    EQUIPPED
                  </span>
                )}
                <div className="w-full h-full p-1.5 flex items-center justify-center transition-transform duration-150 group-hover:scale-110">
                  <OptionThumbnail category={category} id={opt.id} color={selectedConfig.color} />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent py-1 px-1">
                  <span className="text-[10px] font-semibold text-white/80 block text-center">{opt.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Color section */}
      <div className="p-4 border-t border-brand-border bg-brand-gray/50">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold tracking-widest uppercase text-brand-text-muted">COLOR</h3>
          <div className="w-7 h-7 rounded-lg border-2 border-white/30 shadow-inner transition-colors duration-200" style={{ backgroundColor: selectedConfig.color }} />
        </div>
        <div className="grid grid-cols-6 gap-2.5 bg-brand-bg-dark/60 p-3 rounded-xl border border-brand-border/50 shadow-inner">
          {colors.map((color) => {
            const isSelectedColor = selectedConfig.color.toUpperCase() === color.toUpperCase();
            return (
              <button
                key={color}
                onClick={() => setColor(category, color)}
                title={color}
                className={`w-7 h-7 rounded-full mx-auto transition-all duration-150 relative
                  ${isSelectedColor
                    ? 'scale-125 ring-2 ring-brand-cyan ring-offset-2 ring-offset-brand-bg-dark shadow-[0_0_10px_rgba(0,217,255,0.5)]'
                    : 'border border-white/10 hover:scale-115 hover:border-white/30 hover:shadow-lg active:scale-95'
                  }`}
                style={{ backgroundColor: color }}
              >
                {isSelectedColor && (
                  <svg className="w-3 h-3 absolute inset-0 m-auto" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke={isLightColor(color) ? '#000' : '#fff'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <label className="text-xs text-brand-text-muted">Custom:</label>
          <input
            type="color"
            value={selectedConfig.color}
            onChange={(e) => setColor(category, e.target.value)}
            className="w-8 h-8 rounded cursor-pointer bg-transparent border-none p-0"
          />
          <input
            type="text"
            value={selectedConfig.color}
            onChange={(e) => {
              const v = e.target.value;
              if (/^#[0-9A-Fa-f]{6}$/.test(v)) setColor(category, v);
            }}
            className="flex-1 bg-brand-bg-dark/50 border border-brand-border rounded-lg px-2 py-1 text-xs font-mono text-brand-text-muted focus:border-brand-cyan focus:outline-none"
            maxLength={7}
            placeholder="#RRGGBB"
          />
        </div>
      </div>
    </aside>
  );
}

function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 155;
}
