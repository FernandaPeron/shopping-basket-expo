import React, { useCallback } from 'react';
import { StatusBar, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';

import Basket from './src/screens/basket/Basket';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [font] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (font) {
      await SplashScreen.hideAsync();
    }
  }, [font]);

  if (!font) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <StatusBar/>
      <Basket/>
    </View>
  );
}
