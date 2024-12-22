import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNPickerSelect from 'react-native-picker-select';
import { getPlaceRecommendations } from '../config/geminiAi'; // Your AI API
import axios from 'axios';

const DynamicPlaceRecommendation = () => {
  const [purpose, setPurpose] = useState('');
  const [factors, setFactors] = useState([]);
  const [newFactor, setNewFactor] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Factor options with descriptions
  const factorOptions = {
    Food: [
      { label: 'Budget', description: 'Cost range of dining options', value: 'Budget' },
      { label: 'High Rating', description: 'Top-rated places by reviews', value: 'High Rating' },
      { label: 'Cuisine Type', description: 'Specific type of food preference', value: 'Cuisine Type' },
      { label: 'Dining Style', description: 'Casual, fine dining, or fast food', value: 'Dining Style' },
    ],
    Culture: [
      { label: 'Historical Sites', description: 'Places of historical significance', value: 'Historical Sites' },
      { label: 'Museums', description: 'Cultural and art museums', value: 'Museums' },
      { label: 'Festivals', description: 'Local cultural events and festivals', value: 'Festivals' },
      { label: 'Guided Tours', description: 'Tours led by local experts', value: 'Guided Tours' },
    ],
    Adventure: [
      { label: 'Outdoor Activities', description: 'Activities like kayaking, camping', value: 'Outdoor Activities' },
      { label: 'Hiking Spots', description: 'Popular trails and scenic routes', value: 'Hiking Spots' },
      { label: 'Nature Reserves', description: 'Protected areas for wildlife', value: 'Nature Reserves' },
      { label: 'Extreme Sports', description: 'Activities like bungee jumping', value: 'Extreme Sports' },
    ],
  };

  // Add new factor to the list
  const handleAddFactor = () => {
    if (newFactor && !factors.some(f => f.name === newFactor)) {
      setFactors([...factors, { name: newFactor, range: 'Medium' }]);
    }
    setNewFactor('');
  };

  // Update range for a factor
  const handleUpdateRange = (factorName, newRange) => {
    setFactors(factors.map(factor =>
      factor.name === factorName ? { ...factor, range: newRange } : factor
    ));
  };

  // Remove factor from the list
  const handleRemoveFactor = (factorToRemove) => {
    setFactors(factors.filter(factor => factor.name !== factorToRemove));
  };

  // Handle submission of preferences
  const handleGetSuggestions = async () => {
    const userPreferences = {
      purpose,
      factors,
    };
    try {
      const userPreferences = {
        "locations": [
          ["Meenakshi Amman Temple", 9.9260, 78.1131, [800, 1200], 2, 4, ["hotel", "hostel"], ["walking", "auto-rickshaw"]],
          ["Thiruparankundram Temple", 9.9075, 78.1269, [500, 800], 1, 3, ["hotel", "hostel"], ["walking", "auto-rickshaw"]]
        ],
        "user_preferences": [9.8822, 78.0836, [500, 800], 2, 3, ["hotel"], ["walking", "auto-rickshaw"]]
      }
      
      const recommendations = await axios.post("http://127.0.0.1:5000/optimize",userPreferences);
      setSuggestions(recommendations.data.best_location);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>User Location Based Recommendation</Text>

        <Text style={styles.label}>What is the purpose of your visit?</Text>
        <RNPickerSelect
          onValueChange={setPurpose}
          items={Object.keys(factorOptions).map(p => ({ label: p, value: p }))}
          style={pickerSelectStyles}
          value={purpose}
          placeholder={{ label: 'Select visit purpose', value: null }}
        />

        {purpose && (
          <View>
            <Text style={styles.label}>Select Factors</Text>
            <RNPickerSelect
              onValueChange={setNewFactor}
              items={factorOptions[purpose].map(option => ({
                label: `${option.label} - ${option.description}`,
                value: option.value,
              }))}
              style={pickerSelectStyles}
              value={newFactor}
              placeholder={{ label: 'Add a factor', value: null }}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddFactor}>
              <Text style={styles.addButtonText}>Add Factor</Text>
            </TouchableOpacity>
          </View>
        )}

        <FlatList
          data={factors}
          renderItem={({ item }) => (
            <View style={styles.factorItem}>
              <Text>{item.name}</Text>
              <RNPickerSelect
                onValueChange={range => handleUpdateRange(item.name, range)}
                items={[
                  { label: 'Low', value: 'Low' },
                  { label: 'Medium', value: 'Medium' },
                  { label: 'High', value: 'High' },
                ]}
                style={pickerSelectStyles}
                value={item.range}
                placeholder={{}}
              />
              <TouchableOpacity onPress={() => handleRemoveFactor(item.name)}>
                <Text style={styles.removeButton}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={<Text>No factors selected yet.</Text>}
        />

        <TouchableOpacity style={styles.button} onPress={handleGetSuggestions}>
          <Text style={styles.buttonText}>Get Suggestions</Text>
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

export default DynamicPlaceRecommendation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: '#5cb85c',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  factorItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  removeButton: {
    color: '#d9534f',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  suggestionsContainer: {
    marginTop: 20,
  },
  suggestion: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  inputAndroid: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
