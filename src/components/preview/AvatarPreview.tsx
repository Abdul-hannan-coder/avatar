"use client";

import React from 'react';
import { useAvatar } from '@/context/AvatarContext';

/* =============================================
   CARTOON-STYLE AVATAR – FULL BODY CHARACTER
   
   A cute cartoon character with:
   - Proper head with ears, nose, mouth, blush
   - Big expressive eyes with highlights
   - Detailed hair styles
   - Full body: torso, arms, hands, legs, feet
   - Standing pose with slight dynamism
   ============================================= */

// ──── UTILITY: darken / lighten helpers ────
function darken(hex: string, amount = 0.25): string {
  const r = Math.max(0, Math.round(parseInt(hex.slice(1, 3), 16) * (1 - amount)));
  const g = Math.max(0, Math.round(parseInt(hex.slice(3, 5), 16) * (1 - amount)));
  const b = Math.max(0, Math.round(parseInt(hex.slice(5, 7), 16) * (1 - amount)));
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function lighten(hex: string, amount = 0.2): string {
  const r = Math.min(255, Math.round(parseInt(hex.slice(1, 3), 16) + (255 - parseInt(hex.slice(1, 3), 16)) * amount));
  const g = Math.min(255, Math.round(parseInt(hex.slice(3, 5), 16) + (255 - parseInt(hex.slice(3, 5), 16)) * amount));
  const b = Math.min(255, Math.round(parseInt(hex.slice(5, 7), 16) + (255 - parseInt(hex.slice(5, 7), 16)) * amount));
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// ──────────── HAIR BACK LAYER ────────────
function HairBack({ id, color }: { id: string; color: string }) {
  switch (id) {
    case 'hair-6': // Long
      return <path d="M120 80 Q120 50 160 40 Q200 50 200 80 L208 180 Q196 175 190 178 L188 110 M120 80 L112 180 Q124 175 130 178 L132 110" fill={color} />;
    case 'hair-9': // Afro
      return <circle cx="160" cy="72" r="68" fill={color} />;
    case 'hair-10': // Ponytail
      return <path d="M192 68 Q222 78 218 135 Q215 158 200 150 Q210 115 198 82" fill={color} />;
    default:
      return null;
  }
}

// ──────────── HAIR FRONT LAYER ────────────
function HairFront({ id, color }: { id: string; color: string }) {
  const d = color;
  switch (id) {
    case 'hair-1': // Short
      return (<g><path d="M118 92 Q118 46 160 40 Q202 46 202 92" fill={d} /><path d="M124 82 Q124 54 160 47 Q196 54 196 82" fill={lighten(d, 0.08)} /></g>);
    case 'hair-2': // Spiky
      return (<g><path d="M118 92 Q118 50 160 44 Q202 50 202 92" fill={d} /><polygon points="128,50 138,12 148,48" fill={d}/><polygon points="146,42 158,2 170,42" fill={d}/><polygon points="168,50 178,12 188,48" fill={d}/><polygon points="116,68 106,38 130,62" fill={d}/><polygon points="204,68 214,38 190,62" fill={d}/></g>);
    case 'hair-3': // Messy
      return (<g><path d="M110 92 Q108 38 160 32 Q212 38 210 92" fill={d}/><circle cx="124" cy="48" r="14" fill={d}/><circle cx="196" cy="48" r="14" fill={d}/><circle cx="160" cy="33" r="16" fill={d}/><circle cx="142" cy="38" r="11" fill={d}/><circle cx="178" cy="38" r="11" fill={d}/></g>);
    case 'hair-4': // Slick
      return (<g><path d="M120 92 Q120 48 160 42 Q200 48 200 92" fill={d}/><path d="M126 86 Q126 56 160 48 Q194 56 194 86" fill={lighten(d, 0.06)}/></g>);
    case 'hair-5': // Curly
      return (<g><circle cx="128" cy="52" r="16" fill={d}/><circle cx="160" cy="42" r="18" fill={d}/><circle cx="192" cy="52" r="16" fill={d}/><circle cx="116" cy="72" r="13" fill={d}/><circle cx="204" cy="72" r="13" fill={d}/><circle cx="144" cy="48" r="11" fill={d}/><circle cx="176" cy="48" r="11" fill={d}/></g>);
    case 'hair-6': // Long
      return (<g><path d="M118 92 Q118 46 160 38 Q202 46 202 92" fill={d}/><path d="M118 92 L112 155 Q126 150 132 153 L132 100" fill={d}/><path d="M202 92 L208 155 Q194 150 188 153 L188 100" fill={d}/></g>);
    case 'hair-7': // Mohawk
      return (<g><rect x="146" y="6" width="28" height="82" rx="14" fill={d}/><ellipse cx="160" cy="12" rx="16" ry="10" fill={d}/></g>);
    case 'hair-8': // Bald
      return null;
    case 'hair-9': // Afro
      return (<g><circle cx="160" cy="72" r="62" fill={d} opacity="0.3"/></g>);
    case 'hair-10': // Ponytail
      return (<g><path d="M118 92 Q118 46 160 40 Q202 46 202 92" fill={d}/><circle cx="212" cy="68" r="11" fill={d}/></g>);
    case 'hair-11': // Bob
      return (<g><path d="M110 92 Q110 42 160 38 Q210 42 210 92 Q210 126 196 120 L196 86 Q193 52 160 48 Q127 52 124 86 L124 120 Q110 126 110 92Z" fill={d}/></g>);
    case 'hair-12': // Buzz
      return (<g><path d="M120 90 Q120 50 160 44 Q200 50 200 90" fill={d} opacity="0.55"/><path d="M120 90 Q120 50 160 44 Q200 50 200 90" fill="none" stroke={d} strokeWidth="2.5"/></g>);
    default:
      return <path d="M118 92 Q118 46 160 40 Q202 46 202 92" fill={d} />;
  }
}

// ──────────── EYES ────────────
function Eyes({ id, color }: { id: string; color: string }) {
  const iris = color;
  // Common eyebrow + eye builder
  const normalEye = (cx: number, browTilt: 'flat' | 'angry' | 'sad' = 'flat') => {
    const browY = browTilt === 'angry' ? (cx < 160 ? '84,82 148,88' : '172,88 196,82') :
                  browTilt === 'sad' ? (cx < 160 ? '128,88 148,84' : '172,84 192,88') :
                  (cx < 160 ? '128,86 148,84' : '172,84 192,86');
    return null; // Not used as standalone
  };

  switch (id) {
    case 'eyes-1': // Normal
      return (<g>
        <path d="M128 86 Q138 80 148 84" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M172 84 Q182 80 192 86" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/>
        <ellipse cx="138" cy="98" rx="12" ry="13" fill="white"/><circle cx="140" cy="99" r="7" fill={iris}/><circle cx="137" cy="96" r="3" fill="#111"/><circle cx="143" cy="94" r="2.5" fill="white"/>
        <ellipse cx="182" cy="98" rx="12" ry="13" fill="white"/><circle cx="180" cy="99" r="7" fill={iris}/><circle cx="183" cy="96" r="3" fill="#111"/><circle cx="177" cy="94" r="2.5" fill="white"/>
      </g>);
    case 'eyes-2': // Wide
      return (<g>
        <path d="M126 84 Q138 76 150 82" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M170 82 Q182 76 194 84" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/>
        <ellipse cx="138" cy="98" rx="14" ry="16" fill="white"/><circle cx="140" cy="99" r="8" fill={iris}/><circle cx="137" cy="96" r="3.5" fill="#111"/><circle cx="144" cy="93" r="3" fill="white"/>
        <ellipse cx="182" cy="98" rx="14" ry="16" fill="white"/><circle cx="180" cy="99" r="8" fill={iris}/><circle cx="183" cy="96" r="3.5" fill="#111"/><circle cx="176" cy="93" r="3" fill="white"/>
      </g>);
    case 'eyes-3': // Angry
      return (<g>
        <line x1="124" y1="82" x2="150" y2="88" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
        <line x1="196" y1="82" x2="170" y2="88" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
        <ellipse cx="138" cy="100" rx="11" ry="11" fill="white"/><circle cx="140" cy="101" r="6" fill={iris}/><circle cx="137" cy="98" r="2.5" fill="#111"/><circle cx="143" cy="97" r="1.5" fill="white"/>
        <ellipse cx="182" cy="100" rx="11" ry="11" fill="white"/><circle cx="180" cy="101" r="6" fill={iris}/><circle cx="183" cy="98" r="2.5" fill="#111"/><circle cx="177" cy="97" r="1.5" fill="white"/>
      </g>);
    case 'eyes-4': // Happy
      return (<g>
        <path d="M124 98 Q138 86 152 98" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
        <path d="M168 98 Q182 86 196 98" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
      </g>);
    case 'eyes-5': // Sad
      return (<g>
        <line x1="124" y1="88" x2="150" y2="84" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="196" y1="88" x2="170" y2="84" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/>
        <ellipse cx="138" cy="100" rx="11" ry="12" fill="white"/><circle cx="136" cy="102" r="6" fill={iris}/><circle cx="134" cy="99" r="2.5" fill="#111"/><circle cx="139" cy="98" r="1.5" fill="white"/>
        <ellipse cx="182" cy="100" rx="11" ry="12" fill="white"/><circle cx="184" cy="102" r="6" fill={iris}/><circle cx="186" cy="99" r="2.5" fill="#111"/><circle cx="181" cy="98" r="1.5" fill="white"/>
        <ellipse cx="150" cy="110" rx="2" ry="3" fill="#87CEEB" opacity="0.6"/>
      </g>);
    case 'eyes-6': // Wink
      return (<g>
        <path d="M128 86 Q138 80 148 84" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/>
        <ellipse cx="138" cy="98" rx="12" ry="13" fill="white"/><circle cx="140" cy="99" r="7" fill={iris}/><circle cx="137" cy="96" r="3" fill="#111"/><circle cx="143" cy="94" r="2.5" fill="white"/>
        <path d="M168 98 Q182 90 196 98" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
      </g>);
    case 'eyes-7': // Closed
      return (<g>
        <path d="M124 98 Q138 106 152 98" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
        <path d="M168 98 Q182 106 196 98" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
      </g>);
    case 'eyes-8': // Sleepy
      return (<g>
        <path d="M126 90 Q138 86 150 90" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
        <path d="M170 90 Q182 86 194 90" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="138" cy="100" rx="11" ry="7" fill="white"/><circle cx="138" cy="101" r="5" fill={iris}/><circle cx="136" cy="99" r="2" fill="#111"/>
        <ellipse cx="182" cy="100" rx="11" ry="7" fill="white"/><circle cx="182" cy="101" r="5" fill={iris}/><circle cx="184" cy="99" r="2" fill="#111"/>
      </g>);
    case 'eyes-9': // Star
      return (<g>
        <path d="M128 86 Q138 80 148 84" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M172 84 Q182 80 192 86" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/>
        <polygon points="138,86 140,94 148,94 142,99 144,108 138,103 132,108 134,99 128,94 136,94" fill={iris}/>
        <polygon points="182,86 184,94 192,94 186,99 188,108 182,103 176,108 178,99 172,94 180,94" fill={iris}/>
      </g>);
    case 'eyes-10': // Heart
      return (<g>
        <path d="M128 86 Q138 80 148 84" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M172 84 Q182 80 192 86" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M138 108 C128 98 124 90 130 86 C136 82 138 88 138 88 C138 88 138 82 144 86 C150 90 146 98 138 108Z" fill={iris}/>
        <path d="M182 108 C172 98 168 90 174 86 C180 82 182 88 182 88 C182 88 182 82 188 86 C194 90 190 98 182 108Z" fill={iris}/>
      </g>);
    default:
      return <Eyes id="eyes-1" color={color} />;
  }
}

// ──────────── HEAD SHAPE ────────────
function HeadShape({ id, color }: { id: string; color: string }) {
  const skin = color;
  const earColor = darken(skin, 0.08);
  switch (id) {
    case 'head-1': return (<g><ellipse cx="160" cy="100" rx="44" ry="46" fill={skin}/><ellipse cx="116" cy="106" rx="7" ry="9" fill={earColor}/><ellipse cx="204" cy="106" rx="7" ry="9" fill={earColor}/></g>);
    case 'head-2': return (<g><rect x="118" y="56" width="84" height="88" rx="16" fill={skin}/><ellipse cx="118" cy="106" rx="7" ry="9" fill={earColor}/><ellipse cx="202" cy="106" rx="7" ry="9" fill={earColor}/></g>);
    case 'head-3': return (<g><ellipse cx="160" cy="98" rx="38" ry="50" fill={skin}/><ellipse cx="122" cy="104" rx="6" ry="8" fill={earColor}/><ellipse cx="198" cy="104" rx="6" ry="8" fill={earColor}/></g>);
    case 'head-4': return (<g><path d="M160 148 C130 138 114 116 118 88 C122 63 140 53 160 63 C180 53 198 63 202 88 C206 116 190 138 160 148Z" fill={skin}/><ellipse cx="118" cy="103" rx="6" ry="8" fill={earColor}/><ellipse cx="202" cy="103" rx="6" ry="8" fill={earColor}/></g>);
    case 'head-5': return (<g><polygon points="160,54 206,100 160,146 114,100" fill={skin}/><ellipse cx="115" cy="100" rx="6" ry="8" fill={earColor}/><ellipse cx="205" cy="100" rx="6" ry="8" fill={earColor}/></g>);
    case 'head-6': return (<g><ellipse cx="160" cy="98" rx="36" ry="54" fill={skin}/><ellipse cx="124" cy="104" rx="6" ry="8" fill={earColor}/><ellipse cx="196" cy="104" rx="6" ry="8" fill={earColor}/></g>);
    case 'head-7': return (<g><ellipse cx="160" cy="100" rx="50" ry="42" fill={skin}/><ellipse cx="110" cy="106" rx="7" ry="9" fill={earColor}/><ellipse cx="210" cy="106" rx="7" ry="9" fill={earColor}/></g>);
    case 'head-8': return (<g><ellipse cx="160" cy="98" rx="32" ry="48" fill={skin}/><ellipse cx="128" cy="104" rx="5" ry="7" fill={earColor}/><ellipse cx="192" cy="104" rx="5" ry="7" fill={earColor}/></g>);
    default: return <HeadShape id="head-1" color={color} />;
  }
}

// ──────────── FULL BODY (torso + arms + hands + legs + feet) ────────────
function FullBody({ id, color, skinColor }: { id: string; color: string; skinColor: string }) {
  const fill = color;
  const shade = darken(fill, 0.2);
  const highlight = lighten(fill, 0.15);
  const skinShade = darken(skinColor, 0.1);

  // Common parts: arms (skin), hands (skin fists)
  const arms = (sleeveEnd: number) => (
    <g>
      {/* Left arm */}
      <path d={`M124 ${sleeveEnd} Q116 ${sleeveEnd + 10} 108 ${sleeveEnd + 30} Q104 ${sleeveEnd + 40} 106 ${sleeveEnd + 48}`} stroke={skinColor} strokeWidth="16" fill="none" strokeLinecap="round"/>
      {/* Left hand (fist) */}
      <circle cx="106" cy={sleeveEnd + 52} r="9" fill={skinColor}/>
      <circle cx="106" cy={sleeveEnd + 52} r="9" fill="none" stroke={skinShade} strokeWidth="1"/>
      {/* Right arm */}
      <path d={`M196 ${sleeveEnd} Q204 ${sleeveEnd + 10} 212 ${sleeveEnd + 30} Q216 ${sleeveEnd + 40} 214 ${sleeveEnd + 48}`} stroke={skinColor} strokeWidth="16" fill="none" strokeLinecap="round"/>
      {/* Right hand (fist) */}
      <circle cx="214" cy={sleeveEnd + 52} r="9" fill={skinColor}/>
      <circle cx="214" cy={sleeveEnd + 52} r="9" fill="none" stroke={skinShade} strokeWidth="1"/>
    </g>
  );

  // Legs (always similar)
  const legs = (
    <g>
      {/* Left leg */}
      <path d="M143 258 L140 310 Q138 318 134 322" stroke={shade} strokeWidth="18" fill="none" strokeLinecap="round"/>
      {/* Left boot/shoe */}
      <path d="M134 318 Q128 326 118 328 Q114 330 116 336 Q120 340 138 338 Q146 336 148 328 Q148 322 143 318" fill={shade}/>
      {/* Right leg */}
      <path d="M177 258 L180 310 Q182 318 186 322" stroke={shade} strokeWidth="18" fill="none" strokeLinecap="round"/>
      {/* Right boot/shoe */}
      <path d="M186 318 Q192 326 202 328 Q206 330 204 336 Q200 340 182 338 Q174 336 172 328 Q172 322 177 318" fill={shade}/>
    </g>
  );

  // Torso shapes per outfit
  switch (id) {
    case 'body-1': // T-Shirt
      return (<g>
        {legs}
        {/* Arms behind torso */}
        <g>{arms(168)}</g>
        {/* Torso */}
        <path d="M126 150 Q118 156 112 166 L112 172 L124 168 L124 260 L196 260 L196 168 L208 172 L208 166 Q202 156 194 150 Q178 142 160 146 Q142 142 126 150Z" fill={fill}/>
        {/* Sleeve edges */}
        <path d="M112 166 L124 168 L124 180" fill={shade} opacity="0.3"/>
        <path d="M208 166 L196 168 L196 180" fill={shade} opacity="0.3"/>
        {/* Neckline */}
        <path d="M144 146 Q160 156 176 146" fill="none" stroke={shade} strokeWidth="1.5"/>
        {/* Center seam detail */}
        <line x1="160" y1="155" x2="160" y2="260" stroke={shade} strokeWidth="0.5" opacity="0.15"/>
      </g>);

    case 'body-2': // Hoodie
      return (<g>
        {legs}
        {arms(172)}
        <path d="M122 148 Q112 156 106 170 L106 178 L120 172 L120 260 L200 260 L200 172 L214 178 L214 170 Q208 156 198 148 Q180 140 160 144 Q140 140 122 148Z" fill={fill}/>
        {/* Hood */}
        <ellipse cx="160" cy="148" rx="16" ry="8" fill={fill} stroke={shade} strokeWidth="1"/>
        <path d="M144 144 Q160 156 176 144" fill="none" stroke={shade} strokeWidth="1"/>
        {/* Pocket */}
        <rect x="140" y="210" width="40" height="24" rx="8" fill={shade} opacity="0.2"/>
        {/* Hood strings */}
        <line x1="153" y1="152" x2="150" y2="180" stroke={shade} strokeWidth="1.5" opacity="0.4"/>
        <line x1="167" y1="152" x2="170" y2="180" stroke={shade} strokeWidth="1.5" opacity="0.4"/>
        <circle cx="150" cy="182" r="2" fill={shade} opacity="0.3"/>
        <circle cx="170" cy="182" r="2" fill={shade} opacity="0.3"/>
      </g>);

    case 'body-3': // Suit
      return (<g>
        {legs}
        {arms(168)}
        <path d="M126 150 Q118 158 112 168 L112 174 L124 170 L124 260 L196 260 L196 170 L208 174 L208 168 Q202 158 194 150 Q178 142 160 146 Q142 142 126 150Z" fill={fill}/>
        {/* Lapels */}
        <path d="M160 148 L142 185 L150 188 L160 160" fill={shade} opacity="0.35"/>
        <path d="M160 148 L178 185 L170 188 L160 160" fill={shade} opacity="0.35"/>
        {/* Buttons */}
        <circle cx="160" cy="200" r="2.5" fill="#FFD700"/><circle cx="160" cy="218" r="2.5" fill="#FFD700"/><circle cx="160" cy="236" r="2.5" fill="#FFD700"/>
        {/* Tie */}
        <polygon points="160,155 154,168 160,172 166,168" fill="#DC143C"/>
        <polygon points="154,168 166,168 163,210 157,210" fill="#DC143C" opacity="0.85"/>
        {/* Shirt peek */}
        <path d="M152 148 L160 160 L168 148" fill="white" opacity="0.6"/>
      </g>);

    case 'body-4': // Armor
      return (<g>
        {legs}
        {arms(170)}
        <path d="M120 148 Q110 158 104 170 L104 178 L118 172 L118 260 L202 260 L202 172 L216 178 L216 170 Q210 158 200 148 Q180 138 160 142 Q140 138 120 148Z" fill={fill}/>
        {/* Shoulder pads */}
        <ellipse cx="110" cy="166" rx="18" ry="10" fill={fill} stroke={highlight} strokeWidth="1.5"/>
        <ellipse cx="210" cy="166" rx="18" ry="10" fill={fill} stroke={highlight} strokeWidth="1.5"/>
        {/* Chest plate */}
        <path d="M136 168 L184 168 L180 215 Q160 222 140 215 Z" fill="white" opacity="0.12" stroke="white" strokeWidth="0.5" strokeOpacity="0.25"/>
        {/* Belt */}
        <rect x="118" y="232" width="84" height="7" rx="3.5" fill="#FFD700" opacity="0.5"/>
        <circle cx="160" cy="235.5" r="5" fill="#FFD700" opacity="0.4"/>
        {/* Neckline */}
        <path d="M144 142 Q160 152 176 142" fill="none" stroke={highlight} strokeWidth="1"/>
      </g>);

    case 'body-5': // Tank Top
      return (<g>
        {legs}
        {arms(155)}
        <path d="M134 150 L134 260 L186 260 L186 150 Q174 142 160 146 Q146 142 134 150Z" fill={fill}/>
        <path d="M146 146 Q160 156 174 146" fill="none" stroke={shade} strokeWidth="1"/>
      </g>);

    case 'body-6': // Jacket
      return (<g>
        {legs}
        {arms(170)}
        <path d="M122 148 Q112 158 106 170 L106 176 L120 172 L120 260 L200 260 L200 172 L214 176 L214 170 Q208 158 198 148 Q180 140 160 144 Q140 140 122 148Z" fill={fill}/>
        {/* Zipper */}
        <rect x="158" y="152" width="4" height="108" fill="#FFD700" opacity="0.45" rx="2"/>
        {/* Collar */}
        <path d="M138 148 L146 162 L160 152 L174 162 L182 148" fill="none" stroke={shade} strokeWidth="2.5" strokeLinejoin="round"/>
        {/* Pocket lines */}
        <rect x="130" y="200" width="22" height="2" rx="1" fill={shade} opacity="0.2"/>
        <rect x="168" y="200" width="22" height="2" rx="1" fill={shade} opacity="0.2"/>
      </g>);

    case 'body-7': // Sweater
      return (<g>
        {legs}
        {arms(170)}
        <path d="M122 148 Q114 158 108 170 L108 176 L120 172 L120 260 L200 260 L200 172 L212 176 L212 170 Q206 158 198 148 Q180 140 160 144 Q140 140 122 148Z" fill={fill}/>
        {/* Knit lines */}
        {[195, 210, 225, 240].map(y => (
          <line key={y} x1="120" y1={y} x2="200" y2={y} stroke="white" strokeWidth="2.5" opacity="0.08"/>
        ))}
        {/* Collar */}
        <path d="M144 144 Q160 156 176 144" fill="none" stroke={shade} strokeWidth="2"/>
      </g>);

    case 'body-8': // Vest
      return (<g>
        {legs}
        {arms(155)}
        {/* Inner shirt */}
        <path d="M132 150 L132 260 L188 260 L188 150 Q174 142 160 146 Q146 142 132 150Z" fill="white" opacity="0.85"/>
        {/* Vest panels */}
        <path d="M120 155 L132 150 L132 260 L120 260 Z" fill={fill}/>
        <path d="M200 155 L188 150 L188 260 L200 260 Z" fill={fill}/>
        {/* Vest front */}
        <path d="M132 150 L120 155 L120 260 L145 260 L145 155 Q138 148 132 150Z" fill={fill} opacity="0.85"/>
        <path d="M188 150 L200 155 L200 260 L175 260 L175 155 Q182 148 188 150Z" fill={fill} opacity="0.85"/>
        {/* Buttons */}
        <circle cx="148" cy="190" r="2" fill={shade}/><circle cx="148" cy="210" r="2" fill={shade}/><circle cx="148" cy="230" r="2" fill={shade}/>
      </g>);

    case 'body-9': // Kurta
      return (<g>
        {legs}
        {arms(168)}
        {/* Long tunic body */}
        <path d="M126 150 Q118 158 112 168 L112 174 L124 170 L120 300 L200 300 L196 170 L208 174 L208 168 Q202 158 194 150 Q178 142 160 146 Q142 142 126 150Z" fill={fill}/>
        {/* Front opening slit */}
        <line x1="160" y1="155" x2="160" y2="300" stroke={shade} strokeWidth="1" opacity="0.3"/>
        {/* Embroidered neckline */}
        <path d="M146 146 L160 170 L174 146" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.6"/>
        <path d="M148 150 L160 168 L172 150" fill="none" stroke="#FFD700" strokeWidth="0.8" opacity="0.4"/>
        {/* Side slits */}
        <line x1="122" y1="270" x2="122" y2="300" stroke={shade} strokeWidth="1" opacity="0.3"/>
        <line x1="198" y1="270" x2="198" y2="300" stroke={shade} strokeWidth="1" opacity="0.3"/>
        {/* Bottom embroidery */}
        <path d="M120 292 Q130 288 140 292 Q150 296 160 292 Q170 288 180 292 Q190 296 200 292" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.35"/>
      </g>);

    case 'body-10': // Sherwani
      return (<g>
        {legs}
        {arms(168)}
        {/* Long formal coat */}
        <path d="M124 150 Q114 158 108 168 L108 174 L122 170 L118 300 L202 300 L198 170 L212 174 L212 168 Q206 158 196 150 Q178 142 160 146 Q142 142 124 150Z" fill={fill}/>
        {/* High collar / mandarin style */}
        <path d="M142 144 L142 155 L160 160 L178 155 L178 144" fill={shade} opacity="0.3"/>
        <path d="M142 144 L142 155 L160 160 L178 155 L178 144" fill="none" stroke={shade} strokeWidth="1.5"/>
        {/* Ornate button line */}
        <line x1="160" y1="160" x2="160" y2="295" stroke="#FFD700" strokeWidth="0.8" opacity="0.3"/>
        {[175, 192, 209, 226, 243, 260, 277].map(y => (
          <g key={y}><circle cx="160" cy={y} r="2.5" fill="#FFD700" opacity="0.5"/><circle cx="160" cy={y} r="1" fill="#FFD700" opacity="0.8"/></g>
        ))}
        {/* Side golden trim */}
        <line x1="120" y1="174" x2="120" y2="298" stroke="#FFD700" strokeWidth="1" opacity="0.2"/>
        <line x1="200" y1="174" x2="200" y2="298" stroke="#FFD700" strokeWidth="1" opacity="0.2"/>
        {/* Bottom trim */}
        <rect x="118" y="294" width="84" height="4" rx="2" fill="#FFD700" opacity="0.25"/>
      </g>);

    case 'body-11': // Kimono
      return (<g>
        {legs}
        {arms(168)}
        {/* Wide flowing robe */}
        <path d="M118 150 Q106 160 100 172 L100 178 L116 172 L112 300 L208 300 L204 172 L220 178 L220 172 Q214 160 202 150 Q180 140 160 144 Q140 140 118 150Z" fill={fill}/>
        {/* Left-over-right wrap */}
        <path d="M160 148 L130 200 L120 198" fill="none" stroke={shade} strokeWidth="1.5"/>
        <path d="M160 148 L190 200 L200 198" fill="none" stroke={shade} strokeWidth="0.8" opacity="0.4"/>
        {/* Obi sash/belt */}
        <rect x="112" y="215" width="96" height="18" rx="4" fill={darken(fill, 0.3)}/>
        <rect x="112" y="215" width="96" height="18" rx="4" fill="none" stroke="#FFD700" strokeWidth="0.8" opacity="0.4"/>
        {/* Obi knot (at back, visible as bump) */}
        <ellipse cx="160" cy="224" rx="10" ry="8" fill={darken(fill, 0.25)}/>
        {/* Decorative pattern */}
        <circle cx="140" cy="270" r="6" fill="white" opacity="0.06"/>
        <circle cx="180" cy="260" r="8" fill="white" opacity="0.05"/>
        <circle cx="155" cy="285" r="5" fill="white" opacity="0.04"/>
      </g>);

    case 'body-12': // Dashiki
      return (<g>
        {legs}
        {arms(170)}
        {/* Wide flowing top */}
        <path d="M118 150 Q108 160 102 172 L102 178 L118 172 L116 280 L204 280 L202 172 L218 178 L218 172 Q212 160 202 150 Q180 140 160 144 Q140 140 118 150Z" fill={fill}/>
        {/* V-neck embroidery pattern */}
        <path d="M140 146 L160 190 L180 146" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.6"/>
        <path d="M142 150 L160 186 L178 150" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.4"/>
        <path d="M144 154 L160 182 L176 154" fill="none" stroke={lighten(fill, 0.3)} strokeWidth="1.5" opacity="0.5"/>
        {/* Geometric border pattern at hem */}
        <path d="M116 272 L120 266 L124 272 L128 266 L132 272 L136 266 L140 272 L144 266 L148 272 L152 266 L156 272 L160 266 L164 272 L168 266 L172 272 L176 266 L180 272 L184 266 L188 272 L192 266 L196 272 L200 266 L204 272" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.4"/>
        {/* Neckline detail */}
        <ellipse cx="160" cy="150" rx="12" ry="6" fill={shade} opacity="0.3"/>
      </g>);

    case 'body-13': // Hanbok
      return (<g>
        {legs}
        {arms(165)}
        {/* Jeogori (short jacket) */}
        <path d="M128 148 Q118 156 112 168 L112 174 L124 170 L124 210 L196 210 L196 170 L208 174 L208 168 Q202 156 192 148 Q178 140 160 144 Q142 140 128 148Z" fill={fill}/>
        {/* Chima (long flowing skirt) - slightly different shade */}
        <path d="M116 208 Q114 212 112 216 L106 310 L214 310 L208 216 Q206 212 204 208 Z" fill={lighten(fill, 0.15)}/>
        {/* Goreum ribbon ties */}
        <path d="M152 155 L148 175 Q144 185 140 200" stroke="#DC143C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M168 155 L172 175 Q176 185 180 200" stroke="#DC143C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Ribbon bow */}
        <ellipse cx="150" cy="175" rx="6" ry="4" fill="#DC143C" opacity="0.7"/>
        {/* Skirt pleats */}
        <line x1="130" y1="216" x2="126" y2="308" stroke={shade} strokeWidth="0.5" opacity="0.15"/>
        <line x1="150" y1="212" x2="148" y2="308" stroke={shade} strokeWidth="0.5" opacity="0.15"/>
        <line x1="170" y1="212" x2="172" y2="308" stroke={shade} strokeWidth="0.5" opacity="0.15"/>
        <line x1="190" y1="216" x2="194" y2="308" stroke={shade} strokeWidth="0.5" opacity="0.15"/>
        {/* Neckline */}
        <path d="M146 144 Q160 156 174 144" fill="none" stroke={shade} strokeWidth="1.5"/>
      </g>);

    case 'body-14': // Poncho
      return (<g>
        {legs}
        {arms(185)}
        {/* Inner body visible at bottom */}
        <rect x="135" y="230" width="50" height="30" rx="6" fill={shade} opacity="0.4"/>
        {/* Poncho draped shape */}
        <path d="M160 148 L90 230 Q88 236 92 240 L120 260 L124 258 L100 238 L160 158 L220 238 L196 258 L200 260 L228 240 Q232 236 230 230 Z" fill={fill}/>
        {/* Center neckhole */}
        <ellipse cx="160" cy="152" rx="14" ry="8" fill={shade} opacity="0.3"/>
        <ellipse cx="160" cy="152" rx="14" ry="8" fill="none" stroke={shade} strokeWidth="1"/>
        {/* Zigzag pattern stripe */}
        <path d="M105 210 L110 204 L115 210 L120 204 L125 210 L130 204 L135 210 L140 204 L145 210 L150 204 L155 210 L160 204 L165 210 L170 204 L175 210 L180 204 L185 210 L190 204 L195 210 L200 204 L205 210 L210 204 L215 210" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.4"/>
        <path d="M100 224 L105 218 L110 224 L115 218 L120 224 L125 218 L130 224 L135 218 L140 224 L145 218 L150 224 L155 218 L160 224 L165 218 L170 224 L175 218 L180 224 L185 218 L190 224 L195 218 L200 224 L205 218 L210 224 L215 218 L220 224" fill="none" stroke={lighten(fill, 0.3)} strokeWidth="1" opacity="0.3"/>
        {/* Fringe at bottom */}
        {[95, 102, 109, 116, 123, 130, 197, 204, 211, 218, 225].map(x => (
          <line key={x} x1={x} y1={232 + (x - 95) * 0.3} x2={x} y2={240 + (x - 95) * 0.3} stroke={shade} strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
        ))}
      </g>);

    default:
      return <FullBody id="body-1" color={color} skinColor={skinColor} />;
  }
}

// ──────────── FACE FEATURES ────────────
function FaceFeatures({ skinColor }: { skinColor: string }) {
  return (
    <g>
      <ellipse cx="160" cy="114" rx="4" ry="3" fill={darken(skinColor, 0.15)} opacity="0.6"/>
      <path d="M150 124 Q160 132 170 124" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="130" cy="116" rx="8" ry="5" fill="#FF6B6B" opacity="0.12"/>
      <ellipse cx="190" cy="116" rx="8" ry="5" fill="#FF6B6B" opacity="0.12"/>
    </g>
  );
}

// ──────────── NECK ────────────
function Neck({ color }: { color: string }) {
  return <rect x="148" y="140" width="24" height="16" rx="4" fill={color}/>;
}


// ═══════════ MAIN PREVIEW ═══════════

export default function AvatarPreview({ mobile }: { mobile?: boolean }) {
  const { state } = useAvatar();

  const svgW = mobile ? 180 : 260;
  const svgH = mobile ? 260 : 380;

  return (
    <div className="w-full flex items-center justify-center py-2 md:py-4">
      <div
        className="relative transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
        style={{ filter: mobile ? 'drop-shadow(0 15px 20px rgba(0,0,0,0.4))' : 'drop-shadow(0 25px 35px rgba(0,0,0,0.5))' }}
      >
        <div className={mobile ? '' : 'animate-[float_3s_ease-in-out_infinite]'}>
          <svg
            viewBox="60 10 200 350"
            width={svgW}
            height={svgH}
            className="transition-all duration-300"
          >
            {/* Ambient glow */}
            <defs>
              <radialGradient id="glow" cx="50%" cy="35%" r="50%">
                <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.06"/>
                <stop offset="100%" stopColor="#00D9FF" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <ellipse cx="160" cy="180" rx="100" ry="160" fill="url(#glow)"/>

            {/* Hair back layer */}
            <HairBack id={state.hair.selected} color={state.hair.color}/>

            {/* Full body with arms, hands, legs, feet */}
            <FullBody id={state.body.selected} color={state.body.color} skinColor={state.head.color}/>

            {/* Neck */}
            <Neck color={state.head.color}/>

            {/* Head */}
            <HeadShape id={state.head.selected} color={state.head.color}/>

            {/* Face */}
            <FaceFeatures skinColor={state.head.color}/>

            {/* Eyes */}
            <Eyes id={state.eyes.selected} color={state.eyes.color}/>

            {/* Hair front */}
            <HairFront id={state.hair.selected} color={state.hair.color}/>
          </svg>
        </div>

        {/* Floor shadow */}
        <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/25 blur-lg rounded-[100%] ${mobile ? 'w-24 h-3' : 'w-36 h-5'}`}/>
      </div>
    </div>
  );
}
