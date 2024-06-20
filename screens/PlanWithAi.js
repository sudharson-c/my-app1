import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';

const PlanWithAi = () => {
  const [destination, setDestination] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [duration, setDuration] = useState('');
  const [budget, setBudget] = useState('');
  const [interests, setInterests] = useState('');
  const [companions, setCompanions] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [transportation, setTransportation] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handlePlanTrip = () => {
    // Here you would implement the logic to interact with your AI service
    // and update the suggestions state with the results.
    // For now, let's just log the input data.
    console.log({
      destination,
      travelDates,
      duration,
      budget,
      interests,
      companions,
      accommodation,
      transportation,
    });

    // Placeholder for AI suggestions
    setSuggestions(['Suggestion 1', 'Suggestion 2', 'Suggestion 3']);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.heading}>Plan Your Trip with AI✨</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Destination</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your destination"
            value={destination}
            onChangeText={setDestination}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Travel Dates</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your travel dates"
            value={travelDates}
            onChangeText={setTravelDates}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Duration</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the duration of your trip"
            value={duration}
            onChangeText={setDuration}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Budget</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your budget"
            value={budget}
            onChangeText={setBudget}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Interests</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your interests (e.g., sightseeing, hiking)"
            value={interests}
            onChangeText={setInterests}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Travel Companions</Text>
          <TextInput
            style={styles.input}
            placeholder="Number of companions"
            value={companions}
            onChangeText={setCompanions}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Accommodation Preferences</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your accommodation preferences"
            value={accommodation}
            onChangeText={setAccommodation}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Transportation Preferences</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your transportation preferences"
            value={transportation}
            onChangeText={setTransportation}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePlanTrip}>
          <Text style={styles.buttonText}>Plan Trip</Text>
        </TouchableOpacity>

        <View style={styles.suggestionsContainer}>
          {suggestions.map((suggestion, index) => (
            <Text key={index} style={styles.suggestion}>
              {suggestion}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlanWithAi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.bgColor,
  },
  scrollView: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: Colors.primaryColor,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
  suggestionsContainer: {
    marginTop: 20,
  },
  suggestion: {
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});
