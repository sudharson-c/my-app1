import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '../constants/Colors';

const TripSuggestions = ({ tripPlan }) => {
  // Check if tripPlan or tripPlan.days is not an array
  if (!tripPlan || !Array.isArray(tripPlan.days)) {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Trip Suggestions Unavailable</Text>
        <Text style={styles.errorText}>
          Unable to fetch trip suggestions. Please try again later.
        </Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>{tripPlan.title}</Text>
      
      <Text style={styles.summary}>{tripPlan.summary}</Text>
      
      {tripPlan.days.map((day, index) => (
        <View key={index} style={styles.dayContainer}>
          <Text style={styles.dayHeading}>Day {day.day_number}</Text>
          
          <View style={styles.activityContainer}>
            <Text style={styles.activityHeading}>Morning</Text>
            <Text>{day.morning.activity_1}</Text>
            {day.morning.activity_2 && <Text>{day.morning.activity_2}</Text>}
          </View>
          
          <View style={styles.activityContainer}>
            <Text style={styles.activityHeading}>Afternoon</Text>
            <Text>{day.afternoon.activity_1}</Text>
            {day.afternoon.activity_2 && <Text>{day.afternoon.activity_2}</Text>}
          </View>
          
          <View style={styles.activityContainer}>
            <Text style={styles.activityHeading}>Evening</Text>
            <Text>{day.evening.activity_1}</Text>
            {day.evening.activity_2 && <Text>{day.evening.activity_2}</Text>}
          </View>
          
          {day.suggestions && <Text style={styles.suggestions}>{day.suggestions}</Text>}
        </View>
      ))}
      
      {tripPlan.notes && <Text style={styles.notes}>{tripPlan.notes}</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.bgColor,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  summary: {
    fontSize: 18,
    marginBottom: 20,
  },
  dayContainer: {
    marginBottom: 30,
  },
  dayHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  activityContainer: {
    marginBottom: 15,
  },
  activityHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  suggestions: {
    fontStyle: 'italic',
    marginBottom: 10,
  },
  notes: {
    fontSize: 16,
  },
  errorText: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    color: 'red',
  },
});

export default TripSuggestions;
