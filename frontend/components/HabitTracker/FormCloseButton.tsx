import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure this library is installed

// Define colors used in the component
const colors = {
  primary: '#6AB7E2',
  icon: '#fff',
};

interface FormCloseButtonProps {
  isFormVisible: boolean;
  setIsFormVisible: (visible: boolean) => void;
}

export default function FormCloseButton({ isFormVisible, setIsFormVisible }: FormCloseButtonProps) {
  // Toggle the visibility of the form
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleFormVisibility} style={styles.button}>
        <Icon name="close" size={24} color={colors.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
});
