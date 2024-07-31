import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function FormTextInput({ property, value }: any) {

  return (
      <View style={styles.container}>
        <Text style={styles.label}>{property}:</Text>
        <TextInput
            style={styles.input}
            value={value}
            placeholder={`Enter ${property}`}
            placeholderTextColor="#A9A9A9"
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
