import React, { useEffect, useState } from 'react';
import { Stack, Redirect } from 'expo-router';
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLogin, setIsLogin] = useState(true);

useEffect(() => {
  SplashScreen.hideAsync();
}, []);

  return (
      <>
        <Stack/>
        {isLogin ? <Redirect href={"/(main)"}/> : <Redirect href={"/(auth)"}/>}
      </>
  );
};
