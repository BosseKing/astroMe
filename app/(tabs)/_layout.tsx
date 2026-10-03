import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HapticTab } from '@/components/haptic-tab';
import { AstroIcon } from '@/components/ui/astro-icon';
import { Palette, TAB_BAR_HEIGHT } from '@/constants/design';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: Palette.gold,
        tabBarInactiveTintColor: Palette.textFaint,
        // La barre flotte au-dessus du ciel étoilé ; les écrans réservent
        // TAB_BAR_HEIGHT + inset en bas de leur contenu (cf. constants/design).
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(10,12,27,0.94)',
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: Palette.border,
          elevation: 0,
          height: TAB_BAR_HEIGHT + insets.bottom,
          paddingTop: 8,
          paddingBottom: insets.bottom,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          letterSpacing: 0.4,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Mon signe',
          tabBarIcon: ({ color, focused }) => (
            <AstroIcon name="zodiac" size={22} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Comprendre',
          tabBarIcon: ({ color, focused }) => (
            <AstroIcon name="book" size={22} color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
