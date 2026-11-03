// Aky is Akademy's mascot: a small piece of yellow chalk in a graduation cap.

export type AkyMood = "wave" | "cheer" | "think" | "sad";

const INK = "#1e2a22";

function mouth(mood: AkyMood) {
  if (mood === "sad") return <path d="M52 92 q8 -7 16 0" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />;
  if (mood === "think") return <circle cx="62" cy="90" r="3" fill={INK} />;
  if (mood === "cheer") return <path d="M49 85 q11 16 22 0 z" fill={INK} />;
  return <path d="M51 87 q9 9 18 0" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />;
}

export function Aky({ mood = "wave", size = 120, className = "" }: { mood?: AkyMood; size?: number; className?: string }) {
  const armUp = mood === "wave" || mood === "cheer";
  return (
    <svg
      viewBox="0 0 120 150"
      width={size}
      height={(size * 150) / 120}
      className={`aky aky-${mood} ${className}`}
      role="img"
      aria-label="Aky, the Akademy mascot"
    >
      <g className="aky-body">
        {/* feet */}
        <ellipse cx="46" cy="136" rx="9" ry="5" fill={INK} />
        <ellipse cx="74" cy="136" rx="9" ry="5" fill={INK} />
        {/* left arm */}
        <path d={mood === "cheer" ? "M36 82 Q20 70 18 54" : "M36 88 Q24 96 22 106"} fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        {/* chalk body */}
        <rect x="32" y="34" width="56" height="102" rx="25" fill="#f2d06b" stroke={INK} strokeWidth="3.5" />
        <path d="M36 112 q24 11 48 0 v4 q0 18 -24 18 t-24 -18 z" fill="#fff6d8" />
        <path d="M41 52 v36" stroke="#fff6d8" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
        {/* right arm */}
        <g className={armUp ? "aky-arm" : undefined}>
          <path d={armUp ? "M84 82 Q100 70 102 54" : "M84 88 Q96 96 98 106"} fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        </g>
        {/* face */}
        <g className="aky-eyes">
          <circle cx="48" cy="72" r="7.5" fill={INK} />
          <circle cx="72" cy="72" r="7.5" fill={INK} />
          <circle cx="50.5" cy="69.5" r="2.6" fill="#fff" />
          <circle cx="74.5" cy="69.5" r="2.6" fill="#fff" />
        </g>
        {mood === "sad" && <path d="M41 62 l10 -4 M79 62 l-10 -4" stroke={INK} strokeWidth="3" strokeLinecap="round" />}
        <ellipse cx="40" cy="85" rx="6" ry="4" fill="#f2a08a" opacity="0.8" />
        <ellipse cx="80" cy="85" rx="6" ry="4" fill="#f2a08a" opacity="0.8" />
        {mouth(mood)}
        {/* graduation cap */}
        <path d="M38 34 q22 12 44 0 v-10 h-44 z" fill="#162e20" />
        <path d="M60 4 L104 24 L60 42 L16 24 z" fill="#1f3d2b" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <g className="aky-tassel">
          <path d="M60 23 L92 32 v18" fill="none" stroke="#c9a23e" strokeWidth="3" strokeLinecap="round" />
          <circle cx="92" cy="53" r="4.5" fill="#c9a23e" />
        </g>
      </g>
      {mood === "think" && (
        <g fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round">
          <path d="M104 74 q7 -9 13 -2 q2 7 -6 10 v5" />
          <circle cx="111" cy="95" r="0.8" />
        </g>
      )}
      {mood === "cheer" && (
        <g className="aky-sparks" fill="#c9a23e">
          <circle cx="8" cy="40" r="3" />
          <circle cx="112" cy="36" r="3" />
          <circle cx="18" cy="16" r="2.2" />
          <circle cx="106" cy="10" r="2.2" />
        </g>
      )}
    </svg>
  );
}
