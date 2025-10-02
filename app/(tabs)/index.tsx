import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import DatePicker from '@/components/DatePicker';
import ZodiacResult from '@/components/ZodiacResult';
import AllZodiacSigns from '@/components/AllZodiacSigns';
import { ZodiacSign } from '@/types/astrology';
import { getZodiacSign } from '@/utils/zodiac';

type ViewState = 'datePicker' | 'zodiacResult' | 'allSigns';

export default function HomeScreen() {
  const [currentView, setCurrentView] = useState<ViewState>('datePicker');
  const [currentZodiacSign, setCurrentZodiacSign] = useState<ZodiacSign | null>(null);
  const [birthDate, setBirthDate] = useState<{ day: number; month: number; year: number } | null>(null);

  const handleDateSelect = (day: number, month: number, year: number) => {
    const zodiacSign = getZodiacSign(day, month);
    setCurrentZodiacSign(zodiacSign);
    setBirthDate({ day, month, year });
    setCurrentView('zodiacResult');
  };

  const handleViewAllSigns = () => {
    setCurrentView('allSigns');
  };

  const handleSignSelect = (zodiacSign: ZodiacSign) => {
    setCurrentZodiacSign(zodiacSign);
    setBirthDate(null); // Pas de date de naissance pour les signes sélectionnés manuellement
    setCurrentView('zodiacResult');
  };

  const handleBack = () => {
    setCurrentView('datePicker');
    setCurrentZodiacSign(null);
    setBirthDate(null);
  };

  const handleBackFromAllSigns = () => {
    setCurrentView('datePicker');
  };

  return (
    <View style={styles.container}>
      {currentView === 'zodiacResult' && currentZodiacSign ? (
        <ZodiacResult
          zodiacSign={currentZodiacSign}
          birthDate={birthDate}
          onBack={handleBack}
          onSignSelect={handleSignSelect}
        />
      ) : currentView === 'allSigns' ? (
        <AllZodiacSigns
          onSignSelect={handleSignSelect}
          onBack={handleBackFromAllSigns}
        />
      ) : (
        <DatePicker
          onDateSelect={handleDateSelect}
          onViewAllSigns={handleViewAllSigns}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
