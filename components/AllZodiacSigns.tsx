import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo, useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CosmicBackground from '@/components/ui/cosmic-background';
import { BackButton, SectionLabel } from '@/components/ui/kit';
import { ElementTheme, Layout as L, Palette, Radius, Space, TAB_BAR_HEIGHT, Type } from '@/constants/design';
import { Element, ZodiacSign } from '@/types/astrology';
import { zodiacSigns } from '@/utils/zodiac';

interface AllZodiacSignsProps {
  onSignSelect: (zodiacSign: ZodiacSign) => void;
  onBack: () => void;
}

type Filter = 'Tous' | Element;

const FILTERS: Filter[] = ['Tous', 'Feu', 'Terre', 'Air', 'Eau'];

export default function AllZodiacSigns({ onSignSelect, onBack }: AllZodiacSignsProps) {
  const insets = useSafeAreaInsets();
  const [filter, setFilter] = useState<Filter>('Tous');

  const visible = useMemo(
    () => (filter === 'Tous' ? zodiacSigns : zodiacSigns.filter((s) => s.element === filter)),
    [filter]
  );

  const accent = filter === 'Tous' ? Palette.violet : ElementTheme[filter].tint;

  const select = (next: Filter) => {
    if (Platform.OS !== 'web') Haptics.selectionAsync().catch(() => {});
    setFilter(next);
  };

  return (
    <CosmicBackground accent={accent}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scroll,
          { paddingTop: insets.top + Space.md, paddingBottom: insets.bottom + TAB_BAR_HEIGHT + Space.xl },
        ]}
      >
        <View style={styles.inner}>
          <BackButton onPress={onBack} />

          <Animated.View entering={FadeIn.duration(450)} style={styles.header}>
            <Text style={styles.title}>Les douze signes</Text>
            <Text style={styles.subtitle}>
              La roue du zodiaque se lit dans l’ordre des saisons, du Bélier au Poissons.
              Chaque signe croise un élément et un mode qui n’appartiennent qu’à lui.
            </Text>
          </Animated.View>

          {/* Filtre par élément */}
          <View style={styles.filterRow}>
            {FILTERS.map((item) => {
              const active = filter === item;
              const tint = item === 'Tous' ? Palette.gold : ElementTheme[item].tint;
              return (
                <Pressable
                  key={item}
                  onPress={() => select(item)}
                  accessibilityRole="button"
                  accessibilityState={{ selected: active }}
                  style={({ pressed }) => [
                    styles.filterChip,
                    active && { borderColor: `${tint}88`, backgroundColor: `${tint}1F` },
                    pressed && styles.pressed,
                  ]}
                >
                  <Text style={[styles.filterText, active && { color: tint }]}>
                    {item === 'Tous' ? 'Tous' : `${ElementTheme[item].glyph} ${item}`}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <SectionLabel accent={accent}>
            {visible.length === 12 ? 'La roue complète' : `${visible.length} signes de ${filter}`}
          </SectionLabel>

          <View style={styles.grid}>
            {visible.map((sign, index) => (
              <Animated.View
                key={sign.id}
                entering={FadeInDown.delay(index * 45).duration(380)}
                style={styles.cardWrapper}
              >
                <Pressable
                  onPress={() => {
                    if (Platform.OS !== 'web') Haptics.selectionAsync().catch(() => {});
                    onSignSelect(sign);
                  }}
                  accessibilityRole="button"
                  accessibilityLabel={`Voir la fiche du signe ${sign.name}`}
                  style={({ pressed }) => [styles.card, pressed && styles.pressed]}
                >
                  <LinearGradient
                    colors={[`${sign.color}2E`, 'rgba(255,255,255,0.02)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={[styles.cardInner, { borderColor: `${sign.color}44` }]}
                  >
                    <Text style={[styles.cardGlyph, { color: sign.color }]}>{sign.symbol}</Text>
                    <Text style={styles.cardName}>{sign.name}</Text>
                    <Text style={styles.cardTagline}>{sign.tagline}</Text>
                    <View style={[styles.cardRule, { backgroundColor: `${sign.color}55` }]} />
                    <Text style={styles.cardPeriod}>{sign.period}</Text>
                    <Text style={styles.cardMeta}>
                      {ElementTheme[sign.element].glyph} {sign.element} · {sign.modality}
                    </Text>
                  </LinearGradient>
                </Pressable>
              </Animated.View>
            ))}
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
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },

  header: {
    paddingTop: Space.lg,
    marginBottom: Space.xl,
  },
  title: {
    ...Type.display,
    color: Palette.text,
  },
  subtitle: {
    ...Type.body,
    color: Palette.textMuted,
    marginTop: Space.md,
  },

  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Space.sm,
    marginBottom: Space.xl,
  },
  filterChip: {
    paddingHorizontal: Space.lg,
    paddingVertical: 9,
    borderRadius: Radius.pill,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Palette.border,
    backgroundColor: Palette.surface,
  },
  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: Palette.textMuted,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Space.md,
  },
  cardWrapper: {
    flexGrow: 1,
    flexBasis: '46%',
  },
  card: {
    borderRadius: Radius.lg,
    overflow: 'hidden',
  },
  cardInner: {
    paddingVertical: Space.xl,
    paddingHorizontal: Space.lg,
    alignItems: 'center',
    borderRadius: Radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    gap: 4,
  },
  cardGlyph: {
    fontSize: 34,
    lineHeight: 42,
  },
  cardName: {
    fontSize: 19,
    fontWeight: '700',
    color: Palette.text,
    letterSpacing: -0.2,
  },
  cardTagline: {
    fontSize: 12,
    color: Palette.textMuted,
    fontStyle: 'italic',
  },
  cardRule: {
    width: 26,
    height: 1,
    marginVertical: Space.sm,
  },
  cardPeriod: {
    fontSize: 11.5,
    color: Palette.textFaint,
    textAlign: 'center',
  },
  cardMeta: {
    fontSize: 11,
    color: Palette.textFaint,
    letterSpacing: 0.3,
  },
});
