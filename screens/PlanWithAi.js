import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import TripSuggestions from '../components/TripSuggestions';


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

  const handlePlanTrip = () => {
    console.log({
      destination,
      travelDates,
      durationInDays,
      budget,
      interests,
      companions,
      accommodation,
      transportation,
    })
    const responseFromGeminiAI = {
        "trip_plan": {
            "title": "Solo Exploration in Madurai",
            "summary": "Discover the vibrant culture and history of Madurai in a day, with personalized recommendations for a solo traveler.",
            "days": [
              {
                "day_number": 1,
                "morning": {
                  "activity_1": "Start your day with a delicious breakfast at Hotel Sri Krishna, known for its authentic South Indian cuisine (approx. INR 200).",
                  "activity_2": "Embark on a cultural journey to the Meenakshi Amman Temple, a magnificent temple complex renowned for its intricate architecture and vibrant colors (approx. INR 50 entry fee)."
                },
                "afternoon": {
                  "activity_1": "Immerse yourself in the local flavors by having lunch at a traditional South Indian restaurant like 'Murugan Idli Shop' (approx. INR 150).",
                  "activity_2": "Explore the magnificent Thirumalai Nayakkar Mahal, a grand palace showcasing the architectural prowess of the Nayakkar dynasty (approx. INR 50 entry fee)."
                },
                "evening": {
                  "activity_1": "Experience the magic of the Gandhi Museum, commemorating the life and legacy of Mahatma Gandhi (approx. INR 30 entry fee).",
                  "activity_2": "Engage with the vibrant energy of Madurai's main market, where you can find unique souvenirs and local handicrafts."
                },
                "suggestions": "For a more immersive experience, consider joining a guided walking tour of the city, which will provide insights into the local culture and history. You can also find some exciting local markets and street food options in the city center."
              },
              {
                "day_number": 2,
                "morning": {
                  "activity_1": "Embrace the beauty of the Alagar Kovil, a stunning temple overlooking the countryside, and enjoy the sunrise over the horizon. ",
                  "activity_2": "Take a scenic drive to the Periyar National Park, home to diverse wildlife, including tigers, elephants, and leopards. Enjoy a boat ride on the Periyar Lake, offering breathtaking views of the surrounding nature (approx. INR 300 per person for a boat ride)."
                },
                "afternoon": {
                  "activity_1": "Indulge in a delicious South Indian lunch at a local restaurant near Periyar, relishing the flavors of the region. ",
                  "activity_2": "Embark on a captivating nature walk through the Periyar National Park, observing the diverse flora and fauna. Engage with local guides for an enriching experience."
                },
                "evening": {
                  "activity_1": "Return to Madurai and enjoy a traditional dinner at a rooftop restaurant with panoramic city views (approx. INR 400). ",
                  "activity_2": "Catch a vibrant cultural performance at the Meenakshi Amman Temple, experiencing traditional dance and music."
                },
                "suggestions": "Consider staying at the 'Hotel Madurai International' (approx. INR 2500-5000 per night) or a similar mid-range hotel for a comfortable stay."
              }
            ],
            "notes": "Having a car rental provides flexibility to explore destinations outside the city center, like the Alagar Kovil or Periyar National Park. Enjoy the scenic drives, and be sure to pack comfortable walking shoes. For a truly authentic experience, try learning a few basic Tamil phrases."
          }
      };
      
      setTripPlan(responseFromGeminiAI.trip_plan);;

    setSuggestions(['Suggestion 1', 'Suggestion 2', 'Suggestion 3']);
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
      </ScrollView>)}
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
