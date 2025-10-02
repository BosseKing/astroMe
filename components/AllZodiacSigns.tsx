import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ZodiacSign } from '@/types/astrology';
import { zodiacSigns } from '@/utils/zodiac';

interface AllZodiacSignsProps {
  onSignSelect: (zodiacSign: ZodiacSign) => void;
  onBack: () => void;
}

const { width } = Dimensions.get('window');

export default function AllZodiacSigns({ onSignSelect, onBack }: AllZodiacSignsProps) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#FF6B35', '#F7931E']}
        style={styles.header}
      >
        <TouchableOpacity style={styles.backArrow} onPress={onBack}>
          <Text style={styles.backArrowText}>← Retour</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Les 12 Signes du Zodiaque</Text>
        <Text style={styles.headerSubtitle}>
          Découvrez chaque signe astrologique
        </Text>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.instructionText}>
          Cliquez sur un signe pour découvrir ses caractéristiques
        </Text>

        <View style={styles.signsGrid}>
          {zodiacSigns.map((sign, index) => (
            <TouchableOpacity
              key={index}
              style={styles.signCard}
              onPress={() => onSignSelect(sign)}
            >
              <LinearGradient
                colors={sign.gradient}
                style={styles.signGradient}
              >
                <Text style={styles.signEmoji}>{sign.emoji}</Text>
                <Text style={styles.signName}>{sign.name}</Text>
                <Text style={styles.signSymbol}>{sign.symbol}</Text>
                <Text style={styles.signPeriod}>{sign.period}</Text>
                <Text style={styles.signElement}>{sign.element}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F0',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backArrow: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 30,
    left: 20,
    zIndex: 1,
  },
  backArrowText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    marginTop: 20,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  instructionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  signsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  signCard: {
    width: (width - 60) / 2,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  signGradient: {
    padding: 20,
    alignItems: 'center',
    minHeight: 180,
    justifyContent: 'center',
  },
  signEmoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  signName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
    textAlign: 'center',
  },
  signSymbol: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 6,
  },
  signPeriod: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: 4,
  },
  signElement: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    fontStyle: 'italic',
  },
});
