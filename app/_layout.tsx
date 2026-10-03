import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-reanimated';

import { Palette } from '@/constants/design';

export const unstable_settings = {
  anchor: '(tabs)',
};

/** L'app est pensée pour un ciel de nuit : le thème sombre est le seul thème. */
const AstroTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: Palette.void,
    card: Palette.deep,
    text: Palette.text,
    border: Palette.border,
    primary: Palette.gold,
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={AstroTheme}>
      <Stack screenOptions={{ contentStyle: { backgroundColor: Palette.void } }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
