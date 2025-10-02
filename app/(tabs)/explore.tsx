import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#E74C3C', '#FF6B6B']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>À propos d'AstroMe</Text>
        <Text style={styles.headerSubtitle}>
          Découvrez les secrets de l'astrologie
        </Text>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🌟 Qu'est-ce que l'astrologie ?</Text>
          <Text style={styles.text}>
            L'astrologie est un système de croyances qui étudie les corrélations entre les positions 
            et mouvements des objets célestes et les événements terrestres. Elle divise l'année en 
            12 signes zodiacaux, chacun ayant ses propres caractéristiques.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>♈ Les 12 signes du zodiaque</Text>
          <Text style={styles.text}>
            Chaque signe astrologique correspond à une période de l'année et possède ses propres 
            traits de personnalité, qualités et défauts. Les signes sont regroupés en quatre 
            éléments : Feu, Terre, Air et Eau.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🔥 Les quatre éléments</Text>
          
          <View style={styles.elementCard}>
            <Text style={styles.elementTitle}>🔥 Feu (Bélier, Lion, Sagittaire)</Text>
            <Text style={styles.elementText}>
              Énergiques, passionnés et spontanés. Ils aiment l'action et sont des leaders naturels.
            </Text>
          </View>

          <View style={styles.elementCard}>
            <Text style={styles.elementTitle}>🌍 Terre (Taureau, Vierge, Capricorne)</Text>
            <Text style={styles.elementText}>
              Pratiques, fiables et terre-à-terre. Ils valorisent la stabilité et la sécurité.
            </Text>
          </View>

          <View style={styles.elementCard}>
            <Text style={styles.elementTitle}>💨 Air (Gémeaux, Balance, Verseau)</Text>
            <Text style={styles.elementText}>
              Intellectuels, communicatifs et sociables. Ils aiment les idées et la communication.
            </Text>
          </View>

          <View style={styles.elementCard}>
            <Text style={styles.elementTitle}>💧 Eau (Cancer, Scorpion, Poissons)</Text>
            <Text style={styles.elementText}>
              Émotionnels, intuitifs et empathiques. Ils sont guidés par leurs sentiments.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📱 Comment utiliser AstroMe</Text>
          <Text style={styles.text}>
            1. Sélectionnez votre jour de naissance{'\n'}
            2. Choisissez votre mois de naissance{'\n'}
            3. Indiquez votre année de naissance{'\n'}
            4. Découvrez votre signe astrologique et ses caractéristiques{'\n'}
            5. Explorez vos qualités et points d'attention
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            🌟 AstroMe - Votre guide personnel d'astrologie 🌟
          </Text>
          <Text style={styles.disclaimerText}>
            L'astrologie est un système de croyances à des fins de divertissement et de réflexion personnelle.
          </Text>
        </View>
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
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
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
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'justify',
  },
  elementCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  elementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  elementText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingBottom: 50,
  },
  footerText: {
    fontSize: 18,
    color: '#E74C3C',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  disclaimerText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
