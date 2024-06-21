import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page from './screens/Page';
import ChatBot from './screens/ChatBot';
import PlanWithAi from './screens/PlanWithAi';
import Listings from './components/Listings'; // Import Listings screen
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ListingDetails from './screens/ListingDetails';
import AiGuide from './screens/AiGuide';

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
            name="ChatBot"
            component={ChatBot}
            options={{ title: "ChatBot" }}
          />
          <Stack.Screen
            name="PlanWithAi"
            component={PlanWithAi}
            options={{ title: "Plan Your Trip with AI" }}
          />
          <Stack.Screen
            name="Listings"
            component={Listings}
            options={{ title: "Listings" }} // Optional: Set screen title
          />
          <Stack.Screen
            name="ListingDetails"
            component={ListingDetails}
            options={{ headerShown: false }} // Optional: Hide header in ListingDetails
          />
          <Stack.Screen
            name="AiGuide"
            component={AiGuide}
            options={{ headerShown: false }} // Optional: Hide header in ListingDetails
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
