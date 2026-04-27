"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import RightPanel from '@/components/layout/RightPanel';
import AvatarPreview from '@/components/preview/AvatarPreview';
import { useAvatar } from '@/context/AvatarContext';
import { Shuffle, RotateCcw, Download } from 'lucide-react';

export default function DashboardLayout() {
  const { randomize, resetToDefault } = useAvatar();

  return (
    <div className="max-w-[1920px] mx-auto flex flex-col h-[100dvh] md:h-[calc(100vh-4rem)] bg-brand-gray/50 md:rounded-2xl border border-brand-border overflow-hidden shadow-2xl backdrop-blur-sm">
      <Header />

      {/* ── DESKTOP: side-by-side layout ── */}
      <div className="hidden md:flex flex-1 overflow-hidden relative">
        <LeftSidebar />

        {/* Center Preview */}
        <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle, #00D9FF 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,217,255,0.06)_0%,transparent_70%)]" />

          <AvatarPreview />

          {/* Action Buttons */}
          <div className="absolute bottom-6 flex items-center gap-3 z-10">
            <button onClick={randomize} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-gray-light/80 border border-brand-border text-sm font-semibold text-brand-text-muted hover:text-brand-cyan hover:border-brand-cyan/40 hover:shadow-[0_0_14px_rgba(0,217,255,0.2)] transition-all duration-200 active:scale-95 backdrop-blur-sm">
              <Shuffle className="w-4 h-4" /> Randomize
            </button>
            <button onClick={resetToDefault} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-gray-light/80 border border-brand-border text-sm font-semibold text-brand-text-muted hover:text-white hover:border-white/30 transition-all duration-200 active:scale-95 backdrop-blur-sm">
              <RotateCcw className="w-4 h-4" /> Reset
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 text-sm font-semibold text-brand-cyan hover:bg-brand-cyan/30 hover:shadow-[0_0_14px_rgba(0,217,255,0.3)] transition-all duration-200 active:scale-95 backdrop-blur-sm">
              <Download className="w-4 h-4" /> Save
            </button>
          </div>
        </div>

        <RightPanel />
      </div>

      {/* ── MOBILE: stacked layout ── */}
      <div className="flex md:hidden flex-col flex-1 overflow-hidden">
        {/* Mobile preview area */}
        <div className="relative flex items-center justify-center py-2 flex-shrink-0" style={{ minHeight: '200px', maxHeight: '40dvh' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle, #00D9FF 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,217,255,0.06)_0%,transparent_70%)]" />
          <AvatarPreview mobile />
        </div>

        {/* Mobile action buttons */}
        <div className="flex items-center justify-center gap-2 px-3 py-2 flex-shrink-0 border-t border-brand-border/50 bg-brand-gray/30">
          <button onClick={randomize} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-gray-light/80 border border-brand-border text-xs font-semibold text-brand-text-muted active:scale-95 transition-all">
            <Shuffle className="w-3.5 h-3.5" /> Randomize
          </button>
          <button onClick={resetToDefault} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-gray-light/80 border border-brand-border text-xs font-semibold text-brand-text-muted active:scale-95 transition-all">
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-cyan/20 border border-brand-cyan/40 text-xs font-semibold text-brand-cyan active:scale-95 transition-all">
            <Download className="w-3.5 h-3.5" /> Save
          </button>
        </div>

        {/* Horizontal Category Tabs */}
        <LeftSidebar mobile />

        {/* Options Panel */}
        <RightPanel mobile />
      </div>
    </div>
  );
}
