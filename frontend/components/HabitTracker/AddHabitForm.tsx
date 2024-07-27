import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { View } from 'react-native';
import FormInputText from "@/components/HabitTracker/FormTextInput";
import FormButtonSave from "@/components/HabitTracker/FormButtonSave";
import FormCheckboxWithDays from "@/components/HabitTracker/FormCheckboxWithDays";
import FormCloseButton from "@/components/HabitTracker/FormCloseButton";

export default function AddHabitForm({ isFormVisible, setIsFormVisible }:any) {

  return (
      <View>
        { isFormVisible && (
          <View style={styles.form}>
            <FormCloseButton isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible}></FormCloseButton>
            <View style={styles.innerForm}>
              <FormInputText property="name"></FormInputText>
              <FormInputText property="Description"></FormInputText>
              <FormCheckboxWithDays />
              <FormButtonSave isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible}></FormButtonSave>
            </View>
          </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    position: 'relative',
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
  innerForm: {
    paddingTop: 20,
  },
});
