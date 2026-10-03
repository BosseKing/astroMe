import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import AllZodiacSigns from '@/components/AllZodiacSigns';
import DatePicker from '@/components/DatePicker';
import ZodiacResult from '@/components/ZodiacResult';
import { MonthDay, ZodiacSign } from '@/types/astrology';
import { getZodiacSign } from '@/utils/zodiac';

type ViewState = 'datePicker' | 'zodiacResult' | 'allSigns';

export default function HomeScreen() {
  const [view, setView] = useState<ViewState>('datePicker');
  const [sign, setSign] = useState<ZodiacSign | null>(null);
  const [birthDate, setBirthDate] = useState<MonthDay | null>(null);
  /** D'où l'on vient, pour que le retour depuis une fiche revienne au bon écran. */
  const [origin, setOrigin] = useState<ViewState>('datePicker');

  const handleDateSelect = (day: number, month: number) => {
    setSign(getZodiacSign(day, month));
    setBirthDate({ day, month });
    setOrigin('datePicker');
    setView('zodiacResult');
  };

  const handleViewAllSigns = () => setView('allSigns');

  const handleSignSelect = (selected: ZodiacSign) => {
    setSign(selected);
    // Un signe choisi dans la liste ou via les affinités n'est pas une date de naissance.
    setBirthDate(null);
    setOrigin(view === 'allSigns' ? 'allSigns' : origin);
    setView('zodiacResult');
  };

  const handleBack = () => {
    setView(origin);
    if (origin === 'datePicker') {
      setSign(null);
      setBirthDate(null);
    }
  };

  return (
    <View style={styles.container}>
      {view === 'zodiacResult' && sign ? (
        <ZodiacResult
          zodiacSign={sign}
          birthDate={birthDate}
          onBack={handleBack}
          onSignSelect={handleSignSelect}
          backLabel={origin === 'allSigns' ? 'Retour aux 12 signes' : 'Changer de date'}
        />
      ) : view === 'allSigns' ? (
        <AllZodiacSigns
          onSignSelect={handleSignSelect}
          onBack={() => {
            setOrigin('datePicker');
            setView('datePicker');
          }}
        />
      ) : (
        <DatePicker onDateSelect={handleDateSelect} onViewAllSigns={handleViewAllSigns} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
