import { ZodiacSign } from '@/types/astrology';
import { zodiacSigns } from '@/utils/zodiac';
import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
    BackHandler,
    Dimensions,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface ZodiacResultProps {
  zodiacSign: ZodiacSign;
  birthDate: { day: number; month: number; year: number } | null;
  onBack: () => void;
  onSignSelect?: (zodiacSign: ZodiacSign) => void;
}

const { width } = Dimensions.get('window');

export default function ZodiacResult({ zodiacSign, birthDate, onBack, onSignSelect }: ZodiacResultProps) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        onBack();
        return true;
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => subscription.remove();
    }, [onBack])
  );

  const findSignByName = (signName: string) => {
    return zodiacSigns.find(sign => sign.name === signName);
  };

  const handleSignPress = (signName: string) => {
    const foundSign = findSignByName(signName);
    if (foundSign && onSignSelect) {
      onSignSelect(foundSign);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* En-tête avec gradient */}
      <LinearGradient
        colors={zodiacSign.gradient}
        style={styles.header}
      >
        <Text style={styles.emoji}>{zodiacSign.emoji}</Text>
        <Text style={styles.signName}>{zodiacSign.name}</Text>
        <Text style={styles.symbol}>{zodiacSign.symbol}</Text>
        <Text style={styles.period}>{zodiacSign.period}</Text>
        <Text style={styles.element}>Élément : {zodiacSign.element}</Text>
      </LinearGradient>

      {/* Date de naissance */}
      {birthDate && (
        <View style={styles.birthDateContainer}>
          <Text style={styles.birthDateLabel}>Votre date de naissance :</Text>
          <Text style={styles.birthDateText}>
            {birthDate.day}/{birthDate.month.toString().padStart(2, '0')}/{birthDate.year}
          </Text>
        </View>
      )}

      {/* Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <View style={styles.card}>
          <Text style={styles.description}>{zodiacSign.description}</Text>
        </View>
      </View>

      {/* Qualités */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✨ Vos qualités</Text>
        <View style={styles.card}>
          {zodiacSign.qualities.map((quality, index) => (
            <View key={index} style={styles.listItem}>
              <LinearGradient
                colors={['#4CAF50', '#66BB6A']}
                style={styles.bullet}
              >
                <Text style={styles.bulletText}>+</Text>
              </LinearGradient>
              <Text style={styles.listText}>{quality}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Défauts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚠️ Points d'attention</Text>
        <View style={styles.card}>
          {zodiacSign.flaws.map((flaw, index) => (
            <View key={index} style={styles.listItem}>
              <LinearGradient
                colors={['#FF9800', '#FFB74D']}
                style={styles.bullet}
              >
                <Text style={styles.bulletText}>!</Text>
              </LinearGradient>
              <Text style={styles.listText}>{flaw}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Compatibilité */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💕 Compatibilité astrologique</Text>
        
        {/* Bons matches */}
        <View style={styles.compatibilityCard}>
          <Text style={styles.compatibilityTitle}>💚 Signes compatibles</Text>
          <View style={styles.compatibilityList}>
            {zodiacSign.compatibility.goodMatches.map((sign, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.compatibilityItem}
                onPress={() => handleSignPress(sign)}
              >
                <LinearGradient
                  colors={['#4CAF50', '#66BB6A']}
                  style={styles.compatibilityBullet}
                >
                  <Text style={styles.compatibilityBulletText}>💚</Text>
                </LinearGradient>
                <Text style={styles.compatibilityText}>{sign}</Text>
                <Text style={styles.clickHint}>👆</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Mauvais matches */}
        <View style={styles.compatibilityCard}>
          <Text style={styles.compatibilityTitle}>💔 Relations difficiles</Text>
          <View style={styles.compatibilityList}>
            {zodiacSign.compatibility.badMatches.map((sign, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.compatibilityItem}
                onPress={() => handleSignPress(sign)}
              >
                <LinearGradient
                  colors={['#F44336', '#EF5350']}
                  style={styles.compatibilityBullet}
                >
                  <Text style={styles.compatibilityBulletText}>💔</Text>
                </LinearGradient>
                <Text style={styles.compatibilityText}>{sign}</Text>
                <Text style={styles.clickHint}>👆</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      {/* Bouton retour */}
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <LinearGradient
          colors={['#E74C3C', '#FF6B6B']}
          style={styles.backGradient}
        >
          <Text style={styles.backText}>🔄 Choisir une autre date</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          🌟 Merci d'avoir utilisé AstroMe ! 🌟
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9ff',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 10,
  },
  signName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    textAlign: 'center',
  },
  symbol: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 10,
  },
  period: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 5,
    textAlign: 'center',
  },
  element: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    fontStyle: 'italic',
  },
  birthDateContainer: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  birthDateLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  birthDateText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'justify',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  bullet: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  bulletText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listText: {
    fontSize: 16,
    color: '#555',
    flex: 1,
  },
  backButton: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 25,
    overflow: 'hidden',
  },
  backGradient: {
    paddingVertical: 18,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  backText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 40,
  },
  footerText: {
    fontSize: 16,
    color: '#E74C3C',
    fontStyle: 'italic',
  },
  compatibilityCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  compatibilityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  compatibilityList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  compatibilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 8,
    backgroundColor: '#f8f9ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  compatibilityBullet: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  compatibilityBulletText: {
    fontSize: 12,
  },
  compatibilityText: {
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  },
  clickHint: {
    fontSize: 12,
    marginLeft: 5,
    opacity: 0.7,
  },
});
