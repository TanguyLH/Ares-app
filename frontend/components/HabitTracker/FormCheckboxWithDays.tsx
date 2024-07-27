import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Modal } from 'react-native';
import Checkbox from 'expo-checkbox';

const daysOfWeek = [
  { key: 'S', label: 'S' },  // Sunday
  { key: 'M', label: 'M' },  // Monday
  { key: 'T', label: 'T' },  // Tuesday
  { key: 'W', label: 'W' },  // Wednesday
  { key: 'TT', label: 'T' },  // Thursday
  { key: 'F', label: 'F' },  // Friday
  { key: 'SS', label: 'S' }   // Saturday
];

export default function FormCheckboxWithDays() {
  const [isRegular, setIsRegular] = useState(true);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  return (
    <View style={styles.container} >
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isRegular}
          onValueChange={setIsRegular}
        />
        <Text style={styles.checkboxLabel}>Habitude régulière</Text>
      </View>
      
      {!isRegular && (
        <View style={styles.daysContainer}>
          {daysOfWeek.map(day => (
            <TouchableOpacity
              key={day.key}
              style={[
                styles.dayButton,
                selectedDays.includes(day.key) && styles.dayButtonSelected
              ]}
              onPress={() => toggleDay(day.key)}
            >
              <Text style={styles.dayText}>{day.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 8,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dayButton: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayButtonSelected: {
    backgroundColor: '#007bff',
  },
  dayText: {
    color: '#fff',
    fontSize: 16,
  },
});
