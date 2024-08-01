import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

// Define props type
interface FormButtonSaveProps {
  isFormVisible: boolean;
  setIsFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  habitId: number | null;
  habitForm: any; // Replace with specific type if available
  onSaveFunction: (habitId: number | null, habitForm: any) => void;
}

export default function FormButtonSave({
  isFormVisible,
  setIsFormVisible,
  habitId,
  habitForm,
  onSaveFunction
}: FormButtonSaveProps) {
  // Handle form visibility and save the form data
  const handleSave = () => {
    setIsFormVisible(false); // Hide the form
    onSaveFunction(habitId, habitForm); // Save the form data
  };

  return (
    <TouchableOpacity onPress={handleSave} style={styles.button}>
      <Text style={styles.buttonText}>{habitId ? 'Save Changes' : 'Add Habit'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6AB7E2',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20, // Optional: Add spacing between elements
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
