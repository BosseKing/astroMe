import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { Palette } from '@/constants/design';

/** PRNG déterministe : le ciel doit être identique d'un rendu à l'autre. */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Star = {
  key: string;
  left: number;
  top: number;
  size: number;
  opacity: number;
  twinkles: boolean;
  delay: number;
};

function TwinklingStar({ star }: { star: Star }) {
  const progress = useSharedValue(star.opacity);

  React.useEffect(() => {
    progress.value = withDelay(
      star.delay,
      withRepeat(
        withSequence(
          withTiming(star.opacity * 0.15, { duration: 1400, easing: Easing.inOut(Easing.quad) }),
          withTiming(star.opacity, { duration: 1400, easing: Easing.inOut(Easing.quad) })
        ),
        -1,
        true
      )
    );
  }, [progress, star.delay, star.opacity]);

  const animatedStyle = useAnimatedStyle(() => ({ opacity: progress.value }));

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.star,
        {
          left: star.left,
          top: star.top,
          width: star.size,
          height: star.size,
          borderRadius: star.size / 2,
        },
        animatedStyle,
      ]}
    />
  );
}

interface CosmicBackgroundProps {
  /** Teinte du halo supérieur — généralement la couleur du signe affiché. */
  accent?: string;
  /** Densité du champ d'étoiles. */
  starCount?: number;
  children?: React.ReactNode;
}

/**
 * Ciel de nuit : dégradé profond, halo coloré et champ d'étoiles scintillantes.
 * Sert de fond à tous les écrans de l'application.
 */
export default function CosmicBackground({
  accent = Palette.violet,
  starCount = 70,
  children,
}: CosmicBackgroundProps) {
  const { width, height } = useWindowDimensions();

  const stars = useMemo<Star[]>(() => {
    const random = mulberry32(7331);
    return Array.from({ length: starCount }, (_, i) => {
      const size = random() * 2.2 + 0.8;
      return {
        key: `star-${i}`,
        left: random() * width,
        top: random() * height * 1.2,
        size,
        // Les grosses étoiles brillent plus fort.
        opacity: 0.25 + (size / 3) * 0.65,
        twinkles: random() > 0.55,
        delay: Math.floor(random() * 2600),
      };
    });
  }, [width, height, starCount]);

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={[Palette.void, Palette.deep, Palette.night]}
        locations={[0, 0.45, 1]}
        style={StyleSheet.absoluteFill}
      />

      {/* Halo coloré, comme une nébuleuse derrière le contenu */}
      <LinearGradient
        colors={[accent, 'transparent']}
        style={[styles.aura, { width: width * 1.6, height: width * 1.6, left: -width * 0.3 }]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        pointerEvents="none"
      />

      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        {stars.map((star) =>
          star.twinkles ? (
            <TwinklingStar key={star.key} star={star} />
          ) : (
            <View
              key={star.key}
              style={[
                styles.star,
                {
                  left: star.left,
                  top: star.top,
                  width: star.size,
                  height: star.size,
                  borderRadius: star.size / 2,
                  opacity: star.opacity,
                },
              ]}
            />
          )
        )}
      </View>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Palette.void,
  },
  aura: {
    position: 'absolute',
    top: -160,
    opacity: 0.22,
    borderRadius: 999,
  },
  star: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
  },
});
