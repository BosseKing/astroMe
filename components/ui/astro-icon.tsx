import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface AstroIconProps {
  name: 'zodiac' | 'book';
  size?: number;
  color?: string;
  focused?: boolean;
}

const GLYPHS: Record<AstroIconProps['name'], string> = {
  zodiac: '☉',
  book: '☾',
};

/** Glyphes astrologiques en guise d'icônes — pas d'emoji, pour rester sobre. */
export function AstroIcon({ name, size = 22, color = '#FFF', focused = false }: AstroIconProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={{ fontSize: size, lineHeight: size * 1.25, color }}>{GLYPHS[name]}</Text>
      <View
        style={[
          styles.dot,
          { backgroundColor: color, opacity: focused ? 1 : 0 },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    gap: 3,
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
  },
});
