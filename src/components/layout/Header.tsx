"use client";

import React from 'react';
import { Menu, Home, Share2, Settings, Diamond, Zap, Coins } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-3 py-2 md:p-4 border-b border-brand-border bg-brand-gray/30">
      {/* Left controls */}
      <div className="flex items-center space-x-3 md:space-x-6">
        <button className="p-1.5 md:p-2 hover:bg-brand-gray-light rounded-lg transition-colors">
          <Menu className="w-5 h-5 md:w-6 md:h-6 text-brand-cyan" />
        </button>
        <div className="hidden sm:flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-sm font-semibold hover:text-brand-cyan transition-colors">
            <Home className="w-4 h-4" />
            <span>HOME</span>
          </button>
          <div className="h-4 w-[1px] bg-brand-border"></div>
          <button className="flex items-center space-x-2 text-sm font-semibold text-brand-cyan">
            <div className="bg-brand-cyan/20 p-1 rounded">
              <Share2 className="w-4 h-4" />
            </div>
            <span>SHARE</span>
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="text-center">
        <h1 className="text-sm md:text-xl font-bold tracking-wider">AVATAR BUILDER</h1>
      </div>

      {/* Right controls */}
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Mobile: slim badges */}
        <div className="hidden sm:flex items-center space-x-3 bg-brand-gray-light rounded-full p-1 pr-3">
          <div className="bg-blue-500/20 p-1.5 rounded-full">
            <Diamond className="w-4 h-4 text-blue-400" />
          </div>
          <span className="font-bold text-sm">300</span>
        </div>

        <div className="flex items-center space-x-1.5 md:space-x-3 bg-brand-gray-light rounded-full p-1 pr-2 md:pr-3 border border-brand-cyan/30">
          <div className="bg-brand-cyan p-1 md:p-1.5 rounded-full">
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-brand-bg-dark" />
          </div>
          <span className="font-bold text-[10px] md:text-sm text-brand-cyan">XP 1250</span>
        </div>

        <div className="hidden sm:flex items-center space-x-3 bg-brand-gray-light rounded-full p-1 pr-3">
          <div className="bg-yellow-500/20 p-1.5 rounded-full">
            <Coins className="w-4 h-4 text-yellow-500" />
          </div>
          <span className="font-bold text-sm">12,500</span>
        </div>

        <button className="p-1.5 md:p-2 hover:bg-brand-gray-light rounded-lg transition-colors">
          <Settings className="w-5 h-5 md:w-6 md:h-6 text-brand-text-muted" />
        </button>
      </div>
    </header>
  );
}
