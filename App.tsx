import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

import { withAuthenticator } from 'aws-amplify-react-native';
import '@aws-amplify/ui-react/styles.css';

function App() {
  // const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();


  // if (!isLoadingComplete) {
  //   return null;
  // } else {
  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  );
  // }
}

export default withAuthenticator(App)