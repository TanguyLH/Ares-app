import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import HabitForm from '@/components/HabitTracker/HabitForm';

export default function ButtonAddHabit({ addHabit }: any) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Toggles the visibility of the habit form
  const toggleFormVisibility = () => {
    setIsFormVisible(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <HabitForm
        isFormVisible={isFormVisible}
        setIsFormVisible={setIsFormVisible}
        habit={null} // Pass null to indicate that this is for adding a new habit
        onSaveFunction={addHabit}
      />

      {!isFormVisible && (
        <TouchableOpacity onPress={toggleFormVisibility} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative', // To position the button correctly
  },
  button: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6AB7E2',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    lineHeight: 30,
    fontWeight: 'bold',
  },
});
