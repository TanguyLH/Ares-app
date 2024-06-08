import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { View } from 'react-native';
import FormInputText from "@/components/HabitTracker/FormInputText";
import FormButtonSave from "@/components/HabitTracker/FormButtonSave";

export default function AddHabitForm({ isFormVisible, setIsFormVisible }) {

  return (
      <View>
        { isFormVisible && (
          <View style={styles.form}>
            <FormInputText property="name"></FormInputText>
            <FormInputText property="Description"></FormInputText>
            <FormButtonSave isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible}></FormButtonSave>
          </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
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
