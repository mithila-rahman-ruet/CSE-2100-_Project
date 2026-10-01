import os

output_dir = r"c:\Users\HP\OneDrive\Documents(1)\CSE-2100-Project\CSE-2100-Project\assets\images\clubs"
os.makedirs(output_dir, exist_ok=True)

clubs_data = [
    {
        "filename": "rcf.svg",
        "title": "RUET Career Forum",
        "short": "RCF",
        "bg_start": "#0f172a", "bg_end": "#0369a1",
        "accent": "#38bdf8",
        "icon": '<path d="M140 180h120v100H140z" fill="none" stroke="#38bdf8" stroke-width="8" rx="10"/><path d="M170 180v-30c0-15 10-25 30-25s30 10 30 25v30" fill="none" stroke="#38bdf8" stroke-width="8"/><path d="M120 220l80-60 80 60" fill="none" stroke="#fbbf24" stroke-width="6" stroke-linecap="round"/>'
    },
    {
        "filename": "ruet-dc.svg",
        "title": "RUET Debating Club",
        "short": "RUET DC",
        "bg_start": "#4c0519", "bg_end": "#9f1239",
        "accent": "#fde047",
        "icon": '<path d="M200 130v110M170 240h60M160 130h80v30h-80z" fill="none" stroke="#fde047" stroke-width="8" stroke-linecap="round"/><circle cx="200" cy="115" r="20" fill="#fde047"/><path d="M150 170c-20 20-20 50 0 70M250 170c20 20 20 50 0 70" fill="none" stroke="#fda4af" stroke-width="6" stroke-linecap="round"/>'
    },
    {
        "filename": "ieee.svg",
        "title": "IEEE RUET Student Branch",
        "short": "IEEE RUET",
        "bg_start": "#0284c7", "bg_end": "#0f172a",
        "accent": "#ffffff",
        "icon": '<polygon points="200,100 280,200 200,300 120,200" fill="none" stroke="#ffffff" stroke-width="8"/><path d="M200 130v140M150 200l50-30 50 30" fill="none" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>'
    },
    {
        "filename": "psr.svg",
        "title": "Photographic Society of RUET",
        "short": "PSR",
        "bg_start": "#1e293b", "bg_end": "#334155",
        "accent": "#f59e0b",
        "icon": '<rect x="130" y="150" width="140" height="100" rx="12" fill="none" stroke="#f59e0b" stroke-width="8"/><circle cx="200" cy="200" r="30" fill="none" stroke="#f59e0b" stroke-width="8"/><path d="M160 150l15-25h50l15 25" fill="none" stroke="#f59e0b" stroke-width="6"/>'
    },
    {
        "filename": "onuronon.svg",
        "title": "Onuronon Cultural Club",
        "short": "ONURONON",
        "bg_start": "#581c87", "bg_end": "#7e22ce",
        "accent": "#f472b6",
        "icon": '<path d="M170 240c0-40 30-70 30-100 0 30 30 60 30 100" fill="none" stroke="#f472b6" stroke-width="8" stroke-linecap="round"/><circle cx="200" cy="240" r="15" fill="#fbbf24"/><path d="M150 140c20-20 80-20 100 0" fill="none" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>'
    },
    {
        "filename": "scadr.svg",
        "title": "SCADR RUET",
        "short": "SCADR",
        "bg_start": "#1e1b4b", "bg_end": "#3730a3",
        "accent": "#818cf8",
        "icon": '<polygon points="200,110 270,160 270,240 200,290 130,240 130,160" fill="none" stroke="#818cf8" stroke-width="8"/><path d="M200 110v180M130 160l140 80M270 160l-140 80" stroke="#818cf8" stroke-width="4"/>'
    },
    {
        "filename": "isr.svg",
        "title": "Innovation Society of RUET",
        "short": "ISR",
        "bg_start": "#064e3b", "bg_end": "#047857",
        "accent": "#34d399",
        "icon": '<path d="M200 120a45 45 0 0 1 45 45c0 20-15 35-20 50h-50c-5-15-20-30-20-50a45 45 0 0 1 45-45z" fill="none" stroke="#34d399" stroke-width="8"/><path d="M180 235h40M185 250h30" stroke="#34d399" stroke-width="6" stroke-linecap="round"/><path d="M200 95v15M135 135l12 12M265 135l-12 12" stroke="#fbbf24" stroke-width="6" stroke-linecap="round"/>'
    },
    {
        "filename": "assr.svg",
        "title": "Astronomy & Science Society",
        "short": "ASSR",
        "bg_start": "#090d16", "bg_end": "#1e1b4b",
        "accent": "#60a5fa",
        "icon": '<circle cx="200" cy="200" r="40" fill="none" stroke="#60a5fa" stroke-width="8"/><ellipse cx="200" cy="200" rx="90" ry="30" fill="none" stroke="#a78bfa" stroke-width="6" transform="rotate(-20 200 200)"/><circle cx="250" cy="140" r="4" fill="#ffffff"/><circle cx="140" cy="250" r="3" fill="#ffffff"/><circle cx="260" cy="240" r="5" fill="#fde047"/>'
    },
    {
        "filename": "rsr.svg",
        "title": "Robotic Society of RUET",
        "short": "RSR",
        "bg_start": "#111827", "bg_end": "#1f2937",
        "accent": "#ef4444",
        "icon": '<rect x="140" y="140" width="120" height="100" rx="16" fill="none" stroke="#ef4444" stroke-width="8"/><circle cx="175" cy="180" r="12" fill="#60a5fa"/><circle cx="225" cy="180" r="12" fill="#60a5fa"/><path d="M170 215h60" stroke="#ef4444" stroke-width="6" stroke-linecap="round"/><path d="M200 140v-30M185 110h30" stroke="#ef4444" stroke-width="6" stroke-linecap="round"/>'
    },
    {
        "filename": "ipe-club.svg",
        "title": "IPE Club RUET",
        "short": "IPE CLUB",
        "bg_start": "#78350f", "bg_end": "#b45309",
        "accent": "#fef08a",
        "icon": '<circle cx="200" cy="190" r="50" fill="none" stroke="#fef08a" stroke-width="10" stroke-dasharray="15 10"/><circle cx="200" cy="190" r="25" fill="none" stroke="#fef08a" stroke-width="6"/><path d="M140 260h120v20H140z" fill="#fef08a"/>'
    },
    {
        "filename": "spe.svg",
        "title": "Society of Process Engineers",
        "short": "SPE RUET",
        "bg_start": "#134e4a", "bg_end": "#0f766e",
        "accent": "#2dd4bf",
        "icon": '<path d="M180 130h40v40l30 60c5 10-2 20-15 20h-70c-13 0-20-10-15-20l30-60v-40z" fill="none" stroke="#2dd4bf" stroke-width="8"/><path d="M165 220h70" stroke="#fde047" stroke-width="6"/><circle cx="190" cy="200" r="6" fill="#2dd4bf"/><circle cx="210" cy="180" r="4" fill="#2dd4bf"/>'
    },
    {
        "filename": "tt-club.svg",
        "title": "RUET Table Tennis Club",
        "short": "RUET TT",
        "bg_start": "#991b1b", "bg_end": "#dc2626",
        "accent": "#ffffff",
        "icon": '<circle cx="175" cy="185" r="40" fill="none" stroke="#ffffff" stroke-width="8"/><path d="M195 215l45 45M205 205l45 45" stroke="#ffffff" stroke-width="10" stroke-linecap="round"/><circle cx="240" cy="155" r="14" fill="#fde047"/>'
    },
    {
        "filename": "nirab.svg",
        "title": "Nirapad Sharak Bandhan",
        "short": "NIRAB",
        "bg_start": "#854d0e", "bg_end": "#ca8a04",
        "accent": "#ffffff",
        "icon": '<polygon points="200,100 270,150 270,240 200,290 130,240 130,150" fill="none" stroke="#ffffff" stroke-width="8"/><path d="M185 260l15-120 15 120" fill="none" stroke="#ffffff" stroke-width="6"/><line x1="200" y1="170" x2="200" y2="190" stroke="#fde047" stroke-width="6"/><line x1="200" y1="210" x2="200" y2="230" stroke="#fde047" stroke-width="6"/>'
    },
    {
        "filename": "aces.svg",
        "title": "ACES RUET",
        "short": "ACES",
        "bg_start": "#1e3a8a", "bg_end": "#1d4ed8",
        "accent": "#60a5fa",
        "icon": '<rect x="140" y="140" width="120" height="120" rx="16" fill="none" stroke="#60a5fa" stroke-width="8"/><path d="M170 170h60v60h-60z" fill="none" stroke="#38bdf8" stroke-width="6"/><path d="M200 110v30M200 260v30M110 200h30M260 200h30" stroke="#60a5fa" stroke-width="6" stroke-linecap="round"/>'
    },
    {
        "filename": "aci.svg",
        "title": "ACI Student Chapter",
        "short": "ACI RUET",
        "bg_start": "#334155", "bg_end": "#475569",
        "accent": "#cbd5e1",
        "icon": '<path d="M130 260l70-130 70 130" fill="none" stroke="#cbd5e1" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M155 215h90" stroke="#38bdf8" stroke-width="8"/>'
    },
    {
        "filename": "hult-prize.svg",
        "title": "HULT PRIZE at RUET",
        "short": "HULT PRIZE",
        "bg_start": "#831843", "bg_end": "#be185d",
        "accent": "#f472b6",
        "icon": '<circle cx="200" cy="180" r="55" fill="none" stroke="#ffffff" stroke-width="8"/><path d="M200 125c-30 35-30 75 0 110M200 125c30 35 30 75 0 110M145 180h110" fill="none" stroke="#f472b6" stroke-width="6"/><polygon points="200,245 220,285 180,285" fill="#fde047"/>'
    },
    {
        "filename": "urpsa.svg",
        "title": "URP Students Association",
        "short": "URPSA",
        "bg_start": "#14532d", "bg_end": "#15803d",
        "accent": "#4ade80",
        "icon": '<path d="M130 250v-60l40-30 40 30 60-40v100z" fill="none" stroke="#4ade80" stroke-width="8" stroke-linejoin="round"/><circle cx="270" cy="120" r="16" fill="#fde047"/><path d="M120 270h160" stroke="#4ade80" stroke-width="8"/>'
    },
    {
        "filename": "islamic-soc.svg",
        "title": "Islamic Society of RUET",
        "short": "ISLAMIC SOC",
        "bg_start": "#064e3b", "bg_end": "#065f46",
        "accent": "#fbbf24",
        "icon": '<path d="M220 130a55 55 0 1 1-70 70 45 45 0 1 0 70-70z" fill="#fbbf24"/><polygon points="230,140 236,155 252,155 239,165 244,180 230,170 216,180 221,165 208,155 224,155" fill="#fbbf24"/>'
    },
    {
        "filename": "sopan.svg",
        "title": "Sopan Social Club",
        "short": "SOPAN",
        "bg_start": "#9f1239", "bg_end": "#e11d48",
        "accent": "#fecdd3",
        "icon": '<path d="M200 270s-65-45-65-85c0-25 20-40 40-40 15 0 25 10 25 10s10-10 25-10c20 0 40 15 40 40 0 40-65 85-65 85z" fill="#fecdd3"/><path d="M160 210c20 20 60 20 80 0" stroke="#e11d48" stroke-width="6" fill="none" stroke-linecap="round"/>'
    },
    {
        "filename": "annexe.svg",
        "title": "TEAM ANNEXE RUET",
        "short": "ANNEXE",
        "bg_start": "#1c1917", "bg_end": "#44403c",
        "accent": "#ef4444",
        "icon": '<polygon points="200,110 280,260 120,260" fill="none" stroke="#ef4444" stroke-width="10" stroke-linejoin="round"/><path d="M170 220l30-60 30 60" fill="none" stroke="#f59e0b" stroke-width="8" stroke-linecap="round"/>'
    },
    {
        "filename": "adventure.svg",
        "title": "RUET Adventure Club",
        "short": "ADVENTURE",
        "bg_start": "#064e3b", "bg_end": "#047857",
        "accent": "#fde047",
        "icon": '<path d="M120 260l60-100 40 50 60-80 40 130z" fill="none" stroke="#fde047" stroke-width="8" stroke-linejoin="round"/><circle cx="160" cy="130" r="16" fill="#f97316"/>'
    },
    {
        "filename": "ruet-fc.svg",
        "title": "RUET Football Club",
        "short": "RUET FC",
        "bg_start": "#166534", "bg_end": "#15803d",
        "accent": "#ffffff",
        "icon": '<circle cx="200" cy="190" r="55" fill="none" stroke="#ffffff" stroke-width="8"/><polygon points="200,165 218,178 211,198 189,198 182,178" fill="#ffffff"/><path d="M200 165v-30M218 178l25-15M211 198l22 20M189 198l-22 20M182 178l-25-15" stroke="#ffffff" stroke-width="5"/>'
    },
    {
        "filename": "becm-club.svg",
        "title": "BECM Club RUET",
        "short": "BECM CLUB",
        "bg_start": "#c2410c", "bg_end": "#ea580c",
        "accent": "#fef08a",
        "icon": '<rect x="140" y="160" width="50" height="100" fill="none" stroke="#fef08a" stroke-width="8"/><rect x="210" y="120" width="50" height="140" fill="none" stroke="#fef08a" stroke-width="8"/><line x1="120" y1="260" x2="280" y2="260" stroke="#fef08a" stroke-width="8"/>'
    },
    {
        "filename": "tedx.svg",
        "title": "TEDxRUET",
        "short": "TEDxRUET",
        "bg_start": "#0f172a", "bg_end": "#1e293b",
        "accent": "#e11d48",
        "icon": '<text x="200" y="195" font-family="Arial, sans-serif" font-weight="900" font-size="42" fill="#e11d48" text-anchor="middle">TED<tspan fill="#ffffff">x</tspan></text><text x="200" y="235" font-family="Arial, sans-serif" font-weight="700" font-size="22" fill="#ffffff" text-anchor="middle" letter-spacing="4">RUET</text><line x1="140" y1="255" x2="260" y2="255" stroke="#e11d48" stroke-width="4"/>'
    },
    {
        "filename": "radio-ruet.svg",
        "title": "Radio RUET",
        "short": "RADIO RUET",
        "bg_start": "#4c1d95", "bg_end": "#6d28d9",
        "accent": "#a78bfa",
        "icon": '<path d="M150 150c-25 25-25 65 0 90M250 150c25 25 25 65 0 90M170 170c-15 15-15 45 0 60M230 170c15 15 15 45 0 60" fill="none" stroke="#a78bfa" stroke-width="6" stroke-linecap="round"/><circle cx="200" cy="200" r="14" fill="#fde047"/>'
    },
    {
        "filename": "mte-career.svg",
        "title": "MTE Career Club",
        "short": "MTE CAREER",
        "bg_start": "#1e293b", "bg_end": "#0f172a",
        "accent": "#f97316",
        "icon": '<circle cx="200" cy="190" r="45" fill="none" stroke="#f97316" stroke-width="8" stroke-dasharray="20 10"/><path d="M170 190h60M200 160v60" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>'
    },
    {
        "filename": "chess.svg",
        "title": "RUET Chess Club",
        "short": "RUET CHESS",
        "bg_start": "#451a03", "bg_end": "#78350f",
        "accent": "#fef3c7",
        "icon": '<path d="M160 260h80v-20l-15-20c10-15 5-35-10-45 5-15-5-25-15-25-10 0-15 10-15 10v-20h-10v20s-5-10-15-10c-10 0-20 10-15 25-15 10-20 30-10 45l-15 20z" fill="#fef3c7"/>'
    },
    {
        "filename": "cricket.svg",
        "title": "RUET Cricket Club",
        "short": "CRICKET",
        "bg_start": "#14532d", "bg_end": "#166534",
        "accent": "#fef08a",
        "icon": '<line x1="140" y1="250" x2="240" y2="130" stroke="#fef08a" stroke-width="12" stroke-linecap="round"/><line x1="160" y1="250" x2="260" y2="130" stroke="#fef08a" stroke-width="12" stroke-linecap="round"/><circle cx="240" cy="230" r="16" fill="#ef4444"/>'
    },
    {
        "filename": "iot-club.svg",
        "title": "RUET IoT Club",
        "short": "IOT CLUB",
        "bg_start": "#0c4a6e", "bg_end": "#0369a1",
        "accent": "#38bdf8",
        "icon": '<circle cx="200" cy="200" r="20" fill="#38bdf8"/><circle cx="140" cy="140" r="12" fill="#38bdf8"/><circle cx="260" cy="140" r="12" fill="#38bdf8"/><circle cx="140" cy="260" r="12" fill="#38bdf8"/><circle cx="260" cy="260" r="12" fill="#38bdf8"/><path d="M140 140l60 60M260 140l-60 60M140 260l60-60M260 260l-60 60" stroke="#38bdf8" stroke-width="4"/>'
    },
    {
        "filename": "tis.svg",
        "title": "RUET TIS Club",
        "short": "RUET TIS",
        "bg_start": "#111827", "bg_end": "#1f2937",
        "accent": "#22d3ee",
        "icon": '<polygon points="200,110 270,160 270,240 200,290 130,240 130,160" fill="none" stroke="#22d3ee" stroke-width="8"/><text x="200" y="212" font-family="Arial, sans-serif" font-weight="900" font-size="32" fill="#ffffff" text-anchor="middle">TIS</text>'
    },
    {
        "filename": "saer.svg",
        "title": "SAER RUET",
        "short": "SAER",
        "bg_start": "#7f1d1d", "bg_end": "#991b1b",
        "accent": "#fca5a5",
        "icon": '<circle cx="200" cy="190" r="50" fill="none" stroke="#ffffff" stroke-width="10"/><circle cx="200" cy="190" r="18" fill="#ef4444"/><path d="M200 140v100M150 190h100" stroke="#ffffff" stroke-width="6"/>'
    },
    {
        "filename": "cyber-sec.svg",
        "title": "RUET Cyber Security Club",
        "short": "CYBER SEC",
        "bg_start": "#022c22", "bg_end": "#064e3b",
        "accent": "#4ade80",
        "icon": '<path d="M200 110l60 30v60c0 45-35 75-60 85-25-10-60-40-60-85v-60z" fill="none" stroke="#4ade80" stroke-width="8"/><rect x="180" y="180" width="40" height="35" rx="6" fill="#4ade80"/><path d="M190 180v-12a10 10 0 0 1 20 0v12" fill="none" stroke="#4ade80" stroke-width="5"/>'
    },
    {
        "filename": "earthquake.svg",
        "title": "Earthquake Society of RUET",
        "short": "EARTHQUAKE",
        "bg_start": "#451a03", "bg_end": "#78350f",
        "accent": "#f97316",
        "icon": '<path d="M120 200h40l20-40 30 80 30-70 20 30h40" fill="none" stroke="#f97316" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
    },
    {
        "filename": "esports.svg",
        "title": "RUET eSports Community",
        "short": "RUET ESPORTS",
        "bg_start": "#311042", "bg_end": "#581c87",
        "accent": "#06b6d4",
        "icon": '<path d="M140 170h120c15 0 25 10 20 30l-15 45c-5 10-15 15-25 15h-15l-15-20h-20l-15 20h-15c-10 0-20-5-25-15l-15-45c-5-20 5-30 20-30z" fill="none" stroke="#06b6d4" stroke-width="8"/><path d="M165 190v20M155 200h20" stroke="#06b6d4" stroke-width="6"/><circle cx="225" cy="195" r="6" fill="#f472b6"/><circle cx="240" cy="210" r="6" fill="#f472b6"/>'
    }
]

for c in clubs_data:
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{c['bg_start']}"/>
      <stop offset="100%" stop-color="{c['bg_end']}"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Outer Rounded Card -->
  <rect width="400" height="400" rx="48" fill="url(#bgGrad)"/>
  
  <!-- Outer Ring Accent -->
  <circle cx="200" cy="200" r="175" fill="none" stroke="{c['accent']}" stroke-width="3" stroke-dasharray="8 6" opacity="0.4"/>
  
  <!-- Club Graphic Icon -->
  <g filter="url(#shadow)">
    {c['icon']}
  </g>
  
  <!-- Club Acronym Text -->
  <text x="200" y="340" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="800" font-size="28" fill="#ffffff" text-anchor="middle" letter-spacing="2" filter="url(#shadow)">
    {c['short']}
  </text>
  
  <!-- RUET Badge Tag -->
  <rect x="150" y="35" width="100" height="24" rx="12" fill="{c['accent']}" opacity="0.9"/>
  <text x="200" y="52" font-family="'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="12" fill="#0f172a" text-anchor="middle" letter-spacing="1">
    RUET
  </text>
</svg>
'''
    file_path = os.path.join(output_dir, c["filename"])
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(svg_content)

print("Generated all 34 SVG logo files successfully!")
