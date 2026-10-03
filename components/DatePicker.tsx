import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo, useState } from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, { FadeIn, FadeInDown, LinearTransition } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CosmicBackground from '@/components/ui/cosmic-background';
import { GhostButton, PrimaryButton, SectionLabel } from '@/components/ui/kit';
import { ElementTheme, Layout as L, Palette, Radius, Space, TAB_BAR_HEIGHT, Type } from '@/constants/design';
import { MONTHS_SHORT, daysInMonth, getZodiacSign } from '@/utils/zodiac';

interface DatePickerProps {
  onDateSelect: (day: number, month: number) => void;
  onViewAllSigns?: () => void;
}

const tap = () => {
  if (Platform.OS !== 'web') {
    Haptics.selectionAsync().catch(() => {});
  }
};

export default function DatePicker({ onDateSelect, onViewAllSigns }: DatePickerProps) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const [month, setMonth] = useState<number | null>(null);
  const [day, setDay] = useState<number | null>(null);

  /** Aperçu en direct : dès que le couple jour/mois est complet. */
  const preview = useMemo(
    () => (day && month ? getZodiacSign(day, month) : null),
    [day, month]
  );

  const accent = preview?.color ?? Palette.violet;
  const contentWidth = Math.min(width, L.maxContent) - L.gutter * 2;
  const daySize = Math.floor((contentWidth - 6 * Space.sm) / 7);

  const handleMonth = (nextMonth: number) => {
    tap();
    setMonth(nextMonth);
    // Un jour devenu impossible (31 février) est réinitialisé.
    if (day && day > daysInMonth(nextMonth)) setDay(null);
  };

  const handleDay = (nextDay: number) => {
    tap();
    setDay(nextDay);
  };

  const handleSubmit = () => {
    if (!day || !month) return;
    if (Platform.OS !== 'web') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    }
    onDateSelect(day, month);
  };

  return (
    <CosmicBackground accent={accent}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scroll,
          { paddingTop: insets.top + Space.xl, paddingBottom: insets.bottom + TAB_BAR_HEIGHT + Space.xl },
        ]}
      >
        <View style={styles.inner}>
          {/* En-tête */}
          <Animated.View entering={FadeIn.duration(500)} style={styles.header}>
            <View style={styles.wordmarkRow}>
              <Text style={styles.wordmarkGlyph}>✦</Text>
              <Text style={styles.wordmark}>ASTROME</Text>
              <Text style={styles.wordmarkGlyph}>✦</Text>
            </View>
            <Text style={styles.title}>Quel est votre signe ?</Text>
            <Text style={styles.subtitle}>
              Le signe solaire ne dépend que du jour et du mois de naissance —
              l’année n’entre pas en compte.
            </Text>
          </Animated.View>

          {/* Mois */}
          <Animated.View entering={FadeInDown.delay(100).duration(500)} style={styles.block}>
            <SectionLabel accent={accent}>Mois de naissance</SectionLabel>
            <View style={styles.monthGrid}>
              {MONTHS_SHORT.map((label, index) => {
                const value = index + 1;
                const active = month === value;
                return (
                  <Pressable
                    key={label}
                    onPress={() => handleMonth(value)}
                    accessibilityRole="button"
                    accessibilityState={{ selected: active }}
                    style={({ pressed }) => [
                      styles.monthCell,
                      active && { borderColor: accent, backgroundColor: `${accent}22` },
                      pressed && styles.pressed,
                    ]}
                  >
                    <Text style={[styles.monthText, active && { color: Palette.text }]}>
                      {label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </Animated.View>

          {/* Jour */}
          <Animated.View entering={FadeInDown.delay(180).duration(500)} style={styles.block}>
            <SectionLabel accent={accent}>Jour de naissance</SectionLabel>
            {month ? (
              <Animated.View entering={FadeIn.duration(300)} style={styles.dayGrid}>
                {Array.from({ length: daysInMonth(month) }, (_, i) => i + 1).map((value) => {
                  const active = day === value;
                  return (
                    <Pressable
                      key={value}
                      onPress={() => handleDay(value)}
                      accessibilityRole="button"
                      accessibilityState={{ selected: active }}
                      style={({ pressed }) => [
                        styles.dayCell,
                        { width: daySize, height: daySize, borderRadius: daySize / 2 },
                        active && { borderColor: accent, backgroundColor: `${accent}2E` },
                        pressed && styles.pressed,
                      ]}
                    >
                      <Text style={[styles.dayText, active && styles.dayTextActive]}>{value}</Text>
                    </Pressable>
                  );
                })}
              </Animated.View>
            ) : (
              <View style={styles.placeholder}>
                <Text style={styles.placeholderText}>
                  Choisissez d’abord un mois pour afficher les jours.
                </Text>
              </View>
            )}
          </Animated.View>

          {/* Aperçu du signe */}
          {preview ? (
            <Animated.View
              key={preview.id}
              entering={FadeInDown.duration(420)}
              layout={LinearTransition.springify()}
              style={styles.previewWrapper}
            >
              <LinearGradient
                colors={[`${preview.color}33`, 'transparent']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.preview, { borderColor: `${preview.color}55` }]}
              >
                <View style={[styles.previewGlyphRing, { borderColor: `${preview.color}66` }]}>
                  <Text style={[styles.previewGlyph, { color: preview.color }]}>
                    {preview.symbol}
                  </Text>
                </View>
                <View style={styles.previewBody}>
                  <Text style={styles.previewLabel}>Votre signe solaire</Text>
                  <Text style={styles.previewName}>{preview.name}</Text>
                  <Text style={styles.previewMeta}>
                    {preview.period} · {ElementTheme[preview.element].glyph} {preview.element} ·{' '}
                    {preview.modality}
                  </Text>
                </View>
              </LinearGradient>
            </Animated.View>
          ) : null}

          {/* Actions */}
          <View style={styles.actions}>
            <PrimaryButton
              label="Révéler mon signe"
              onPress={handleSubmit}
              disabled={!preview}
              glowColor={accent}
              colors={preview ? preview.gradient : ['#2A2D42', '#22243A']}
            />
            {onViewAllSigns ? (
              <GhostButton label="Explorer les 12 signes" onPress={onViewAllSigns} />
            ) : null}
          </View>
        </View>
      </ScrollView>
    </CosmicBackground>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: L.gutter,
    alignItems: 'center',
  },
  inner: {
    width: '100%',
    maxWidth: L.maxContent,
  },
  pressed: {
    opacity: 0.65,
    transform: [{ scale: 0.96 }],
  },

  header: {
    alignItems: 'center',
    marginBottom: Space.xxl,
  },
  wordmarkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Space.sm,
    marginBottom: Space.lg,
  },
  wordmark: {
    color: Palette.gold,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 5,
  },
  wordmarkGlyph: {
    color: Palette.gold,
    fontSize: 10,
    opacity: 0.8,
  },
  title: {
    ...Type.display,
    color: Palette.text,
    textAlign: 'center',
  },
  subtitle: {
    ...Type.body,
    color: Palette.textMuted,
    textAlign: 'center',
    marginTop: Space.md,
    maxWidth: 330,
  },

  block: {
    marginBottom: Space.xl,
  },

  monthGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Space.sm,
  },
  monthCell: {
    flexGrow: 1,
    flexBasis: '30%',
    paddingVertical: 13,
    alignItems: 'center',
    borderRadius: Radius.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Palette.border,
    backgroundColor: Palette.surface,
  },
  monthText: {
    color: Palette.textMuted,
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.2,
  },

  dayGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Space.sm,
  },
  dayCell: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Palette.border,
    backgroundColor: Palette.surface,
  },
  dayText: {
    color: Palette.textMuted,
    fontSize: 15,
    fontWeight: '500',
  },
  dayTextActive: {
    color: Palette.text,
    fontWeight: '700',
  },
  placeholder: {
    borderRadius: Radius.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Palette.border,
    borderStyle: 'dashed',
    paddingVertical: Space.xl,
    paddingHorizontal: Space.lg,
    alignItems: 'center',
  },
  placeholderText: {
    color: Palette.textFaint,
    fontSize: 14,
    textAlign: 'center',
  },

  previewWrapper: {
    marginBottom: Space.xl,
  },
  preview: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Space.lg,
    padding: Space.lg,
    borderRadius: Radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
  },
  previewGlyphRing: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewGlyph: {
    fontSize: 30,
    lineHeight: 36,
  },
  previewBody: {
    flex: 1,
    gap: 3,
  },
  previewLabel: {
    ...Type.label,
    color: Palette.textFaint,
  },
  previewName: {
    fontSize: 24,
    fontWeight: '700',
    color: Palette.text,
    letterSpacing: -0.3,
  },
  previewMeta: {
    fontSize: 13,
    color: Palette.textMuted,
  },

  actions: {
    gap: Space.md,
    marginTop: Space.sm,
  },
});
