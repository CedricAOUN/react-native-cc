import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'ghostwhite',
      ...Platform.select({
        ios: {
          paddingTop: 20, // iOS status bar height
        },
        android: {
          paddingTop: StatusBar.currentHeight, // Android status bar height
        },
      }),
    },
    box: {
      width: 100,
      height: 100,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightgray",
    },
    boxText: {
      color: "darkslategray",
      fontWeight: "bold",
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>I&apos;m in a box</Text>
      </View>
    </View>
  );
}
