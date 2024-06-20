import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page from './screens/Page';
import PlanWithAi from './screens/PlanWithAi';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page">
        <Stack.Screen
          name="Page"
          component={Page}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlanWithAi"
          component={PlanWithAi}
          options={{ title: "Plan Your Trip with AI" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
