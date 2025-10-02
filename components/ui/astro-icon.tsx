import React from 'react';
import { Text } from 'react-native';

interface AstroIconProps {
  name: 'zodiac' | 'info';
  size?: number;
  color?: string;
}

export function AstroIcon({ name, size = 24, color = '#000' }: AstroIconProps) {
  const getSymbol = () => {
    switch (name) {
      case 'zodiac':
        return '♈'; // Symbole du Bélier comme représentation générale
      case 'info':
        return 'ℹ️';
      default:
        return '⭐';
    }
  };

  return (
    <Text style={{ fontSize: size, color }}>
      {getSymbol()}
    </Text>
  );
}
