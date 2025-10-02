import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
    Dimensions,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface DatePickerProps {
  onDateSelect: (day: number, month: number, year: number) => void;
  onViewAllSigns?: () => void;
}

const { width } = Dimensions.get('window');
const MONTHS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

export default function DatePicker({ onDateSelect, onViewAllSigns }: DatePickerProps) {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [dateError, setDateError] = useState<string | null>(null);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1940 + 1 }, (_, i) => currentYear - i);

  const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  const getDaysInMonth = (month: number, year: number): number => {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2 && isLeapYear(year)) {
      return 29;
    }
    return daysInMonth[month - 1];
  };

  const validateDate = (day: number, month: number, year: number): string | null => {
    if (!day || !month || !year) return "Veuillez sélectionner une date complète";
    
    const maxDays = getDaysInMonth(month, year);
    if (day > maxDays) {
      return `Le ${month === 2 && isLeapYear(year) ? 'février' : MONTHS[month - 1].toLowerCase()} ${year} n'a que ${maxDays} jours`;
    }

    const selectedDate = new Date(year, month - 1, day);
    const today = new Date();
    if (selectedDate > today) {
      return "La date ne peut pas être dans le futur";
    }

    return null;
  };

  const handleDaySelect = (day: number) => {
    setSelectedDay(day);
    if (selectedMonth && selectedYear) {
      const error = validateDate(day, selectedMonth, selectedYear);
      setDateError(error);
    }
  };

  const handleMonthSelect = (month: number) => {
    setSelectedMonth(month);
    if (selectedDay && selectedYear) {
      const error = validateDate(selectedDay, month, selectedYear);
      setDateError(error);
      // Si le jour sélectionné n'existe pas dans ce mois, le réinitialiser
      const maxDays = getDaysInMonth(month, selectedYear);
      if (selectedDay > maxDays) {
        setSelectedDay(null);
      }
    }
  };

  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
    if (selectedDay && selectedMonth) {
      const error = validateDate(selectedDay, selectedMonth, year);
      setDateError(error);
      // Si le jour sélectionné n'existe pas dans cette année (cas du 29 février), le réinitialiser
      const maxDays = getDaysInMonth(selectedMonth, year);
      if (selectedDay > maxDays) {
        setSelectedDay(null);
      }
    }
  };

  const handleSubmit = () => {
    if (selectedDay && selectedMonth && selectedYear) {
      const error = validateDate(selectedDay, selectedMonth, selectedYear);
      if (!error) {
        onDateSelect(selectedDay, selectedMonth, selectedYear);
      }
    }
  };

  const isFormValid = selectedDay && selectedMonth && selectedYear && !dateError;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#E74C3C', '#FF6B6B']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>✨ AstroMe ✨</Text>
        <Text style={styles.headerSubtitle}>
          Découvrez votre signe astrologique
        </Text>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.instructionText}>
          Sélectionnez votre date de naissance :
        </Text>

        {/* Sélection du jour */}
        <Text style={styles.sectionTitle}>Jour</Text>
        <View style={styles.gridContainer}>
          {selectedMonth && selectedYear ? 
            Array.from({ length: getDaysInMonth(selectedMonth, selectedYear) }, (_, i) => i + 1).map((day) => (
              <TouchableOpacity
                key={day}
                style={[
                  styles.gridItem,
                  selectedDay === day && styles.selectedItem,
                ]}
                onPress={() => handleDaySelect(day)}
              >
                <Text
                  style={[
                    styles.gridText,
                    selectedDay === day && styles.selectedText,
                  ]}
                >
                  {day}
                </Text>
              </TouchableOpacity>
            )) :
            Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
              <TouchableOpacity
                key={day}
                style={[
                  styles.gridItem,
                  selectedDay === day && styles.selectedItem,
                ]}
                onPress={() => handleDaySelect(day)}
              >
                <Text
                  style={[
                    styles.gridText,
                    selectedDay === day && styles.selectedText,
                  ]}
                >
                  {day}
                </Text>
              </TouchableOpacity>
            ))
          }
        </View>

        {/* Sélection du mois */}
        <Text style={styles.sectionTitle}>Mois</Text>
        <View style={styles.monthContainer}>
          {MONTHS.map((month, index) => (
            <TouchableOpacity
              key={month}
              style={[
                styles.monthItem,
                selectedMonth === index + 1 && styles.selectedMonthItem,
              ]}
              onPress={() => handleMonthSelect(index + 1)}
            >
              <Text
                style={[
                  styles.monthText,
                  selectedMonth === index + 1 && styles.selectedText,
                ]}
              >
                {month}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Sélection de l'année */}
        <Text style={styles.sectionTitle}>Année</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.yearScrollContainer}
          contentContainerStyle={styles.yearScrollContent}
        >
          {years.map((year) => (
            <TouchableOpacity
              key={year}
              style={[
                styles.yearScrollItem,
                selectedYear === year && styles.selectedYearItem,
              ]}
              onPress={() => handleYearSelect(year)}
            >
              <Text
                style={[
                  styles.yearText,
                  selectedYear === year && styles.selectedText,
                ]}
              >
                {year}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Message d'erreur */}
        {dateError && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>⚠️ {dateError}</Text>
          </View>
        )}

        {/* Bouton de validation */}
        <TouchableOpacity
          style={[
            styles.submitButton,
            !isFormValid && styles.submitButtonDisabled,
          ]}
          onPress={handleSubmit}
          disabled={!isFormValid}
        >
          <LinearGradient
            colors={isFormValid ? ['#E74C3C', '#FF6B6B'] : ['#cccccc', '#999999']}
            style={styles.submitGradient}
          >
            <Text style={styles.submitText}>
              Découvrir mon signe ✨
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Bouton pour voir tous les signes */}
        {onViewAllSigns && (
          <TouchableOpacity
            style={styles.allSignsButton}
            onPress={onViewAllSigns}
          >
            <LinearGradient
              colors={['#FF6B35', '#F7931E']}
              style={styles.allSignsGradient}
            >
              <Text style={styles.allSignsText}>
                🌟 Découvrir tous les signes 🌟
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
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
    fontSize: 32,
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
    flex: 1,
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E74C3C',
    marginBottom: 15,
    marginTop: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: (width - 80) / 7,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  selectedItem: {
    backgroundColor: '#E74C3C',
  },
  gridText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  selectedText: {
    color: 'white',
    fontWeight: 'bold',
  },
  monthContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  monthItem: {
    width: (width - 60) / 2,
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  selectedMonthItem: {
    backgroundColor: '#E74C3C',
  },
  monthText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  yearContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  yearScrollContainer: {
    maxHeight: 60,
    marginBottom: 20,
  },
  yearScrollContent: {
    paddingHorizontal: 10,
  },
  yearItem: {
    width: (width - 80) / 4,
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  yearScrollItem: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  selectedYearItem: {
    backgroundColor: '#E74C3C',
  },
  yearText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  errorContainer: {
    backgroundColor: '#ffe6e6',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#ff4444',
  },
  errorText: {
    color: '#cc0000',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  submitButton: {
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 25,
    overflow: 'hidden',
  },
  submitButtonDisabled: {
    opacity: 0.5,
  },
  submitGradient: {
    paddingVertical: 18,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  allSignsButton: {
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 25,
    overflow: 'hidden',
  },
  allSignsGradient: {
    paddingVertical: 18,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  allSignsText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
