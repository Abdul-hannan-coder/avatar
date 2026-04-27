"use client";

import React from 'react';

/* ---- SVG THUMBNAILS FOR OPTION CARDS ---- */

// HEAD SHAPES
export function HeadThumb({ id, color }: { id: string; color: string }) {
  const fill = color || '#FFDCB3';
  switch (id) {
    case 'head-1': // Round
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><ellipse cx="40" cy="40" rx="28" ry="30" fill={fill} /><ellipse cx="40" cy="40" rx="28" ry="30" fill="none" stroke="#00000020" strokeWidth="1" /></svg>);
    case 'head-2': // Square
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><rect x="14" y="12" width="52" height="56" rx="10" fill={fill} /><rect x="14" y="12" width="52" height="56" rx="10" fill="none" stroke="#00000020" strokeWidth="1" /></svg>);
    case 'head-3': // Oval
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><ellipse cx="40" cy="40" rx="24" ry="34" fill={fill} /></svg>);
    case 'head-4': // Heart
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M40 68 C20 50 8 36 14 22 C20 8 34 10 40 20 C46 10 60 8 66 22 C72 36 60 50 40 68Z" fill={fill} /></svg>);
    case 'head-5': // Diamond
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><polygon points="40,8 68,40 40,72 12,40" fill={fill} rx="4" /></svg>);
    case 'head-6': // Long
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><ellipse cx="40" cy="42" rx="22" ry="36" fill={fill} /></svg>);
    case 'head-7': // Wide
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><ellipse cx="40" cy="42" rx="34" ry="28" fill={fill} /></svg>);
    case 'head-8': // Slim
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><ellipse cx="40" cy="40" rx="18" ry="32" fill={fill} /></svg>);
    default:
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><circle cx="40" cy="40" r="28" fill={fill} /></svg>);
  }
}

// EYE STYLES
export function EyesThumb({ id, color }: { id: string; color: string }) {
  const iris = color || '#4A90D9';
  switch (id) {
    case 'eyes-1': // Normal
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><ellipse cx="26" cy="40" rx="10" ry="10" fill="white" stroke="#333" strokeWidth="1"/><circle cx="26" cy="40" r="5" fill={iris}/><circle cx="28" cy="38" r="1.5" fill="white"/><ellipse cx="54" cy="40" rx="10" ry="10" fill="white" stroke="#333" strokeWidth="1"/><circle cx="54" cy="40" r="5" fill={iris}/><circle cx="56" cy="38" r="1.5" fill="white"/></svg>);
    case 'eyes-2': // Wide
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><ellipse cx="26" cy="40" rx="12" ry="14" fill="white" stroke="#333" strokeWidth="1"/><circle cx="26" cy="40" r="6" fill={iris}/><circle cx="28" cy="38" r="2" fill="white"/><ellipse cx="54" cy="40" rx="12" ry="14" fill="white" stroke="#333" strokeWidth="1"/><circle cx="54" cy="40" r="6" fill={iris}/><circle cx="56" cy="38" r="2" fill="white"/></svg>);
    case 'eyes-3': // Angry
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><line x1="16" y1="30" x2="36" y2="34" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/><ellipse cx="26" cy="42" rx="10" ry="9" fill="white" stroke="#333" strokeWidth="1"/><circle cx="26" cy="42" r="5" fill={iris}/><line x1="64" y1="30" x2="44" y2="34" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/><ellipse cx="54" cy="42" rx="10" ry="9" fill="white" stroke="#333" strokeWidth="1"/><circle cx="54" cy="42" r="5" fill={iris}/></svg>);
    case 'eyes-4': // Happy
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M16 42 Q26 32 36 42" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/><path d="M44 42 Q54 32 64 42" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/></svg>);
    case 'eyes-5': // Sad
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><line x1="16" y1="34" x2="36" y2="30" stroke="#333" strokeWidth="2" strokeLinecap="round"/><ellipse cx="26" cy="42" rx="10" ry="10" fill="white" stroke="#333" strokeWidth="1"/><circle cx="26" cy="44" r="5" fill={iris}/><circle cx="24" cy="42" r="1.5" fill="white"/><line x1="64" y1="34" x2="44" y2="30" stroke="#333" strokeWidth="2" strokeLinecap="round"/><ellipse cx="54" cy="42" rx="10" ry="10" fill="white" stroke="#333" strokeWidth="1"/><circle cx="54" cy="44" r="5" fill={iris}/><circle cx="52" cy="42" r="1.5" fill="white"/></svg>);
    case 'eyes-6': // Wink
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><ellipse cx="26" cy="40" rx="10" ry="10" fill="white" stroke="#333" strokeWidth="1"/><circle cx="26" cy="40" r="5" fill={iris}/><circle cx="28" cy="38" r="1.5" fill="white"/><path d="M44 40 Q54 34 64 40" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/></svg>);
    case 'eyes-7': // Closed
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M16 40 Q26 48 36 40" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/><path d="M44 40 Q54 48 64 40" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/></svg>);
    case 'eyes-8': // Sleepy
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><ellipse cx="26" cy="42" rx="10" ry="6" fill="white" stroke="#333" strokeWidth="1"/><circle cx="26" cy="42" r="4" fill={iris}/><ellipse cx="54" cy="42" rx="10" ry="6" fill="white" stroke="#333" strokeWidth="1"/><circle cx="54" cy="42" r="4" fill={iris}/></svg>);
    case 'eyes-9': // Star
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><polygon points="26,30 28,37 36,37 30,42 32,50 26,45 20,50 22,42 16,37 24,37" fill={iris}/><polygon points="54,30 56,37 64,37 58,42 60,50 54,45 48,50 50,42 44,37 52,37" fill={iris}/></svg>);
    case 'eyes-10': // Heart
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M26 48 C18 40 14 32 20 28 C26 24 26 30 26 30 C26 30 26 24 32 28 C38 32 34 40 26 48Z" fill={iris}/><path d="M54 48 C46 40 42 32 48 28 C54 24 54 30 54 30 C54 30 54 24 60 28 C66 32 62 40 54 48Z" fill={iris}/></svg>);
    default:
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><circle cx="26" cy="40" r="8" fill="white" stroke="#333" strokeWidth="1"/><circle cx="26" cy="40" r="4" fill={iris}/><circle cx="54" cy="40" r="8" fill="white" stroke="#333" strokeWidth="1"/><circle cx="54" cy="40" r="4" fill={iris}/></svg>);
  }
}

// HAIR STYLES
export function HairThumb({ id, color }: { id: string; color: string }) {
  const fill = color || '#4A3B32';
  switch (id) {
    case 'hair-1': // Short
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M16 48 Q16 12 40 12 Q64 12 64 48" fill={fill} /><rect x="20" y="40" width="40" height="12" fill="#FFDCB380" rx="4"/></svg>);
    case 'hair-2': // Spiky
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M16 48 Q16 20 40 20 Q64 20 64 48" fill={fill}/><polygon points="22,20 28,2 34,20" fill={fill}/><polygon points="34,18 40,0 46,18" fill={fill}/><polygon points="46,20 52,2 58,20" fill={fill}/></svg>);
    case 'hair-3': // Messy
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M12 50 Q10 14 40 10 Q70 14 68 50" fill={fill}/><circle cx="18" cy="22" r="8" fill={fill}/><circle cx="62" cy="22" r="8" fill={fill}/><circle cx="40" cy="10" r="9" fill={fill}/></svg>);
    case 'hair-4': // Slick
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M18 48 Q18 16 40 14 Q62 16 62 48 L60 44 Q60 20 40 18 Q20 20 20 44 Z" fill={fill}/></svg>);
    case 'hair-5': // Curly
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><circle cx="22" cy="24" r="10" fill={fill}/><circle cx="40" cy="18" r="10" fill={fill}/><circle cx="58" cy="24" r="10" fill={fill}/><circle cx="16" cy="38" r="8" fill={fill}/><circle cx="64" cy="38" r="8" fill={fill}/></svg>);
    case 'hair-6': // Long
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M16 48 Q16 12 40 12 Q64 12 64 48 L66 72 Q54 68 52 72 L52 52" fill={fill}/><path d="M16 48 L14 72 Q26 68 28 72 L28 52" fill={fill}/></svg>);
    case 'hair-7': // Mohawk
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M22 48 Q22 24 40 24 Q58 24 58 48" fill="#FFDCB3" opacity="0.3"/><rect x="34" y="4" width="12" height="40" rx="6" fill={fill}/></svg>);
    case 'hair-8': // Bald
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><ellipse cx="40" cy="38" rx="26" ry="28" fill="#FFDCB3" opacity="0.4"/><ellipse cx="40" cy="38" rx="26" ry="28" fill="none" stroke={fill} strokeWidth="1" strokeDasharray="4 2"/><text x="40" y="44" textAnchor="middle" fontSize="11" fill="#999">✨</text></svg>);
    case 'hair-9': // Afro
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><circle cx="40" cy="36" r="32" fill={fill}/><ellipse cx="40" cy="44" rx="22" ry="18" fill="#FFDCB3" opacity="0.3"/></svg>);
    case 'hair-10': // Ponytail
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M16 48 Q16 12 40 12 Q64 12 64 48" fill={fill}/><path d="M60 28 Q72 32 68 56 Q66 68 60 64 Q64 52 58 36" fill={fill}/></svg>);
    case 'hair-11': // Bob
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M14 52 Q14 12 40 12 Q66 12 66 52 Q66 60 58 58 L58 42 Q56 20 40 18 Q24 20 22 42 L22 58 Q14 60 14 52Z" fill={fill}/></svg>);
    case 'hair-12': // Buzz
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M18 46 Q18 16 40 14 Q62 16 62 46" fill={fill} opacity="0.7"/><path d="M18 46 Q18 16 40 14 Q62 16 62 46" fill="none" stroke={fill} strokeWidth="2"/></svg>);
    default:
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M16 48 Q16 12 40 12 Q64 12 64 48" fill={fill}/></svg>);
  }
}

// BODY/OUTFIT STYLES
export function BodyThumb({ id, color }: { id: string; color: string }) {
  const fill = color || '#1E90FF';
  switch (id) {
    case 'body-1': // T-Shirt
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M24 20 L12 30 L18 34 L22 28 L22 68 L58 68 L58 28 L62 34 L68 30 L56 20 Q48 16 40 18 Q32 16 24 20Z" fill={fill}/><path d="M34 20 Q40 24 46 20" fill="none" stroke="#00000020" strokeWidth="1.5"/></svg>);
    case 'body-2': // Hoodie
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M22 18 L10 30 L16 34 L20 28 L20 68 L60 68 L60 28 L64 34 L70 30 L58 18 Q48 14 40 16 Q32 14 22 18Z" fill={fill}/><path d="M32 16 Q40 22 48 16" fill="none" stroke="#00000030" strokeWidth="1.5"/><ellipse cx="40" cy="16" rx="8" ry="4" fill={fill} stroke="#00000020" strokeWidth="1"/><rect x="34" y="36" width="12" height="16" rx="4" fill="#00000015"/></svg>);
    case 'body-3': // Suit
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M24 18 L14 28 L20 32 L22 26 L22 68 L58 68 L58 26 L60 32 L66 28 L56 18 Q48 14 40 16 Q32 14 24 18Z" fill={fill}/><path d="M40 18 L36 68" fill="none" stroke="#00000020" strokeWidth="1"/><path d="M40 18 L44 68" fill="none" stroke="#00000020" strokeWidth="1"/><circle cx="40" cy="34" r="2" fill="#FFD700"/><circle cx="40" cy="46" r="2" fill="#FFD700"/><circle cx="40" cy="58" r="2" fill="#FFD700"/></svg>);
    case 'body-4': // Armor
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M22 18 L10 28 L18 34 L22 26 L22 68 L58 68 L58 26 L62 34 L70 28 L58 18 Q48 12 40 14 Q32 12 22 18Z" fill={fill}/><rect x="28" y="28" width="24" height="20" rx="3" fill="#FFFFFF20" stroke="#FFFFFF30" strokeWidth="1"/><path d="M10 28 L18 34 L18 50 L10 46Z" fill={fill} opacity="0.8"/><path d="M70 28 L62 34 L62 50 L70 46Z" fill={fill} opacity="0.8"/></svg>);
    case 'body-5': // Tank Top
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M28 20 L28 68 L52 68 L52 20 Q46 16 40 18 Q34 16 28 20Z" fill={fill}/></svg>);
    case 'body-6': // Jacket
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M22 18 L10 28 L16 32 L20 26 L20 68 L60 68 L60 26 L64 32 L70 28 L58 18 Q48 14 40 16 Q32 14 22 18Z" fill={fill}/><rect x="38" y="18" width="4" height="50" fill="#FFD700" opacity="0.6"/><line x1="20" y1="68" x2="20" y2="26" stroke="#00000020" strokeWidth="1.5"/><line x1="60" y1="68" x2="60" y2="26" stroke="#00000020" strokeWidth="1.5"/></svg>);
    case 'body-7': // Sweater
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M22 20 L10 30 L16 34 L20 28 L20 68 L60 68 L60 28 L64 34 L70 30 L58 20 Q48 16 40 18 Q32 16 22 20Z" fill={fill}/><line x1="10" y1="44" x2="70" y2="44" stroke="#FFFFFF15" strokeWidth="3"/><line x1="10" y1="52" x2="70" y2="52" stroke="#FFFFFF15" strokeWidth="3"/><line x1="10" y1="60" x2="70" y2="60" stroke="#FFFFFF15" strokeWidth="3"/></svg>);
    case 'body-8': // Vest
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M28 20 L28 68 L52 68 L52 20 Q46 16 40 18 Q34 16 28 20Z" fill={fill}/><path d="M28 20 L22 24 L22 60 L28 56" fill={fill} opacity="0.7"/><path d="M52 20 L58 24 L58 60 L52 56" fill={fill} opacity="0.7"/></svg>);
    case 'body-9': // Kurta
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M24 18 L14 28 L20 32 L22 26 L20 74 L60 74 L58 26 L60 32 L66 28 L56 18 Q48 14 40 16 Q32 14 24 18Z" fill={fill}/><path d="M36 18 L40 32 L44 18" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.6"/><line x1="40" y1="18" x2="40" y2="74" stroke="#00000015" strokeWidth="0.8"/></svg>);
    case 'body-10': // Sherwani
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M24 16 L14 26 L20 30 L22 24 L20 74 L60 74 L58 24 L60 30 L66 26 L56 16 Q48 12 40 14 Q32 12 24 16Z" fill={fill}/><line x1="40" y1="20" x2="40" y2="72" stroke="#FFD700" strokeWidth="0.6" opacity="0.4"/><circle cx="40" cy="30" r="1.5" fill="#FFD700" opacity="0.6"/><circle cx="40" cy="40" r="1.5" fill="#FFD700" opacity="0.6"/><circle cx="40" cy="50" r="1.5" fill="#FFD700" opacity="0.6"/><circle cx="40" cy="60" r="1.5" fill="#FFD700" opacity="0.6"/><path d="M34 14 L34 20 L40 24 L46 20 L46 14" fill="none" stroke="#00000030" strokeWidth="1"/></svg>);
    case 'body-11': // Kimono
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M20 18 L8 30 L14 34 L18 28 L16 74 L64 74 L62 28 L66 34 L72 30 L60 18 Q50 14 40 16 Q30 14 20 18Z" fill={fill}/><path d="M40 18 L28 42 L20 40" fill="none" stroke="#00000020" strokeWidth="1.5"/><rect x="16" y="44" width="48" height="8" rx="2" fill="#00000025"/></svg>);
    case 'body-12': // Dashiki
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M20 20 L8 32 L14 36 L18 30 L18 68 L62 68 L62 30 L66 36 L72 32 L60 20 Q50 16 40 18 Q30 16 20 20Z" fill={fill}/><path d="M32 18 L40 40 L48 18" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.6"/><path d="M34 22 L40 38 L46 22" fill="none" stroke="#FFD700" strokeWidth="0.8" opacity="0.4"/></svg>);
    case 'body-13': // Hanbok
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M26 18 L16 28 L22 32 L24 26 L24 40 L56 40 L56 26 L58 32 L64 28 L54 18 Q48 14 40 16 Q32 14 26 18Z" fill={fill}/><path d="M20 38 L16 74 L64 74 L60 38Z" fill={fill} opacity="0.6"/><path d="M36 20 L34 32" stroke="#DC143C" strokeWidth="1.5" strokeLinecap="round"/><path d="M44 20 L46 32" stroke="#DC143C" strokeWidth="1.5" strokeLinecap="round"/><circle cx="38" cy="28" r="2" fill="#DC143C" opacity="0.7"/></svg>);
    case 'body-14': // Poncho
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><path d="M40 16 L8 56 Q6 60 10 62 L28 68 L30 66 L14 58 L40 22 L66 58 L50 66 L52 68 L70 62 Q74 60 72 56Z" fill={fill}/><ellipse cx="40" cy="18" rx="8" ry="4" fill="#00000020"/><path d="M14 48 L18 44 L22 48 L26 44 L30 48 L34 44 L38 48 L42 44 L46 48 L50 44 L54 48 L58 44 L62 48 L66 44" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.4"/></svg>);
    default:
      return (<svg viewBox="0 0 80 80" className="w-full h-full"><rect x="20" y="16" width="40" height="52" rx="8" fill={fill}/></svg>);
  }
}

// Master thumbnail renderer
export function OptionThumbnail({ category, id, color }: { category: string; id: string; color: string }) {
  switch (category) {
    case 'head': return <HeadThumb id={id} color={color} />;
    case 'eyes': return <EyesThumb id={id} color={color} />;
    case 'hair': return <HairThumb id={id} color={color} />;
    case 'body': return <BodyThumb id={id} color={color} />;
    default: return null;
  }
}
