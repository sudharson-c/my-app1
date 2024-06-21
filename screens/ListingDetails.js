import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image,ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather, Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import listingData from "./../data/destinations.json";
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated';
import MapView, { Marker } from 'react-native-maps';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = 300;

const ListingDetails = () => {
  const route = useRoute();
  const { id } = route.params;
  const listing = listingData.find(item => item.id === id);

  const navigation = useNavigation();
  const scrollRef = useAnimatedRef();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(scrollOffset.value, [-IMG_HEIGHT, 0, IMG_HEIGHT], [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]),
      },
      {
        scale: interpolate(scrollOffset.value, [-IMG_HEIGHT, 0, IMG_HEIGHT], [2, 1, 1]),
      },
    ],
  }));

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView ref={scrollRef} contentContainerStyle={{ paddingBottom: 150 }}>
          <Animated.Image source={{ uri: listing.image }} style={[styles.image, imageAnimatedStyle]} />
          <View style={styles.contentWrapper}>
            <Text style={styles.listingName}>{listing.name}</Text>
            <View style={styles.listingLocationWrapper}>
              <Feather name="map-pin" size={18} color={Colors.primaryColor} />
              <Text style={styles.listingLocationTxt}>{listing.location}</Text>
            </View>
            <View style={styles.highlightWrapper}>
              <View style={styles.highlightItem}>
                <Ionicons name="time" size={18} color={Colors.primaryColor} />
                <Text style={styles.highlightTxt}>{listing.duration} Days</Text>
              </View>
              <View style={styles.highlightItem}>
                <Ionicons name="people" size={18} color={Colors.primaryColor} />
                <Text style={styles.highlightTxt}>Rating: {listing.rating}</Text>
              </View>
              <View style={styles.highlightItem}>
                <Ionicons name="star" size={18} color={Colors.primaryColor} />
                <Text style={styles.highlightTxt}>Price: {listing.price==='Free'? 'Free': '₹' + listing.price}</Text>
              </View>
            </View>
            <Text style={styles.listingDetails}>{listing.description}</Text>
          </View>
          <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: parseFloat(listing.latitude),
                  longitude: parseFloat(listing.longitude),
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                
              >
                <Marker
                  coordinate={{
                    latitude: parseFloat(listing.latitude),
                    longitude: parseFloat(listing.longitude),
                  }}
                  title={listing.name}
                />
              </MapView>
            </View>
            <TouchableOpacity
          style={styles.planButton}
          onPress={() => navigation.navigate('AiGuide',{location:listing.name})}
        >
          <Text style={styles.planButtonText}>Get AI✨ guide</Text>
        </TouchableOpacity>
        </ScrollView>
        
      </View>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Feather name="arrow-left" size={24} color={Colors.white} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    image: {
      width: width,
      height: IMG_HEIGHT,
    },
    contentWrapper: {
      padding: 20,
    },
    listingName: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    listingLocationWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    listingLocationTxt: {
      fontSize: 16,
      marginLeft: 5,
    },
    highlightWrapper: {
        position:'relative',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    highlightItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    highlightTxt: {
      marginLeft: 5,
      fontSize: 16,
    },
    listingDetails: {
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 20,
      position:'relative',
    },
    backButton: {
      position: 'absolute',
      top: 40,
      left: 20,
      backgroundColor: Colors.primaryColor,
      padding: 10,
      borderRadius: 20,
    },
    mapContainer: {
      height: 300,
      borderRadius: 50,
      borderColor: Colors.black,
      padding:10,
      overflow: 'hidden',
      marginBottom: 20,
    },
    map: {
      flex: 1,
      borderBlockColor:Colors.black
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
        textAlign: 'center',
      },
  });
  
  export default ListingDetails;

  