import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from './app/components/Screen';
import { TextInput, Text } from 'react-native';
import { useState } from 'react';
import AppTextInput from './app/components/AppTextInput';




export default function App() {
  const [firstName, setFirstName] = useState('')
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email"/>
    </Screen>
  );
}
