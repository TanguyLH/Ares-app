import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function FormTextInput({ property, habitForm, setHabitForm}: any) {
  const handleInputChange = (value: string) => {
    setHabitForm((prevForm: any) => ({
      ...prevForm,
      [property]: value,
    }));
  };
  return (
      <View style={styles.container}>
        <Text style={styles.label}>{property}:</Text>
        <TextInput
            style={styles.input}
            value={habitForm ? habitForm : ''}
            placeholder={`Enter ${property}`}
            placeholderTextColor="#A9A9A9"
            onChangeText={handleInputChange}
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
