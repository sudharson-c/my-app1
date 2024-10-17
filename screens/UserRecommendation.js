import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNPickerSelect from 'react-native-picker-select';
import { getPlaceRecommendations } from '../config/geminiAi'; // Your AI API

const DynamicPlaceRecommendation = () => {
  const [purpose, setPurpose] = useState('');
  const [factors, setFactors] = useState([]);
  const [newFactor, setNewFactor] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Factor options based on purpose
  const factorOptions = {
    Food: ['Budget', 'High Rating', 'Cuisine Type', 'Dining Style'],
    Culture: ['Historical Sites', 'Museums', 'Festivals', 'Guided Tours'],
    Adventure: ['Outdoor Activities', 'Hiking Spots', 'Nature Reserves', 'Extreme Sports'],
  };

  // Add new factor to the list
  const handleAddFactor = () => {
    if (newFactor && !factors.includes(newFactor)) {
      setFactors([...factors, newFactor]);
    }
    setNewFactor('');
  };

  // Remove factor from the list
  const handleRemoveFactor = (factorToRemove) => {
    setFactors(factors.filter(factor => factor !== factorToRemove));
  };

  // Handle submission of preferences
  const handleGetSuggestions = async () => {
    const userPreferences = {
      purpose,
      factors,
    };
    try {
      const recommendations = await getPlaceRecommendations(userPreferences);
      setSuggestions(recommendations);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return ( 
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>User Location based Recommendation</Text>
        
        <Text style={styles.label}>What is the purpose of your visit?</Text>
        <RNPickerSelect
          onValueChange={setPurpose}
          items={[
            { label: 'Food', value: 'Food' },
            { label: 'Culture', value: 'Culture' },
            { label: 'Adventure', value: 'Adventure' },
          ]}
          style={pickerSelectStyles}
          value={purpose}
          placeholder={{ label: 'Select visit purpose', value: null }}
        />

        {purpose && (
          <View>
            <Text style={styles.label}>Select Factors</Text>
            <RNPickerSelect
              onValueChange={setNewFactor}
              items={factorOptions[purpose].map(option => ({ label: option, value: option }))}
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
              <Text>{item}</Text>
              <TouchableOpacity onPress={() => handleRemoveFactor(item)}>
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
