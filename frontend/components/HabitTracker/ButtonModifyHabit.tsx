import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import HabitForm from '@/components/HabitTracker/HabitForm';

export default function ButtonModifyHabit({habit, updateHabit} : any) {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  }
  return (
      <View>
        <HabitForm isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible} habit={habit} onSaveFunction={updateHabit}></HabitForm>

        <View>{!isFormVisible && (
            <TouchableOpacity onPress={toggleFormVisibility} style={styles.iconButton}>
              <Icon name="edit" size={20} color="#4CAF50" />
            </TouchableOpacity>
          )}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    marginLeft: 10, // Espacement entre les icônes
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
