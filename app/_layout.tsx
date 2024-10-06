import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
      <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name="(tabs)"/>
          {/* <Stack.Screen name="index" options={{headerShown: false}}/>
          <Stack.Screen name="login"/>
          <Stack.Screen name="signup"/> */}
      </Stack>
   
  );
}
