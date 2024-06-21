import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import CategoryButtons from "../components/CategoryButtons";
import Listings from "../components/Listings";
import listingData from "../data/destinations.json";
import GroupListings from "../components/GroupListings";
import groupData from "../data/groups.json";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';

const Page = () => {
  const [category, setCategory] = useState("All");
  const navigation = useNavigation();

  const onCatChanged = (category) => {
    console.log("Category: ", category);
    setCategory(category);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headingTxt}>Explore The Temple City!</Text>

        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons
              name="search"
              size={18}
              style={{ marginRight: 5 }}
              color={Colors.black}
            />
            <TextInput placeholder="Search..." />
          </View>
          <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
            <Ionicons name="options" size={28} color={Colors.white} />
          </TouchableOpacity>
        </View>

        <CategoryButtons onCategoryChanged={onCatChanged} />
        <TouchableOpacity
          style={styles.planButton}
          onPress={() => navigation.navigate('PlanWithAi')}
        >
          <Text style={styles.planButtonText}>Plan Your Trip with AI✨</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.planButton}
          onPress={() => navigation.navigate('ChatBot')}
        >
          <Text style={styles.planButtonText}>ChatBot</Text>
        </TouchableOpacity>

        <Listings listings={listingData} category={category} />

        <GroupListings listings={groupData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingTxt: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
  planButton: {
    backgroundColor: Colors.primaryColor,
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  planButtonText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight:'bold'
  },
});
