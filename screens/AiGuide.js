import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import Colors from "../constants/Colors";
import { guideAi } from "../config/geminiAi";

const AiGuide = () => {
  const route = useRoute();
  const { location } = route.params; // Assuming location is passed as a parameter

  const [guide, setGuide] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuide = async () => {
      try {
        const response = await guideAi(location);
        setGuide(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching guide:", error);
        setError(error.message || "Failed to fetch guide");
        setLoading(false);
      }
    };

    fetchGuide();
  }, [location]);

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color={Colors.primaryColor} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{guide.title}</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.sectionContent}>{guide.introduction}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Architecture</Text>
        <Text style={styles.sectionContent}>{guide.architecture}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>History</Text>
        <Text style={styles.sectionContent}>{guide.history}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Festivals</Text>
        {guide.festivals.map((festival, index) => (
          <Text key={index} style={styles.sectionContent}>
            - {festival}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conclusion</Text>
        <Text style={styles.sectionContent}>{guide.conclusion}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nearby Attractions</Text>
        <Text style={styles.sectionContent}>{guide.nearbyAttractions}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Practical Information</Text>
        <Text style={styles.practicalInfo}>
          Dress Code: {guide.practicalInformation.dressCode}
        </Text>
        <Text style={styles.practicalInfo}>
          Entry Fee: {guide.practicalInformation.entryFee}
        </Text>
        <Text style={styles.practicalInfo}>
          Getting There: {guide.practicalInformation.gettingThere}
        </Text>
        <Text style={styles.practicalInfo}>
          Location: {guide.practicalInformation.location}
        </Text>
        <Text style={styles.practicalInfo}>
          Photography: {guide.practicalInformation.photography}
        </Text>
        <Text style={styles.practicalInfo}>
          Timings: {guide.practicalInformation.timings}
        </Text>
        <View style={styles.tipsContainer}>
          <Text style={styles.sectionTitle}>Tips</Text>
          {guide.practicalInformation.tips.map((tip, index) => (
            <Text key={index} style={styles.tip}>
              - {tip}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
  },
  practicalInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  tipsContainer: {
    marginTop: 10,
  },
  tip: {
    marginLeft: 10,
    fontSize: 16,
  },
  errorText: {
    fontSize: 18,
    color: Colors.errorColor,
  },
});

export default AiGuide;
