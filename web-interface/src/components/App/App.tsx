import React from 'react';
import logo from './logo.svg';
import './App.css';
import HabitList from '../HabitList/HabitList';
import UserRegistrationForm from '../UserRegistrationForm/UserRegistrationForm';

function App() {
  return (
    <div className="App">
      <UserRegistrationForm/>
      <HabitList/>
    </div>
  );
}

export default App;
