import { RootStackParamList } from "@/router";
import { ipaRegion, stoutRegion } from "@/utils/mapUtils";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Location from 'expo-location';
import { useEffect, useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";
import styles from "../styles/styles";

type Props = NativeStackScreenProps<RootStackParamList, 'GeoLocationHome'>;

const API_KEY = "";
const URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}&latlng=`;

export default function GeoLocationSandbox({ navigation }: Props) {
  const [address, setAddress] = useState<string>("loading...");
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | undefined>();
  const [reload, setReload] = useState(1);

  useEffect(() => {
    function setPosition(coords: { latitude: number; longitude: number }) {
      setLocation({
        latitude: coords.latitude,
        longitude: coords.longitude
      });
    }
    const FETCH_URL = URL + `${location?.latitude},${location?.longitude}`;
    fetch(FETCH_URL)
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          setAddress(data.results[0].formatted_address);
        } else {
          setAddress("No address found" + (data.error_message ? `: ${data.error_message}` : ""));
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
  }, [reload]);

  return (
    <ScrollView style={{ marginVertical: 40 }}>
      <PlottingOverlays />
      <MapView style={styles.map} showsUserLocation followsUserLocation>
        <Marker
          title="Cloud Campus"
          description="Cloud Campus: l'ecole des specialistes du developpement web"
          coordinate={{ latitude: 48.8585802, longitude: 2.3730884 }}
        />
      </MapView>

      <Text style={{ ...styles.address, ...styles.label }}>Address: {address}</Text>
      <Text style={styles.label}>Latitude: {location?.latitude}</Text>
      <Text style={styles.label}>Longitude: {location?.longitude}</Text>
      <Button onPress={() => setReload(prev => prev + 1) } title="Reload" />
    </ScrollView>
  );
}

function PlottingOverlays() {
  const [ipaStyles, setIpaStyles] = useState(styles.ipaStyles);
  const [stoutStyles, setStoutStyles] = useState(styles.stoutStyles);
  const [currentOverlay, setCurrentOverlay] = useState<'ipa' | 'stout'>('ipa');

  function onClickIpa() {
    setCurrentOverlay('ipa');
  }
  function onClickStout() {
    setCurrentOverlay('stout');
  }
  return (
    <View style={{ width: '100%'}}>
      <View>
        <Text style={[ipaStyles, currentOverlay === 'ipa' && styles.boldText]} onPress={onClickIpa}>IPA</Text>
        <Text style={[stoutStyles, currentOverlay === 'stout' && styles.boldText]} onPress={onClickStout}>Stout</Text>
      </View>
      <MapView
        style={styles.map}  
        showsPointsOfInterest={false}
        initialRegion={{
          latitude: 48.8582341,
          longitude: 2.3735267,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        initialCamera={{
          center: {
            latitude: 48.8582341,
            longitude: 2.3735267,
          },
          pitch: 45,
          heading: 90,
          altitude: 1000,
          zoom: 15,
        }}
      >
        {/* Overlay for IPA */}
        {currentOverlay === 'ipa' && (
          <Polygon
            coordinates={ipaRegion.coordinates}
            strokeColor={ipaRegion.strokeColor}
            strokeWidth={ipaRegion.strokeWidth}
          />
        )}

        {/* Overlay for Stout */}
        {currentOverlay === 'stout' && (
          <Polygon
            coordinates={stoutRegion.coordinates}
            strokeColor={stoutRegion.strokeColor}
            strokeWidth={stoutRegion.strokeWidth}
          />
        )}
      </MapView>
    </View>
  )
}