import React from 'react';
import { Stack } from 'expo-router';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function RootLayout() {
  return (
      <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name="index"/>
          <Stack.Screen name="login"/>
          <Stack.Screen name="signup"/>
      </Stack>
   
  );
}
