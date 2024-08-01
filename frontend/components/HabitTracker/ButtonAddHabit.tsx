import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { View } from 'react-native';
import HabitForm from "@/components/HabitTracker/HabitForm";

export default function ButtonAddHabit({addHabit}:any) {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  }
  return (
      <View>
        <HabitForm 
        isFormVisible={isFormVisible} 
        setIsFormVisible={setIsFormVisible} 
        habit={null} 
        onSaveFunction={addHabit}></HabitForm>

        <View>{!isFormVisible && (
            <TouchableOpacity onPress={toggleFormVisibility} style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
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
  form: {
    position: 'absolute',
    bottom: 100,
    right: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});
