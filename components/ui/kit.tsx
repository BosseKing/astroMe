import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  ColorValue,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import { Palette, Radius, Space, Type, glow } from '@/constants/design';

/* ── Surface vitrée ──────────────────────────────────────────── */

export function GlassCard({
  children,
  style,
  padded = true,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  padded?: boolean;
}) {
  return (
    <View style={[styles.glass, padded && styles.glassPadded, style]}>{children}</View>
  );
}

/* ── Titre de section : filet + libellé espacé ───────────────── */

export function SectionLabel({ children, accent }: { children: string; accent?: string }) {
  return (
    <View style={styles.sectionRow}>
      <View style={[styles.sectionRule, { backgroundColor: accent ?? Palette.gold }]} />
      <Text style={[styles.sectionText, { color: accent ?? Palette.gold }]}>{children}</Text>
    </View>
  );
}

/* ── Tuile « libellé / valeur » pour la fiche d'identité ─────── */

export function StatTile({
  label,
  value,
  glyph,
  accent,
  wide = false,
}: {
  label: string;
  value: string;
  glyph?: string;
  accent?: string;
  wide?: boolean;
}) {
  return (
    <View style={[styles.tile, wide && styles.tileWide]}>
      <View style={styles.tileHead}>
        {glyph ? (
          <Text style={[styles.tileGlyph, { color: accent ?? Palette.textMuted }]}>{glyph}</Text>
        ) : null}
        <Text style={styles.tileLabel}>{label}</Text>
      </View>
      <Text style={styles.tileValue}>{value}</Text>
    </View>
  );
}

/* ── Étiquette arrondie ─────────────────────────────────────── */

export function Chip({
  children,
  tone = 'neutral',
  accent,
}: {
  children: string;
  tone?: 'neutral' | 'positive' | 'caution';
  accent?: string;
}) {
  const color =
    tone === 'positive' ? Palette.success : tone === 'caution' ? Palette.warning : accent ?? Palette.text;

  return (
    <View
      style={[
        styles.chip,
        {
          borderColor: `${color}55`,
          backgroundColor: `${color}14`,
        },
      ]}
    >
      <Text style={[styles.chipText, { color }]}>{children}</Text>
    </View>
  );
}

/* ── Barre d'affinité ───────────────────────────────────────── */

export function ScoreBar({
  score,
  colors,
}: {
  score: number;
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
}) {
  return (
    <View style={styles.track}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.fill, { width: `${Math.max(0, Math.min(100, score))}%` }]}
      />
    </View>
  );
}

/* ── Bouton principal, dégradé + lueur ──────────────────────── */

export function PrimaryButton({
  label,
  onPress,
  colors,
  disabled = false,
  glowColor,
}: {
  label: string;
  onPress: () => void;
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
  disabled?: boolean;
  glowColor?: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.button,
        !disabled && glow(glowColor ?? Palette.violet, 22, 10),
        disabled && styles.buttonDisabled,
        pressed && !disabled && styles.buttonPressed,
      ]}
    >
      <LinearGradient
        colors={disabled ? ['#2A2D42', '#22243A'] : colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.buttonGradient}
      >
        <Text style={[styles.buttonLabel, disabled && styles.buttonLabelDisabled]}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

/* ── Bouton secondaire, contour discret ─────────────────────── */

export function GhostButton({
  label,
  onPress,
  accent,
}: {
  label: string;
  onPress: () => void;
  accent?: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.ghost,
        { borderColor: `${accent ?? Palette.text}33` },
        pressed && styles.buttonPressed,
      ]}
    >
      <Text style={[styles.ghostLabel, { color: accent ?? Palette.text }]}>{label}</Text>
    </Pressable>
  );
}

/* ── Flèche de retour ───────────────────────────────────────── */

export function BackButton({ onPress, label = 'Retour' }: { onPress: () => void; label?: string }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={12}
      style={({ pressed }) => [styles.back, pressed && styles.buttonPressed]}
    >
      <Text style={styles.backGlyph}>‹</Text>
      <Text style={styles.backLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  glass: {
    backgroundColor: Palette.surface,
    borderRadius: Radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Palette.border,
    overflow: 'hidden',
  },
  glassPadded: {
    padding: Space.lg + 2,
  },

  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Space.sm,
    marginBottom: Space.md,
  },
  sectionRule: {
    width: 18,
    height: 1.5,
    borderRadius: 1,
    opacity: 0.8,
  },
  sectionText: {
    ...Type.section,
  },

  tile: {
    flexGrow: 1,
    flexBasis: '47%',
    backgroundColor: Palette.surface,
    borderRadius: Radius.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Palette.border,
    paddingVertical: Space.md,
    paddingHorizontal: Space.md + 2,
    gap: 6,
  },
  tileWide: {
    flexBasis: '100%',
  },
  tileHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tileGlyph: {
    fontSize: 13,
  },
  tileLabel: {
    ...Type.label,
    color: Palette.textFaint,
  },
  tileValue: {
    ...Type.value,
    color: Palette.text,
  },

  chip: {
    paddingHorizontal: Space.md,
    paddingVertical: 7,
    borderRadius: Radius.pill,
    borderWidth: StyleSheet.hairlineWidth,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.2,
  },

  track: {
    height: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 3,
  },

  button: {
    borderRadius: Radius.pill,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 17,
    paddingHorizontal: Space.xl,
    alignItems: 'center',
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  buttonLabelDisabled: {
    color: Palette.textFaint,
  },
  buttonDisabled: {
    opacity: 0.8,
  },
  buttonPressed: {
    opacity: 0.72,
    transform: [{ scale: 0.985 }],
  },

  ghost: {
    borderRadius: Radius.pill,
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 15,
    paddingHorizontal: Space.xl,
    alignItems: 'center',
  },
  ghostLabel: {
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.3,
  },

  back: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingRight: Space.md,
  },
  backGlyph: {
    color: Palette.text,
    fontSize: 26,
    lineHeight: 28,
    fontWeight: '300',
  },
  backLabel: {
    color: Palette.text,
    fontSize: 15,
    fontWeight: '500',
  },
});
