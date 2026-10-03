export type Element = 'Feu' | 'Terre' | 'Air' | 'Eau';
export type Modality = 'Cardinal' | 'Fixe' | 'Mutable';
export type Polarity = 'Yang' | 'Yin';

/** Un jour + un mois : l'année n'intervient pas dans le signe solaire. */
export interface MonthDay {
  day: number;
  month: number;
}

export interface CompatibilityMatch {
  /** Nom du signe (doit correspondre à ZodiacSign.name) */
  sign: string;
  /** Score d'affinité sur 100 */
  score: number;
  /** Une phrase qui explique la dynamique du couple */
  note: string;
}

export interface ZodiacSign {
  id: string;
  name: string;
  /** Glyphe astrologique, ex. ♈ */
  symbol: string;
  /** Période lisible, ex. « 21 mars – 19 avril » */
  period: string;
  start: MonthDay;
  end: MonthDay;

  /** Formule courte, ex. « Le pionnier du zodiaque » */
  tagline: string;
  /** Mantra traditionnel du signe, ex. « Je suis » */
  motto: string;

  // ── Identité astrologique ────────────────────────────────
  element: Element;
  modality: Modality;
  polarity: Polarity;
  rulingPlanet: string;
  planetSymbol: string;
  /** Maison associée, ex. « Maison I » */
  house: string;
  houseTheme: string;
  season: string;
  oppositeSign: string;
  decans: string[];

  // ── Correspondances traditionnelles ──────────────────────
  bodyPart: string;
  stone: string;
  metal: string;
  flower: string;
  animal: string;
  luckyDay: string;
  luckyNumbers: number[];
  luckyColor: string;
  tarot: string;

  // ── Portrait ─────────────────────────────────────────────
  description: string;
  inLove: string;
  inWork: string;
  inFriendship: string;
  wellbeing: string;
  money: string;
  /** Le point aveugle du signe, ce qu'il refuse de voir */
  shadow: string;
  qualities: string[];
  flaws: string[];
  celebrities: string[];

  // ── Relations ────────────────────────────────────────────
  bestMatches: CompatibilityMatch[];
  challenges: CompatibilityMatch[];

  // ── Habillage ────────────────────────────────────────────
  color: string;
  gradient: [string, string, string];
}
