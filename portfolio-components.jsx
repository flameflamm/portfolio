
// ── Shared data & components for Mór Láng's Game Dev Portfolio ──

const PROFILE = {
  name: "Mór Láng",
  title: "Unity Developer",
  subtitle: "UI & Tools Programmer",
  location: "Hungary",
  bio: "Game developer with professional experience building AR applications, VR experiences, and multiplayer games in Unity. Passionate about clean architecture, performant UI, and the craft of game-making — from commercial projects to personal hobby games.",
  email: "morlang@email.com",
  linkedin: "linkedin.com/in/morlang",
  itch: "morlang.itch.io",
};

const EXPERIENCE = [
  {
    id: "morabookr",
    company: "Móra-BOOKR Kft.",
    role: "Unity UI & Tools Programmer",
    period: "2025 – Present",
    type: "Full-time",
    tags: ["Unity", "C#", "UniTask", "VContainer", "DOTween"],
    bullets: [
      "Developing performant, scalable UI systems using Unity's UI Toolkit and custom tooling",
      "Architecting editor tools to accelerate content pipeline for children's interactive books",
      "Implementing dependency injection patterns with VContainer for clean, testable code",
      "Async programming with UniTask for non-blocking asset loading and animations",
    ],
  },
  {
    id: "prostep",
    company: "Prostep Consultancy Kft.",
    role: "Unity AR & Tools Programmer",
    period: "2024",
    type: "Full-time",
    tags: ["Unity", "C#", "AR", "Photoshop"],
    bullets: [
      "Built augmented reality experiences for enterprise clients",
      "Created custom Unity editor tools to streamline artist and designer workflows",
      "Collaborated cross-functionally with design and product teams",
    ],
  },
  {
    id: "esport1",
    company: "esport1",
    role: "Gaming Journalist",
    period: "2024",
    type: "Part-time",
    tags: ["League of Legends", "Esports", "Writing"],
    bullets: [
      "Covered League of Legends competitive scene as a specialist journalist",
      "Produced match analyses, player profiles, and tournament coverage",
    ],
  },
  {
    id: "vrstorm",
    company: "VR Storm Studio",
    role: "Unity Developer",
    period: "2022 – 2023",
    type: "Full-time",
    tags: ["Unity", "C#", "VR", "Photon Fusion"],
    bullets: [
      "Developed VR experiences and interactive applications in Unity",
      "Implemented networked multiplayer features using Photon Fusion",
      "Worked on gameplay systems, VR locomotion, and user interactions",
    ],
  },
];

const PROJECTS = [
  {
    id: "orbit",
    title: "Orbital Duel",
    genre: "Multiplayer PvP Shooter",
    status: "Finished",
    statusColor: "finished",
    description: "A retro-styled multiplayer spaceship shooter with a unique orbital movement system. Ships move along concentric orbits around a center point — players can shift lanes inward or outward, creating a dynamic flow of positioning and combat.",
    tags: ["Unity", "Photon Quantum", "C#", "Retro", "Multiplayer"],
    highlights: ["Orbital movement mechanic — orbit shifting as core gameplay", "Photon Quantum for deterministic netcode", "Retro pixel aesthetic"],
    imgLabel: "orbital duel — gameplay screenshot",
  },
  {
    id: "spellbrawl",
    title: "Spell Brawl",
    genre: "Multiplayer Platformer Shooter",
    status: "In Development",
    statusColor: "active",
    description: "A multiplayer platformer where gameplay alternates between two phases: a Fight phase and an Ability Pick phase. Witchers (players) draft abilities into their spellbook during pick phase, then unleash them in order during combat — each spell usable only once.",
    tags: ["Unity", "C#", "UniTask", "VContainer", "DOTween", "Multiplayer"],
    highlights: ["Dual-phase loop: Fight → Pick → Fight", "Ordered spellbook — abilities fire in acquisition order", "VContainer DI architecture for clean system separation"],
    imgLabel: "spell brawl — fight phase screenshot",
  },
  {
    id: "plushkeeper",
    title: "Plush Keeper",
    genre: "Story-Driven Simulator",
    status: "In Development",
    statusColor: "active",
    description: "A warm, emotional simulator about a young woman running a plush shop inherited from her estranged father. Through the day-to-day of the shop, they slowly begin to understand each other — a quiet story about obligation, hobbies becoming livelihoods, and family.",
    tags: ["Unity", "C#", "DOTween", "Narrative", "Simulator"],
    highlights: ["Emotional narrative core — father-daughter relationship arc", "Cozy shop management loop", "Cutesie plush art direction"],
    imgLabel: "plush keeper — shop interior screenshot",
  },
];

const ALL_SKILLS = [
  { label: "Unity", cat: "engine" },
  { label: "C#", cat: "language" },
  { label: "Blender", cat: "tool" },
  { label: "Photoshop", cat: "tool" },
  { label: "UniTask", cat: "library" },
  { label: "VContainer", cat: "library" },
  { label: "DOTween", cat: "library" },
  { label: "LeanTween", cat: "library" },
  { label: "Photon Fusion", cat: "library" },
  { label: "Photon Quantum", cat: "library" },
  { label: "AR Development", cat: "domain" },
  { label: "VR Development", cat: "domain" },
  { label: "Multiplayer", cat: "domain" },
  { label: "UI Systems", cat: "domain" },
  { label: "Editor Tooling", cat: "domain" },
  { label: "Dependency Injection", cat: "pattern" },
  { label: "Async Programming", cat: "pattern" },
  { label: "Clean Architecture", cat: "pattern" },
];

const CAT_COLORS = {
  engine:   { bg: "oklch(94% 0.06 245)", text: "oklch(35% 0.18 245)", border: "oklch(80% 0.10 245)" },
  language: { bg: "oklch(94% 0.06 270)", text: "oklch(35% 0.18 270)", border: "oklch(80% 0.10 270)" },
  library:  { bg: "oklch(94% 0.06 150)", text: "oklch(32% 0.14 150)", border: "oklch(80% 0.09 150)" },
  tool:     { bg: "oklch(94% 0.06 60)",  text: "oklch(38% 0.14 60)",  border: "oklch(80% 0.10 60)"  },
  domain:   { bg: "oklch(94% 0.04 20)",  text: "oklch(38% 0.14 20)",  border: "oklch(80% 0.09 20)"  },
  pattern:  { bg: "oklch(94% 0.04 320)", text: "oklch(38% 0.14 320)", border: "oklch(80% 0.09 320)" },
};

// ── Shared UI atoms ──

function TechBubble({ label, cat, small }) {
  const c = CAT_COLORS[cat] || CAT_COLORS.library;
  return (
    <span style={{
      display: "inline-block",
      padding: small ? "2px 8px" : "4px 12px",
      borderRadius: "999px",
      fontSize: small ? "11px" : "12px",
      fontWeight: 500,
      letterSpacing: "0.01em",
      background: c.bg,
      color: c.text,
      border: `1px solid ${c.border}`,
      whiteSpace: "nowrap",
    }}>{label}</span>
  );
}

function TagBubbles({ tags, small }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
      {tags.map(t => {
        const skill = ALL_SKILLS.find(s => s.label === t);
        return <TechBubble key={t} label={t} cat={skill ? skill.cat : "library"} small={small} />;
      })}
    </div>
  );
}

function ImgPlaceholder({ label, aspect, radius }) {
  return (
    <div style={{
      width: "100%",
      aspectRatio: aspect || "16/9",
      borderRadius: radius || "8px",
      background: "repeating-linear-gradient(45deg, oklch(88% 0.005 240) 0px, oklch(88% 0.005 240) 8px, oklch(92% 0.005 240) 8px, oklch(92% 0.005 240) 16px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}>
      <span style={{ fontFamily: "monospace", fontSize: "11px", color: "oklch(55% 0.01 240)", textAlign: "center", padding: "8px" }}>{label}</span>
    </div>
  );
}

function StatusBadge({ status, color }) {
  const colors = {
    finished: { bg: "oklch(93% 0.07 150)", text: "oklch(35% 0.14 150)", dot: "oklch(52% 0.18 150)" },
    active:   { bg: "oklch(93% 0.07 245)", text: "oklch(35% 0.18 245)", dot: "oklch(52% 0.20 245)" },
  };
  const c = colors[color] || colors.active;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "3px 10px", borderRadius: "999px", fontSize: "11px", fontWeight: 600, background: c.bg, color: c.text }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: c.dot, display: "inline-block" }}></span>
      {status}
    </span>
  );
}

// Export everything
Object.assign(window, {
  PROFILE, EXPERIENCE, PROJECTS, ALL_SKILLS, CAT_COLORS,
  TechBubble, TagBubbles, ImgPlaceholder, StatusBadge,
});
