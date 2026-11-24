import React from "react";

/** Líneas de código del monitor principal: [x, y, ancho, color]. */
const codeLines: [number, number, number, string][] = [
  [650, 318, 90, "#C084FC"],
  [750, 318, 120, "#F0ABFC"],
  [665, 338, 150, "#67E8F9"],
  [665, 358, 70, "#FDE68A"],
  [745, 358, 140, "#E9D5FF"],
  [680, 378, 180, "#A5B4FC"],
  [680, 398, 110, "#6EE7B7"],
  [665, 418, 90, "#F0ABFC"],
  [665, 438, 200, "#C4B5FD"],
  [650, 458, 60, "#C084FC"],
];

const stars = [
  [150, 140], [230, 95], [320, 170], [410, 110], [470, 190], [190, 230],
  [370, 240], [280, 60], [520, 130], [110, 80],
];

/**
 * Escena ilustrada de la intro: un setup de programación de noche con una
 * persona de espaldas escribiendo código. Todo es SVG para que escale nítido
 * mientras la cámara se acerca.
 */
export default function IntroScene() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="intro-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14052e" />
          <stop offset="100%" stopColor="#230a4d" />
        </linearGradient>
        <linearGradient id="intro-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a0838" />
          <stop offset="100%" stopColor="#07020f" />
        </linearGradient>
        <linearGradient id="intro-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1033" />
          <stop offset="100%" stopColor="#3b1675" />
        </linearGradient>
        <radialGradient id="intro-screen-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="intro-lamp" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="intro-desk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b2266" />
          <stop offset="100%" stopColor="#1c0f36" />
        </linearGradient>
        <linearGradient id="intro-chair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a1050" />
          <stop offset="100%" stopColor="#120624" />
        </linearGradient>
        <linearGradient id="intro-hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4c1d95" />
          <stop offset="100%" stopColor="#2e1065" />
        </linearGradient>
        <clipPath id="intro-window">
          <rect x="90" y="40" width="470" height="300" rx="10" />
        </clipPath>
      </defs>

      {/* Pared y piso */}
      <rect width="1600" height="900" fill="url(#intro-wall)" />
      <path d="M0 640 L1600 640 L1600 900 L0 900Z" fill="url(#intro-floor)" />
      <ellipse cx="800" cy="790" rx="520" ry="70" fill="#7c3aed" opacity="0.12" />

      {/* Ventana con el Galeras de noche */}
      <g clipPath="url(#intro-window)">
        <rect x="90" y="40" width="470" height="300" fill="url(#intro-sky)" />
        {stars.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i % 3 === 0 ? 2.2 : 1.4}
            fill="#fff"
            className="twinkle"
            style={{ animationDelay: `${(i * 0.37) % 2.4}s` }}
          />
        ))}
        <circle cx="470" cy="95" r="26" fill="#f5f3ff" opacity="0.9" />
        <circle cx="481" cy="88" r="24" fill="url(#intro-sky)" />
        <path d="M90 300 L230 175 L262 190 L300 160 L420 255 L560 230 L560 340 L90 340Z" fill="#1e0b3d" />
        <path d="M90 320 h40 v-40 h30 v50 h25 v-70 h35 v60 h30 v-35 h40 v55 h30 v-45 h35 v40 h30 v-60 h40 v65 h30 v-30 h45 V340 H90Z" fill="#120624" />
        {[115, 168, 205, 248, 318, 362, 432, 470, 518].map((x, i) => (
          <rect key={x} x={x} y={300 + (i % 3) * 8} width="5" height="6" fill="#fbbf24" opacity="0.7" />
        ))}
      </g>
      <rect x="90" y="40" width="470" height="300" rx="10" fill="none" stroke="#3b1a6b" strokeWidth="10" />
      <path d="M325 40v300M90 190h470" stroke="#3b1a6b" strokeWidth="6" />

      {/* Repisa con libros y un póster */}
      <rect x="1180" y="170" width="300" height="10" rx="3" fill="#3b2266" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={1200 + i * 26} y={110 + (i % 2) * 8} width="20" height={60 - (i % 2) * 8} rx="2" fill={["#7c3aed", "#db2777", "#0891b2", "#a855f7", "#f59e0b"][i]} opacity="0.8" />
      ))}
      <rect x="1370" y="128" width="42" height="42" rx="6" fill="#22d3ee" opacity="0.25" />
      <text x="1391" y="156" textAnchor="middle" fontSize="20" fill="#a5f3fc" fontFamily="monospace">{"</>"}</text>

      {/* Luz ambiente del monitor */}
      <ellipse cx="800" cy="420" rx="520" ry="300" fill="url(#intro-screen-glow)" />

      {/* Lámpara de escritorio */}
      <path d="M520 560 L520 548 L560 548 L560 560Z" fill="#2a1050" />
      <path d="M540 548 L585 420 L640 395" fill="none" stroke="#4c2a85" strokeWidth="7" strokeLinecap="round" />
      <path d="M620 380 L680 402 L660 430 L606 410Z" fill="#5b21b6" />
      <path d="M640 425 L560 560 L770 560Z" fill="url(#intro-lamp)" opacity="0.55" />

      {/* Escritorio */}
      <rect x="400" y="555" width="800" height="24" rx="6" fill="url(#intro-desk)" />
      <rect x="430" y="579" width="18" height="160" fill="#1c0f36" />
      <rect x="1152" y="579" width="18" height="160" fill="#1c0f36" />
      {/* Torre del PC con RGB */}
      <rect x="1040" y="600" width="90" height="140" rx="8" fill="#140a2b" stroke="#3b2266" strokeWidth="3" />
      <circle cx="1085" cy="640" r="18" fill="none" stroke="#e879f9" strokeWidth="3" opacity="0.8" />
      <circle cx="1085" cy="690" r="18" fill="none" stroke="#22d3ee" strokeWidth="3" opacity="0.8" />

      {/* Monitor principal */}
      <rect x="785" y="500" width="30" height="45" fill="#2a1755" />
      <rect x="745" y="540" width="110" height="14" rx="5" fill="#2a1755" />
      <rect x="610" y="285" width="380" height="225" rx="12" fill="#0b0618" stroke="#3b2266" strokeWidth="6" />
      <rect x="622" y="297" width="356" height="201" rx="6" fill="#0d0420" />
      <rect x="622" y="297" width="356" height="16" fill="#1a0b38" />
      <circle cx="634" cy="305" r="3" fill="#f472b6" />
      <circle cx="645" cy="305" r="3" fill="#a78bfa" />
      <circle cx="656" cy="305" r="3" fill="#818cf8" />
      {codeLines.map(([x, y, w, c], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={w}
          height="8"
          rx="4"
          fill={c}
          className="code-line"
          style={{ animationDelay: `${i * 0.22}s` }}
        />
      ))}
      <rect x="650" y="476" width="9" height="12" fill="#f0abfc" className="animate-caret" />

      {/* Monitor lateral (vertical) */}
      <g transform="translate(1010 300) skewY(8)">
        <rect width="130" height="210" rx="10" fill="#0b0618" stroke="#3b2266" strokeWidth="5" />
        <rect x="10" y="10" width="110" height="190" rx="4" fill="#100626" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} x="20" y={25 + i * 24} width={40 + ((i * 37) % 60)} height="7" rx="3" fill="#7c3aed" opacity="0.7" />
        ))}
      </g>
      <rect x="1062" y="520" width="20" height="35" fill="#2a1755" />

      {/* Teclado, mouse, café y planta */}
      <rect x="700" y="545" width="200" height="12" rx="4" fill="#1e1036" />
      <rect x="704" y="555" width="192" height="3" rx="1.5" fill="#e879f9" opacity="0.8" />
      <ellipse cx="935" cy="552" rx="12" ry="7" fill="#1e1036" />
      <rect x="590" y="520" width="34" height="36" rx="5" fill="#f5f3ff" opacity="0.9" />
      <path d="M624 528 q14 0 14 12 q0 12 -14 12" fill="none" stroke="#f5f3ff" strokeWidth="5" opacity="0.9" />
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${598 + i * 9} 515 q-6 -10 0 -20 q6 -10 0 -20`}
          fill="none"
          stroke="#e9d5ff"
          strokeWidth="3"
          strokeLinecap="round"
          className="steam"
          style={{ animationDelay: `${i * 0.7}s` }}
        />
      ))}
      <rect x="1120" y="505" width="46" height="50" rx="6" fill="#4c1d95" />
      <path d="M1143 505 C1110 470 1110 430 1125 410 C1135 445 1140 470 1143 505 C1146 460 1160 430 1180 418 C1180 455 1165 485 1143 505" fill="#10b981" opacity="0.85" />

      {/* Silla gamer */}
      <rect x="740" y="760" width="120" height="12" rx="6" fill="#120624" />
      <rect x="792" y="700" width="16" height="62" fill="#1a0b38" />
      <rect x="715" y="640" width="170" height="70" rx="20" fill="url(#intro-chair)" />

      {/* Persona de espaldas programando */}
      {/* Brazos hacia el teclado */}
      <g className="typing-hand">
        <path d="M712 600 C700 575 712 552 742 548 L760 556 C742 566 734 584 738 606Z" fill="url(#intro-hoodie)" />
        <ellipse cx="752" cy="551" rx="13" ry="7" fill="#d6a184" />
      </g>
      <g className="typing-hand" style={{ animationDelay: "0.14s" }}>
        <path d="M888 600 C900 575 888 552 858 548 L840 556 C858 566 866 584 862 606Z" fill="url(#intro-hoodie)" />
        <ellipse cx="848" cy="551" rx="13" ry="7" fill="#d6a184" />
      </g>
      {/* Torso con hoodie */}
      <path d="M708 660 C704 610 728 572 800 566 C872 572 896 610 892 660Z" fill="url(#intro-hoodie)" />
      <path d="M770 575 Q800 600 830 575" fill="none" stroke="#6d28d9" strokeWidth="5" />
      {/* Respaldo de la silla (delante del torso) */}
      <path d="M735 600 C735 572 865 572 865 600 L872 690 C872 700 728 700 728 690Z" fill="url(#intro-chair)" />
      <path d="M770 585 L766 690 M830 585 L834 690" stroke="#c026d3" strokeWidth="5" opacity="0.6" />
      <text x="800" y="650" textAnchor="middle" fontSize="22" fontWeight="800" fill="#e9d5ff" opacity="0.75" fontFamily="sans-serif">SAMG</text>
      {/* Cuello y cabeza con pelo crespo */}
      <rect x="788" y="535" width="24" height="34" rx="8" fill="#c48f72" />
      <ellipse cx="800" cy="512" rx="36" ry="40" fill="#1a1020" />
      {[
        [772, 488, 15], [790, 476, 16], [810, 476, 16], [828, 488, 15],
        [768, 508, 13], [832, 508, 13], [800, 470, 13], [782, 528, 12], [818, 528, 12],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#140b1a" />
      ))}
      <ellipse cx="764" cy="518" rx="5" ry="9" fill="#c48f72" />
      <ellipse cx="836" cy="518" rx="5" ry="9" fill="#c48f72" />
      {/* Contraluz del monitor sobre la persona */}
      <path d="M770 480 Q800 462 830 480" fill="none" stroke="#c084fc" strokeWidth="3" opacity="0.6" />
    </svg>
  );
}
