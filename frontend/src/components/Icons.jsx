// SVG icon components — replace all emojis across the app
import React from 'react'

const base = { display:'inline-block', verticalAlign:'middle' }

export function CarIcon({ size = 40, style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
      width={size} height={size} style={{ ...base, ...style }}>
      <rect x="6" y="28" width="52" height="20" rx="4" fill="#FAC237"/>
      <path d="M14 28L20 16h24l6 12H14z" fill="#FFD966"/>
      <rect x="10" y="44" width="10" height="6" rx="5" fill="#222"/>
      <rect x="44" y="44" width="10" height="6" rx="5" fill="#222"/>
      <rect x="10" y="45" width="10" height="4" rx="2" fill="#555"/>
      <rect x="44" y="45" width="10" height="4" rx="2" fill="#555"/>
      <rect x="22" y="20" width="8" height="8" rx="1" fill="#B3E5FC"/>
      <rect x="34" y="20" width="8" height="8" rx="1" fill="#B3E5FC"/>
      <rect x="6" y="36" width="6" height="4" rx="1" fill="#FFF176"/>
      <rect x="52" y="36" width="6" height="4" rx="1" fill="#FF7043"/>
    </svg>
  )
}

export function OilIcon({ size = 40, style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
      width={size} height={size} style={{ ...base, ...style }}>
      <rect x="16" y="28" width="30" height="22" rx="4" fill="#795548"/>
      <rect x="20" y="24" width="22" height="6" rx="2" fill="#5D4037"/>
      <rect x="28" y="16" width="6" height="10" rx="2" fill="#8D6E63"/>
      <rect x="26" y="12" width="10" height="6" rx="2" fill="#6D4C41"/>
      <ellipse cx="31" cy="39" rx="8" ry="5" fill="#FAC237" opacity="0.7"/>
      <path d="M46 34 Q54 30 52 42 Q50 48 46 46" fill="#A1887F"/>
      <rect x="14" y="46" width="34" height="4" rx="2" fill="#4E342E"/>
    </svg>
  )
}

export function TireIcon({ size = 40, style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
      width={size} height={size} style={{ ...base, ...style }}>
      <circle cx="32" cy="32" r="22" fill="#37474F"/>
      <circle cx="32" cy="32" r="14" fill="#546E7A"/>
      <circle cx="32" cy="32" r="6" fill="#B0BEC5"/>
      <rect x="31" y="10" width="2" height="8" rx="1" fill="#B0BEC5"/>
      <rect x="31" y="46" width="2" height="8" rx="1" fill="#B0BEC5"/>
      <rect x="10" y="31" width="8" height="2" rx="1" fill="#B0BEC5"/>
      <rect x="46" y="31" width="8" height="2" rx="1" fill="#B0BEC5"/>
      <path d="M44 20 L48 16 L48 24 Z" fill="#FAC237"/>
      <path d="M20 44 L16 48 L16 40 Z" fill="#FAC237"/>
    </svg>
  )
}

export function BrakeIcon({ size = 40, style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
      width={size} height={size} style={{ ...base, ...style }}>
      <circle cx="32" cy="32" r="22" fill="#37474F"/>
      <circle cx="32" cy="32" r="16" fill="#546E7A"/>
      <path d="M32 16 A16 16 0 0 1 48 32 L40 32 A8 8 0 0 0 32 24 Z" fill="#EF5350"/>
      <path d="M48 32 A16 16 0 0 1 32 48 L32 40 A8 8 0 0 0 40 32 Z" fill="#EF5350"/>
      <circle cx="32" cy="32" r="6" fill="#B0BEC5"/>
      <circle cx="32" cy="32" r="3" fill="#78909C"/>
    </svg>
  )
}

export function BatteryIcon({ size = 40, style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
      width={size} height={size} style={{ ...base, ...style }}>
      <rect x="8" y="20" width="48" height="28" rx="4" fill="#37474F"/>
      <rect x="22" y="14" width="8" height="8" rx="1" fill="#546E7A"/>
      <rect x="34" y="14" width="8" height="8" rx="1" fill="#546E7A"/>
      <rect x="14" y="27" width="36" height="14" rx="2" fill="#1A237E" opacity="0.6"/>
      <path d="M28 24 L24 34 H30 L26 44 L40 30 H34 L38 24 Z" fill="#FAC237"/>
    </svg>
  )
}

export function AirFilterIcon({ size = 40, style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
      width={size} height={size} style={{ ...base, ...style }}>
      <rect x="10" y="18" width="44" height="28" rx="4" fill="#546E7A"/>
      <rect x="14" y="22" width="36" height="20" rx="2" fill="#37474F"/>
      <rect x="18" y="26" width="4" height="12" rx="1" fill="#80DEEA"/>
      <rect x="24" y="26" width="4" height="12" rx="1" fill="#80DEEA"/>
      <rect x="30" y="26" width="4" height="12" rx="1" fill="#80DEEA"/>
      <rect x="36" y="26" width="4" height="12" rx="1" fill="#80DEEA"/>
      <rect x="42" y="26" width="4" height="12" rx="1" fill="#80DEEA"/>
      <path d="M22 14 Q32 10 42 14" stroke="#80DEEA" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M26 10 Q32 7 38 10" stroke="#80DEEA" strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

export function WrenchIcon({ size = 40, style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
      width={size} height={size} style={{ ...base, ...style }}>
      <path d="M44 10 C38 10 34 14 34 20 C34 22 35 24 36 26 L14 48 C12 50 12 53 14 55 C16 57 19 57 21 55 L43 33 C45 34 47 35 49 35 C55 35 59 31 59 25 C59 23 58 21 57 19 L51 25 L47 21 L53 15 C51 13 48 10 44 10Z" fill="#90A4AE"/>
      <circle cx="17" cy="52" r="3" fill="#546E7A"/>
    </svg>
  )
}

export function ThermometerIcon({ size = 40, style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
      width={size} height={size} style={{ ...base, ...style }}>
      <rect x="28" y="10" width="8" height="30" rx="4" fill="#ECEFF1"/>
      <rect x="30" y="12" width="4" height="20" rx="2" fill="#EF5350"/>
      <circle cx="32" cy="46" r="10" fill="#EF5350"/>
      <circle cx="32" cy="46" r="7" fill="#FF7043"/>
      <rect x="36" y="22" width="6" height="2" rx="1" fill="#B0BEC5"/>
      <rect x="36" y="28" width="6" height="2" rx="1" fill="#B0BEC5"/>
      <rect x="36" y="34" width="6" height="2" rx="1" fill="#B0BEC5"/>
    </svg>
  )
}

export function SoundIcon({ size = 40, style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
      width={size} height={size} style={{ ...base, ...style }}>
      <path d="M16 24 H26 L36 14 V50 L26 40 H16 Z" fill="#546E7A"/>
      <path d="M42 22 Q50 32 42 42" stroke="#FAC237" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M46 16 Q58 32 46 48" stroke="#FAC237" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6"/>
    </svg>
  )
}

export function WarningIcon({ size = 40, style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
      width={size} height={size} style={{ ...base, ...style }}>
      <path d="M32 8 L58 52 H6 Z" fill="#FAC237"/>
      <path d="M32 12 L55 50 H9 Z" fill="#FFD54F"/>
      <rect x="30" y="26" width="4" height="14" rx="2" fill="#333"/>
      <rect x="30" y="44" width="4" height="4" rx="2" fill="#333"/>
    </svg>
  )
}

export function AcIcon({ size = 40, style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
      width={size} height={size} style={{ ...base, ...style }}>
      <rect x="30" y="8" width="4" height="48" rx="2" fill="#80DEEA"/>
      <rect x="8" y="30" width="48" height="4" rx="2" fill="#80DEEA"/>
      <rect x="17" y="17" width="4" height="30" rx="2" fill="#80DEEA" transform="rotate(45 19 32)"/>
      <rect x="17" y="17" width="4" height="30" rx="2" fill="#80DEEA" transform="rotate(-45 45 32)"/>
      <circle cx="32" cy="32" r="4" fill="#4DD0E1"/>
      <circle cx="32" cy="10" r="3" fill="#4DD0E1"/>
      <circle cx="32" cy="54" r="3" fill="#4DD0E1"/>
      <circle cx="10" cy="32" r="3" fill="#4DD0E1"/>
      <circle cx="54" cy="32" r="3" fill="#4DD0E1"/>
    </svg>
  )
}

export function ClipboardIcon({ size = 40, style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
      width={size} height={size} style={{ ...base, ...style }}>
      <rect x="12" y="16" width="40" height="44" rx="4" fill="#546E7A"/>
      <rect x="16" y="20" width="32" height="36" rx="2" fill="#37474F"/>
      <rect x="24" y="10" width="16" height="12" rx="3" fill="#78909C"/>
      <rect x="20" y="30" width="24" height="2" rx="1" fill="#80DEEA"/>
      <rect x="20" y="36" width="24" height="2" rx="1" fill="#80DEEA"/>
      <rect x="20" y="42" width="16" height="2" rx="1" fill="#80DEEA"/>
    </svg>
  )
}

// Map service IDs to icon components
export function ServiceIcon({ serviceId, size = 40, style = {} }) {
  const map = {
    1: <OilIcon size={size} style={style} />,
    2: <TireIcon size={size} style={style} />,
    3: <BrakeIcon size={size} style={style} />,
    4: <BatteryIcon size={size} style={style} />,
    5: <AirFilterIcon size={size} style={style} />,
  }
  return map[serviceId] || <WrenchIcon size={size} style={style} />
}

// Map symptom IDs to icon components
export function SymptomIcon({ symptomId, size = 28, style = {} }) {
  const map = {
    'squeaky-brakes':     <BrakeIcon size={size} style={style} />,
    'engine-overheat':    <ThermometerIcon size={size} style={style} />,
    'battery-not-start':  <BatteryIcon size={size} style={style} />,
    'flat-tire':          <TireIcon size={size} style={style} />,
    'oil-leak':           <OilIcon size={size} style={style} />,
    'strange-noise':      <SoundIcon size={size} style={style} />,
    'check-engine-light': <WarningIcon size={size} style={style} />,
    'ac-not-cooling':     <AcIcon size={size} style={style} />,
  }
  return map[symptomId] || <WrenchIcon size={size} style={style} />
}
