import { RootStackParamList } from "@/router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Location from 'expo-location';
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";

type Props = NativeStackScreenProps<RootStackParamList, 'GeoLocationHome'>;

const API_KEY = "";
const URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}&latlng=`;

export default function GeoLocationSandbox({ navigation }: Props) {
  const [address, setAddress] = useState<string>("loading...");
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | undefined>();

  useEffect(() => {
    function setPosition(coords: { latitude: number; longitude: number }) {
      setLocation({
        latitude: coords.latitude,
        longitude: coords.longitude
      });
    }

    fetch(URL + `${location?.latitude},${location?.longitude}`)
      .then(response => response.json())
      .then(results => {
        if (results && results.length > 0) {
          setAddress(results[0].formatted_address);
        } else {
          setAddress("No address found");
        }
      })
      .catch(error => {
        console.error("Error fetching address:", error);
        setAddress("Error fetching address");
      });

    let watcher: Location.LocationSubscription;

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("Location permission not granted");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setPosition(location.coords);

      watcher = await Location.watchPositionAsync(
        { accuracy: Location.LocationAccuracy.Highest },
        (newLocation) => {
          setPosition(newLocation.coords);
        }
      );
    })();

    return () => {
      if (watcher) {
        watcher.remove();
      }
    };
  }, [location]);

  return (
    <View style={styles.geoContainer}>
      <Text style={{ ...styles.address, ...styles.label }}>Address: {address}</Text>
      <Text style={styles.label}>Latitude: {location?.latitude}</Text>
      <Text style={styles.label}>Longitude: {location?.longitude}</Text>
    </View>
  );
}
