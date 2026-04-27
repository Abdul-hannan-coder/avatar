"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Types
export type Category = 'body' | 'head' | 'eyes' | 'hair';

export interface AvatarOption {
  id: string;
  label: string;
  locked?: boolean;
}

export interface AvatarState {
  body: { selected: string; color: string };
  head: { selected: string; color: string };
  eyes: { selected: string; color: string };
  hair: { selected: string; color: string };
  activeCategory: Category;
}

interface AvatarContextType {
  state: AvatarState;
  setActiveCategory: (category: Category) => void;
  setOption: (category: Category, id: string) => void;
  setColor: (category: Category, hexCode: string) => void;
  randomize: () => void;
  resetToDefault: () => void;
}

const DEFAULT_STATE: AvatarState = {
  body: { selected: 'body-1', color: '#1E90FF' },
  head: { selected: 'head-1', color: '#FFDCB3' },
  eyes: { selected: 'eyes-1', color: '#4A90D9' },
  hair: { selected: 'hair-1', color: '#4A3B32' },
  activeCategory: 'eyes',
};

// --- Extended Options Data ---
export const OPTIONS_DATA: Record<Category, AvatarOption[]> = {
  head: [
    { id: 'head-1', label: 'Round' },
    { id: 'head-2', label: 'Square' },
    { id: 'head-3', label: 'Oval' },
    { id: 'head-4', label: 'Heart' },
    { id: 'head-5', label: 'Diamond' },
    { id: 'head-6', label: 'Long' },
    { id: 'head-7', label: 'Wide' },
    { id: 'head-8', label: 'Slim' },
  ],
  eyes: [
    { id: 'eyes-1', label: 'Normal' },
    { id: 'eyes-2', label: 'Wide' },
    { id: 'eyes-3', label: 'Angry' },
    { id: 'eyes-4', label: 'Happy' },
    { id: 'eyes-5', label: 'Sad' },
    { id: 'eyes-6', label: 'Wink' },
    { id: 'eyes-7', label: 'Closed' },
    { id: 'eyes-8', label: 'Sleepy' },
    { id: 'eyes-9', label: 'Star' },
    { id: 'eyes-10', label: 'Heart' },
  ],
  hair: [
    { id: 'hair-1', label: 'Short' },
    { id: 'hair-2', label: 'Spiky' },
    { id: 'hair-3', label: 'Messy' },
    { id: 'hair-4', label: 'Slick' },
    { id: 'hair-5', label: 'Curly' },
    { id: 'hair-6', label: 'Long' },
    { id: 'hair-7', label: 'Mohawk' },
    { id: 'hair-8', label: 'Bald' },
    { id: 'hair-9', label: 'Afro' },
    { id: 'hair-10', label: 'Ponytail' },
    { id: 'hair-11', label: 'Bob' },
    { id: 'hair-12', label: 'Buzz' },
  ],
  body: [
    { id: 'body-1', label: 'T-Shirt' },
    { id: 'body-2', label: 'Hoodie' },
    { id: 'body-3', label: 'Suit' },
    { id: 'body-4', label: 'Armor' },
    { id: 'body-5', label: 'Tank Top' },
    { id: 'body-6', label: 'Jacket' },
    { id: 'body-7', label: 'Sweater' },
    { id: 'body-8', label: 'Vest' },
    { id: 'body-9', label: 'Kurta' },
    { id: 'body-10', label: 'Sherwani' },
    { id: 'body-11', label: 'Kimono' },
    { id: 'body-12', label: 'Dashiki' },
    { id: 'body-13', label: 'Hanbok' },
    { id: 'body-14', label: 'Poncho' },
  ],
};

// Category-specific color presets
export const COLOR_PRESETS: Record<Category, string[]> = {
  head: [
    '#FFDCB3', '#FAD6B1', '#E2B98F', '#C68E5E', '#A86F3E', '#7B4A23',
    '#3D2415', '#FFE5CC', '#D4A574', '#8D5524',
  ],
  eyes: [
    '#4A90D9', '#1E90FF', '#00BFFF', '#8B4513', '#2E8B57', '#228B22',
    '#556B2F', '#808080', '#800080', '#FF4500', '#FFD700', '#000000',
  ],
  hair: [
    '#4A3B32', '#1C1108', '#8B4513', '#DEB887', '#FFD700', '#DC143C',
    '#FF69B4', '#800080', '#4169E1', '#2F4F4F', '#F5F5DC', '#D2691E',
  ],
  body: [
    '#1E90FF', '#0047AB', '#FF4500', '#228B22', '#FFD700', '#8B0000',
    '#4B0082', '#FF69B4', '#2F4F4F', '#808080', '#FFFFFF', '#000000',
    '#C41E3A', '#DAA520', '#2E8B57', '#800020', '#E8D5B7', '#CC5500',
  ],
};

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

export function AvatarProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AvatarState>(DEFAULT_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from LocalStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('avatar-builder-state');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.state) setState(parsed.state);
      }
    } catch {
      console.warn("Could not load avatar state");
    }
    setIsLoaded(true);
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('avatar-builder-state', JSON.stringify({
        version: 2,
        timestamp: Date.now(),
        state,
      }));
    }
  }, [state, isLoaded]);

  const setActiveCategory = useCallback((category: Category) => {
    setState(prev => ({ ...prev, activeCategory: category }));
  }, []);

  const setOption = useCallback((category: Category, id: string) => {
    setState(prev => ({
      ...prev,
      [category]: { ...prev[category], selected: id },
    }));
  }, []);

  const setColor = useCallback((category: Category, hexCode: string) => {
    setState(prev => ({
      ...prev,
      [category]: { ...prev[category], color: hexCode },
    }));
  }, []);

  const randomize = useCallback(() => {
    const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
    setState(prev => ({
      ...prev,
      body: { selected: pick(OPTIONS_DATA.body).id, color: pick(COLOR_PRESETS.body) },
      head: { selected: pick(OPTIONS_DATA.head).id, color: pick(COLOR_PRESETS.head) },
      eyes: { selected: pick(OPTIONS_DATA.eyes).id, color: pick(COLOR_PRESETS.eyes) },
      hair: { selected: pick(OPTIONS_DATA.hair).id, color: pick(COLOR_PRESETS.hair) },
    }));
  }, []);

  const resetToDefault = useCallback(() => {
    setState(prev => ({ ...DEFAULT_STATE, activeCategory: prev.activeCategory }));
  }, []);

  if (!isLoaded) return null;

  return (
    <AvatarContext.Provider value={{ state, setActiveCategory, setOption, setColor, randomize, resetToDefault }}>
      {children}
    </AvatarContext.Provider>
  );
}

export function useAvatar() {
  const context = useContext(AvatarContext);
  if (!context) throw new Error("useAvatar must be used within an AvatarProvider");
  return context;
}
