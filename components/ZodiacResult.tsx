import { useFocusEffect } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useCallback, useState } from 'react';
import {
  BackHandler,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CosmicBackground from '@/components/ui/cosmic-background';
import {
  BackButton,
  Chip,
  GhostButton,
  GlassCard,
  ScoreBar,
  SectionLabel,
  StatTile,
} from '@/components/ui/kit';
import { ElementTheme, Layout as L, Palette, Radius, Space, TAB_BAR_HEIGHT, Type, glow } from '@/constants/design';
import { CompatibilityMatch, ZodiacSign } from '@/types/astrology';
import { formatMonthDay, getSignByName } from '@/utils/zodiac';

interface ZodiacResultProps {
  zodiacSign: ZodiacSign;
  birthDate?: { day: number; month: number } | null;
  onBack: () => void;
  onSignSelect?: (zodiacSign: ZodiacSign) => void;
  /** Libellé du retour : dépend de l'écran d'où l'on vient. */
  backLabel?: string;
}

type TabKey = 'portrait' | 'identite' | 'vie' | 'affinites';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'portrait', label: 'Portrait' },
  { key: 'identite', label: 'Identité' },
  { key: 'vie', label: 'Sa vie' },
  { key: 'affinites', label: 'Affinités' },
];

export default function ZodiacResult({
  zodiacSign: sign,
  birthDate,
  onBack,
  onSignSelect,
  backLabel = 'Changer de date',
}: ZodiacResultProps) {
  const insets = useSafeAreaInsets();
  const [tab, setTab] = useState<TabKey>('portrait');
  const element = ElementTheme[sign.element];

  useFocusEffect(
    useCallback(() => {
      const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
        onBack();
        return true;
      });
      return () => subscription.remove();
    }, [onBack])
  );

  const openSign = (name: string) => {
    const found = getSignByName(name);
    if (!found || !onSignSelect) return;
    if (Platform.OS !== 'web') Haptics.selectionAsync().catch(() => {});
    setTab('portrait');
    onSignSelect(found);
  };

  const selectTab = (key: TabKey) => {
    if (Platform.OS !== 'web') Haptics.selectionAsync().catch(() => {});
    setTab(key);
  };

  return (
    <CosmicBackground accent={sign.color}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scroll,
          { paddingTop: insets.top + Space.md, paddingBottom: insets.bottom + TAB_BAR_HEIGHT + Space.xl },
        ]}
      >
        <View style={styles.inner}>
          <BackButton onPress={onBack} label={backLabel} />

          {/* ── Hero ─────────────────────────────────────────── */}
          <Animated.View key={sign.id} entering={FadeIn.duration(450)} style={styles.hero}>
            <View style={[styles.auraOuter, glow(sign.color, 40, 0)]}>
              <LinearGradient
                colors={sign.gradient}
                start={{ x: 0.1, y: 0 }}
                end={{ x: 0.9, y: 1 }}
                style={styles.auraRing}
              >
                <View style={styles.auraCore}>
                  <Text style={styles.heroGlyph}>{sign.symbol}</Text>
                </View>
              </LinearGradient>
            </View>

            <Text style={styles.heroName}>{sign.name}</Text>
            <Text style={[styles.heroTagline, { color: sign.color }]}>
              {sign.tagline} · « {sign.motto} »
            </Text>
            <Text style={styles.heroPeriod}>{sign.period}</Text>

            <View style={styles.heroChips}>
              <Chip accent={element.tint}>{`${element.glyph}  ${sign.element}`}</Chip>
              <Chip accent={Palette.textMuted}>{sign.modality}</Chip>
              <Chip accent={Palette.textMuted}>{sign.polarity}</Chip>
              <Chip accent={Palette.gold}>{`${sign.planetSymbol}  ${sign.rulingPlanet}`}</Chip>
            </View>

            {birthDate ? (
              <View style={[styles.birthPill, { borderColor: `${sign.color}44` }]}>
                <Text style={styles.birthLabel}>Né·e le</Text>
                <Text style={styles.birthValue}>
                  {formatMonthDay(birthDate.day, birthDate.month)}
                </Text>
              </View>
            ) : null}
          </Animated.View>

          {/* ── Onglets ──────────────────────────────────────── */}
          <View style={styles.tabBar}>
            {TABS.map((item) => {
              const active = tab === item.key;
              return (
                <Pressable
                  key={item.key}
                  onPress={() => selectTab(item.key)}
                  accessibilityRole="tab"
                  accessibilityState={{ selected: active }}
                  style={({ pressed }) => [
                    styles.tab,
                    active && { backgroundColor: `${sign.color}26`, borderColor: `${sign.color}66` },
                    pressed && styles.pressed,
                  ]}
                >
                  <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>
                    {item.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {/* ── Contenu ──────────────────────────────────────── */}
          <Animated.View key={`${sign.id}-${tab}`} entering={FadeInDown.duration(320)}>
            {tab === 'portrait' ? <PortraitTab sign={sign} /> : null}
            {tab === 'identite' ? <IdentityTab sign={sign} /> : null}
            {tab === 'vie' ? <LifeTab sign={sign} /> : null}
            {tab === 'affinites' ? <AffinityTab sign={sign} onOpenSign={openSign} /> : null}
          </Animated.View>

          <View style={styles.footerActions}>
            <GhostButton label={backLabel} onPress={onBack} accent={sign.color} />
          </View>
        </View>
      </ScrollView>
    </CosmicBackground>
  );
}

/* ══ Onglet Portrait ═══════════════════════════════════════════ */

function PortraitTab({ sign }: { sign: ZodiacSign }) {
  return (
    <View style={styles.tabContent}>
      <View>
        <SectionLabel accent={sign.color}>Le portrait</SectionLabel>
        <GlassCard>
          <Text style={styles.paragraph}>{sign.description}</Text>
        </GlassCard>
      </View>

      <View>
        <SectionLabel accent={Palette.success}>Ses forces</SectionLabel>
        <View style={styles.chipWrap}>
          {sign.qualities.map((quality) => (
            <Chip key={quality} tone="positive">
              {quality}
            </Chip>
          ))}
        </View>
      </View>

      <View>
        <SectionLabel accent={Palette.warning}>Ses points d’attention</SectionLabel>
        <View style={styles.chipWrap}>
          {sign.flaws.map((flaw) => (
            <Chip key={flaw} tone="caution">
              {flaw}
            </Chip>
          ))}
        </View>
      </View>

      <View>
        <SectionLabel accent={sign.color}>Sa part d’ombre</SectionLabel>
        <GlassCard style={[styles.accentCard, { borderLeftColor: sign.color }]}>
          <Text style={styles.paragraph}>{sign.shadow}</Text>
        </GlassCard>
      </View>

      <View>
        <SectionLabel accent={Palette.gold}>{`Ils sont ${sign.name}`}</SectionLabel>
        <View style={styles.chipWrap}>
          {sign.celebrities.map((name) => (
            <Chip key={name} accent={Palette.gold}>
              {name}
            </Chip>
          ))}
        </View>
      </View>
    </View>
  );
}

/* ══ Onglet Identité ═══════════════════════════════════════════ */

function IdentityTab({ sign }: { sign: ZodiacSign }) {
  const element = ElementTheme[sign.element];

  return (
    <View style={styles.tabContent}>
      <View>
        <SectionLabel accent={sign.color}>Carte d’identité astrologique</SectionLabel>
        <View style={styles.tileGrid}>
          <StatTile label="Planète maîtresse" value={sign.rulingPlanet} glyph={sign.planetSymbol} accent={Palette.gold} />
          <StatTile label="Élément" value={sign.element} glyph={element.glyph} accent={element.tint} />
          <StatTile label="Mode" value={sign.modality} accent={sign.color} />
          <StatTile label="Polarité" value={sign.polarity} accent={sign.color} />
          <StatTile label="Maison" value={sign.house} accent={sign.color} wide />
          <StatTile label="Domaine de la maison" value={sign.houseTheme} wide />
          <StatTile label="Saison" value={sign.season} />
          <StatTile label="Signe opposé" value={sign.oppositeSign} glyph="⇄" />
        </View>
      </View>

      <View>
        <SectionLabel accent={sign.color}>Les trois décans</SectionLabel>
        <GlassCard>
          {sign.decans.map((decan, index) => (
            <View
              key={decan}
              style={[styles.decanRow, index === sign.decans.length - 1 && styles.decanLast]}
            >
              <View style={[styles.decanDot, { backgroundColor: sign.color }]} />
              <Text style={styles.decanText}>{decan}</Text>
            </View>
          ))}
        </GlassCard>
      </View>

      <View>
        <SectionLabel accent={Palette.gold}>Correspondances traditionnelles</SectionLabel>
        <View style={styles.tileGrid}>
          <StatTile label="Pierre" value={sign.stone} glyph="◈" accent={sign.color} />
          <StatTile label="Métal" value={sign.metal} glyph="⬡" accent={sign.color} />
          <StatTile label="Fleur" value={sign.flower} glyph="❀" accent={sign.color} />
          <StatTile label="Animal" value={sign.animal} glyph="◐" accent={sign.color} />
          <StatTile label="Partie du corps" value={sign.bodyPart} wide glyph="✛" accent={sign.color} />
          <StatTile label="Jour favorable" value={sign.luckyDay} glyph="☉" accent={Palette.gold} />
          <StatTile label="Couleur" value={sign.luckyColor} glyph="◍" accent={Palette.gold} />
          <StatTile label="Nombres" value={sign.luckyNumbers.join(' · ')} glyph="#" accent={Palette.gold} />
          <StatTile label="Arcane du tarot" value={sign.tarot} glyph="✧" accent={Palette.gold} />
        </View>
      </View>
    </View>
  );
}

/* ══ Onglet Sa vie ═════════════════════════════════════════════ */

const LIFE_SECTIONS: { key: keyof ZodiacSign; label: string; glyph: string }[] = [
  { key: 'inLove', label: 'En amour', glyph: '♥' },
  { key: 'inWork', label: 'Au travail', glyph: '✦' },
  { key: 'inFriendship', label: 'En amitié', glyph: '❖' },
  { key: 'money', label: 'Avec l’argent', glyph: '◈' },
  { key: 'wellbeing', label: 'Santé & bien-être', glyph: '☘' },
];

function LifeTab({ sign }: { sign: ZodiacSign }) {
  return (
    <View style={styles.tabContent}>
      {LIFE_SECTIONS.map(({ key, label, glyph }) => (
        <View key={key}>
          <SectionLabel accent={sign.color}>{label}</SectionLabel>
          <GlassCard>
            <View style={styles.lifeHead}>
              <Text style={[styles.lifeGlyph, { color: sign.color }]}>{glyph}</Text>
              <View style={[styles.lifeRule, { backgroundColor: `${sign.color}44` }]} />
            </View>
            <Text style={styles.paragraph}>{sign[key] as string}</Text>
          </GlassCard>
        </View>
      ))}
    </View>
  );
}

/* ══ Onglet Affinités ══════════════════════════════════════════ */

function MatchRow({
  match,
  tone,
  isLast,
  onPress,
}: {
  match: CompatibilityMatch;
  tone: 'good' | 'hard';
  isLast: boolean;
  onPress: () => void;
}) {
  const other = getSignByName(match.sign);
  const barColors =
    tone === 'good'
      ? ([Palette.aurora, Palette.success] as const)
      : ([Palette.warning, Palette.danger] as const);

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Voir le signe ${match.sign}`}
      style={({ pressed }) => [
        styles.matchRow,
        isLast && styles.matchRowLast,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.matchHead}>
        <Text style={[styles.matchGlyph, { color: other?.color ?? Palette.text }]}>
          {other?.symbol ?? '✦'}
        </Text>
        <Text style={styles.matchName}>{match.sign}</Text>
        <Text style={[styles.matchScore, { color: tone === 'good' ? Palette.success : Palette.warning }]}>
          {match.score}%
        </Text>
        <Text style={styles.matchChevron}>›</Text>
      </View>
      <ScoreBar score={match.score} colors={barColors} />
      <Text style={styles.matchNote}>{match.note}</Text>
    </Pressable>
  );
}

function AffinityTab({
  sign,
  onOpenSign,
}: {
  sign: ZodiacSign;
  onOpenSign: (name: string) => void;
}) {
  return (
    <View style={styles.tabContent}>
      <Text style={styles.helperText}>
        Touchez un signe pour ouvrir sa fiche complète.
      </Text>

      <View>
        <SectionLabel accent={Palette.success}>Les meilleures ententes</SectionLabel>
        <GlassCard padded={false} style={styles.matchCard}>
          {sign.bestMatches.map((match, index) => (
            <MatchRow
              key={match.sign}
              match={match}
              tone="good"
              isLast={index === sign.bestMatches.length - 1}
              onPress={() => onOpenSign(match.sign)}
            />
          ))}
        </GlassCard>
      </View>

      <View>
        <SectionLabel accent={Palette.warning}>Les relations à travailler</SectionLabel>
        <GlassCard padded={false} style={styles.matchCard}>
          {sign.challenges.map((match, index) => (
            <MatchRow
              key={match.sign}
              match={match}
              tone="hard"
              isLast={index === sign.challenges.length - 1}
              onPress={() => onOpenSign(match.sign)}
            />
          ))}
        </GlassCard>
      </View>

      <GlassCard style={[styles.accentCard, { borderLeftColor: sign.color }]}>
        <Text style={styles.paragraph}>
          <Text style={{ color: sign.color, fontWeight: '700' }}>Le saviez-vous ? </Text>
          Un signe opposé n’est pas un mauvais signe : l’axe {sign.name} – {sign.oppositeSign} met
          face à face deux moitiés d’un même thème. L’attirance y est forte, la friction aussi, et
          c’est souvent la relation qui fait le plus grandir.
        </Text>
      </GlassCard>
    </View>
  );
}

/* ══ Styles ════════════════════════════════════════════════════ */

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
  },

  hero: {
    alignItems: 'center',
    paddingTop: Space.lg,
    paddingBottom: Space.xl,
  },
  auraOuter: {
    borderRadius: 999,
    marginBottom: Space.lg,
  },
  auraRing: {
    width: 132,
    height: 132,
    borderRadius: 66,
    alignItems: 'center',
    justifyContent: 'center',
  },
  auraCore: {
    width: 118,
    height: 118,
    borderRadius: 59,
    backgroundColor: Palette.deep,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroGlyph: {
    fontSize: 58,
    lineHeight: 70,
    color: Palette.text,
  },
  heroName: {
    fontSize: 42,
    lineHeight: 48,
    fontWeight: '700',
    letterSpacing: -0.8,
    color: Palette.text,
  },
  heroTagline: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 6,
    letterSpacing: 0.2,
  },
  heroPeriod: {
    ...Type.label,
    color: Palette.textFaint,
    marginTop: Space.sm,
  },
  heroChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: Space.sm,
    marginTop: Space.lg,
  },
  birthPill: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: Space.sm,
    marginTop: Space.lg,
    paddingHorizontal: Space.lg,
    paddingVertical: Space.sm,
    borderRadius: Radius.pill,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: Palette.surface,
  },
  birthLabel: {
    ...Type.label,
    color: Palette.textFaint,
  },
  birthValue: {
    fontSize: 15,
    fontWeight: '700',
    color: Palette.text,
  },

  tabBar: {
    flexDirection: 'row',
    gap: 6,
    padding: 5,
    borderRadius: Radius.pill,
    backgroundColor: Palette.surface,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Palette.border,
    marginBottom: Space.xl,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: Radius.pill,
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'transparent',
  },
  tabLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: Palette.textMuted,
  },
  tabLabelActive: {
    color: Palette.text,
  },

  tabContent: {
    gap: Space.xl,
  },
  paragraph: {
    ...Type.body,
    color: Palette.textMuted,
  },
  helperText: {
    fontSize: 13,
    color: Palette.textFaint,
    textAlign: 'center',
    marginBottom: -Space.sm,
  },
  chipWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Space.sm,
  },
  accentCard: {
    borderLeftWidth: 3,
  },

  tileGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Space.sm,
  },

  decanRow: {
    flexDirection: 'row',
    gap: Space.md,
    paddingBottom: Space.md,
    marginBottom: Space.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Palette.border,
  },
  decanLast: {
    paddingBottom: 0,
    marginBottom: 0,
    borderBottomWidth: 0,
  },
  decanDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
  },
  decanText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
    color: Palette.textMuted,
  },

  lifeHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Space.md,
    marginBottom: Space.md,
  },
  lifeGlyph: {
    fontSize: 16,
  },
  lifeRule: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },

  matchCard: {
    paddingHorizontal: Space.lg,
    paddingVertical: Space.xs,
  },
  matchRow: {
    paddingVertical: Space.lg,
    gap: Space.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Palette.border,
  },
  matchRowLast: {
    borderBottomWidth: 0,
  },
  matchHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Space.md,
  },
  matchGlyph: {
    fontSize: 20,
    width: 24,
  },
  matchName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: Palette.text,
  },
  matchScore: {
    fontSize: 15,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
  },
  matchChevron: {
    fontSize: 22,
    color: Palette.textFaint,
    marginLeft: 2,
  },
  matchNote: {
    fontSize: 13,
    lineHeight: 19,
    color: Palette.textFaint,
  },

  footerActions: {
    marginTop: Space.xxl,
  },
});
