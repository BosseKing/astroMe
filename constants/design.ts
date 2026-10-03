/**
 * AstroMe — Système de design « Nuit céleste ».
 * Palette sombre unique (l'app force le mode dark) : fond spatial profond,
 * surfaces vitrées translucides, accents dérivés de l'élément du signe.
 */
import { Platform } from 'react-native';

export const Palette = {
  /** Fonds */
  void: '#05060F',
  deep: '#0A0C1B',
  night: '#111428',
  surface: 'rgba(255,255,255,0.045)',
  surfaceStrong: 'rgba(255,255,255,0.075)',
  border: 'rgba(255,255,255,0.09)',
  borderStrong: 'rgba(255,255,255,0.16)',

  /** Textes */
  text: '#F4F3FF',
  textMuted: '#A6A8C4',
  textFaint: '#6E7191',

  /** Accents généraux */
  gold: '#F5D48B',
  goldDeep: '#C9A227',
  violet: '#8B7BF0',
  aurora: '#5EE7C4',
  rose: '#F58BAF',

  success: '#4ADE80',
  warning: '#FBBF24',
  danger: '#FB7185',
} as const;

/** Dégradés par élément — utilisés pour les auras, halos et accents. */
export const ElementTheme = {
  Feu: {
    tint: '#FF8A5B',
    gradient: ['#FF5F4B', '#FF9E45', '#FFC978'] as const,
    glow: 'rgba(255,127,80,0.35)',
    glyph: '🜂',
    label: 'Feu',
  },
  Terre: {
    tint: '#6EE7A8',
    gradient: ['#1E8F6B', '#3FBF8F', '#8FE3B8'] as const,
    glow: 'rgba(63,191,143,0.30)',
    glyph: '🜃',
    label: 'Terre',
  },
  Air: {
    tint: '#9BB8FF',
    gradient: ['#5566E8', '#7C9BFF', '#B7D0FF'] as const,
    glow: 'rgba(124,155,255,0.32)',
    glyph: '🜁',
    label: 'Air',
  },
  Eau: {
    tint: '#8BC8F5',
    gradient: ['#2B58C4', '#3E9BD8', '#8FD6F0'] as const,
    glow: 'rgba(62,155,216,0.32)',
    glyph: '🜄',
    label: 'Eau',
  },
} as const;

export const Space = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const Radius = {
  sm: 10,
  md: 16,
  lg: 22,
  xl: 28,
  pill: 999,
} as const;

export const Type = {
  display: {
    fontSize: 40,
    lineHeight: 46,
    fontWeight: '700' as const,
    letterSpacing: -0.5,
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700' as const,
    letterSpacing: -0.3,
  },
  section: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700' as const,
    letterSpacing: 2.2,
    textTransform: 'uppercase' as const,
  },
  body: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400' as const,
  },
  label: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '600' as const,
    letterSpacing: 1.2,
    textTransform: 'uppercase' as const,
  },
  value: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600' as const,
  },
} as const;

/** Ombre portée « lueur » ; sur Android on retombe sur l'élévation. */
export const glow = (color: string, radius = 24, elevation = 8) =>
  Platform.select({
    ios: {
      shadowColor: color,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.55,
      shadowRadius: radius,
    },
    android: { elevation },
    default: { boxShadow: `0 8px ${radius}px ${color}` },
  })!;

export const Layout = {
  gutter: 20,
  maxContent: 560,
} as const;

/**
 * Hauteur de la barre d'onglets, hors safe-area basse.
 * Comme la barre est en position absolue, chaque écran doit réserver
 * TAB_BAR_HEIGHT + insets.bottom au bas de son contenu défilant.
 */
export const TAB_BAR_HEIGHT = 62;
