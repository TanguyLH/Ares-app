import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function FormTextInput({ property, habitField, updateHabitDataTable, habitId}: any) {
  const handleChange = (value: any) => {
    updateHabitDataTable(habitId, property.toLowerCase(), value);
  };

  return (
      <View style={styles.container}>
        <Text style={styles.label}>{property}:</Text>
        <TextInput
            style={styles.input}
            value={habitField ? habitField : ''}
            placeholder={`Enter ${property}`}
            placeholderTextColor="#A9A9A9"
            onChangeText={handleChange}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});
