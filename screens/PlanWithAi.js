import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import TripSuggestions from '../components/TripSuggestions';
import run from '../config/geminiAi'; // Adjust the path as needed

const PlanWithAi = () => {
  const [destination, setDestination] = useState('');
  const [travelDates, setTravelDates] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [durationInDays, setDurationInDays] = useState('');
  const [budget, setBudget] = useState('');
  const [interests, setInterests] = useState('');
  const [companions, setCompanions] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [transportation, setTransportation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [tripPlan, setTripPlan] = useState(null);

  const handlePlanTrip = async () => {
    const user_data = {
      destination,
      travelDates: travelDates.toISOString().split('T')[0], // Ensure date is in the correct format
      durationInDays,
      budget,
      interests,
      companions,
      accommodation,
      transportation,
    };
    
    try {
      const trip_plan = await run(user_data);
      setTripPlan(JSON.parse(trip_plan));
    } catch (error) {
      console.error('Error fetching trip plan:', error);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || travelDates;
    setShowDatePicker(Platform.OS === 'ios');
    setTravelDates(new Date(currentDate));
  };

  return (
    <SafeAreaView style={styles.container}>
      {tripPlan ? (
        <TripSuggestions tripPlan={tripPlan} />
      ) : (
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
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
              <Text style={styles.dateText}>{travelDates.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={travelDates}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Duration in Days</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the duration of your trip"
              value={durationInDays}
              onChangeText={setDurationInDays}
              keyboardType='numeric'
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Budget</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your budget"
              value={budget}
              onChangeText={setBudget}
              keyboardType='numeric'
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
            <RNPickerSelect
              onValueChange={(value) => setCompanions(value)}
              items={[
                { label: 'Solo', value: 'Solo' },
                { label: 'Couple', value: 'Couple' },
                { label: 'Family', value: 'Family' },
                { label: 'Group', value: 'Group' },
              ]}
              style={pickerSelectStyles}
              value={companions}
              placeholder={{ label: 'Select number of companions', value: null }}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Accommodation Preferences</Text>
            <RNPickerSelect
              onValueChange={(value) => setAccommodation(value)}
              items={[
                { label: 'Hotel', value: 'Hotel' },
                { label: 'Hostel', value: 'Hostel' },
                { label: 'Airbnb', value: 'Airbnb' },
                { label: 'Guest House', value: 'Guest House' },
              ]}
              style={pickerSelectStyles}
              value={accommodation}
              placeholder={{ label: 'Select accommodation preference', value: null }}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Transportation Preferences</Text>
            <RNPickerSelect
              onValueChange={(value) => setTransportation(value)}
              items={[
                { label: 'Car Rental', value: 'Car Rental' },
                { label: 'Public Transport', value: 'Public Transport' },
                { label: 'Walking', value: 'Walking' },
                { label: 'Biking', value: 'Biking' },
              ]}
              style={pickerSelectStyles}
              value={transportation}
              placeholder={{ label: 'Select transportation preference', value: null }}
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
      )}
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
  dateInput: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 16,
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  inputAndroid: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
