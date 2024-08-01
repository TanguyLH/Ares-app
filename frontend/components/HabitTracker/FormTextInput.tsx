import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface FormTextInputProps {
  property: string;
  habitField: string;
  updateHabitField: (value: string) => void;
}

export default function FormTextInput({ property, habitField, updateHabitField }: FormTextInputProps) {
  // Handle text input changes and update the parent component
  const handleChange = (value: string) => {
    updateHabitField(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{property}:</Text>
      <TextInput
        style={styles.input}
        value={habitField}
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
    color: '#333', // Added a color for better readability
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#333', // Added a color for better readability
  },
});
