import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CosmicBackground from '@/components/ui/cosmic-background';
import { Chip, GlassCard, SectionLabel } from '@/components/ui/kit';
import { ElementTheme, Layout as L, Palette, Radius, Space, TAB_BAR_HEIGHT, Type } from '@/constants/design';
import { Element } from '@/types/astrology';
import { signsByElement, zodiacSigns } from '@/utils/zodiac';

const ELEMENTS: { key: Element; title: string; text: string }[] = [
  {
    key: 'Feu',
    title: 'Le Feu — l’élan',
    text: 'Énergie, initiative, enthousiasme, besoin d’agir et de rayonner. Le Feu commence ; il chauffe vite et se lasse vite.',
  },
  {
    key: 'Terre',
    title: 'La Terre — la matière',
    text: 'Concret, patience, sens du réel et du durable. La Terre construit et conserve ; elle change lentement.',
  },
  {
    key: 'Air',
    title: 'L’Air — la pensée',
    text: 'Idées, échange, distance, sociabilité. L’Air relie et met en mots ; il prend de la hauteur, parfois trop.',
  },
  {
    key: 'Eau',
    title: 'L’Eau — l’émotion',
    text: 'Sensibilité, intuition, mémoire affective. L’Eau ressent avant de comprendre ; elle absorbe beaucoup.',
  },
];

const MODALITIES = [
  {
    name: 'Cardinal',
    signs: 'Bélier · Cancer · Balance · Capricorne',
    text: 'Ils lancent. Chaque signe cardinal ouvre une saison et prend l’initiative.',
  },
  {
    name: 'Fixe',
    signs: 'Taureau · Lion · Scorpion · Verseau',
    text: 'Ils tiennent. Les signes fixes installent, consolident et ne cèdent pas facilement.',
  },
  {
    name: 'Mutable',
    signs: 'Gémeaux · Vierge · Sagittaire · Poissons',
    text: 'Ils transforment. Placés en fin de saison, ils s’adaptent et préparent le passage.',
  },
];

const AXES = [
  ['Bélier', 'Balance', 'Moi ↔ l’autre'],
  ['Taureau', 'Scorpion', 'Avoir ↔ transformer'],
  ['Gémeaux', 'Sagittaire', 'Savoir ↔ comprendre'],
  ['Cancer', 'Capricorne', 'Foyer ↔ carrière'],
  ['Lion', 'Verseau', 'Individu ↔ collectif'],
  ['Vierge', 'Poissons', 'Ordre ↔ abandon'],
];

export default function ExploreScreen() {
  const insets = useSafeAreaInsets();

  return (
    <CosmicBackground accent={Palette.violet}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scroll,
          { paddingTop: insets.top + Space.xl, paddingBottom: insets.bottom + TAB_BAR_HEIGHT + Space.xl },
        ]}
      >
        <View style={styles.inner}>
          <Animated.View entering={FadeIn.duration(450)} style={styles.header}>
            <Text style={styles.eyebrow}>✦ COMPRENDRE ✦</Text>
            <Text style={styles.title}>Comment se lit le zodiaque</Text>
            <Text style={styles.subtitle}>
              Douze signes, quatre éléments, trois modes, six axes. Une fois ces quatre grilles
              en tête, n’importe quelle fiche astrologique devient lisible.
            </Text>
          </Animated.View>

          {/* Signe solaire */}
          <Animated.View entering={FadeInDown.delay(80).duration(420)} style={styles.block}>
            <SectionLabel accent={Palette.gold}>Le signe solaire</SectionLabel>
            <GlassCard>
              <Text style={styles.paragraph}>
                Votre signe est la portion du zodiaque que le Soleil traversait le jour de votre
                naissance. Comme le Soleil parcourt les mêmes degrés aux mêmes dates chaque année,
                <Text style={styles.strong}> le jour et le mois suffisent à le déterminer</Text> —
                l’année n’a aucune influence dessus.
              </Text>
              <View style={styles.divider} />
              <Text style={styles.paragraph}>
                Née aux frontières d’un signe (le premier ou le dernier jour), une personne est dite
                « au cusp » : l’heure exacte de naissance peut alors faire basculer le résultat d’un
                signe à l’autre.
              </Text>
            </GlassCard>
          </Animated.View>

          {/* Éléments */}
          <Animated.View entering={FadeInDown.delay(140).duration(420)} style={styles.block}>
            <SectionLabel accent={Palette.aurora}>Les quatre éléments</SectionLabel>
            <View style={styles.stack}>
              {ELEMENTS.map(({ key, title, text }) => {
                const theme = ElementTheme[key];
                return (
                  <GlassCard key={key} style={[styles.elementCard, { borderLeftColor: theme.tint }]}>
                    <View style={styles.elementHead}>
                      <Text style={[styles.elementGlyph, { color: theme.tint }]}>{theme.glyph}</Text>
                      <Text style={styles.elementTitle}>{title}</Text>
                    </View>
                    <Text style={styles.paragraph}>{text}</Text>
                    <View style={styles.chipRow}>
                      {signsByElement(key).map((sign) => (
                        <Chip key={sign.id} accent={theme.tint}>
                          {`${sign.symbol}  ${sign.name}`}
                        </Chip>
                      ))}
                    </View>
                  </GlassCard>
                );
              })}
            </View>
          </Animated.View>

          {/* Modes */}
          <Animated.View entering={FadeInDown.delay(200).duration(420)} style={styles.block}>
            <SectionLabel accent={Palette.violet}>Les trois modes</SectionLabel>
            <GlassCard>
              {MODALITIES.map((mode, index) => (
                <View
                  key={mode.name}
                  style={[styles.modeRow, index === MODALITIES.length - 1 && styles.modeRowLast]}
                >
                  <Text style={styles.modeName}>{mode.name}</Text>
                  <Text style={styles.modeSigns}>{mode.signs}</Text>
                  <Text style={styles.paragraph}>{mode.text}</Text>
                </View>
              ))}
            </GlassCard>
          </Animated.View>

          {/* Polarité */}
          <Animated.View entering={FadeInDown.delay(240).duration(420)} style={styles.block}>
            <SectionLabel accent={Palette.rose}>La polarité</SectionLabel>
            <GlassCard>
              <Text style={styles.paragraph}>
                Un signe sur deux est <Text style={styles.strong}>Yang</Text> (Feu et Air) : tourné
                vers l’extérieur, l’action, l’expression. L’autre est
                <Text style={styles.strong}> Yin</Text> (Terre et Eau) : tourné vers l’intérieur,
                la réceptivité, la conservation. Ni l’un ni l’autre n’est meilleur — ce sont deux
                manières opposées de dépenser la même énergie.
              </Text>
            </GlassCard>
          </Animated.View>

          {/* Axes */}
          <Animated.View entering={FadeInDown.delay(280).duration(420)} style={styles.block}>
            <SectionLabel accent={Palette.gold}>Les six axes d’opposition</SectionLabel>
            <GlassCard>
              <Text style={[styles.paragraph, styles.axisIntro]}>
                Chaque signe fait face à un autre, six mois plus loin. Cet axe n’oppose pas deux
                ennemis : il éclaire les deux faces d’un même sujet.
              </Text>
              {AXES.map(([a, b, theme], index) => (
                <View key={theme} style={[styles.axisRow, index === AXES.length - 1 && styles.modeRowLast]}>
                  <Text style={styles.axisPair}>
                    {a} <Text style={styles.axisArrow}>⇄</Text> {b}
                  </Text>
                  <Text style={styles.axisTheme}>{theme}</Text>
                </View>
              ))}
            </GlassCard>
          </Animated.View>

          {/* Décans */}
          <Animated.View entering={FadeInDown.delay(320).duration(420)} style={styles.block}>
            <SectionLabel accent={Palette.aurora}>Les décans</SectionLabel>
            <GlassCard>
              <Text style={styles.paragraph}>
                Chaque signe couvre 30 degrés, découpés en trois décans de 10 degrés — soit environ
                dix jours chacun. Une planète secondaire colore chaque décan, ce qui explique que
                deux personnes du même signe, nées à trois semaines d’écart, se ressemblent si peu.
                Les décans de votre signe figurent dans l’onglet <Text style={styles.strong}>Identité</Text> de sa fiche.
              </Text>
            </GlassCard>
          </Animated.View>

          {/* Mise au point */}
          <Animated.View entering={FadeInDown.delay(360).duration(420)} style={styles.block}>
            <SectionLabel accent={Palette.textMuted}>Une mise au point</SectionLabel>
            <GlassCard style={styles.noteCard}>
              <Text style={styles.paragraph}>
                L’astrologie est une tradition symbolique, pas une science : ses correspondances ne
                sont pas démontrées et ne prédisent aucun événement. AstroMe la présente comme un
                langage de lecture de soi — à prendre pour ce qu’il est, un miroir à interpréter.
              </Text>
            </GlassCard>
          </Animated.View>

          <Text style={styles.footer}>
            {zodiacSigns.length} signes · {zodiacSigns.length * 3} décans · une seule roue
          </Text>
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

  header: {
    marginBottom: Space.xxl,
  },
  eyebrow: {
    color: Palette.gold,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 4,
    marginBottom: Space.md,
  },
  title: {
    ...Type.display,
    fontSize: 34,
    lineHeight: 40,
    color: Palette.text,
  },
  subtitle: {
    ...Type.body,
    color: Palette.textMuted,
    marginTop: Space.md,
  },

  block: {
    marginBottom: Space.xl,
  },
  stack: {
    gap: Space.md,
  },
  paragraph: {
    ...Type.body,
    color: Palette.textMuted,
  },
  strong: {
    color: Palette.text,
    fontWeight: '700',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Palette.border,
    marginVertical: Space.lg,
  },

  elementCard: {
    borderLeftWidth: 3,
    gap: Space.md,
  },
  elementHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Space.md,
  },
  elementGlyph: {
    fontSize: 18,
  },
  elementTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Palette.text,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Space.sm,
  },

  modeRow: {
    paddingBottom: Space.lg,
    marginBottom: Space.lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Palette.border,
    gap: 4,
  },
  modeRowLast: {
    paddingBottom: 0,
    marginBottom: 0,
    borderBottomWidth: 0,
  },
  modeName: {
    fontSize: 17,
    fontWeight: '700',
    color: Palette.text,
  },
  modeSigns: {
    ...Type.label,
    color: Palette.gold,
    marginBottom: 6,
  },

  axisIntro: {
    marginBottom: Space.lg,
  },
  axisRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Space.md,
    paddingVertical: Space.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Palette.border,
  },
  axisPair: {
    fontSize: 14.5,
    fontWeight: '600',
    color: Palette.text,
  },
  axisArrow: {
    color: Palette.gold,
  },
  axisTheme: {
    fontSize: 12.5,
    color: Palette.textFaint,
    textAlign: 'right',
    flexShrink: 1,
  },

  noteCard: {
    borderRadius: Radius.md,
    backgroundColor: 'rgba(255,255,255,0.03)',
  },

  footer: {
    ...Type.label,
    color: Palette.textFaint,
    textAlign: 'center',
    marginTop: Space.lg,
  },
});
