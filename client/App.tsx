/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { RootStack } from '@navigation/RootStack';
import { ThemeProvider } from '@providers';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ServicesProvider } from './src/context/ServicesContext';
import { ServicesContainer } from './src/implementations/servicesContainer';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const services = new ServicesContainer();

  return (
    <GestureHandlerRootView>
      <ServicesProvider value={services}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </ThemeProvider>
        </QueryClientProvider>
      </ServicesProvider>
    </GestureHandlerRootView>
  );
}

export default App;
